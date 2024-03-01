'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./chunks/bundle-B67weJWw.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CrJkvCS4.js');
require('./chunks/bundle-CR__rOP0.js');
require('./ui/Icon.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./ui/Button.js');
require('./chunks/bundle-D0ePEYoI.js');
require('./chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DPOXwvBX.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BCNmULWo.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
