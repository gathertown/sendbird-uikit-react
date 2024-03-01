import React__default, { useRef, useState, useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BBVJixDe.js';
import { p as pubSubTopics } from '../../chunks/bundle-ixYJ-kgW.js';
import { M as Modal } from '../../chunks/bundle-BpF0Qo8A.js';
import Input, { InputLabel } from '../../ui/Input.js';
import { A as Avatar } from '../../chunks/bundle-BJEESw7S.js';
import '../../chunks/bundle-h5nSe8RU.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DBtyGp-i.js';
import { ButtonTypes } from '../../ui/Button.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import { useOpenChannelSettingsContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CbUL9vb-.js';
import 'react-dom';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-1rHkiOvv.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../chunks/bundle-BdvKKcJL.js';
import '../../chunks/bundle-D4SykqtT.js';

var EditDetails = function (props) {
    var onCancel = props.onCancel;
    var globalState = useSendbirdStateContext();
    var _a = globalState.config, logger = _a.logger, theme = _a.theme, pubSub = _a.pubSub;
    var _b = useOpenChannelSettingsContext(), channel = _b.channel, onBeforeUpdateChannel = _b.onBeforeUpdateChannel, onChannelModified = _b.onChannelModified, setChannel = _b.setChannel;
    var inputRef = useRef(null);
    var formRef = useRef(null);
    var hiddenInputRef = useRef(null);
    var _c = useState(null), currentImg = _c[0], setCurrentImg = _c[1];
    var _d = useState(null), newFile = _d[0], setNewFile = _d[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    return (React__default.createElement(Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
            if (title !== '' && !inputRef.current.value) {
                if (formRef.current.reportValidity) { // might not work in explorer
                    formRef.current.reportValidity();
                }
                return;
            }
            var currentTitle = inputRef.current.value;
            var currentImg = newFile;
            logger.info('ChannelSettings: Channel information being updated');
            var params = onBeforeUpdateChannel
                ? onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data)
                : {
                    name: currentTitle,
                    coverUrlOrImage: currentImg,
                    data: channel === null || channel === void 0 ? void 0 : channel.data,
                };
            logger.info('ChannelSettings: Updating channel information', params);
            channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (updatedChannel) {
                logger.info('ChannelSettings: Channel information update succeeded', updatedChannel);
                onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(updatedChannel);
                setChannel(updatedChannel);
                pubSub === null || pubSub === void 0 ? void 0 : pubSub.publish(pubSubTopics.UPDATE_OPEN_CHANNEL, updatedChannel);
            }).catch(function (error) {
                logger.error('ChannelSettings: Channel infomation update failed', error);
                setChannel(null);
            });
            onCancel();
        }, type: ButtonTypes.PRIMARY },
        React__default.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React__default.createElement("div", { className: "channel-profile-form__img-section" },
                React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React__default.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React__default.createElement(Avatar, { height: "80px", width: "80px", src: currentImg })) : (React__default.createElement(ChannelAvatar, { height: 80, width: 80, channel: channel, theme: theme }))),
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
