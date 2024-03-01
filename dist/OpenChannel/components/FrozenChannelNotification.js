import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BBVJixDe.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-DBtyGp-i.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-h5nSe8RU.js';

var FrozenNotification = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React__default.createElement(Label, { className: "sendbird-frozen-channel-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenChannelNotification.js.map
