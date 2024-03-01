import React__default from 'react';
import { g as getChannelTitle } from '../../chunks/bundle-CL5Sk05l.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-BW5JWhMG.js';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-DQVA3jbR.js';
import '../../chunks/bundle-5LMP4qQC.js';
import '../../chunks/bundle-C-kkBK84.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-DvIsR7kQ.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CCNsWru5.js';
import '../../chunks/bundle-Ci84mwTW.js';
import '../../withSendbird.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-CH9dmUwe.js';
import '@sendbird/chat';
import '../../chunks/bundle-BJD56sGG.js';
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
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-BpHmAKa2.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CfII9A10.js';

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
