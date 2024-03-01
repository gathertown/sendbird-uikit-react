import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-BBVJixDe.js';
import { u as useChannelListContext } from '../../chunks/bundle-DdS0qDV5.js';
import { g as getChannelTitle } from '../../chunks/bundle-_orI-r2C.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-BKd2irNF.js';
import '../../withSendbird.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DZuFrRTP.js';
import '../../chunks/bundle-g-7qyWG4.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CLbk4-g8.js';
import '../../chunks/bundle-BlILx8DA.js';
import '../../chunks/bundle-TmVTNucb.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-BdvKKcJL.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';

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
