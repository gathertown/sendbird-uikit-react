import React__default, { useContext, useRef } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-BBVJixDe.js';
import { M as Modal } from '../chunks/bundle-BpF0Qo8A.js';
import Button, { ButtonTypes } from './Button.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DBtyGp-i.js';
import { u as useKeyDown } from '../chunks/bundle-B8YFOQl1.js';
import '../chunks/bundle-Bh_HZf7x.js';
import '../chunks/bundle-DTkxB28y.js';
import '../chunks/bundle-h5nSe8RU.js';
import '../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-CbUL9vb-.js';
import 'react-dom';
import '../chunks/bundle-BfXjuJZP.js';
import './IconButton.js';
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

function MessageFeedbackFailedModal(props) {
    var text = props.text, onCancel = props.onCancel;
    var stringSet = useContext(LocalizationContext).stringSet;
    var modalRef = useRef(null);
    var onKeyDown = useKeyDown(modalRef, {
        Enter: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
        Escape: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
    });
    return (React__default.createElement("div", { onKeyDown: onKeyDown },
        React__default.createElement(Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ButtonTypes.PRIMARY, onSubmit: onCancel, onClose: onCancel, submitText: stringSet.BUTTON__OK, renderHeader: function () { return (React__default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.createElement(Label, { type: LabelTypography.H_1, color: LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, text))); }, customFooter: React__default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root_failed' },
                React__default.createElement(Button, { onClick: onCancel },
                    React__default.createElement(Label, { type: LabelTypography.BUTTON_3, color: LabelColors.ONCONTENT_1 }, stringSet.BUTTON__OK))) })));
}

export { MessageFeedbackFailedModal as default };
//# sourceMappingURL=MessageFeedbackFailedModal.js.map
