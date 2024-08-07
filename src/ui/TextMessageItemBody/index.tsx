import './index.scss';
import React, { ReactElement, useContext, useMemo } from 'react';
import type { UserMessage } from '@sendbird/chat/message';

import Label, { LabelTypography, LabelColors } from '../Label';
import { getClassName, isEditedMessage } from '../../utils';
import { LocalizationContext } from '../../lib/LocalizationContext';
import { tokenizeMessage } from '../../modules/Message/utils/tokens/tokenize';
import TextFragment from '../../modules/Message/components/TextFragment';
import { TEXT_MESSAGE_BODY_CLASSNAME } from './consts';
import { MentionLabelProps } from '../../types';

interface Props {
  className?: string | Array<string>;
  message: UserMessage;
  isByMe?: boolean;
  mouseHover?: boolean;
  isMentionEnabled?: boolean;
  isReactionEnabled?: boolean;
  isMarkdownEnabled?: boolean;

  renderMessageMentionLabel?: (props: MentionLabelProps) => JSX.Element;
}

export default function TextMessageItemBody({
  className = '',
  message,
  isByMe = false,
  mouseHover = false,
  isMentionEnabled = false,
  isReactionEnabled = false,
  isMarkdownEnabled = false,
  renderMessageMentionLabel,
}: Props): ReactElement {
  const { stringSet } = useContext(LocalizationContext);
  const isMessageMentioned = isMentionEnabled
    && message?.mentionedMessageTemplate
    && message.mentionedMessageTemplate.length > 0
    && message?.mentionedUsers
    && message.mentionedUsers.length > 0;
  const tokens = useMemo(() => {
    if (isMessageMentioned) {
      return tokenizeMessage({
        mentionedUsers: message?.mentionedUsers ?? undefined,
        messageText: message?.mentionedMessageTemplate,
        includeMarkdown: isMarkdownEnabled,
      });
    }
    return tokenizeMessage({
      messageText: message?.message,
      includeMarkdown: isMarkdownEnabled,
    });
  }, [message?.updatedAt, message?.message]);
  return (
    <Label
      type={LabelTypography.BODY_1}
      color={isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1}
    >
      <div className={getClassName([
        className,
        TEXT_MESSAGE_BODY_CLASSNAME,
        isByMe ? 'outgoing' : 'incoming',
        mouseHover ? 'mouse-hover' : '',
        (isReactionEnabled && message?.reactions?.length > 0) ? 'reactions' : '',
      ])}>
        <TextFragment tokens={tokens} renderMessageMentionLabel={renderMessageMentionLabel} />
        {
          isEditedMessage(message) && (
            <Label
              className="sendbird-text-message-item-body__message edited"
              type={LabelTypography.BODY_1}
              color={isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2}
            >
              {` ${stringSet.MESSAGE_EDITED} `}
            </Label>
          )
        }
      </div>
    </Label>
  );
}
