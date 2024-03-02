'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
var index = require('../chunks/bundle-CiDSKL46.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');
require('../chunks/bundle-DHh3VdoS.js');
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
