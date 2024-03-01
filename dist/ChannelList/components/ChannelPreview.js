import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-BW5JWhMG.js';
import { u as useChannelListContext } from '../../chunks/bundle-BfP0Rweo.js';
import { g as getChannelTitle } from '../../chunks/bundle-CL5Sk05l.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-DQVA3jbR.js';
import '../../withSendbird.js';
import '../../chunks/bundle-5LMP4qQC.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-c0D1F768.js';
import '../../chunks/bundle-BJD56sGG.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-7Av17Vus.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dl28BsqX.js';
import '../../chunks/bundle-C-kkBK84.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DvIsR7kQ.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CCNsWru5.js';
import '../../chunks/bundle-Ci84mwTW.js';
import '../../chunks/bundle-DbPsZWNm.js';
import '../../chunks/bundle-U_2B1aWq.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../chunks/bundle-BfWElK7u.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-BrbMpwH_.js';
import '../../chunks/bundle-xaiK2tjx.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-BpHmAKa2.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CfII9A10.js';

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
