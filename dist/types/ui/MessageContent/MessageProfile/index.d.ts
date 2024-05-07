import { ReactElement } from 'react';
import '../index.scss';
import { MessageContentProps } from '../index';
export interface MessageProfileProps extends MessageContentProps {
    isByMe?: boolean;
    displayThreadReplies?: boolean;
    bottom?: string;
}
export default function MessageProfile(props: MessageProfileProps): ReactElement;
