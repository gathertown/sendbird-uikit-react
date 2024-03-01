import { ReactElement, ReactNode } from 'react';
import { BaseChannel, User } from '@sendbird/chat';
export interface MuteMenuItemProps {
    channel: BaseChannel;
    user: User & {
        isMuted: boolean;
    };
    className?: string | Array<string>;
    children: ReactElement | ReactElement[] | ReactNode;
    disable?: boolean;
    dataSbId?: string;
    onChange?: (channel: BaseChannel, user: User, isMuted: boolean) => void;
    onError?: (reason: any) => void;
}
export declare const MuteMenuItem: ({ channel, user, className, children, disable, dataSbId, onChange, onError, }: MuteMenuItemProps) => ReactElement;
