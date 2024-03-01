'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChannelList_context = require('../../chunks/bundle-lggWQMID.js');
var AddGroupChannelView = require('../../chunks/bundle-c6R1tdbY.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-COwOuaYd.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-BUH06mHS.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');

var AddChannel = function () {
    var _a = React.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = ChannelList_context.useChannelListContext(), overrideInviteUser = _b.overrideInviteUser, onBeforeCreateChannel = _b.onBeforeCreateChannel, onChannelSelect = _b.onChannelSelect;
    return (React.createElement(AddGroupChannelView.AddGroupChannelView, { createChannelVisible: showModal, onChangeCreateChannelVisible: setShowModal, onCreateChannelClick: overrideInviteUser, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelSelect }));
};

exports.AddChannel = AddChannel;
exports.default = AddChannel;
//# sourceMappingURL=AddChannel.js.map
