'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-IpWyCHcZ.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./chunks/bundle-B67weJWw.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-CrJkvCS4.js');
require('./chunks/bundle-CR__rOP0.js');
require('./ui/Icon.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-D0ePEYoI.js');
require('./chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-DPOXwvBX.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BCNmULWo.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-BSU5Fq75.js');

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
