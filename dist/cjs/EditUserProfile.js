'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-BO5OZWjS.js');
require('./chunks/bundle-DKL8dMjq.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./chunks/bundle-D-g6JUod.js');
require('./chunks/bundle-CBfBMqDz.js');
require('./chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DgAALupQ.js');
require('react-dom');
require('./chunks/bundle-BFgXaSuR.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-3bmKYTJ_.js');
require('./chunks/bundle-DI6hrkhw.js');
require('./chunks/bundle-BOaew5JK.js');
require('./ui/Input.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
