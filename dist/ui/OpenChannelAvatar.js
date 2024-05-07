import React__default, { useContext, useMemo } from 'react';
import { A as Avatar } from '../chunks/bundle-BAao5L-j.js';
import { L as LocalizationContext } from '../chunks/bundle-BwcI3bWM.js';
import { b as getOpenChannelAvatar } from '../chunks/bundle-ByXswkoP.js';
import '../chunks/bundle-s7uQ7zAa.js';
import './ImageRenderer.js';
import '../chunks/bundle-BJmqupdN.js';
import '../chunks/bundle-BIF2bCQz.js';
import './Icon.js';
import '../chunks/bundle-DqWrl4d1.js';
import '../chunks/bundle-Dyt8DaMp.js';

function ChannelAvatar(_a) {
    var channel = _a.channel, theme = _a.theme, _b = _a.height, height = _b === void 0 ? 56 : _b, _c = _a.width, width = _c === void 0 ? 56 : _c;
    var stringSet = useContext(LocalizationContext).stringSet;
    var memoizedAvatar = useMemo(function () {
        return (React__default.createElement(Avatar, { className: "sendbird-chat-header__avatar--open-channel", src: getOpenChannelAvatar(channel), width: "".concat(width, "px"), height: "".concat(height, "px"), alt: (channel === null || channel === void 0 ? void 0 : channel.name) || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE }));
    }, [channel === null || channel === void 0 ? void 0 : channel.coverUrl, theme]);
    return (React__default.createElement(React__default.Fragment, null, memoizedAvatar));
}

export { ChannelAvatar as default };
//# sourceMappingURL=OpenChannelAvatar.js.map
