import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-_UHkrxfS.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-DCv5_AWJ.js';
import './chunks/bundle-5LMP4qQC.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-QtD1UM1r.js';
import './chunks/bundle-Dzc4np9L.js';
import './ui/Icon.js';
import './chunks/bundle-DvIsR7kQ.js';
import './chunks/bundle-BeAHyfuE.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-BW5JWhMG.js';
import './chunks/bundle-DyVsaRLS.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-xaiK2tjx.js';
import './chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-U_2B1aWq.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-c0D1F768.js';

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
