'use strict';

var React = require('react');
var ChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Modal = require('../../chunks/bundle-BPS3DFTX.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../chunks/bundle-Bh7J_SsW.js');
require('../../chunks/bundle-2PlwnSzC.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_Button = require('../../ui/Button.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var uuid = require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../chunks/bundle-BQNX69rh.js');

var EditDetails = function (props) {
    var _a, _b, _c;
    var onSubmit = props.onSubmit, onCancel = props.onCancel;
    var _d = ChannelSettings_context.useChannelSettingsContext(), channel = _d.channel, onChannelModified = _d.onChannelModified, onBeforeUpdateChannel = _d.onBeforeUpdateChannel, setChannelUpdateId = _d.setChannelUpdateId;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
    var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
    var inputRef = React.useRef(null);
    var formRef = React.useRef(null);
    var hiddenInputRef = React.useRef(null);
    var _e = React.useState(null), currentImg = _e[0], setCurrentImg = _e[1];
    var _f = React.useState(null), newFile = _f[0], setNewFile = _f[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
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
                    setChannelUpdateId(uuid.uuidv4());
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
                    setChannelUpdateId(uuid.uuidv4());
                    onSubmit();
                });
            }
        }, type: ui_Button.ButtonTypes.PRIMARY },
        React.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React.createElement("div", { className: "channel-profile-form__img-section" },
                React.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React.createElement(ui_Avatar.Avatar, { height: "80px", width: "80px", src: currentImg })) : (React.createElement(ui_ChannelAvatar, { height: 80, width: 80, channel: channel, userId: userId, theme: theme }))),
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
