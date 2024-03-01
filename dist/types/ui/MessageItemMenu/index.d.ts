import './index.scss';
import { MouseEvent, ReactElement } from 'react';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import type { OpenChannel } from '@sendbird/chat/openChannel';
import { SendableMessageType } from '../../utils/index';
import { ReplyType } from '../../types';
export interface MessageMenuRenderMenuItemProps {
    className?: string;
    onClick?: (e: MouseEvent) => void;
    dataSbId?: string;
    disable?: boolean;
    text: string;
}
export interface MessageMenuProps {
    className?: string | Array<string>;
    message: SendableMessageType;
    channel: GroupChannel | OpenChannel;
    isByMe?: boolean;
    disabled?: boolean;
    replyType?: ReplyType;
    disableDeleteMessage?: boolean;
    showEdit?: (bool: boolean) => void;
    showRemove?: (bool: boolean) => void;
    deleteMessage?: (message: SendableMessageType) => void;
    resendMessage?: (message: SendableMessageType) => void;
    setQuoteMessage?: (message: SendableMessageType) => void;
    setSupposedHover?: (bool: boolean) => void;
    onReplyInThread?: (props: {
        message: SendableMessageType;
    }) => void;
    onMoveToParentMessage?: () => void;
    renderMenuItem?: (props: MessageMenuRenderMenuItemProps) => ReactElement;
}
export declare function MessageMenu(props: MessageMenuProps): ReactElement;
export default MessageMenu;
