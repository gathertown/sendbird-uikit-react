import React__default, { useContext } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BOy_tVjz.js';
import { v as getClassName } from '../chunks/bundle-D-z4U1wX.js';
import { L as LocalizationContext } from '../chunks/bundle-BwcI3bWM.js';
import '../chunks/bundle-s7uQ7zAa.js';
import '../chunks/bundle-DqWrl4d1.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dyt8DaMp.js';

function UnknownMessageItemBody(_a) {
    var _b;
    var className = _a.className, message = _a.message, _c = _a.isByMe, isByMe = _c === void 0 ? false : _c, _d = _a.mouseHover, mouseHover = _d === void 0 ? false : _d, _e = _a.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: getClassName([
            className,
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__header", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__description", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE)));
}

export { UnknownMessageItemBody as default };
//# sourceMappingURL=UnknownMessageItemBody.js.map
