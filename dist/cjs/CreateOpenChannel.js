'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-DKL8dMjq.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./chunks/bundle-BO5OZWjS.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DgAALupQ.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./ui/Icon.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./ui/Button.js');
require('./chunks/bundle-CBfBMqDz.js');
require('./chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BFgXaSuR.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-3bmKYTJ_.js');
require('./chunks/bundle-DI6hrkhw.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BOaew5JK.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
