import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-BwcI3bWM.js';
import './chunks/bundle-DqWrl4d1.js';
import './chunks/bundle-Dyt8DaMp.js';
import './chunks/bundle-BAao5L-j.js';
import './chunks/bundle-s7uQ7zAa.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-BJmqupdN.js';
import './chunks/bundle-BIF2bCQz.js';
import './ui/Icon.js';
import './chunks/bundle-BOy_tVjz.js';
import './ui/Button.js';
import './chunks/bundle-Zq-75Hl4.js';
import './chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-Bs8Nuk02.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-Caf8F3YR.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CuXnBg6p.js';
import './chunks/bundle-BUsOkeT7.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BytW9Azl.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-DZZlGxSQ.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
