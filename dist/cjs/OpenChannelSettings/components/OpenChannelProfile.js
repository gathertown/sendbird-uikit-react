'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ui_Label = require('../../chunks/bundle-24sG-BP_.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/Input.js');
require('../../chunks/bundle-BKwrdy8Y.js');

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
