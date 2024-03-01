'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-2PlwnSzC.js');
require('./chunks/bundle-D2Bg8CLY.js');
require('./chunks/bundle-BlYafk3l.js');
require('./chunks/bundle-DzJC_TK7.js');
require('./chunks/bundle-DDZSvAgP.js');
require('./chunks/bundle-BPS3DFTX.js');
require('./chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('./chunks/bundle-Gh-C2yIM.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-BUH06mHS.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BPDG2Sth.js');
require('./chunks/bundle-tCz2WwyT.js');
require('./chunks/bundle-DLvdMF5T.js');
require('./ui/Input.js');
require('./chunks/bundle-Bh7J_SsW.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DgzUMNGp.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Cxw_pnFf.js');

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
