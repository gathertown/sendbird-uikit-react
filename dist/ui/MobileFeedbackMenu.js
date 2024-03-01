import React__default from 'react';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DBtyGp-i.js';
import { u as useLocalization } from '../chunks/bundle-BBVJixDe.js';
import 'react-dom';
import '../chunks/bundle-BpF0Qo8A.js';
import '../chunks/bundle-h5nSe8RU.js';
import '../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-CbUL9vb-.js';
import '../chunks/bundle-BfXjuJZP.js';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-1rHkiOvv.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-Blox0Tl9.js';
import '../chunks/bundle-DuvSpEUl.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-BsPw6HPN.js';
import '../chunks/bundle-Bh_HZf7x.js';
import '../chunks/bundle-DTkxB28y.js';

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
