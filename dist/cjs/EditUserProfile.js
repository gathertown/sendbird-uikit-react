'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DHh3VdoS.js');
require('./chunks/bundle-BD2bIoH6.js');
require('./chunks/bundle-DoHigaWY.js');
require('./chunks/bundle-C8yEdUBb.js');
require('./chunks/bundle-x4-U6h1l.js');
require('./chunks/bundle-CG5E97k8.js');
require('./chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('./chunks/bundle-DGx3xKBn.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-24sG-BP_.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DDY1xx_n.js');
require('./chunks/bundle-BPGreBtw.js');
require('./chunks/bundle-e1P14sMX.js');
require('./ui/Input.js');
require('./chunks/bundle-JS-CtPko.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-Xx0kBn7q.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DTKihS4S.js');

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
