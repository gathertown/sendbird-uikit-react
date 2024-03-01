'use strict';

var React = require('react');
var ChannelList_context = require('./chunks/bundle-CANUAzU4.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./chunks/bundle-B67weJWw.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-BSU5Fq75.js');
require('./chunks/bundle-c87q7xEA.js');
require('./chunks/bundle-CrJkvCS4.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./chunks/bundle-LbGezufX.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-sSPmDeMC.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DE6wTTAM.js');
require('./ChannelList/components/ChannelPreview.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./chunks/bundle-KsO_OPhB.js');
require('./chunks/bundle-D_DzQR1j.js');
require('./ui/Icon.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./ui/Loader.js');
require('./chunks/bundle-Cfv9PJWJ.js');
require('./chunks/bundle-BHQe7HpU.js');
require('./chunks/bundle-BA1ixoTV.js');
require('./chunks/bundle-ZbsP2hNa.js');
require('./chunks/bundle-DPOXwvBX.js');
require('./GroupChannel/components/TypingIndicator.js');
require('./ui/Badge.js');
require('./ui/ChannelAvatar.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CR__rOP0.js');
require('./chunks/bundle-DDTTknuH.js');
require('./ui/MentionUserLabel.js');
require('./chunks/bundle-Bddon8U5.js');
require('./chunks/bundle-D0ePEYoI.js');
require('react-dom');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-BCNmULWo.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');
require('./GroupChannelList/components/GroupChannelPreviewAction.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-DoNFwaye.js');
require('./GroupChannelList/components/GroupChannelListHeader.js');
require('./ui/Header.js');
require('./EditUserProfile.js');
require('./EditUserProfile/context.js');
require('./EditUserProfile/components/EditUserProfileUI.js');
require('./chunks/bundle-bJvhNye3.js');
require('./ui/Input.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-CM_7-rFo.js');
require('./chunks/bundle-B8bLSHlY.js');
require('@sendbird/chat/message');
require('./chunks/bundle-qJQUtN55.js');
require('./ChannelList/components/AddChannel.js');
require('./chunks/bundle-OjJ-G7dB.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./chunks/bundle-DSi2WYq3.js');
require('./sendbirdSelectors.js');
require('./CreateChannel/components/InviteUsers.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./CreateChannel/components/SelectChannelType.js');

var ChannelList = function (props) {
    return (React.createElement(ChannelList_context.ChannelListProvider, { className: props === null || props === void 0 ? void 0 : props.className, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit, onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel, onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange, overrideInviteUser: props === null || props === void 0 ? void 0 : props.overrideInviteUser, onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess, onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect, sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList, queries: props === null || props === void 0 ? void 0 : props.queries, disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect, activeChannelUrl: props === null || props === void 0 ? void 0 : props.activeChannelUrl, isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled, isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled, reconnectOnIdle: props === null || props === void 0 ? void 0 : props.reconnectOnIdle },
        React.createElement(ChannelList_components_ChannelListUI, { renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview, renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader, renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList, renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError, renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading })));
};

module.exports = ChannelList;
//# sourceMappingURL=ChannelList.js.map
