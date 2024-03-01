'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BQNX69rh.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/Input.js');
require('../../chunks/bundle-k7WGsMsr.js');

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