'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-Bjc68jZm.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-BNKSF9CJ.js');
require('./chunks/bundle-DvNeoTBz.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DQfemABy.js');
require('./chunks/bundle-8jy5Sc-N.js');
require('./ui/Icon.js');
require('./chunks/bundle-CkvaXo1D.js');
require('./chunks/bundle-BruYC2Km.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-BeJ7-X59.js');
require('./chunks/bundle-DUeKijBO.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-CjFSIiUv.js');
require('./chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BppUjcCZ.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BelgkMC5.js');
require('./chunks/bundle-DHTHQj02.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-D0W7zrvh.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-C79vYLB2.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-B6bAeEPF.js');

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
