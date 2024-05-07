'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-D7yiox2A.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./chunks/bundle-BO5OZWjS.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DgAALupQ.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./ui/Icon.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-DKL8dMjq.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-CBfBMqDz.js');
require('./chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('react-dom');
require('./chunks/bundle-BFgXaSuR.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-3bmKYTJ_.js');
require('./chunks/bundle-DI6hrkhw.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BOaew5JK.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-z9miKj3U.js');

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
