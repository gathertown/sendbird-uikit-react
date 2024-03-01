'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-2PlwnSzC.js');
require('./chunks/bundle-D2Bg8CLY.js');
require('./chunks/bundle-BlYafk3l.js');
require('./chunks/bundle-DzJC_TK7.js');
require('./chunks/bundle-BUH06mHS.js');
require('./ui/Icon.js');
require('./chunks/bundle-DMrzJD8i.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Cxw_pnFf.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-Bh7J_SsW.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DgzUMNGp.js');
require('./chunks/bundle-BQNX69rh.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-BeszEZzp.js');
require('./chunks/bundle-BPS3DFTX.js');
require('./chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-Gh-C2yIM.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BPDG2Sth.js');
require('./chunks/bundle-tCz2WwyT.js');
require('./chunks/bundle-DLvdMF5T.js');
require('./ui/Input.js');
require('./chunks/bundle-CDdlJkKz.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-k7WGsMsr.js');
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
