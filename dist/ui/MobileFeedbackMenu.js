import React__default from 'react';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BOy_tVjz.js';
import { u as useLocalization } from '../chunks/bundle-BwcI3bWM.js';
import 'react-dom';
import '../chunks/bundle-Zq-75Hl4.js';
import '../chunks/bundle-s7uQ7zAa.js';
import '../chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-BJmqupdN.js';
import '../chunks/bundle-Bs8Nuk02.js';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-Caf8F3YR.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-CuXnBg6p.js';
import '../chunks/bundle-BUsOkeT7.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-BytW9Azl.js';
import '../chunks/bundle-DqWrl4d1.js';
import '../chunks/bundle-Dyt8DaMp.js';

function MobileFeedbackMenu(props) {
    var hideMenu = props.hideMenu, onEditFeedback = props.onEditFeedback, onRemoveFeedback = props.onRemoveFeedback;
    var stringSet = useLocalization().stringSet;
    return (React__default.createElement(BottomSheet, { onBackdropClick: hideMenu },
        React__default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-options-menu' },
            React__default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onEditFeedback();
                } },
                React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.EDIT_COMMENT)),
            React__default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onRemoveFeedback();
                } },
                React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ERROR }, stringSet.REMOVE_FEEDBACK)))));
}

export { MobileFeedbackMenu as default };
//# sourceMappingURL=MobileFeedbackMenu.js.map
