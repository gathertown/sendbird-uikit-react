'use strict';

var React = require('react');
var ui_MessageStatus = require('../../chunks/bundle-CXIbPam9.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var GroupChannelList_context = require('../context.js');
var GroupChannelListItemView = require('../../chunks/bundle-CJws8hP3.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../withSendbird.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-C23eSC6c.js');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
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
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');

var GroupChannelListItem = function (_a) {
    var _b, _c, _d;
    var channel = _a.channel, isSelected = _a.isSelected, isTyping = _a.isTyping, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _e = GroupChannelList_context.useGroupChannelListContext(), _f = _e.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _f === void 0 ? false : _f, _g = _e.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _g === void 0 ? false : _g;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (!((_b = channel.lastMessage) === null || _b === void 0 ? void 0 : _b.isAdminMessage()))
        && ((_d = (_c = channel.lastMessage) === null || _c === void 0 ? void 0 : _c.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId;
    return (React.createElement(GroupChannelListItemView.GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, channelName: ui_MessageStatus.getChannelTitle(channel, userId, stringSet), isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected, isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

exports.GroupChannelListItem = GroupChannelListItem;
//# sourceMappingURL=GroupChannelListItem.js.map
