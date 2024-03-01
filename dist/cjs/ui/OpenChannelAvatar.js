'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-5IKAPUOJ.js');
var LocalizationContext = require('../chunks/bundle-BplSuW2v.js');
var utils = require('../chunks/bundle-DDTTknuH.js');
require('../chunks/bundle-B67weJWw.js');
require('./ImageRenderer.js');
require('../chunks/bundle-CrJkvCS4.js');
require('../chunks/bundle-CR__rOP0.js');
require('./Icon.js');
require('../chunks/bundle-z7hq7hFO.js');
require('../chunks/bundle-DEDYKTrW.js');

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
