'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BeJ7-X59.js');
var ui_Label = require('../../chunks/bundle-CkvaXo1D.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Rz-nVLJe.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('../../chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BelgkMC5.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-D0W7zrvh.js');
require('../../ui/Input.js');
require('../../chunks/bundle-s9ulbp6E.js');

function ChannelProfile() {
    var _a, _b;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
    var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-openchannel-profile" },
        React.createElement("div", { className: "sendbird-openchannel-profile--inner" },
            React.createElement("div", { className: "sendbird-openchannel-profile__avatar" },
                React.createElement(ui_OpenChannelAvatar, { channel: channel, theme: theme, height: 80, width: 80 })),
            React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1, className: "sendbird-openchannel-profile__title" }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE),
            React.createElement(ui_TextButton, { disabled: disabled, className: "sendbird-openchannel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: disabled ? ui_Label.LabelColors.ONBACKGROUND_2 : ui_Label.LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React.createElement(OpenChannelSettings_components_EditDetailsModal, { onCancel: function () { return setShowModal(false); } })))));
}

module.exports = ChannelProfile;
//# sourceMappingURL=OpenChannelProfile.js.map
