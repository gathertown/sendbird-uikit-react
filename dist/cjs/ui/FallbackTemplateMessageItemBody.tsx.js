'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../chunks/bundle-D2Bg8CLY.js');
var index = require('../chunks/bundle-Pv5sl1sx.js');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');
require('../chunks/bundle-2PlwnSzC.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');

function FallbackTemplateMessageItemBody(_a) {
    var className = _a.className, message = _a.message, isByMe = _a.isByMe;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var text = message['message'];
    return (React.createElement("div", { className: index.getClassName([
            className,
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body__fallback_message',
        ]) }, text
        ? React.createElement(React.Fragment, null,
            React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, text))
        : React.createElement(React.Fragment, null,
            React.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__header', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, stringSet.UNKNOWN__TEMPLATE_ERROR),
            React.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__description', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_5 }, stringSet.UNKNOWN__CANNOT_READ_TEMPLATE))));
}

exports.FallbackTemplateMessageItemBody = FallbackTemplateMessageItemBody;
exports.default = FallbackTemplateMessageItemBody;
//# sourceMappingURL=FallbackTemplateMessageItemBody.tsx.js.map
