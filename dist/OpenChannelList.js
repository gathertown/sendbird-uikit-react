import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-DEB7Jzy8.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-BJEESw7S.js';
import './chunks/bundle-h5nSe8RU.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-CbUL9vb-.js';
import './chunks/bundle-RDd4rAzg.js';
import './ui/Icon.js';
import './chunks/bundle-DBtyGp-i.js';
import './chunks/bundle-Bh_HZf7x.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-BBVJixDe.js';
import './chunks/bundle-DTkxB28y.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-BpF0Qo8A.js';
import './chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-BfXjuJZP.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-ixYJ-kgW.js';

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
