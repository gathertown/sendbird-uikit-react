import React from 'react';
import { UserMessage } from '@sendbird/chat/message';
import { match } from 'ts-pattern';

import { TOKEN_TYPES, Token } from '../../utils/tokens/types';
import { useMessageContext } from '../../context/MessageProvider';
import { keyGenerator } from '../../utils/tokens/keyGenerator';
import MentionLabel from '../../../../ui/MentionLabel';
import { USER_MENTION_PREFIX } from '../../consts';
import LinkLabel from '../../../../ui/LinkLabel';
import { LabelTypography } from '../../../../ui/Label';
import { getWhiteSpacePreservedText } from '../../utils/tokens/tokenize';
import { useGroupChannelContext } from '../../../GroupChannel/context/GroupChannelProvider';
import { MentionLabelProps } from '../../../../types';

export type TextFragmentProps = {
  tokens: Token[];
  renderMessageMentionLabel?: (props: MentionLabelProps) => JSX.Element;
};

export default function TextFragment({
  tokens,
  renderMessageMentionLabel
}: TextFragmentProps): React.ReactElement {
  const messageStore = useMessageContext();

  const message = messageStore?.message as UserMessage;
  const isByMe = messageStore?.isByMe;
  const { updatedAt, createdAt } = message;

  return (
    <>
      {tokens?.map((token, idx) => {
        const key = keyGenerator(createdAt, updatedAt, idx);
        return match(token.type)
          .with(TOKEN_TYPES.mention, () => (
            <span className="sendbird-word" key={key}>
              {renderMessageMentionLabel ? renderMessageMentionLabel({
                mentionTemplate: USER_MENTION_PREFIX,
                // @ts-ignore
                mentionedUserId: token.userId,
                mentionedUserNickname: token.value,
                isByMe: isByMe
              }) :
              <MentionLabel
                mentionTemplate={USER_MENTION_PREFIX}
                // @ts-ignore
                mentionedUserId={token.userId}
                mentionedUserNickname={token.value}
                isByMe={isByMe}
              />}
            </span>
          ))
          .with(TOKEN_TYPES.url, () => (
            <span className="sendbird-word" key={key}>
              <LinkLabel
                className="sendbird-word__url"
                src={token.value}
                type={LabelTypography.BODY_1}
              >
                {token.value}
              </LinkLabel>
            </span>
          ))
          .otherwise(() => <React.Fragment key={key}>{getWhiteSpacePreservedText(token.value)}</React.Fragment>);
      })}
    </>
  );
}
