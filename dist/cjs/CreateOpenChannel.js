'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-D2Bg8CLY.js');
require('./chunks/bundle-BlYafk3l.js');
require('./chunks/bundle-DzJC_TK7.js');
require('./chunks/bundle-Bh7J_SsW.js');
require('./chunks/bundle-2PlwnSzC.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DMrzJD8i.js');
require('./chunks/bundle-DgzUMNGp.js');
require('./ui/Icon.js');
require('./chunks/bundle-BUH06mHS.js');
require('./ui/Button.js');
require('./chunks/bundle-BPS3DFTX.js');
require('./chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-Gh-C2yIM.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BPDG2Sth.js');
require('./chunks/bundle-tCz2WwyT.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-DLvdMF5T.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Cxw_pnFf.js');

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
