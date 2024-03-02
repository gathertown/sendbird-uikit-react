'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-BD2bIoH6.js');
require('./chunks/bundle-DoHigaWY.js');
require('./chunks/bundle-C8yEdUBb.js');
require('./chunks/bundle-JS-CtPko.js');
require('./chunks/bundle-DHh3VdoS.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BvJOj_Nb.js');
require('./chunks/bundle-Xx0kBn7q.js');
require('./ui/Icon.js');
require('./chunks/bundle-24sG-BP_.js');
require('./ui/Button.js');
require('./chunks/bundle-CG5E97k8.js');
require('./chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DGx3xKBn.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DDY1xx_n.js');
require('./chunks/bundle-BPGreBtw.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-e1P14sMX.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DTKihS4S.js');

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
