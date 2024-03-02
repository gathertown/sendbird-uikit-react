'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-DmcDnXPo.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-JS-CtPko.js');
require('./chunks/bundle-DHh3VdoS.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BvJOj_Nb.js');
require('./chunks/bundle-Xx0kBn7q.js');
require('./ui/Icon.js');
require('./chunks/bundle-24sG-BP_.js');
require('./chunks/bundle-DoHigaWY.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-BD2bIoH6.js');
require('./chunks/bundle-C8yEdUBb.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-CG5E97k8.js');
require('./chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DGx3xKBn.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DDY1xx_n.js');
require('./chunks/bundle-BPGreBtw.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-e1P14sMX.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DTKihS4S.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-CYjw4691.js');

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
