import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default, { useContext, useState } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { ChannelSettingsHeader } from './ChannelSettingsHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ZpyLpKbV.js';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import ChannelProfile from './ChannelProfile.js';
import ModerationPanel from './ModerationPanel.js';
import LeaveChannel from './LeaveChannel.js';
import UserPanel from './UserPanel.js';
import { d as deleteNullish } from '../../chunks/bundle-DIC0UBC5.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../ui/Header.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/IconButton.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-DccoJxVN.js';
import './EditDetailsModal.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/Input.js';
import '../../ui/Accordion.js';
import '../../ui/AccordionGroup.js';
import '../../ui/Badge.js';
import '../../ui/Toggle.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import './UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../ui/UserListItem.js';
import '../../ui/Checkbox.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-B-Gv7uWB.js';

var ChannelSettingsUI = function (props) {
    var _a;
    var _b = deleteNullish(props), _c = _b.renderHeader, renderHeader = _c === void 0 ? function (p) { return React__default.createElement(ChannelSettingsHeader, __assign({}, p)); } : _c, renderLeaveChannel = _b.renderLeaveChannel, renderChannelProfile = _b.renderChannelProfile, renderModerationPanel = _b.renderModerationPanel, renderPlaceholderError = _b.renderPlaceholderError, renderPlaceholderLoading = _b.renderPlaceholderLoading;
    var state = useSendbirdStateContext();
    var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
    var stringSet = useContext(LocalizationContext).stringSet;
    var _d = useChannelSettingsContext(), channel = _d.channel, invalidChannel = _d.invalidChannel, onCloseClick = _d.onCloseClick, loading = _d.loading;
    var _e = useState(false), showLeaveChannelModal = _e[0], setShowLeaveChannelModal = _e[1];
    if (loading) {
        if (renderPlaceholderLoading)
            return renderPlaceholderLoading();
        return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING });
    }
    var headerProps = { onCloseClick: onCloseClick };
    if (invalidChannel || !channel) {
        return (React__default.createElement("div", null,
            renderHeader(headerProps),
            React__default.createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG }))));
    }
    return (React__default.createElement(React__default.Fragment, null,
        renderHeader(headerProps),
        React__default.createElement("div", { className: "sendbird-channel-settings__scroll-area" },
            (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || React__default.createElement(ChannelProfile, null),
            (renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 : renderModerationPanel()) || ((channel === null || channel === void 0 ? void 0 : channel.myRole) === 'operator' ? React__default.createElement(ModerationPanel, null) : React__default.createElement(UserPanel, null)),
            (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || (React__default.createElement("div", { className: [
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
                React__default.createElement(Icon, { className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '), type: IconTypes.LEAVE, fillColor: IconColors.ERROR, height: "24px", width: "24px" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))),
            showLeaveChannelModal && (React__default.createElement(LeaveChannel, { onCancel: function () {
                    setShowLeaveChannelModal(false);
                }, onSubmit: function () {
                    setShowLeaveChannelModal(false);
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })))));
};

export { ChannelSettingsUI as default };
//# sourceMappingURL=ChannelSettingsUI.js.map