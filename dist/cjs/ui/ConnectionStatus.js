'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
require('../chunks/bundle-DHh3VdoS.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');

function ConnectionStatus() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-connection-status" },
        React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DISCONNECTED, fillColor: ui_Icon.IconColors.SENT, width: "14px", height: "14px" })));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map
