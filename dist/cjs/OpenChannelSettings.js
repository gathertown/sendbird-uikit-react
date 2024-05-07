'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-BO5OZWjS.js');
require('./chunks/bundle-DKL8dMjq.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./ui/Icon.js');
require('./chunks/bundle-DgAALupQ.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./chunks/bundle-DuKfsNCh.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-z9miKj3U.js');
require('./chunks/bundle-CBfBMqDz.js');
require('./chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BFgXaSuR.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-3bmKYTJ_.js');
require('./chunks/bundle-DI6hrkhw.js');
require('./chunks/bundle-BOaew5JK.js');
require('./ui/Input.js');
require('./chunks/bundle-iwi1ndXq.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-CJtsI7GU.js');
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
