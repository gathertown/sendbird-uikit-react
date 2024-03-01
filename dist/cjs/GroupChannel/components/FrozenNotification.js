'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-2PlwnSzC.js');

var FrozenNotification = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-notification sendbird-notification--frozen ".concat(className) },
        React.createElement(ui_Label.Label, { className: "sendbird-notification__text", type: ui_Label.LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

exports.FrozenNotification = FrozenNotification;
exports.default = FrozenNotification;
//# sourceMappingURL=FrozenNotification.js.map
