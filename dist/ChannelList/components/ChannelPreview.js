import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-VRwQbdO6.js';
import { u as useChannelListContext } from '../../chunks/bundle-BWmeGOAy.js';
import { g as getChannelTitle } from '../../chunks/bundle-D8nOQMZK.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-j8r_Qf5o.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CgMvdzKN.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-DccoJxVN.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-OZ70K6ig.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';

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
