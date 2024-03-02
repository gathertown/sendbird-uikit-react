import React__default from 'react';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BNNafMXS.js';
import { u as useLocalization } from '../chunks/bundle-CRmP70eG.js';
import 'react-dom';
import '../chunks/bundle-BfCFd-dO.js';
import '../chunks/bundle-D8IuvsaW.js';
import '../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-0yILBaSQ.js';
import '../chunks/bundle-BBhSg6C_.js';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-CwSlabaO.js';
import '../chunks/bundle-w0s865vS.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-CNHxvPPg.js';
import '../chunks/bundle-C9nxq4KD.js';
import '../chunks/bundle-k7V2rNcW.js';

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
