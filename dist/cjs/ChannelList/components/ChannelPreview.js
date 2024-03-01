'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ChannelList_context = require('../../chunks/bundle-lggWQMID.js');
var ui_MessageStatus = require('../../chunks/bundle-BQHlCNa7.js');
var GroupChannelListItemView = require('../../chunks/bundle-BByabw2E.js');
require('../../withSendbird.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-1yGs9Nzf.js');
require('../../chunks/bundle-CoFmIxJK.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BQNX69rh.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');

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
