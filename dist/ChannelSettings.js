import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './chunks/bundle-5LMP4qQC.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './ChannelSettings/components/ChannelSettingsHeader.js';
import './chunks/bundle-BW5JWhMG.js';
import './chunks/bundle-BeAHyfuE.js';
import './chunks/bundle-DyVsaRLS.js';
import './ui/Icon.js';
import './chunks/bundle-QtD1UM1r.js';
import './ui/Header.js';
import './chunks/bundle-DvIsR7kQ.js';
import './chunks/bundle-U_2B1aWq.js';
import './ui/TextButton.js';
import './chunks/bundle-CfII9A10.js';
import './ui/IconButton.js';
import './ui/PlaceHolder.js';
import './ui/Loader.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './chunks/bundle-DCv5_AWJ.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-Dzc4np9L.js';
import './chunks/bundle-BfWElK7u.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './chunks/bundle-xaiK2tjx.js';
import './chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-BJD56sGG.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DtWPTHU4.js';
import './chunks/bundle-CzOn0UCC.js';
import './chunks/bundle-BpHmAKa2.js';
import './ui/Input.js';
import './ChannelSettings/components/ModerationPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './ui/Badge.js';
import './ui/Toggle.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './chunks/bundle-B0Dbuu28.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './chunks/bundle-c0D1F768.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './chunks/bundle-CPs5faB9.js';
import './chunks/bundle-mvJ9QD_D.js';
import '@sendbird/chat/message';
import './chunks/bundle-TBQO6kEO.js';
import './chunks/bundle-mSj0Hu0a.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';

var ChannelSettings = function (props) {
    return (React__default.createElement(ChannelSettingsProvider, { overrideInviteUser: props === null || props === void 0 ? void 0 : props.overrideInviteUser, channelUrl: props.channelUrl, onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick, onLeaveChannel: props === null || props === void 0 ? void 0 : props.onLeaveChannel, onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified, onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel, queries: props === null || props === void 0 ? void 0 : props.queries, className: props === null || props === void 0 ? void 0 : props.className, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile },
        React__default.createElement(ChannelSettingsUI, { renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError, renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile, renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel, renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel })));
};

export { ChannelSettings as default };
//# sourceMappingURL=ChannelSettings.js.map
