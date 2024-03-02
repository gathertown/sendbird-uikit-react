import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-C1n_Gt3Q.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-CvlHmT5j.js';
import './chunks/bundle-D8IuvsaW.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-0yILBaSQ.js';
import './chunks/bundle-ttSanjmp.js';
import './ui/Icon.js';
import './chunks/bundle-BNNafMXS.js';
import './chunks/bundle-C9nxq4KD.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-CRmP70eG.js';
import './chunks/bundle-k7V2rNcW.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-BfCFd-dO.js';
import './chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-BBhSg6C_.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-Cf2xHdC2.js';

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
