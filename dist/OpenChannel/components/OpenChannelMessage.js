import React__default, { useContext, useState, useRef } from 'react';
import { f as format } from '../../chunks/bundle-g-7qyWG4.js';
import OpenchannelUserMessage from '../../ui/OpenchannelUserMessage.js';
import OpenChannelAdminMessage from '../../ui/OpenChannelAdminMessage.js';
import OpenChannelOGMessage from '../../ui/OpenchannelOGMessage.js';
import OpenchannelThumbnailMessage from '../../ui/OpenchannelThumbnailMessage.js';
import OpenChannelFileMessage from '../../ui/OpenchannelFileMessage.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DBtyGp-i.js';
import MessageInput from '../../ui/MessageInput.js';
import { i as isImage, a as isVideo, F as FileViewer } from '../../chunks/bundle-CxH5pvZA.js';
import { M as Modal } from '../../chunks/bundle-BpF0Qo8A.js';
import { L as LocalizationContext, u as useLocalization } from '../../chunks/bundle-BBVJixDe.js';
import { g as getModalDeleteMessageTitle } from '../../chunks/bundle-KOP8NnFs.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-BMZrET1K.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../ui/Icon.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BsPw6HPN.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../ui/IconButton.js';
import '../../ui/Loader.js';
import '../../ui/UserProfile.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../withSendbird.js';
import '../../chunks/bundle-D-5CYqFq.js';
import '../../chunks/bundle-Ca7m2hEN.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../chunks/bundle-TmVTNucb.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-_lgzP0oA.js';
import '../../chunks/bundle-CjXL-Zhv.js';
import '../../Message/context.js';
import '../../ui/MentionLabel.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../chunks/bundle-DyyEjGYc.js';
import '../../chunks/bundle-Qz_mnbcy.js';
import '../../chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-jiObN6zC.js';
import '../../chunks/bundle-Dnb-49Dd.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-B8YFOQl1.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-_-u6U1pM.js';
import '../../chunks/bundle-D4dNsiFL.js';

function RemoveMessageModal(_a) {
    var message = _a.message, onCloseModal = _a.onCloseModal, onDeleteMessage = _a.onDeleteMessage;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement(Modal, { onCancel: onCloseModal, onSubmit: onDeleteMessage, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: getModalDeleteMessageTitle(stringSet, message) }));
}

var MessageTypes = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    FILE: 'FILE',
    THUMBNAIL: 'THUMBNAIL',
    OG: 'OG',
    UNKNOWN: 'UNKNOWN',
};
var SendingMessageStatus = {
    NONE: 'none',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
    PENDING: 'pending',
};
var getMessageType = function (message, options) {
    var _a, _b;
    var isOgMessageEnabledInOpenChannel = options === null || options === void 0 ? void 0 : options.isOgMessageEnabledInOpenChannel;
    if (((_a = message === null || message === void 0 ? void 0 : message.isUserMessage) === null || _a === void 0 ? void 0 : _a.call(message)) || (message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
        return ((message === null || message === void 0 ? void 0 : message.ogMetaData) && isOgMessageEnabledInOpenChannel)
            ? MessageTypes.OG
            : MessageTypes.USER;
    }
    if ((_b = message === null || message === void 0 ? void 0 : message.isAdminMessage) === null || _b === void 0 ? void 0 : _b.call(message)) {
        return MessageTypes.ADMIN;
    }
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
        return (isImage(message.type) || isVideo(message.type))
            ? MessageTypes.THUMBNAIL
            : MessageTypes.FILE;
    }
    return MessageTypes.UNKNOWN;
};

function OpenChannelMessage(props) {
    var _a;
    var _b;
    var message = props.message, chainTop = props.chainTop, chainBottom = props.chainBottom, hasSeparator = props.hasSeparator, renderMessage = props.renderMessage;
    var _c = useOpenChannelContext(), currentOpenChannel = _c.currentOpenChannel, deleteMessage = _c.deleteMessage, updateMessage = _c.updateMessage, resendMessage = _c.resendMessage;
    var _d = useLocalization(), dateLocale = _d.dateLocale, stringSet = _d.stringSet;
    var editDisabled = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen;
    var globalState = useSendbirdStateContext();
    var currentUserId = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.userId;
    var isOgMessageEnabledInOpenChannel = globalState.config.openChannel.enableOgtag;
    var sender = null;
    if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        sender = message === null || message === void 0 ? void 0 : message.sender;
    }
    var _e = useState(false), showEdit = _e[0], setShowEdit = _e[1];
    var _f = useState(false), showRemove = _f[0], setShowRemove = _f[1];
    var _g = useState(false), showFileViewer = _g[0], setShowFileViewer = _g[1];
    var editMessageInputRef = useRef(null);
    var isByMe = false;
    if (sender && (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        // pending and failed messages are by me
        isByMe = currentUserId === sender.userId
            || (message === null || message === void 0 ? void 0 : message.sendingStatus)
                === SendingMessageStatus.PENDING
            || (message === null || message === void 0 ? void 0 : message.sendingStatus)
                === SendingMessageStatus.FAILED;
    }
    if (renderMessage) {
        return (React__default.createElement("div", { className: "sendbird-msg-hoc sendbird-msg--scroll-ref" }, renderMessage({ message: message, chainTop: chainTop, chainBottom: chainBottom })));
    }
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user' && showEdit) {
        return (React__default.createElement(MessageInput, { isEdit: true, channel: currentOpenChannel, disabled: editDisabled, ref: editMessageInputRef, message: message, onUpdateMessage: function (_a) {
                var messageId = _a.messageId, message = _a.message;
                updateMessage(messageId, message);
                setShowEdit(false);
            }, onCancelEdit: function () {
                setShowEdit(false);
            } }));
    }
    return (React__default.createElement("div", { className: "sendbird-msg-hoc sendbird-msg--scroll-ref" },
        React__default.createElement(React__default.Fragment, null,
            hasSeparator && (message === null || message === void 0 ? void 0 : message.createdAt) && (React__default.createElement(DateSeparator, null,
                React__default.createElement(Label, { type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR, { locale: dateLocale })))),
            (_a = {},
                _a[MessageTypes.ADMIN] = (function () {
                    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
                        return (React__default.createElement(OpenChannelAdminMessage, { message: message }));
                    }
                })(),
                _a[MessageTypes.FILE] = (function () {
                    var _a;
                    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
                        return (React__default.createElement(OpenChannelFileMessage, { message: message, isOperator: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isOperator((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId), isEphemeral: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isEphemeral, disabled: editDisabled, userId: currentUserId, showRemove: setShowRemove, resendMessage: resendMessage, chainTop: chainTop, chainBottom: chainBottom }));
                    }
                })(),
                _a[MessageTypes.OG] = (function () {
                    var _a;
                    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user'
                        && isOgMessageEnabledInOpenChannel) {
                        return (React__default.createElement(OpenChannelOGMessage, { message: message, isOperator: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isOperator((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId), isEphemeral: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isEphemeral, userId: currentUserId, showEdit: setShowEdit, disabled: editDisabled, showRemove: setShowRemove, resendMessage: resendMessage, chainTop: chainTop, chainBottom: chainBottom }));
                    }
                })(),
                _a[MessageTypes.THUMBNAIL] = (function () {
                    var _a;
                    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
                        return (React__default.createElement(OpenchannelThumbnailMessage, { message: message, isOperator: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isOperator((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId), isEphemeral: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isEphemeral, disabled: editDisabled, userId: currentUserId, showRemove: setShowRemove, resendMessage: resendMessage, onClick: setShowFileViewer, chainTop: chainTop, chainBottom: chainBottom }));
                    }
                })(),
                _a[MessageTypes.USER] = (function () {
                    var _a;
                    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
                        return (React__default.createElement(OpenchannelUserMessage, { message: message, isOperator: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isOperator((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId), isEphemeral: currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isEphemeral, userId: currentUserId, disabled: editDisabled, showEdit: setShowEdit, showRemove: setShowRemove, resendMessage: resendMessage, chainTop: chainTop, chainBottom: chainBottom }));
                    }
                })(),
                _a[MessageTypes.UNKNOWN] = (function () {
                    // return (
                    //   <OpenChannelUnknownMessage message={message} />
                    // );
                })(),
                _a)[getMessageType(message, { isOgMessageEnabledInOpenChannel: isOgMessageEnabledInOpenChannel })],
            showRemove && (React__default.createElement(RemoveMessageModal, { message: message, onCloseModal: function () { return setShowRemove(false); }, onDeleteMessage: function () {
                    if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
                        deleteMessage(message);
                    }
                } })),
            showFileViewer && (message === null || message === void 0 ? void 0 : message.messageType) === 'file' && (React__default.createElement(FileViewer, { onClose: function () { return setShowFileViewer(false); }, message: message, onDelete: function () { return deleteMessage(message); }, isByMe: isByMe })))));
}

export { OpenChannelMessage as default };
//# sourceMappingURL=OpenChannelMessage.js.map
