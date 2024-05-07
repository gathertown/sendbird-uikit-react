import './index.scss';
import { ReactElement } from 'react';
import type { BaseMessage } from '@sendbird/chat/message';
import { SendbirdTheme } from '../../types';
import { RenderedTemplateBodyType } from '../MessageContent/MessageBody';
interface TemplateMessageItemBodyProps {
    className?: string | Array<string>;
    message: BaseMessage;
    isByMe?: boolean;
    theme?: SendbirdTheme;
    onTemplateMessageRenderedCallback?: (renderedTemplateBodyType: RenderedTemplateBodyType) => void;
}
export declare function TemplateMessageItemBody({ className, message, isByMe, theme, onTemplateMessageRenderedCallback, }: TemplateMessageItemBodyProps): ReactElement;
export default TemplateMessageItemBody;
