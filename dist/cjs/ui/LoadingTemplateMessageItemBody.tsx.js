'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../chunks/bundle-Pv5sl1sx.js');
var ui_Loader = require('./Loader.js');
var ui_Icon = require('./Icon.js');
require('../chunks/bundle-2PlwnSzC.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DMrzJD8i.js');

var TEMPLATE_LOADING_SPINNER_SIZE = '40px';
function LoadingTemplateMessageItemBody(_a) {
    var className = _a.className, isByMe = _a.isByMe;
    return (React.createElement("div", { className: index.getClassName([
            className,
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-loading-message-item-body',
        ]) },
        React.createElement(ui_Loader, { className: "sendbird-message-status__icon", width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE },
            React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.CONTENT_INVERSE_5, width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE }))));
}

exports.LoadingTemplateMessageItemBody = LoadingTemplateMessageItemBody;
exports.default = LoadingTemplateMessageItemBody;
//# sourceMappingURL=LoadingTemplateMessageItemBody.tsx.js.map
