'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-BeJ7-X59.js');
require('./chunks/bundle-BruYC2Km.js');
require('./chunks/bundle-DUeKijBO.js');
require('./chunks/bundle-BNKSF9CJ.js');
require('./chunks/bundle-DvNeoTBz.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DQfemABy.js');
require('./chunks/bundle-8jy5Sc-N.js');
require('./ui/Icon.js');
require('./chunks/bundle-CkvaXo1D.js');
require('./ui/Button.js');
require('./chunks/bundle-CjFSIiUv.js');
require('./chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BppUjcCZ.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BelgkMC5.js');
require('./chunks/bundle-DHTHQj02.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-D0W7zrvh.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-C79vYLB2.js');

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
