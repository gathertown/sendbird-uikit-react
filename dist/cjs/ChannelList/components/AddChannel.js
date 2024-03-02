'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChannelList_context = require('../../chunks/bundle-B17JC9rv.js');
var AddGroupChannelView = require('../../chunks/bundle-DERf-mCH.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CiDSKL46.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-DfJDiLF1.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../chunks/bundle-CG5E97k8.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
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
