import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BBVJixDe.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-DBtyGp-i.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-h5nSe8RU.js';

var FrozenNotification = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-notification sendbird-notification--frozen ".concat(className) },
        React__default.createElement(Label, { className: "sendbird-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification, FrozenNotification as default };
//# sourceMappingURL=FrozenNotification.js.map
