import React__default, { useContext, useMemo } from 'react';
import { A as Avatar } from '../chunks/bundle-DCv5_AWJ.js';
import { L as LocalizationContext } from '../chunks/bundle-BW5JWhMG.js';
import { b as getOpenChannelAvatar } from '../chunks/bundle-BfWElK7u.js';
import '../chunks/bundle-5LMP4qQC.js';
import './ImageRenderer.js';
import '../chunks/bundle-QtD1UM1r.js';
import '../chunks/bundle-Dzc4np9L.js';
import './Icon.js';
import '../chunks/bundle-BeAHyfuE.js';
import '../chunks/bundle-DyVsaRLS.js';

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
