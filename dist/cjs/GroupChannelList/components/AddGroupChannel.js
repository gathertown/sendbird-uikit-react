'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AddGroupChannelView = require('../../chunks/bundle-c6R1tdbY.js');
var GroupChannelList_context = require('../context.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-COwOuaYd.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-BUH06mHS.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');
require('../../chunks/bundle-B6Pztj9E.js');

var AddGroupChannel = function () {
    var _a = React.useState(false), createChannelVisible = _a[0], setCreateChannelVisible = _a[1];
    var _b = GroupChannelList_context.useGroupChannelListContext(), onChannelCreated = _b.onChannelCreated, onBeforeCreateChannel = _b.onBeforeCreateChannel, onCreateChannelClick = _b.onCreateChannelClick;
    return (React.createElement(AddGroupChannelView.AddGroupChannelView, { createChannelVisible: createChannelVisible, onChangeCreateChannelVisible: setCreateChannelVisible, onCreateChannelClick: onCreateChannelClick, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelCreated }));
};

exports.AddGroupChannel = AddGroupChannel;
exports.default = AddGroupChannel;
//# sourceMappingURL=AddGroupChannel.js.map
