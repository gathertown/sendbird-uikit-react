import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-DAnsIwC-.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-BAao5L-j.js';
import './chunks/bundle-s7uQ7zAa.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-BJmqupdN.js';
import './chunks/bundle-BIF2bCQz.js';
import './ui/Icon.js';
import './chunks/bundle-BOy_tVjz.js';
import './chunks/bundle-DqWrl4d1.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-BwcI3bWM.js';
import './chunks/bundle-Dyt8DaMp.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-Zq-75Hl4.js';
import './chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import 'react-dom';
import './chunks/bundle-Bs8Nuk02.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-CIiROwS_.js';

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
