import React__default from 'react';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DvIsR7kQ.js';
import { u as useLocalization } from '../chunks/bundle-BW5JWhMG.js';
import 'react-dom';
import '../chunks/bundle-xaiK2tjx.js';
import '../chunks/bundle-5LMP4qQC.js';
import '../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-QtD1UM1r.js';
import '../chunks/bundle-U_2B1aWq.js';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-BJD56sGG.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-DtWPTHU4.js';
import '../chunks/bundle-CzOn0UCC.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-BpHmAKa2.js';
import '../chunks/bundle-BeAHyfuE.js';
import '../chunks/bundle-DyVsaRLS.js';

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
