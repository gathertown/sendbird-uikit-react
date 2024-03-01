'use strict';

var _tslib = require('../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
require('../chunks/bundle-BlYafk3l.js');

function OpenChannelAdminMessage(_a) {
    var className = _a.className, message = _a.message;
    return (React.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-openchannel-admin-message',
        ], false).join(' ') },
        React.createElement(ui_Label.Label, { className: "sendbird-openchannel-admin-message__text", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, message.message || '')));
}

module.exports = OpenChannelAdminMessage;
//# sourceMappingURL=OpenChannelAdminMessage.js.map
