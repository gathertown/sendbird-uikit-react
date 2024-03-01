import React__default from 'react';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ZpyLpKbV.js';
import { u as useLocalization } from '../chunks/bundle-VRwQbdO6.js';
import 'react-dom';
import '../chunks/bundle-OZ70K6ig.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-NTpQiCzz.js';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-DOX5a7sk.js';
import '../chunks/bundle-GlkAQINh.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-CmoRaDho.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-BIDYJkIe.js';

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