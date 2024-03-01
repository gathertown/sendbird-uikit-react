import { ReactElement, ReactNode } from 'react';
import './index.scss';
import { MessageMenuProps } from '../MessageItemMenu';
import { MessageEmojiMenuProps } from '../MessageItemReactionMenu';
import { EmojiReactionsProps } from '../EmojiReactions';
import { SendableMessageType, CoreMessageType } from '../../utils';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { EmojiContainer } from '@sendbird/chat';
import { ThreadReplySelectType } from '../../modules/Channel/context/const';
import { Nullable, ReplyType } from '../../types';
import { MessageProfileProps } from './MessageProfile';
import { MessageBodyProps } from './MessageBody';
import { MessageHeaderProps } from './MessageHeader';
export interface MessageContentProps {
    className?: string | Array<string>;
    userId: string;
    channel: Nullable<GroupChannel>;
    message: CoreMessageType;
    disabled?: boolean;
    chainTop?: boolean;
    chainBottom?: boolean;
    isReactionEnabled?: boolean;
    disableQuoteMessage?: boolean;
    replyType?: ReplyType;
    threadReplySelectType?: ThreadReplySelectType;
    nicknamesMap?: Map<string, string>;
    emojiContainer?: EmojiContainer;
    scrollToMessage?: (createdAt: number, messageId: number) => void;
    showEdit?: (bool: boolean) => void;
    showRemove?: (bool: boolean) => void;
    showFileViewer?: (bool: boolean) => void;
    resendMessage?: (message: SendableMessageType) => void;
    deleteMessage?: (message: CoreMessageType) => Promise<void>;
    toggleReaction?: (message: SendableMessageType, reactionKey: string, isReacted: boolean) => void;
    setQuoteMessage?: (message: SendableMessageType) => void;
    onReplyInThread?: (props: {
        message: SendableMessageType;
    }) => void;
    onQuoteMessageClick?: (props: {
        message: SendableMessageType;
    }) => void;
    onMessageHeightChange?: () => void;
    renderSenderProfile?: (props: MessageProfileProps) => ReactNode;
    renderMessageBody?: (props: MessageBodyProps) => ReactNode;
    renderMessageHeader?: (props: MessageHeaderProps) => ReactNode;
    renderMessageMenu?: (props: MessageMenuProps) => ReactNode;
    renderEmojiMenu?: (props: MessageEmojiMenuProps) => ReactNode;
    renderEmojiReactions?: (props: EmojiReactionsProps) => ReactNode;
}
export default function MessageContent(props: MessageContentProps): ReactElement;
