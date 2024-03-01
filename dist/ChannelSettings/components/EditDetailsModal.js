import React__default, { useRef, useState, useContext } from 'react';
import { useChannelSettingsContext } from '../context.js';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { M as Modal } from '../../chunks/bundle-OZ70K6ig.js';
import Input, { InputLabel } from '../../ui/Input.js';
import { A as Avatar } from '../../chunks/bundle-D7hWtRqW.js';
import '../../chunks/bundle-BpxXmFQC.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ZpyLpKbV.js';
import { ButtonTypes } from '../../ui/Button.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import { u as uuidv4 } from '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../withSendbird.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../chunks/bundle-DccoJxVN.js';

var EditDetails = function (props) {
    var _a, _b, _c;
    var onSubmit = props.onSubmit, onCancel = props.onCancel;
    var _d = useChannelSettingsContext(), channel = _d.channel, onChannelModified = _d.onChannelModified, onBeforeUpdateChannel = _d.onBeforeUpdateChannel, setChannelUpdateId = _d.setChannelUpdateId;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var state = useSendbirdStateContext();
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
    var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
    var inputRef = useRef(null);
    var formRef = useRef(null);
    var hiddenInputRef = useRef(null);
    var _e = useState(null), currentImg = _e[0], setCurrentImg = _e[1];
    var _f = useState(null), newFile = _f[0], setNewFile = _f[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement(Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
            if (title !== '' && !inputRef.current.value) {
                if (formRef.current.reportValidity) { // might not work in explorer
                    formRef.current.reportValidity();
                }
                return;
            }
            var currentTitle = inputRef.current.value;
            var currentImg = newFile;
            logger.info('ChannelSettings: Channel information being updated', {
                currentTitle: currentTitle,
                currentImg: currentImg,
            });
            if (onBeforeUpdateChannel) {
                logger.info('ChannelSettings: onBeforeUpdateChannel');
                var params = onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
                channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (groupChannel) {
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId(uuidv4());
                    onSubmit();
                });
            }
            else {
                logger.info('ChannelSettings: normal');
                channel === null || channel === void 0 ? void 0 : channel.updateChannel({
                    coverImage: currentImg,
                    name: currentTitle,
                    data: (channel === null || channel === void 0 ? void 0 : channel.data) || '',
                }).then(function (groupChannel) {
                    logger.info('ChannelSettings: Channel information updated', groupChannel);
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId(uuidv4());
                    onSubmit();
                });
            }
        }, type: ButtonTypes.PRIMARY },
        React__default.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React__default.createElement("div", { className: "channel-profile-form__img-section" },
                React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React__default.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React__default.createElement(Avatar, { height: "80px", width: "80px", src: currentImg })) : (React__default.createElement(ChannelAvatar, { height: 80, width: 80, channel: channel, userId: userId, theme: theme }))),
                React__default.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                        setCurrentImg(URL.createObjectURL(e.target.files[0]));
                        setNewFile(e.target.files[0]);
                        hiddenInputRef.current.value = '';
                    } }),
                React__default.createElement(TextButton, { className: "channel-profile-form__avatar-button", onClick: function () { return hiddenInputRef.current.click(); }, disableUnderline: true },
                    React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: LabelColors.PRIMARY }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))),
            React__default.createElement("div", { className: "channel-profile-form__name-section" },
                React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME),
                React__default.createElement(Input, { required: title !== '', name: "channel-profile-form__name", ref: inputRef, value: title, placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER })))));
};

export { EditDetails as default };
//# sourceMappingURL=EditDetailsModal.js.map
