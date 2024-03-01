'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BeJ7-X59.js');
var ui_Label = require('../../chunks/bundle-CkvaXo1D.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-DvNeoTBz.js');

var FrozenNotification = function () {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React.createElement(ui_Label.Label, { className: "sendbird-frozen-channel-notification__text", type: ui_Label.LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenChannelNotification.js.map
