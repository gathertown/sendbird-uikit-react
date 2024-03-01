import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-CXR10hCV.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-D7hWtRqW.js';
import './chunks/bundle-BpxXmFQC.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-DIC0UBC5.js';
import './chunks/bundle-DjvfRFVm.js';
import './ui/Icon.js';
import './chunks/bundle-ZpyLpKbV.js';
import './chunks/bundle-fFCkIdkP.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-VRwQbdO6.js';
import './chunks/bundle-BIDYJkIe.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-OZ70K6ig.js';
import './chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-NTpQiCzz.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-oBEHM7Oi.js';

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React__default.createElement(OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React__default.createElement(OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

export { OpenChannelList as default };
//# sourceMappingURL=OpenChannelList.js.map
