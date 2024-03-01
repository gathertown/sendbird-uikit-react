'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-BNKSF9CJ.js');
var LocalizationContext = require('../chunks/bundle-BeJ7-X59.js');
var utils = require('../chunks/bundle-Rz-nVLJe.js');
require('../chunks/bundle-DvNeoTBz.js');
require('./ImageRenderer.js');
require('../chunks/bundle-DQfemABy.js');
require('../chunks/bundle-8jy5Sc-N.js');
require('./Icon.js');
require('../chunks/bundle-BruYC2Km.js');
require('../chunks/bundle-DUeKijBO.js');

function ChannelAvatar(_a) {
    var channel = _a.channel, theme = _a.theme, _b = _a.height, height = _b === void 0 ? 56 : _b, _c = _a.width, width = _c === void 0 ? 56 : _c;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var memoizedAvatar = React.useMemo(function () {
        return (React.createElement(ui_Avatar.Avatar, { className: "sendbird-chat-header__avatar--open-channel", src: utils.getOpenChannelAvatar(channel), width: "".concat(width, "px"), height: "".concat(height, "px"), alt: (channel === null || channel === void 0 ? void 0 : channel.name) || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE }));
    }, [channel === null || channel === void 0 ? void 0 : channel.coverUrl, theme]);
    return (React.createElement(React.Fragment, null, memoizedAvatar));
}

module.exports = ChannelAvatar;
//# sourceMappingURL=OpenChannelAvatar.js.map
