import React__default, { useContext, useMemo } from 'react';
import { A as Avatar } from '../chunks/bundle-BJEESw7S.js';
import { L as LocalizationContext } from '../chunks/bundle-BBVJixDe.js';
import { b as getOpenChannelAvatar } from '../chunks/bundle-BdvKKcJL.js';
import '../chunks/bundle-h5nSe8RU.js';
import './ImageRenderer.js';
import '../chunks/bundle-CbUL9vb-.js';
import '../chunks/bundle-RDd4rAzg.js';
import './Icon.js';
import '../chunks/bundle-Bh_HZf7x.js';
import '../chunks/bundle-DTkxB28y.js';

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
