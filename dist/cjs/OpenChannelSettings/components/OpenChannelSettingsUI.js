'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ui_Label = require('../../chunks/bundle-24sG-BP_.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannelSettings_components_OperatorUI = require('./OperatorUI.js');
var OpenChannelSettings_components_ParticipantUI = require('../../chunks/bundle-BKk7kr9J.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../ui/Loader.js');
require('./OpenChannelProfile.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/OpenChannelAvatar.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('./EditDetailsModal.js');
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
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');

function InvalidChannel(_a) {
    var onCloseClick = _a.onCloseClick;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-openchannel-settings" },
        React.createElement("div", { className: "sendbird-openchannel-settings__header" },
            React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__HEADER__TITLE),
            React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, className: "sendbird-openchannel-settings__close-icon", height: "24px", width: "24px", onClick: function () {
                    onCloseClick();
                } })),
        React.createElement("div", { className: "sendbird-openchannel-settings__placeholder" },
            React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG }))));
}

var OpenChannelUI = function (_a) {
    var _b, _c, _d;
    var renderOperatorUI = _a.renderOperatorUI, renderParticipantList = _a.renderParticipantList;
    var _e = OpenChannelSettings_context.useOpenChannelSettingsContext(), channel = _e.channel, onCloseClick = _e.onCloseClick, isChannelInitialized = _e.isChannelInitialized;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
    var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    if (isChannelInitialized && !channel) {
        return (React.createElement(InvalidChannel, { onCloseClick: function () {
                logger.info('OpenChannelSettings: Click close');
                if (onCloseClick) {
                    onCloseClick();
                }
            } }));
    }
    return (React.createElement("div", { className: 'sendbird-openchannel-settings' },
        (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || (React.createElement(OpenChannelSettings_components_OperatorUI.OperatorUI, null))),
        !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && (React.createElement("div", { className: "sendbird-openchannel-settings__participant" },
            React.createElement("div", { className: "sendbird-openchannel-settings__header" },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE),
                React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, className: "sendbird-openchannel-settings__close-icon", height: "24px", width: "24px", onClick: function () {
                        onCloseClick();
                    } })),
            (renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || (React.createElement(OpenChannelSettings_components_ParticipantUI.ParticipantList, null))))));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelSettingsUI.js.map
