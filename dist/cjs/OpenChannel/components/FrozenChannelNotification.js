'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ui_Label = require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DHh3VdoS.js');

var FrozenNotification = function () {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React.createElement(ui_Label.Label, { className: "sendbird-frozen-channel-notification__text", type: ui_Label.LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenChannelNotification.js.map
