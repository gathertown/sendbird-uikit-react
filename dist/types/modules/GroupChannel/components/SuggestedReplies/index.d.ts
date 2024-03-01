import './index.scss';
import React from 'react';
import { BaseMessage } from '@sendbird/chat/message';
export interface SuggestedRepliesProps {
    replyOptions: string[];
    onSendMessage: ({ message }: {
        message: string;
    }) => void;
    message: BaseMessage;
    type?: 'vertical' | 'horizontal';
    gap?: number;
}
declare const SuggestedReplies: ({ replyOptions, onSendMessage, type }: SuggestedRepliesProps) => React.JSX.Element;
export default SuggestedReplies;
