'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-DKL8dMjq.js');
var ChannelList_context = require('../../chunks/bundle-DVA2mw6Z.js');
var ui_MessageStatus = require('../../chunks/bundle-CjsR5IvJ.js');
var GroupChannelListItemView = require('../../chunks/bundle-DtTNq0OT.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BO5OZWjS.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-BjldQ7ts.js');
require('../../chunks/bundle-DgAALupQ.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-C6gATKTE.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BFHEqzl9.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Bmt-jCO8.js');
require('../../chunks/bundle-C_eHyq_M.js');
require('../../chunks/bundle-3dhw8iOw.js');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Cd7XOuNj.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../chunks/bundle-DuKfsNCh.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-CIs7k40W.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../chunks/bundle-BOaew5JK.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Ev5kAkGi.js');

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
