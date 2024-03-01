'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DvNeoTBz.js');
require('./chunks/bundle-BeJ7-X59.js');
require('./chunks/bundle-BruYC2Km.js');
require('./chunks/bundle-DUeKijBO.js');
require('./chunks/bundle-CkvaXo1D.js');
require('./ui/Icon.js');
require('./chunks/bundle-DQfemABy.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-C79vYLB2.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-BNKSF9CJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-8jy5Sc-N.js');
require('./chunks/bundle-Rz-nVLJe.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-B6bAeEPF.js');
require('./chunks/bundle-CjFSIiUv.js');
require('./chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BppUjcCZ.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BelgkMC5.js');
require('./chunks/bundle-DHTHQj02.js');
require('./chunks/bundle-D0W7zrvh.js');
require('./ui/Input.js');
require('./chunks/bundle-xjxtPP1Q.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-s9ulbp6E.js');
require('./ui/AccordionGroup.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./ui/Accordion.js');

var OpenChannelSetting = function (props) {
    return (React.createElement(OpenChannelSettings_context.OpenChannelSettingsProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick, onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel, onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified, onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile },
        React.createElement(OpenChannelSettings_components_OpenChannelSettingsUI, { renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI, renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList })));
};

module.exports = OpenChannelSetting;
//# sourceMappingURL=OpenChannelSettings.js.map
