import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-CRmP70eG.js';
import './chunks/bundle-C9nxq4KD.js';
import './chunks/bundle-k7V2rNcW.js';
import './chunks/bundle-CvlHmT5j.js';
import './chunks/bundle-D8IuvsaW.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-0yILBaSQ.js';
import './chunks/bundle-ttSanjmp.js';
import './ui/Icon.js';
import './chunks/bundle-BNNafMXS.js';
import './ui/Button.js';
import './chunks/bundle-BfCFd-dO.js';
import './chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-BBhSg6C_.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CwSlabaO.js';
import './chunks/bundle-w0s865vS.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-CNHxvPPg.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-nY4hBePV.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
