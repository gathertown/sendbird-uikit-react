'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Avatar = require('../../chunks/bundle-Bh7J_SsW.js');
require('../../chunks/bundle-2PlwnSzC.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_Button = require('../../ui/Button.js');
var ui_Modal = require('../../chunks/bundle-BPS3DFTX.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Input = require('../../ui/Input.js');
var ui_TextButton = require('../../ui/TextButton.js');
var CreateOpenChannel_context = require('../context.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../chunks/bundle-Cxw_pnFf.js');

function CreateOpenChannelUI(_a) {
    var closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    var _b = React.useState(null), newFile = _b[0], setNewFile = _b[1];
    var _c = React.useState(null), currentImage = _c[0], setCurrentImg = _c[1];
    var inputFormRef = React.useRef(null);
    var inputFileRef = React.useRef(null);
    var inputTextRef = React.useRef(null);
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _d = CreateOpenChannel_context.useCreateOpenChannelContext(), logger = _d.logger, createNewOpenChannel = _d.createNewOpenChannel;
    return (React.createElement("div", { className: "sendbird-create-open-channel-ui" },
        React.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.CREATE_OPEN_CHANNEL_LIST__TITLE, submitText: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBMIT, type: ui_Button.ButtonTypes.PRIMARY, onCancel: closeModal, renderHeader: renderHeader, onSubmit: function () {
                var _a;
                var channelName = (_a = inputTextRef === null || inputTextRef === void 0 ? void 0 : inputTextRef.current) === null || _a === void 0 ? void 0 : _a.value;
                if (!channelName) {
                    logger.warning('CreateOpenChannelUI: You should fill the channel name');
                    return;
                }
                createNewOpenChannel({
                    name: channelName,
                    coverUrlOrImage: newFile,
                });
                closeModal();
            } },
            React.createElement(React.Fragment, null, (renderProfileInput === null || renderProfileInput === void 0 ? void 0 : renderProfileInput()) || (React.createElement("form", { className: "sendbird-create-open-channel-ui__profile-input", ref: inputFormRef, onSubmit: function (e) { e.preventDefault(); } },
                React.createElement(ui_Input.InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_SECTION),
                React.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section" },
                    React.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar" }, currentImage
                        ? (React.createElement(ui_Avatar.Avatar, { width: "80px", height: "80px", src: currentImage })) : (React.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar--default" },
                        React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "46px", height: "46px" })))),
                    React.createElement("input", { className: "sendbird-create-open-channel-ui__profile-input__img-section__input", ref: inputFileRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                            setCurrentImg(URL.createObjectURL(e.target.files[0]));
                            setNewFile(e.target.files[0]);
                            inputFileRef.current.value = '';
                        } }),
                    React.createElement(ui_TextButton, { className: "sendbird-create-open-channel-ui__profile-input__img-section__button", onClick: function () { return inputFileRef.current.click(); }, disableUnderline: true },
                        React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_UPLOAD))),
                React.createElement("div", { style: { marginTop: '20px' } },
                    React.createElement(ui_Input.InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_SECTION)),
                React.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__name-section" },
                    React.createElement(ui_Input.default, { name: "sendbird-create-open-channel-ui__profile-input__name-section__input", ref: inputTextRef, placeHolder: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_PLACE_HOLDER }))))))));
}

module.exports = CreateOpenChannelUI;
//# sourceMappingURL=CreateOpenChannelUI.js.map
