import React__default from 'react';
import { g as getChannelTitle } from '../../chunks/bundle-B9Guj1rz.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-CRmP70eG.js';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-Cbh-C1NV.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../withSendbird.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BOf_eEF-.js';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-DD5Dgrc3.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-BfCFd-dO.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';

var GroupChannelListItem = function (_a) {
    var _b, _c, _d;
    var channel = _a.channel, isSelected = _a.isSelected, isTyping = _a.isTyping, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext().config;
    var stringSet = useLocalization().stringSet;
    var _e = useGroupChannelListContext(), _f = _e.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _f === void 0 ? false : _f, _g = _e.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _g === void 0 ? false : _g;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (!((_b = channel.lastMessage) === null || _b === void 0 ? void 0 : _b.isAdminMessage()))
        && ((_d = (_c = channel.lastMessage) === null || _c === void 0 ? void 0 : _c.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId;
    return (React__default.createElement(GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, channelName: getChannelTitle(channel, userId, stringSet), isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected, isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

export { GroupChannelListItem };
//# sourceMappingURL=GroupChannelListItem.js.map
