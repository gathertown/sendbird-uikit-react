import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-VRwQbdO6.js';
import './chunks/bundle-fFCkIdkP.js';
import './chunks/bundle-BIDYJkIe.js';
import './chunks/bundle-D7hWtRqW.js';
import './chunks/bundle-BpxXmFQC.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-DIC0UBC5.js';
import './chunks/bundle-DjvfRFVm.js';
import './ui/Icon.js';
import './chunks/bundle-ZpyLpKbV.js';
import './ui/Button.js';
import './chunks/bundle-OZ70K6ig.js';
import './chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-NTpQiCzz.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DOX5a7sk.js';
import './chunks/bundle-GlkAQINh.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-CmoRaDho.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-jY1v8xbA.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
