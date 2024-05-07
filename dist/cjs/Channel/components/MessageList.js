'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Channel_context = require('../context.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Icon = require('../../ui/Icon.js');
var Channel_components_Message = require('./Message.js');
var index$2 = require('../../chunks/bundle-C6gATKTE.js');
var utils$1 = require('../../chunks/bundle-BECkGjrR.js');
var GroupChannel_components_UnreadCount = require('../../GroupChannel/components/UnreadCount.js');
var GroupChannel_components_FrozenNotification = require('../../GroupChannel/components/FrozenNotification.js');
var consts = require('../../chunks/bundle-DI6hrkhw.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Message_context = require('../../Message/context.js');
var index = require('../../chunks/bundle-8lqm9Xfv.js');
var useThrottleCallback = require('../../chunks/bundle-CZJazoZ7.js');
var ui_TypingIndicatorBubble = require('../../ui/TypingIndicatorBubble.js');
var index$1 = require('../../chunks/bundle--oP96AvO.js');
var Channel_utils_getMessagePartsInfo = require('../utils/getMessagePartsInfo.js');
var utils = require('../../chunks/bundle-DgAALupQ.js');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-bdifjM-k.js');
require('../../chunks/bundle-D0o2OzcU.js');
require('../../chunks/bundle-BO5OZWjS.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DYYV3xLB.js');
require('../../chunks/bundle-BcdtZarK.js');
require('../../chunks/bundle-DnTkOAfH.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-BjldQ7ts.js');
require('../../chunks/bundle-BFHEqzl9.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-0AYxVXD-.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DKL8dMjq.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BhnK-otQ.js');
require('../../chunks/bundle-D0q1P-FU.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-Ev5kAkGi.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-BwKmyBpq.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-9HKIAf5f.js');
require('dompurify');
require('../../chunks/bundle-CIs7k40W.js');
require('../../chunks/bundle-CN0Ev9mV.js');
require('../../chunks/bundle-BxYGiW8y.js');
require('../../chunks/bundle-BZ6Z0MYZ.js');
require('../../withSendbird.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-CjsR5IvJ.js');
require('../../chunks/bundle-Bmt-jCO8.js');
require('../../chunks/bundle-C_eHyq_M.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-BOaew5JK.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-8sH2G7Ap.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-3dhw8iOw.js');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Cd7XOuNj.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-BGyfIsKK.js');
require('../../chunks/bundle-KUfIzdnQ.js');
require('../../ui/ThreadReplies.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-3cmB6Ad_.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-BPjQVFvN.js');
require('../../chunks/bundle-Bexsprs_.js');
require('../../chunks/bundle-DegkGksZ.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-C0xd22xx.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../utils/compareMessagesForGrouping.js');
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-CSU8NDw4.js');
require('./FileViewer.js');
require('../../chunks/bundle-Cn1JJiPG.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-XgOiPyHW.js');
require('../../chunks/bundle-BmCw9st3.js');

var DELAY = 100;
function useSetScrollToBottom(_a) {
    var loading = _a.loading;
    var _b = React.useState(0), scrollBottom = _b[0], setScrollBottom = _b[1];
    React.useEffect(function () {
        if (loading) {
            setScrollBottom(0);
        }
    }, [loading]);
    var scrollCb = function (e) {
        var element = e.target;
        try {
            setScrollBottom(element.scrollHeight - element.scrollTop - element.offsetHeight);
        }
        catch (_a) {
            //
        }
    };
    return {
        scrollBottom: scrollBottom,
        scrollToBottomHandler: useThrottleCallback.useThrottleCallback(scrollCb, DELAY, { trailing: true }),
    };
}

function useScrollBehavior() {
    var _a = Channel_context.useChannelContext(), scrollRef = _a.scrollRef, _b = _a.scrollBehavior, scrollBehavior = _b === void 0 ? 'auto' : _b;
    React.useEffect(function () {
        if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = scrollBehavior;
        }
    }, [scrollRef.current]);
    return null;
}

/* We operate the CSS files for Channel&GroupChannel modules in the GroupChannel */
var SCROLL_BOTTOM_PADDING = 50;
var MessageList = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var _g = props.className, className = _g === void 0 ? '' : _g;
    var _h = utils.deleteNullish(props), renderMessage = _h.renderMessage, renderMessageContent = _h.renderMessageContent, renderSuggestedReplies = _h.renderSuggestedReplies, renderCustomSeparator = _h.renderCustomSeparator, renderRemoveMessageModal = _h.renderRemoveMessageModal, renderScrollToBottomOrUnread = _h.renderScrollToBottomOrUnread, renderEditInput = _h.renderEditInput, _j = _h.renderPlaceholderLoader, renderPlaceholderLoader = _j === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }); } : _j, _k = _h.renderPlaceholderEmpty, renderPlaceholderEmpty = _k === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { className: "sendbird-conversation__no-messages", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES }); } : _k, _l = _h.renderFrozenNotification, renderFrozenNotification = _l === void 0 ? function () { return React.createElement(GroupChannel_components_FrozenNotification.FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _l;
    var _m = Channel_context.useChannelContext(), allMessages = _m.allMessages, localMessages = _m.localMessages, hasMorePrev = _m.hasMorePrev, hasMoreNext = _m.hasMoreNext, setInitialTimeStamp = _m.setInitialTimeStamp, setAnimatedMessageId = _m.setAnimatedMessageId, setHighLightedMessageId = _m.setHighLightedMessageId, isMessageGroupingEnabled = _m.isMessageGroupingEnabled, scrollRef = _m.scrollRef, onScrollCallback = _m.onScrollCallback, onScrollDownCallback = _m.onScrollDownCallback, messagesDispatcher = _m.messagesDispatcher, messageActionTypes = _m.messageActionTypes, currentGroupChannel = _m.currentGroupChannel, disableMarkAsRead = _m.disableMarkAsRead, filterMessageList = _m.filterMessageList, replyType = _m.replyType, loading = _m.loading, isScrolled = _m.isScrolled, unreadSince = _m.unreadSince, unreadSinceDate = _m.unreadSinceDate, typingMembers = _m.typingMembers;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var allMessagesFiltered = typeof filterMessageList === 'function' ? allMessages.filter(filterMessageList) : allMessages;
    var markAsReadScheduler = store.config.markAsReadScheduler;
    var _o = React.useState(false), isScrollBottom = _o[0], setIsScrollBottom = _o[1];
    useScrollBehavior();
    /**
     * @param {function} callback callback from useHandleOnScrollCallback, it adjusts scroll position
     * */
    var onScroll = function (callback) {
        var element = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
        if (element == null) {
            return;
        }
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        if (hasMorePrev && utils$1.isAboutSame(scrollTop, 0, consts.SCROLL_BUFFER)) {
            onScrollCallback(callback);
        }
        if (hasMoreNext && utils$1.isAboutSame(clientHeight + scrollTop, scrollHeight, consts.SCROLL_BUFFER)) {
            onScrollDownCallback(callback);
        }
        if (!disableMarkAsRead && utils$1.isAboutSame(clientHeight + scrollTop, scrollHeight, consts.SCROLL_BUFFER) && !!currentGroupChannel) {
            messagesDispatcher({
                type: messageActionTypes.MARK_AS_READ,
                payload: { channel: currentGroupChannel },
            });
            markAsReadScheduler.push(currentGroupChannel);
        }
    };
    var onClickScrollBot = function () {
        var _a, _b, _c, _d, _e;
        setInitialTimeStamp === null || setInitialTimeStamp === void 0 ? void 0 : setInitialTimeStamp(null);
        setAnimatedMessageId === null || setAnimatedMessageId === void 0 ? void 0 : setAnimatedMessageId(null);
        setHighLightedMessageId === null || setHighLightedMessageId === void 0 ? void 0 : setHighLightedMessageId(null);
        if (((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) > -1) {
            scrollRef.current.scrollTop = ((_c = (_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) !== null && _c !== void 0 ? _c : 0) - ((_e = (_d = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _d === void 0 ? void 0 : _d.offsetHeight) !== null && _e !== void 0 ? _e : 0);
        }
    };
    /**
     * 1. Move the messsage list scroll
     *    when each message's height is changed by `reactions` OR `showEdit`
     * 2. Keep the scrollBottom value after fetching new message list
     */
    var moveScroll = function (isBottomMessageAffected) {
        if (isBottomMessageAffected === void 0) { isBottomMessageAffected = false; }
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
        if (current) {
            var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
            if (scrollBottom < bottom && (!isBottomMessageAffected || scrollBottom < consts.SCROLL_BUFFER)) {
                // Move the scroll as much as the height of the message has changed
                current.scrollTop += bottom - scrollBottom;
            }
        }
    };
    var handleOnScroll = index.useHandleOnScrollCallback({
        hasMore: hasMorePrev,
        hasNext: hasMoreNext,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var onScrollReachedEndDetector = index$1.useOnScrollPositionChangeDetector({
        onReachedBottom: function () {
            /**
             * Note that this event is already being called in onScroll() above. However, it is only being called when
             * hasMoreNext is true but it needs to be called when hasNext is false when reached bottom as well.
             */
            if (!hasMoreNext && !disableMarkAsRead && !!currentGroupChannel) {
                messagesDispatcher({
                    type: messageActionTypes.MARK_AS_READ,
                    payload: { channel: currentGroupChannel },
                });
                markAsReadScheduler.push(currentGroupChannel);
            }
            setIsScrollBottom(true);
        },
        onReachedTop: function () {
            setIsScrollBottom(false);
        },
        onInBetween: function () {
            setIsScrollBottom(false);
        },
    });
    var _p = useSetScrollToBottom({ loading: loading }), scrollToBottomHandler = _p.scrollToBottomHandler, scrollBottom = _p.scrollBottom;
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (allMessagesFiltered.length < 1) {
        return renderPlaceholderEmpty();
    }
    var handleUnreadCountClick = function () {
        if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        if (!disableMarkAsRead && !!currentGroupChannel) {
            markAsReadScheduler.push(currentGroupChannel);
            messagesDispatcher({
                type: messageActionTypes.MARK_AS_READ,
                payload: { channel: currentGroupChannel },
            });
        }
        setInitialTimeStamp(null);
        setAnimatedMessageId(null);
        setHighLightedMessageId(null);
    };
    var isUnreadNotificationButtonDisplayed = !!((!isScrollBottom || hasMoreNext) && (unreadSince || unreadSinceDate));
    var isScrollToBottomButtonDisplayed = scrollBottom > SCROLL_BOTTOM_PADDING;
    return (React.createElement(React.Fragment, null,
        !isScrolled && React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }),
        React.createElement("div", { className: "sendbird-conversation__messages ".concat(className) },
            React.createElement("div", { className: "sendbird-conversation__scroll-container" },
                React.createElement("div", { className: "sendbird-conversation__padding" }),
                React.createElement("div", { className: "sendbird-conversation__messages-padding", ref: scrollRef, onScroll: function (e) {
                        handleOnScroll();
                        scrollToBottomHandler(e);
                        onScrollReachedEndDetector(e);
                    } },
                    allMessagesFiltered.map(function (m, idx) {
                        var _a, _b;
                        var _c = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom, hasSeparator = _c.hasSeparator;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React.createElement(Message_context.MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React.createElement(Channel_components_Message, { handleScroll: moveScroll, message: m, hasSeparator: hasSeparator, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, renderRemoveMessageModal: renderRemoveMessageModal, renderEditInput: renderEditInput, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    localMessages.map(function (m, idx) {
                        var _a, _b;
                        var _c = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React.createElement(Message_context.MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React.createElement(Channel_components_Message, { handleScroll: moveScroll, message: m, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, renderEditInput: renderEditInput, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    !hasMoreNext &&
                        ((_b = (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.groupChannel) === null || _b === void 0 ? void 0 : _b.enableTypingIndicator) &&
                        ((_e = (_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.typingIndicatorTypes) === null || _e === void 0 ? void 0 : _e.has(index$2.TypingIndicatorType.Bubble)) && (React.createElement(ui_TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: moveScroll })))),
            (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && renderFrozenNotification(),
            /**
             * Show unread count IFF scroll is not bottom or is bottom but hasNext is true.
             */
            !renderScrollToBottomOrUnread && (!isScrollBottom || hasMoreNext) && (unreadSince || unreadSinceDate) && (React.createElement(GroupChannel_components_UnreadCount.UnreadCount, { className: "sendbird-conversation__messages__notification", count: currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount, time: unreadSince, lastReadAt: unreadSinceDate, onClick: handleUnreadCountClick })),
            // This flag is an unmatched variable
            !renderScrollToBottomOrUnread && isScrollToBottomButtonDisplayed && (React.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: onClickScrollBot, onKeyDown: onClickScrollBot, tabIndex: 0, role: "button" },
                React.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.PRIMARY }))), renderScrollToBottomOrUnread === null || renderScrollToBottomOrUnread === void 0 ? void 0 :
            renderScrollToBottomOrUnread({
                onScrollToBottom: onClickScrollBot,
                onScrollToUnread: handleUnreadCountClick,
                unreadCount: (_f = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount) !== null && _f !== void 0 ? _f : 0,
                lastReadAt: unreadSinceDate,
                shouldDisplayScrollToBottom: isScrollToBottomButtonDisplayed,
                shouldDisplayUnreadNotifications: isUnreadNotificationButtonDisplayed,
            }))));
};

exports.MessageList = MessageList;
exports.default = MessageList;
//# sourceMappingURL=MessageList.js.map
