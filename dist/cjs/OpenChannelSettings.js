'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-B67weJWw.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./ui/Icon.js');
require('./chunks/bundle-CrJkvCS4.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CR__rOP0.js');
require('./chunks/bundle-DDTTknuH.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-BSU5Fq75.js');
require('./chunks/bundle-D0ePEYoI.js');
require('./chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DPOXwvBX.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./chunks/bundle-BCNmULWo.js');
require('./ui/Input.js');
require('./chunks/bundle-DBpLe6El.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-LbGezufX.js');
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
