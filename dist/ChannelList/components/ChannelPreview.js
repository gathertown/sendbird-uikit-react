import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-CRmP70eG.js';
import { u as useChannelListContext } from '../../chunks/bundle-J-DQ0mNG.js';
import { g as getChannelTitle } from '../../chunks/bundle-B9Guj1rz.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-Cbh-C1NV.js';
import '../../withSendbird.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BnYBX14T.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Cd6XSYjN.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
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
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';

var ChannelPreview = function (_a) {
    var _b, _c, _d, _e;
    var channel = _a.channel, _f = _a.isActive, isActive = _f === void 0 ? false : _f, _g = _a.isSelected, isSelected = _g === void 0 ? false : _g, _h = _a.isTyping, isTyping = _h === void 0 ? false : _h, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext().config;
    var stringSet = useLocalization().stringSet;
    var _j = useChannelListContext(), _k = _j.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _k === void 0 ? false : _k, _l = _j.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _l === void 0 ? false : _l;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (((_b = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _b === void 0 ? void 0 : _b.messageType) === 'user' || ((_c = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageType) === 'file')
        && ((_e = (_d = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _d === void 0 ? void 0 : _d.sender) === null || _e === void 0 ? void 0 : _e.userId) === userId;
    return (React__default.createElement(GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected !== null && isSelected !== void 0 ? isSelected : isActive, channelName: getChannelTitle(channel, userId, stringSet), isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

export { ChannelPreview as default };
//# sourceMappingURL=ChannelPreview.js.map
