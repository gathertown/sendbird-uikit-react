import React__default from 'react';
import { v as getClassName } from '../chunks/bundle-D-z4U1wX.js';
import Loader from './Loader.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import '../chunks/bundle-s7uQ7zAa.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-BJmqupdN.js';

var TEMPLATE_LOADING_SPINNER_SIZE = '40px';
function LoadingTemplateMessageItemBody(_a) {
    var className = _a.className, isByMe = _a.isByMe;
    return (React__default.createElement("div", { className: getClassName([
            className,
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-loading-message-item-body',
        ]) },
        React__default.createElement(Loader, { className: "sendbird-message-status__icon", width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE },
            React__default.createElement(Icon, { type: IconTypes.SPINNER, fillColor: IconColors.CONTENT_INVERSE_5, width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE }))));
}

export { LoadingTemplateMessageItemBody, LoadingTemplateMessageItemBody as default };
//# sourceMappingURL=LoadingTemplateMessageItemBody.tsx.js.map
