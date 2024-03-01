import { ReactElement, ReactNode } from 'react';
import { BaseChannel, User } from '@sendbird/chat';
export interface OperatorMenuItemProps {
    channel: BaseChannel;
    user: User & {
        isMuted: boolean;
    };
    className?: string | Array<string>;
    children: ReactElement | ReactElement[] | ReactNode;
    disable?: boolean;
    dataSbId?: string;
    onChange?: (channel: BaseChannel, user: User, isOperator: boolean) => void;
    onError?: (reason: any) => void;
}
export declare const OperatorMenuItem: ({ channel, user, className, children, disable, dataSbId, onChange, onError, }: OperatorMenuItemProps) => ReactElement;
