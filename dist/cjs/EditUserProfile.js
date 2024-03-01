'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DvNeoTBz.js');
require('./chunks/bundle-BeJ7-X59.js');
require('./chunks/bundle-BruYC2Km.js');
require('./chunks/bundle-DUeKijBO.js');
require('./chunks/bundle-CsGQD6DC.js');
require('./chunks/bundle-CjFSIiUv.js');
require('./chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DQfemABy.js');
require('react-dom');
require('./chunks/bundle-BppUjcCZ.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CkvaXo1D.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BelgkMC5.js');
require('./chunks/bundle-DHTHQj02.js');
require('./chunks/bundle-D0W7zrvh.js');
require('./ui/Input.js');
require('./chunks/bundle-BNKSF9CJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-8jy5Sc-N.js');
require('./ui/TextButton.js');
require('./chunks/bundle-C79vYLB2.js');

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
