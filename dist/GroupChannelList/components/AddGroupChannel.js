import React__default, { useState } from 'react';
import { A as AddGroupChannelView } from '../../chunks/bundle-Dngqq5qI.js';
import { useGroupChannelListContext } from '../context.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-qHiLgYYm.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../CreateChannel/components/SelectChannelType.js';
import '../../chunks/bundle-B5S1bYog.js';

var AddGroupChannel = function () {
    var _a = useState(false), createChannelVisible = _a[0], setCreateChannelVisible = _a[1];
    var _b = useGroupChannelListContext(), onChannelCreated = _b.onChannelCreated, onBeforeCreateChannel = _b.onBeforeCreateChannel, onCreateChannelClick = _b.onCreateChannelClick;
    return (React__default.createElement(AddGroupChannelView, { createChannelVisible: createChannelVisible, onChangeCreateChannelVisible: setCreateChannelVisible, onCreateChannelClick: onCreateChannelClick, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelCreated }));
};

export { AddGroupChannel, AddGroupChannel as default };
//# sourceMappingURL=AddGroupChannel.js.map