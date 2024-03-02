'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
var ui_Modal = require('../chunks/bundle-CG5E97k8.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
var useKeyDown = require('../chunks/bundle-DoLTlc_l.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');
require('../chunks/bundle-DHh3VdoS.js');
require('../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('../chunks/bundle-DGx3xKBn.js');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-DDY1xx_n.js');
require('../chunks/bundle-BPGreBtw.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-e1P14sMX.js');

function MessageFeedbackFailedModal(props) {
    var text = props.text, onCancel = props.onCancel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var modalRef = React.useRef(null);
    var onKeyDown = useKeyDown.useKeyDown(modalRef, {
        Enter: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
        Escape: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
    });
    return (React.createElement("div", { onKeyDown: onKeyDown },
        React.createElement(ui_Modal.Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ui_Button.ButtonTypes.PRIMARY, onSubmit: onCancel, onClose: onCancel, submitText: stringSet.BUTTON__OK, renderHeader: function () { return (React.createElement("div", { className: 'sendbird-modal__header' },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, text))); }, customFooter: React.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root_failed' },
                React.createElement(ui_Button.default, { onClick: onCancel },
                    React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_3, color: ui_Label.LabelColors.ONCONTENT_1 }, stringSet.BUTTON__OK))) })));
}

module.exports = MessageFeedbackFailedModal;
//# sourceMappingURL=MessageFeedbackFailedModal.js.map
