'use strict';

var _tslib = require('../../chunks/bundle-DvNeoTBz.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var ChannelSettings_components_ChannelSettingsHeader = require('./ChannelSettingsHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Label = require('../../chunks/bundle-CkvaXo1D.js');
var LocalizationContext = require('../../chunks/bundle-BeJ7-X59.js');
var ui_Icon = require('../../ui/Icon.js');
var ChannelSettings_components_ChannelProfile = require('./ChannelProfile.js');
var ChannelSettings_components_ModerationPanel = require('./ModerationPanel.js');
var ChannelSettings_components_LeaveChannel = require('./LeaveChannel.js');
var ChannelSettings_components_UserPanel = require('./UserPanel.js');
var utils = require('../../chunks/bundle-DQfemABy.js');
require('../../withSendbird.js');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../ui/Header.js');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../ui/IconButton.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../chunks/bundle-Rz-nVLJe.js');
require('./EditDetailsModal.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('../../chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BelgkMC5.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-D0W7zrvh.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../ui/Badge.js');
require('../../ui/Toggle.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('./UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../chunks/bundle-DTnbaOzD.js');
require('../../chunks/bundle-BZXuUIRS.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DKu6RR0i.js');
require('../../chunks/bundle-BIWzbPG7.js');

var ChannelSettingsUI = function (props) {
    var _a;
    var _b = utils.deleteNullish(props), _c = _b.renderHeader, renderHeader = _c === void 0 ? function (p) { return React.createElement(ChannelSettings_components_ChannelSettingsHeader.ChannelSettingsHeader, _tslib.__assign({}, p)); } : _c, renderLeaveChannel = _b.renderLeaveChannel, renderChannelProfile = _b.renderChannelProfile, renderModerationPanel = _b.renderModerationPanel, renderPlaceholderError = _b.renderPlaceholderError, renderPlaceholderLoading = _b.renderPlaceholderLoading;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _d = ChannelSettings_context.useChannelSettingsContext(), channel = _d.channel, invalidChannel = _d.invalidChannel, onCloseClick = _d.onCloseClick, loading = _d.loading;
    var _e = React.useState(false), showLeaveChannelModal = _e[0], setShowLeaveChannelModal = _e[1];
    if (loading) {
        if (renderPlaceholderLoading)
            return renderPlaceholderLoading();
        return React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING });
    }
    var headerProps = { onCloseClick: onCloseClick };
    if (invalidChannel || !channel) {
        return (React.createElement("div", null,
            renderHeader(headerProps),
            React.createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG }))));
    }
    return (React.createElement(React.Fragment, null,
        renderHeader(headerProps),
        React.createElement("div", { className: "sendbird-channel-settings__scroll-area" },
            (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || React.createElement(ChannelSettings_components_ChannelProfile, null),
            (renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 : renderModerationPanel()) || ((channel === null || channel === void 0 ? void 0 : channel.myRole) === 'operator' ? React.createElement(ChannelSettings_components_ModerationPanel, null) : React.createElement(ChannelSettings_components_UserPanel, null)),
            (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || (React.createElement("div", { className: [
                    'sendbird-channel-settings__panel-item',
                    'sendbird-channel-settings__leave-channel',
                    !isOnline ? 'sendbird-channel-settings__panel-item__disabled' : '',
                ].join(' '), role: "button", onKeyDown: function () {
                    if (!isOnline) {
                        return;
                    }
                    setShowLeaveChannelModal(true);
                }, onClick: function () {
                    if (!isOnline) {
                        return;
                    }
                    setShowLeaveChannelModal(true);
                }, tabIndex: 0 },
                React.createElement(ui_Icon.default, { className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '), type: ui_Icon.IconTypes.LEAVE, fillColor: ui_Icon.IconColors.ERROR, height: "24px", width: "24px" }),
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))),
            showLeaveChannelModal && (React.createElement(ChannelSettings_components_LeaveChannel, { onCancel: function () {
                    setShowLeaveChannelModal(false);
                }, onSubmit: function () {
                    setShowLeaveChannelModal(false);
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })))));
};

module.exports = ChannelSettingsUI;
//# sourceMappingURL=ChannelSettingsUI.js.map
