'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BplSuW2v.js');
var pubSub_topics = require('../../chunks/bundle-BSU5Fq75.js');
var ui_Modal = require('../../chunks/bundle-D0ePEYoI.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../chunks/bundle-5IKAPUOJ.js');
require('../../chunks/bundle-B67weJWw.js');
var ui_Label = require('../../chunks/bundle-X-ZtnRCT.js');
var ui_Button = require('../../ui/Button.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('react-dom');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-BCNmULWo.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../chunks/bundle-DDJZEPWj.js');
require('../../chunks/bundle-DDTTknuH.js');
require('../../chunks/bundle-LbGezufX.js');

var EditDetails = function (props) {
    var onCancel = props.onCancel;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var _a = globalState.config, logger = _a.logger, theme = _a.theme, pubSub = _a.pubSub;
    var _b = OpenChannelSettings_context.useOpenChannelSettingsContext(), channel = _b.channel, onBeforeUpdateChannel = _b.onBeforeUpdateChannel, onChannelModified = _b.onChannelModified, setChannel = _b.setChannel;
    var inputRef = React.useRef(null);
    var formRef = React.useRef(null);
    var hiddenInputRef = React.useRef(null);
    var _c = React.useState(null), currentImg = _c[0], setCurrentImg = _c[1];
    var _d = React.useState(null), newFile = _d[0], setNewFile = _d[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    return (React.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
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
                pubSub === null || pubSub === void 0 ? void 0 : pubSub.publish(pubSub_topics.pubSubTopics.UPDATE_OPEN_CHANNEL, updatedChannel);
            }).catch(function (error) {
                logger.error('ChannelSettings: Channel infomation update failed', error);
                setChannel(null);
            });
            onCancel();
        }, type: ui_Button.ButtonTypes.PRIMARY },
        React.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React.createElement("div", { className: "channel-profile-form__img-section" },
                React.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React.createElement(ui_Avatar.Avatar, { height: "80px", width: "80px", src: currentImg })) : (React.createElement(ui_OpenChannelAvatar, { height: 80, width: 80, channel: channel, theme: theme }))),
                React.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                        setCurrentImg(URL.createObjectURL(e.target.files[0]));
                        setNewFile(e.target.files[0]);
                        hiddenInputRef.current.value = '';
                    } }),
                React.createElement(ui_TextButton, { className: "channel-profile-form__avatar-button", onClick: function () { return hiddenInputRef.current.click(); }, disableUnderline: true },
                    React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))),
            React.createElement("div", { className: "channel-profile-form__name-section" },
                React.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME),
                React.createElement(ui_Input.default, { required: title !== '', name: "channel-profile-form__name", ref: inputRef, value: title, placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER })))));
};

module.exports = EditDetails;
//# sourceMappingURL=EditDetailsModal.js.map
