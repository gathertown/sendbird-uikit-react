import React from 'react';
import MessageInputWrapperView from './MessageInputWrapperView';
import { useGroupChannelContext } from '../../context/GroupChannelProvider';
import { useIIFE } from '@sendbird/uikit-tools';
import { getSuggestedReplies, isSendableMessage } from '../../../../utils';
import useSendbirdStateContext from '../../../../hooks/useSendbirdStateContext';
import { GroupChannelUIBasicProps } from '../GroupChannelUI/GroupChannelUIView';
import { FileMessage, MultipleFilesMessage, UserMessage } from '@sendbird/chat/message';
import { DraftMessage } from '../../../../types';

export interface MessageInputWrapperProps {
  value?: string;
  disabled?: boolean;
  acceptableMimeTypes?: string[];
  renderFileUploadIcon?: GroupChannelUIBasicProps['renderFileUploadIcon'];
  renderVoiceMessageIcon?: GroupChannelUIBasicProps['renderVoiceMessageIcon'];
  renderSendMessageIcon?: GroupChannelUIBasicProps['renderSendMessageIcon'];

  // custom fork props
  messageInputRef?: React.MutableRefObject<HTMLDivElement>;
  maxLength?: number;
  draftMessage?: DraftMessage;
  inputAreaPrefix?: React.ReactNode;
  inputAreaButtons?: React.ReactNode;
  onPaste?: (e: React.ClipboardEvent<HTMLDivElement>) => boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => boolean;
  onDraftChange?: (draftMessage: DraftMessage) => void;
  onPreSubmit?: () => boolean;
  onMessageSend?: (message: UserMessage, apiLatency: DOMHighResTimeStamp) => void;
  onMessageError?: (reason: any, apiLatency: DOMHighResTimeStamp) => void;
  onFileMessageSend?: (message: void | FileMessage | MultipleFilesMessage, apiLatency: DOMHighResTimeStamp) => void;
  onFileMessageError?: (reason: any, apiLatency: DOMHighResTimeStamp) => void;
}

export const MessageInputWrapper = (props: MessageInputWrapperProps) => {
  const { config } = useSendbirdStateContext();
  const context = useGroupChannelContext();
  const {
    messages,
    currentChannel,
  } = context;
  const lastMessage = currentChannel?.lastMessage;
  const isLastMessageSuggestedRepliesEnabled = useIIFE(() => {
    if (!config?.groupChannel?.enableSuggestedReplies) return false;
    if (getSuggestedReplies(lastMessage).length === 0) return false;
    const lastMessageInContext = messages[messages.length - 1];
    if (isSendableMessage(lastMessageInContext) && lastMessageInContext.sendingStatus !== 'succeeded') return false;

    return true;
  });
  const disableMessageInput = props.disabled
    || (isLastMessageSuggestedRepliesEnabled && !!lastMessage.extendedMessagePayload?.['disable_chat_input']);

  return (
    <MessageInputWrapperView
      {...props}
      {...context}
      disabled={disableMessageInput}
      ref={props.messageInputRef}
    />
  );
};

export {
  VoiceMessageInputWrapper,
  VoiceMessageInputWrapperProps,
} from './VoiceMessageInputWrapper';

export default MessageInputWrapper;
