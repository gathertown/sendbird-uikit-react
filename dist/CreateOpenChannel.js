import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-BW5JWhMG.js';
import './chunks/bundle-BeAHyfuE.js';
import './chunks/bundle-DyVsaRLS.js';
import './chunks/bundle-DCv5_AWJ.js';
import './chunks/bundle-5LMP4qQC.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-QtD1UM1r.js';
import './chunks/bundle-Dzc4np9L.js';
import './ui/Icon.js';
import './chunks/bundle-DvIsR7kQ.js';
import './ui/Button.js';
import './chunks/bundle-xaiK2tjx.js';
import './chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-U_2B1aWq.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-BJD56sGG.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DtWPTHU4.js';
import './chunks/bundle-CzOn0UCC.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BpHmAKa2.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-CfII9A10.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
