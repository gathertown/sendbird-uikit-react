import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-BwcI3bWM.js';
import { u as useChannelListContext } from '../../chunks/bundle-CcGs5-Zm.js';
import { g as getChannelTitle } from '../../chunks/bundle-DsHrFpwT.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-BxJvdT02.js';
import '../../withSendbird.js';
import '../../chunks/bundle-s7uQ7zAa.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-CIiROwS_.js';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-D-z4U1wX.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-D8n4s-pk.js';
import '../../chunks/bundle-Dac-NyF8.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-B482kNJl.js';
import '../../chunks/bundle-DuWC7Y9x.js';
import '../../chunks/bundle-DqwaElIt.js';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-BAao5L-j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../chunks/bundle-ByXswkoP.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-CLXgPaQv.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../chunks/bundle-BytW9Azl.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DZZlGxSQ.js';

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
