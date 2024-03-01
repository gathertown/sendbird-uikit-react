import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-BBVJixDe.js';
import './chunks/bundle-Bh_HZf7x.js';
import './chunks/bundle-DTkxB28y.js';
import './chunks/bundle-BJEESw7S.js';
import './chunks/bundle-h5nSe8RU.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-CbUL9vb-.js';
import './chunks/bundle-RDd4rAzg.js';
import './ui/Icon.js';
import './chunks/bundle-DBtyGp-i.js';
import './ui/Button.js';
import './chunks/bundle-BpF0Qo8A.js';
import './chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-BfXjuJZP.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-1rHkiOvv.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-Blox0Tl9.js';
import './chunks/bundle-DuvSpEUl.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BsPw6HPN.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-CeRxCnOB.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
