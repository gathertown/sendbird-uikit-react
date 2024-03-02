'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-JS-CtPko.js');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
var utils = require('../chunks/bundle-COa5Ssfy.js');
require('../chunks/bundle-DHh3VdoS.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('../chunks/bundle-Xx0kBn7q.js');
require('./Icon.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');

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
