'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-3M8632cU.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-Bh7J_SsW.js');
require('./chunks/bundle-2PlwnSzC.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DMrzJD8i.js');
require('./chunks/bundle-DgzUMNGp.js');
require('./ui/Icon.js');
require('./chunks/bundle-BUH06mHS.js');
require('./chunks/bundle-BlYafk3l.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-D2Bg8CLY.js');
require('./chunks/bundle-DzJC_TK7.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-BPS3DFTX.js');
require('./chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-Gh-C2yIM.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BPDG2Sth.js');
require('./chunks/bundle-tCz2WwyT.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-DLvdMF5T.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Cxw_pnFf.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-BeszEZzp.js');

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React.createElement(OpenChannelList_context.OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React.createElement(OpenChannelList_components_OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

module.exports = OpenChannelList;
//# sourceMappingURL=OpenChannelList.js.map
