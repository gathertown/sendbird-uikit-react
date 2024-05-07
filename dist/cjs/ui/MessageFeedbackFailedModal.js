'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-DKL8dMjq.js');
var ui_Modal = require('../chunks/bundle-CBfBMqDz.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-CRRWhSHD.js');
var useKeyDown = require('../chunks/bundle-DegkGksZ.js');
require('../chunks/bundle-CNnH6vJ_.js');
require('../chunks/bundle-B8rdv1pq.js');
require('../chunks/bundle-BO5OZWjS.js');
require('../chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DgAALupQ.js');
require('react-dom');
require('../chunks/bundle-BFgXaSuR.js');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-3bmKYTJ_.js');
require('../chunks/bundle-DI6hrkhw.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-BOaew5JK.js');

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
