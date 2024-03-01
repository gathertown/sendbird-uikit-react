'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-D2Bg8CLY.js');
var ui_Modal = require('../chunks/bundle-BPS3DFTX.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
var useKeyDown = require('../chunks/bundle-C3yNDl4J.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');
require('../chunks/bundle-2PlwnSzC.js');
require('../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../chunks/bundle-Gh-C2yIM.js');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BPDG2Sth.js');
require('../chunks/bundle-tCz2WwyT.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-DLvdMF5T.js');

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
