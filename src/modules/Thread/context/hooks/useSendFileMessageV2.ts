import { useCallback } from 'react';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { FileMessage, FileMessageCreateParams } from '@sendbird/chat/message';

import { CustomUseReducerDispatcher, Logger } from '../../../../lib/SendbirdState';
import { ThreadContextActionTypes } from '../dux/actionTypes';
import topics, { SBUGlobalPubSub } from '../../../../lib/pubSub/topics';
import { scrollIntoLast } from '../utils';
import { SendableMessageType } from '../../../../utils';
import { PublishingModuleType } from './useSendMultipleFilesMessage';
import { SCROLL_BOTTOM_DELAY_FOR_SEND } from '../../../../utils/consts';
import { SBUEventHandlers } from '../../../../lib/types';

interface DynamicProps {
  currentChannel: GroupChannel;
  onBeforeSendFileMessage?: (file: File, quotedMessage?: SendableMessageType) => FileMessageCreateParams;
}
interface StaticProps {
  logger: Logger;
  pubSub: SBUGlobalPubSub;
  threadDispatcher: CustomUseReducerDispatcher;
  eventHandlers?: SBUEventHandlers
}

interface LocalFileMessage extends FileMessage {
  localUrl: string;
  file: File;
}

export type SendFileMessageFunctionTypeV2 = (params: FileMessageCreateParams, quotedMessage?: SendableMessageType) => Promise<FileMessage>;

export default function useSendFileMessageCallbackV2({
  currentChannel,
  onBeforeSendFileMessage,
}: DynamicProps, {
  logger,
  eventHandlers,
  pubSub,
  threadDispatcher,
}: StaticProps): SendFileMessageFunctionTypeV2 {
  const sendMessage = useCallback((params: FileMessageCreateParams, quoteMessage): Promise<FileMessage> => {
    return new Promise((resolve, reject) => {
        if (quoteMessage) {
          params.isReplyToChannel = true;
          params.parentMessageId = quoteMessage.messageId;
        }
      logger.info('Thread | useSendFileMessageCallback: Sending file message start.', params);

      currentChannel?.sendFileMessage(params)
        .onPending((pendingMessage) => {
          threadDispatcher({
            type: ThreadContextActionTypes.SEND_MESSAGE_START,
            payload: {
              /* pubSub is used instead of messagesDispatcher
              to avoid redundantly calling `messageActionTypes.SEND_MESSAGE_START` */
              // TODO: remove data pollution
              message: {
                ...pendingMessage,
                requestState: 'pending',
                isUserMessage: pendingMessage.isUserMessage,
                isFileMessage: pendingMessage.isFileMessage,
                isAdminMessage: pendingMessage.isAdminMessage,
                isMultipleFilesMessage: pendingMessage.isMultipleFilesMessage,
              },
            },
          });
          setTimeout(() => scrollIntoLast(), SCROLL_BOTTOM_DELAY_FOR_SEND);
        })
        .onFailed((error, message) => {
          logger.info('Thread | useSendFileMessageCallback: Sending file message failed.', { message, error });
          eventHandlers?.request?.onFailed?.(error);
          threadDispatcher({
            type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
            payload: { message, error },
          });
          reject(error);
        })
        .onSucceeded((message: FileMessage) => {
          logger.info('Thread | useSendFileMessageCallback: Sending file message succeeded.', message);
          pubSub.publish(topics.SEND_FILE_MESSAGE, {
            channel: currentChannel,
            message: message,
            publishingModules: [PublishingModuleType.THREAD],
          });
          resolve(message);
        });
    });
  }, [currentChannel]);
  return sendMessage;
}
