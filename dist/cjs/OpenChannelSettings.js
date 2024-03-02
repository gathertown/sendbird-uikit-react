'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DHh3VdoS.js');
require('./chunks/bundle-BD2bIoH6.js');
require('./chunks/bundle-DoHigaWY.js');
require('./chunks/bundle-C8yEdUBb.js');
require('./chunks/bundle-24sG-BP_.js');
require('./ui/Icon.js');
require('./chunks/bundle-BvJOj_Nb.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DTKihS4S.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-JS-CtPko.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-Xx0kBn7q.js');
require('./chunks/bundle-COa5Ssfy.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-CYjw4691.js');
require('./chunks/bundle-CG5E97k8.js');
require('./chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DGx3xKBn.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DDY1xx_n.js');
require('./chunks/bundle-BPGreBtw.js');
require('./chunks/bundle-e1P14sMX.js');
require('./ui/Input.js');
require('./chunks/bundle-BKk7kr9J.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-BKwrdy8Y.js');
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
