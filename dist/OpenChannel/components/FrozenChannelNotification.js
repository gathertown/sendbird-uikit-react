import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CRmP70eG.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-D8IuvsaW.js';

var FrozenNotification = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React__default.createElement(Label, { className: "sendbird-frozen-channel-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenChannelNotification.js.map
