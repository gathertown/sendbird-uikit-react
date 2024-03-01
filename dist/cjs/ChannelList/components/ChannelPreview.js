'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-BplSuW2v.js');
var ChannelList_context = require('../../chunks/bundle-CANUAzU4.js');
var ui_MessageStatus = require('../../chunks/bundle-KsO_OPhB.js');
var GroupChannelListItemView = require('../../chunks/bundle-BA1ixoTV.js');
require('../../withSendbird.js');
require('../../chunks/bundle-B67weJWw.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-c87q7xEA.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DE6wTTAM.js');
require('../../chunks/bundle-D_DzQR1j.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Cfv9PJWJ.js');
require('../../chunks/bundle-BHQe7HpU.js');
require('../../chunks/bundle-ZbsP2hNa.js');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../chunks/bundle-DDTTknuH.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-Bddon8U5.js');
require('../../chunks/bundle-D0ePEYoI.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-BCNmULWo.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DDJZEPWj.js');

var ChannelPreview = function (_a) {
    var _b, _c, _d, _e;
    var channel = _a.channel, _f = _a.isActive, isActive = _f === void 0 ? false : _f, _g = _a.isSelected, isSelected = _g === void 0 ? false : _g, _h = _a.isTyping, isTyping = _h === void 0 ? false : _h, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _j = ChannelList_context.useChannelListContext(), _k = _j.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _k === void 0 ? false : _k, _l = _j.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _l === void 0 ? false : _l;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (((_b = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _b === void 0 ? void 0 : _b.messageType) === 'user' || ((_c = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageType) === 'file')
        && ((_e = (_d = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _d === void 0 ? void 0 : _d.sender) === null || _e === void 0 ? void 0 : _e.userId) === userId;
    return (React.createElement(GroupChannelListItemView.GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected !== null && isSelected !== void 0 ? isSelected : isActive, channelName: ui_MessageStatus.getChannelTitle(channel, userId, stringSet), isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

module.exports = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map
