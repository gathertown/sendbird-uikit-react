'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChannelList_context = require('../../chunks/bundle-v0gKSqos.js');
var AddGroupChannelView = require('../../chunks/bundle-CfXX8ZVQ.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-D-432Irw.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CCANegmB.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-DmaXk3No.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-BeJ7-X59.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BelgkMC5.js');
require('../../chunks/bundle-D0W7zrvh.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-8jy5Sc-N.js');
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
