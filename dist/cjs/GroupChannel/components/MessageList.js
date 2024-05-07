'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-C6gATKTE.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Icon = require('../../ui/Icon.js');
var GroupChannel_components_Message = require('./Message.js');
var Channel_utils_getMessagePartsInfo = require('../../Channel/utils/getMessagePartsInfo.js');
var GroupChannel_components_UnreadCount = require('./UnreadCount.js');
var GroupChannel_components_FrozenNotification = require('./FrozenNotification.js');
var consts = require('../../chunks/bundle-DI6hrkhw.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Message_context = require('../../Message/context.js');
var ui_TypingIndicatorBubble = require('../../ui/TypingIndicatorBubble.js');
var GroupChannel_context = require('../context.js');
var utils = require('../../chunks/bundle-D0q1P-FU.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DKL8dMjq.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DgAALupQ.js');
require('../../chunks/bundle-BhnK-otQ.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../chunks/bundle-bdifjM-k.js');
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
require('../../chunks/bundle-BjldQ7ts.js');
require('../../chunks/bundle-8sH2G7Ap.js');
require('../../chunks/bundle-BECkGjrR.js');
require('@sendbird/chat/message');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-3dhw8iOw.js');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-Cd7XOuNj.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-D0o2OzcU.js');
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
require('../../Channel/utils/compareMessagesForGrouping.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-CSU8NDw4.js');
require('./FileViewer.js');
require('../../chunks/bundle-Cn1JJiPG.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-XgOiPyHW.js');
require('../../chunks/bundle-BmCw9st3.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle--oP96AvO.js');
require('../../chunks/bundle-CZJazoZ7.js');
require('../../chunks/bundle-BoYSz_zM.js');

var MessageListContainer = function (_a) {
    var scrollRef = _a.scrollRef, renderList = _a.renderList, messages = _a.messages, isScrollBottomReached = _a.isScrollBottomReached;
    var prevMessagesLengthRef = React.useRef(messages.length);
    var lastClientHeight = React.useRef();
    // handles scrolling the list to the bottom before browser paint
    React.useLayoutEffect(function () {
        if (!scrollRef.current)
            return;
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        lastClientHeight.current = scrollRef.current.clientHeight;
    }, []);
    // If message count has increased and you were scrolled to the top
    // scroll down 1px so the scrollbar isn't anchored to the top when the new items get rendered.
    // This fixes a flicker that happens when old messages get rendered in.
    React.useLayoutEffect(function () {
        if (messages.length > prevMessagesLengthRef.current && scrollRef.current.scrollTop === 0) {
            scrollRef.current.style.overflowY = 'hidden';
            scrollRef.current.scrollTop = 1;
        }
        else if (messages.length > prevMessagesLengthRef.current && isScrollBottomReached) {
            // if the scrollbar was previously at the bottom, maintain the scroll at the bottom after new messages come in. 
            // The scroll pubsub system kicks in after the message comes in, which is especially obvious when the scroll list was previously at the bottom.
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        prevMessagesLengthRef.current = messages.length;
    }, [messages]);
    React.useLayoutEffect(function () {
        // The above useLayoutEffect is not sufficient because of scroll inertia and bounce.
        // To deal with inertia and bounce, the list is temporarily rendered a non-scrollable list.
        // This cancels the inertia and, as a result, bounce.
        var cb = function () {
            if (scrollRef.current.scrollTop === 0) {
                scrollRef.current.scrollTop = 1;
                scrollRef.current.style.overflowY = 'hidden';
            }
            else {
                scrollRef.current.style.overflowY = 'scroll';
            }
        };
        cb();
        scrollRef.current.addEventListener('scroll', cb);
        return function () { return scrollRef.current.removeEventListener('scroll', cb); };
    }, []);
    // when the size of the scroll list changes because of the input text area, keep the scroll position the same
    React.useLayoutEffect(function () {
        if (!scrollRef.current)
            return;
        var onResize = function () {
            var diff = lastClientHeight.current - scrollRef.current.clientHeight;
            lastClientHeight.current = scrollRef.current.clientHeight;
            if (diff > 0) {
                scrollRef.current.scrollTop = scrollRef.current.scrollTop + diff;
            }
        };
        var resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(scrollRef.current);
        return function () { return resizeObserver.unobserve(scrollRef.current); };
    }, [scrollRef.current]);
    return (React.createElement("div", { className: "sendbird-conversation__messages-padding", ref: scrollRef }, renderList()));
};
var MessageList = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.renderMessage, renderMessage = _c === void 0 ? function (props) { return React.createElement(GroupChannel_components_Message.Message, _tslib.__assign({}, props)); } : _c, renderEditInput = _a.renderEditInput, renderRemoveMessageModal = _a.renderRemoveMessageModal, renderMessageContent = _a.renderMessageContent, renderSuggestedReplies = _a.renderSuggestedReplies, renderCustomSeparator = _a.renderCustomSeparator, renderScrollToBottomOrUnread = _a.renderScrollToBottomOrUnread, _d = _a.renderPlaceholderLoader, renderPlaceholderLoader = _d === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }); } : _d, _e = _a.renderPlaceholderEmpty, renderPlaceholderEmpty = _e === void 0 ? function () { return React.createElement(ui_PlaceHolder.default, { className: "sendbird-conversation__no-messages", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES }); } : _e, _f = _a.renderFrozenNotification, renderFrozenNotification = _f === void 0 ? function () { return React.createElement(GroupChannel_components_FrozenNotification.FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _f;
    var _g = GroupChannel_context.useGroupChannelContext(), channelUrl = _g.channelUrl, hasNext = _g.hasNext, loading = _g.loading, messages = _g.messages, newMessages = _g.newMessages, scrollToBottom = _g.scrollToBottom, isScrollBottomReached = _g.isScrollBottomReached, isMessageGroupingEnabled = _g.isMessageGroupingEnabled, scrollRef = _g.scrollRef, scrollDistanceFromBottomRef = _g.scrollDistanceFromBottomRef, currentChannel = _g.currentChannel, replyType = _g.replyType, scrollPubSub = _g.scrollPubSub;
    var shouldDisplayScrollToBottom = hasNext() || !isScrollBottomReached;
    var _h = React.useState(shouldDisplayScrollToBottom), delayedDisplayScrollToBottom = _h[0], setDelayedDisplayScrollToBottom = _h[1];
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var _j = React.useState(), unreadSinceDate = _j[0], setUnreadSinceDate = _j[1];
    // To account for tween states while scrolling, delay the render of the scroll to bottom button
    React.useEffect(function () {
        var timeout;
        if (shouldDisplayScrollToBottom) {
            timeout = setTimeout(function () {
                setDelayedDisplayScrollToBottom(true);
            }, 250);
        }
        return function () {
            if (shouldDisplayScrollToBottom) {
                setDelayedDisplayScrollToBottom(false);
            }
            clearTimeout(timeout);
        };
    }, [shouldDisplayScrollToBottom]);
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
                React.createElement(MessageListContainer, { scrollRef: scrollRef, isScrollBottomReached: isScrollBottomReached, messages: messages, renderList: function () {
                        var _a, _b, _c, _d, _e;
                        return (React.createElement(React.Fragment, null,
                            messages.map(function (message, idx) {
                                var _a = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                                    allMessages: messages,
                                    replyType: replyType,
                                    isMessageGroupingEnabled: isMessageGroupingEnabled,
                                    currentIndex: idx,
                                    currentMessage: message,
                                    currentChannel: currentChannel,
                                    currentUserId: store.config.userId
                                }), chainTop = _a.chainTop, chainBottom = _a.chainBottom, hasSeparator = _a.hasSeparator;
                                var isOutgoingMessage = index.isSendableMessage(message) && message.sender.userId === store.config.userId;
                                return (React.createElement(Message_context.MessageProvider, { message: message, key: utils.getComponentKeyFromMessage(message), isByMe: isOutgoingMessage }, renderMessage({
                                    handleScroll: onMessageContentSizeChanged,
                                    message: message,
                                    hasSeparator: hasSeparator,
                                    chainTop: chainTop,
                                    chainBottom: chainBottom,
                                    renderMessageContent: renderMessageContent,
                                    renderSuggestedReplies: renderSuggestedReplies,
                                    renderCustomSeparator: renderCustomSeparator,
                                    renderRemoveMessageModal: renderRemoveMessageModal,
                                    renderEditInput: renderEditInput
                                })));
                            }),
                            !hasNext() &&
                                ((_b = (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.groupChannel) === null || _b === void 0 ? void 0 : _b.enableTypingIndicator) &&
                                ((_e = (_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.typingIndicatorTypes) === null || _e === void 0 ? void 0 : _e.has(index.TypingIndicatorType.Bubble)) && (React.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged }))));
                    } })),
            React.createElement(React.Fragment, null, renderer.frozenNotification()),
            renderScrollToBottomOrUnread ? renderScrollToBottomOrUnread({
                onScrollToBottom: scrollToBottom,
                onScrollToUnread: scrollToBottom,
                unreadCount: newMessages.length,
                lastReadAt: unreadSinceDate,
                shouldDisplayScrollToBottom: delayedDisplayScrollToBottom,
                shouldDisplayUnreadNotifications: !!(!isScrollBottomReached && unreadSinceDate),
            }) : (React.createElement(React.Fragment, null,
                React.createElement(React.Fragment, null, renderer.unreadMessagesNotification()),
                React.createElement(React.Fragment, null, renderer.scrollToBottomButton()))))));
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
