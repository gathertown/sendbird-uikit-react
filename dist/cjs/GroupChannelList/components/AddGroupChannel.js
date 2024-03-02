'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AddGroupChannelView = require('../../chunks/bundle-DERf-mCH.js');
var GroupChannelList_context = require('../context.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-DfJDiLF1.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');
require('../../chunks/bundle-C23eSC6c.js');

var AddGroupChannel = function () {
    var _a = React.useState(false), createChannelVisible = _a[0], setCreateChannelVisible = _a[1];
    var _b = GroupChannelList_context.useGroupChannelListContext(), onChannelCreated = _b.onChannelCreated, onBeforeCreateChannel = _b.onBeforeCreateChannel, onCreateChannelClick = _b.onCreateChannelClick;
    return (React.createElement(AddGroupChannelView.AddGroupChannelView, { createChannelVisible: createChannelVisible, onChangeCreateChannelVisible: setCreateChannelVisible, onCreateChannelClick: onCreateChannelClick, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelCreated }));
};

exports.AddGroupChannel = AddGroupChannel;
exports.default = AddGroupChannel;
//# sourceMappingURL=AddGroupChannel.js.map
