'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ChannelList_context = require('../../chunks/bundle-B17JC9rv.js');
var ui_MessageStatus = require('../../chunks/bundle-CXIbPam9.js');
var GroupChannelListItemView = require('../../chunks/bundle-CJws8hP3.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-CiDSKL46.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-CG5E97k8.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');

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
