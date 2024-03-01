'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
var LocalizationContext = require('../chunks/bundle-D2Bg8CLY.js');
require('../chunks/bundle-2PlwnSzC.js');
require('../chunks/bundle-DMrzJD8i.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');

function ConnectionStatus() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-connection-status" },
        React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DISCONNECTED, fillColor: ui_Icon.IconColors.SENT, width: "14px", height: "14px" })));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map
