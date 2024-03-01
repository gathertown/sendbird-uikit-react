'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-B67weJWw.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./chunks/bundle-bJvhNye3.js');
require('./chunks/bundle-D0ePEYoI.js');
require('./chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-CrJkvCS4.js');
require('react-dom');
require('./chunks/bundle-DPOXwvBX.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./chunks/bundle-BCNmULWo.js');
require('./ui/Input.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CR__rOP0.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
