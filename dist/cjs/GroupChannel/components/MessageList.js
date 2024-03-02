'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-CiDSKL46.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Icon = require('../../ui/Icon.js');
var GroupChannel_components_Message = require('./Message.js');
var Channel_utils_getMessagePartsInfo = require('../../Channel/utils/getMessagePartsInfo.js');
var GroupChannel_components_UnreadCount = require('./UnreadCount.js');
var GroupChannel_components_FrozenNotification = require('./FrozenNotification.js');
var consts = require('../../chunks/bundle-BPGreBtw.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Message_context = require('../../Message/context.js');
var ui_TypingIndicatorBubble = require('../../ui/TypingIndicatorBubble.js');
var GroupChannel_context = require('../context.js');
var utils$1 = require('../../chunks/bundle-Cu63GBZj.js');
var utils = require('../../chunks/bundle-BvJOj_Nb.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-C-gcz8bw.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-CXIbPam9.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-e1P14sMX.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-22C_FmJz.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-C7KrtZZP.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CqdGdIiY.js');
require('../../ui/ThreadReplies.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-B4c5-CEo.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CUWAopRQ.js');
require('../../chunks/bundle-DQKTGusP.js');
require('../../chunks/bundle-DoLTlc_l.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-EyWIzGTz.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-IrSx78Gk.js');
require('./FileViewer.js');
require('../../chunks/bundle-BZLPZVcJ.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-D2-x0BmY.js');
require('../../chunks/bundle-DWcNmk2G.js');
require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-etwgXqw-.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-CQ6ec9FA.js');

var MessageList = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = props.className, className = _f === void 0 ? '' : _f;
    var _g = utils.deleteNullish(props), _h = _g.renderMessage, renderMessage = _h === void 0 ? function (props) { return React.createElement(GroupChannel_components_Message.Message, _tslib.__assign({}, props)); } : _h, renderMessageContent = _g.renderMessageContent, renderSuggestedReplies = _g.renderSuggestedReplies, renderCustomSeparator = _g.renderCustomSeparator, _j = _g.renderPlaceholderLoader, renderPlaceholderLoader = _j === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }); } : _j, _k = _g.renderPlaceholderEmpty, renderPlaceholderEmpty = _k === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { className: "sendbird-conversation__no-messages", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES }); } : _k, _l = _g.renderFrozenNotification, renderFrozenNotification = _l === void 0 ? function () { return React.createElement(GroupChannel_components_FrozenNotification.FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _l;
    var _m = GroupChannel_context.useGroupChannelContext(), channelUrl = _m.channelUrl, hasNext = _m.hasNext, loading = _m.loading, messages = _m.messages, newMessages = _m.newMessages, scrollToBottom = _m.scrollToBottom, isScrollBottomReached = _m.isScrollBottomReached, isMessageGroupingEnabled = _m.isMessageGroupingEnabled, scrollRef = _m.scrollRef, scrollDistanceFromBottomRef = _m.scrollDistanceFromBottomRef, currentChannel = _m.currentChannel, replyType = _m.replyType, scrollPubSub = _m.scrollPubSub;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var _o = React.useState(), unreadSinceDate = _o[0], setUnreadSinceDate = _o[1];
    React.useEffect(function () {
        if (isScrollBottomReached) {
            setUnreadSinceDate(undefined);
        }
        else {
            setUnreadSinceDate(new Date());
        }
    }, [isScrollBottomReached]);
    /**
     * 1. Move the message list scroll
     *    when each message's height is changed by `reactions` OR `showEdit`
     * 2. Keep the scrollBottom value after fetching new message list
     */
    var onMessageContentSizeChanged = function (isBottomMessageAffected) {
        if (isBottomMessageAffected === void 0) { isBottomMessageAffected = false; }
        var elem = scrollRef.current;
        if (elem) {
            var latestDistance = scrollDistanceFromBottomRef.current;
            var currentDistance = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
            if (latestDistance < currentDistance && (!isBottomMessageAffected || latestDistance < consts.SCROLL_BUFFER)) {
                var diff = currentDistance - latestDistance;
                // Move the scroll as much as the height of the message has changed
                scrollPubSub.publish('scroll', { top: elem.scrollTop + diff, lazy: false, animated: false });
            }
        }
    };
    var renderer = {
        frozenNotification: function () {
            if (!currentChannel || !currentChannel.isFrozen)
                return null;
            return renderFrozenNotification();
        },
        unreadMessagesNotification: function () {
            if (isScrollBottomReached || !unreadSinceDate)
                return null;
            return (React.createElement(GroupChannel_components_UnreadCount.UnreadCount, { className: "sendbird-conversation__messages__notification", count: newMessages.length, lastReadAt: unreadSinceDate, onClick: function () { return scrollToBottom(); } }));
        },
        scrollToBottomButton: function () {
            if (!hasNext() && isScrollBottomReached)
                return null;
            return (React.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: function () { return scrollToBottom(); }, onKeyDown: function () { return scrollToBottom(); }, tabIndex: 0, role: "button" },
                React.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.PRIMARY })));
        },
    };
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (messages.length === 0) {
        return renderPlaceholderEmpty();
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "sendbird-conversation__messages ".concat(className) },
            React.createElement("div", { className: "sendbird-conversation__scroll-container" },
                React.createElement("div", { className: "sendbird-conversation__padding" }),
                React.createElement("div", { ref: scrollRef, className: "sendbird-conversation__messages-padding" },
                    messages.map(function (message, idx) {
                        var _a = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                            allMessages: messages,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: message,
                            currentChannel: currentChannel,
                        }), chainTop = _a.chainTop, chainBottom = _a.chainBottom, hasSeparator = _a.hasSeparator;
                        var isOutgoingMessage = index.isSendableMessage(message) && message.sender.userId === store.config.userId;
                        return (React.createElement(Message_context.MessageProvider, { message: message, key: utils$1.getComponentKeyFromMessage(message), isByMe: isOutgoingMessage }, renderMessage({
                            handleScroll: onMessageContentSizeChanged,
                            message: message,
                            hasSeparator: hasSeparator,
                            chainTop: chainTop,
                            chainBottom: chainBottom,
                            renderMessageContent: renderMessageContent,
                            renderSuggestedReplies: renderSuggestedReplies,
                            renderCustomSeparator: renderCustomSeparator,
                        })));
                    }),
                    !hasNext()
                        && ((_b = (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.groupChannel) === null || _b === void 0 ? void 0 : _b.enableTypingIndicator)
                        && ((_e = (_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.typingIndicatorTypes) === null || _e === void 0 ? void 0 : _e.has(index.TypingIndicatorType.Bubble)) && (React.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged })))),
            React.createElement(React.Fragment, null, renderer.frozenNotification()),
            React.createElement(React.Fragment, null, renderer.unreadMessagesNotification()),
            React.createElement(React.Fragment, null, renderer.scrollToBottomButton()))));
};
var TypingIndicatorBubbleWrapper = function (props) {
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var _a = React.useState([]), typingMembers = _a[0], setTypingMembers = _a[1];
    uikitTools.useGroupChannelHandler(stores.sdkStore.sdk, {
        onTypingStatusUpdated: function (channel) {
            if (channel.url === props.channelUrl) {
                setTypingMembers(channel.getTypingUsers());
            }
        },
    });
    return React.createElement(ui_TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: props.handleScroll });
};

exports.MessageList = MessageList;
exports.default = MessageList;
//# sourceMappingURL=MessageList.js.map
