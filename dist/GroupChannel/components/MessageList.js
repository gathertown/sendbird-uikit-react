import { _ as __assign } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useGroupChannelHandler } from '@sendbird/uikit-tools';
import { a as isSendableMessage, T as TypingIndicatorType } from '../../chunks/bundle-D-z4U1wX.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { Message } from './Message.js';
import { getMessagePartsInfo } from '../../Channel/utils/getMessagePartsInfo.js';
import { UnreadCount } from './UnreadCount.js';
import { FrozenNotification } from './FrozenNotification.js';
import { S as SCROLL_BUFFER } from '../../chunks/bundle-BUsOkeT7.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { MessageProvider } from '../../Message/context.js';
import TypingIndicatorBubble from '../../ui/TypingIndicatorBubble.js';
import { useGroupChannelContext } from '../context.js';
import { g as getComponentKeyFromMessage } from '../../chunks/bundle-uVhI82ml.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BwcI3bWM.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../chunks/bundle-CPBkB8_3.js';
import '../../chunks/bundle-Dac-NyF8.js';
import '../../chunks/bundle-DyO1n8fC.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DZZlGxSQ.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Dlljvt37.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BYAK1f5c.js';
import 'dompurify';
import '../../chunks/bundle-CLXgPaQv.js';
import '../../chunks/bundle-D0Du43TQ.js';
import '../../chunks/bundle-CERaU6Re.js';
import '../../chunks/bundle-CmBoH2-J.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-DsHrFpwT.js';
import '../../chunks/bundle-B482kNJl.js';
import '../../chunks/bundle-DuWC7Y9x.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BytW9Azl.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../chunks/bundle-CU1y-8Hl.js';
import '../../chunks/bundle-B-z3huWI.js';
import '@sendbird/chat/message';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DqwaElIt.js';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-BAao5L-j.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-CIiROwS_.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-k5z_1yHM.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-D7eq_YKI.js';
import '../../chunks/bundle-CNgxRTaJ.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-CoLFT4a9.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-B_Ka0sX0.js';
import '../../chunks/bundle-D9H0zuk1.js';
import '../../chunks/bundle-By1BYZYf.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-CtdSSwdH.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-Co8U-uRc.js';
import './FileViewer.js';
import '../../chunks/bundle-DT-XJx1T.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-BLEkXiZc.js';
import '../../chunks/bundle-q0J75T9g.js';
import '../../chunks/bundle-DFFKNF1F.js';
import '../../chunks/bundle-C7dAdhH1.js';
import '../../chunks/bundle-B8MAflwf.js';
import '../../chunks/bundle-CTBShITC.js';
import '../../chunks/bundle-BfKgozDd.js';

var MessageListContainer = function (_a) {
    var scrollRef = _a.scrollRef, renderList = _a.renderList, messages = _a.messages, isScrollBottomReached = _a.isScrollBottomReached;
    var prevMessagesLengthRef = useRef(messages.length);
    var lastClientHeight = useRef();
    // handles scrolling the list to the bottom before browser paint
    useLayoutEffect(function () {
        if (!scrollRef.current)
            return;
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        lastClientHeight.current = scrollRef.current.clientHeight;
    }, []);
    // If message count has increased and you were scrolled to the top
    // scroll down 1px so the scrollbar isn't anchored to the top when the new items get rendered.
    // This fixes a flicker that happens when old messages get rendered in.
    useLayoutEffect(function () {
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
    useLayoutEffect(function () {
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
    useLayoutEffect(function () {
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
    return (React__default.createElement("div", { className: "sendbird-conversation__messages-padding", ref: scrollRef }, renderList()));
};
var MessageList = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.renderMessage, renderMessage = _c === void 0 ? function (props) { return React__default.createElement(Message, __assign({}, props)); } : _c, renderEditInput = _a.renderEditInput, renderRemoveMessageModal = _a.renderRemoveMessageModal, renderMessageContent = _a.renderMessageContent, renderSuggestedReplies = _a.renderSuggestedReplies, renderCustomSeparator = _a.renderCustomSeparator, renderScrollToBottomOrUnread = _a.renderScrollToBottomOrUnread, _d = _a.renderPlaceholderLoader, renderPlaceholderLoader = _d === void 0 ? function () { return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING }); } : _d, _e = _a.renderPlaceholderEmpty, renderPlaceholderEmpty = _e === void 0 ? function () { return React__default.createElement(PlaceHolder, { className: "sendbird-conversation__no-messages", type: PlaceHolderTypes.NO_MESSAGES }); } : _e, _f = _a.renderFrozenNotification, renderFrozenNotification = _f === void 0 ? function () { return React__default.createElement(FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _f;
    var _g = useGroupChannelContext(), channelUrl = _g.channelUrl, hasNext = _g.hasNext, loading = _g.loading, messages = _g.messages, newMessages = _g.newMessages, scrollToBottom = _g.scrollToBottom, isScrollBottomReached = _g.isScrollBottomReached, isMessageGroupingEnabled = _g.isMessageGroupingEnabled, scrollRef = _g.scrollRef, scrollDistanceFromBottomRef = _g.scrollDistanceFromBottomRef, currentChannel = _g.currentChannel, replyType = _g.replyType, scrollPubSub = _g.scrollPubSub;
    var shouldDisplayScrollToBottom = hasNext() || !isScrollBottomReached;
    var _h = useState(shouldDisplayScrollToBottom), delayedDisplayScrollToBottom = _h[0], setDelayedDisplayScrollToBottom = _h[1];
    var store = useSendbirdStateContext();
    var _j = useState(), unreadSinceDate = _j[0], setUnreadSinceDate = _j[1];
    // To account for tween states while scrolling, delay the render of the scroll to bottom button
    useEffect(function () {
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
    useEffect(function () {
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
            if (latestDistance < currentDistance && (!isBottomMessageAffected || latestDistance < SCROLL_BUFFER)) {
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
            return (React__default.createElement(UnreadCount, { className: "sendbird-conversation__messages__notification", count: newMessages.length, lastReadAt: unreadSinceDate, onClick: function () { return scrollToBottom(); } }));
        },
        scrollToBottomButton: function () {
            if (!hasNext() && isScrollBottomReached)
                return null;
            return (React__default.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: function () { return scrollToBottom(); }, onKeyDown: function () { return scrollToBottom(); }, tabIndex: 0, role: "button" },
                React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.CHEVRON_DOWN, fillColor: IconColors.PRIMARY })));
        },
    };
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (messages.length === 0) {
        return renderPlaceholderEmpty();
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "sendbird-conversation__messages ".concat(className) },
            React__default.createElement("div", { className: "sendbird-conversation__scroll-container" },
                React__default.createElement("div", { className: "sendbird-conversation__padding" }),
                React__default.createElement(MessageListContainer, { scrollRef: scrollRef, isScrollBottomReached: isScrollBottomReached, messages: messages, renderList: function () {
                        var _a, _b, _c, _d, _e;
                        return (React__default.createElement(React__default.Fragment, null,
                            messages.map(function (message, idx) {
                                var _a = getMessagePartsInfo({
                                    allMessages: messages,
                                    replyType: replyType,
                                    isMessageGroupingEnabled: isMessageGroupingEnabled,
                                    currentIndex: idx,
                                    currentMessage: message,
                                    currentChannel: currentChannel,
                                    currentUserId: store.config.userId
                                }), chainTop = _a.chainTop, chainBottom = _a.chainBottom, hasSeparator = _a.hasSeparator;
                                var isOutgoingMessage = isSendableMessage(message) && message.sender.userId === store.config.userId;
                                return (React__default.createElement(MessageProvider, { message: message, key: getComponentKeyFromMessage(message), isByMe: isOutgoingMessage }, renderMessage({
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
                                ((_e = (_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.typingIndicatorTypes) === null || _e === void 0 ? void 0 : _e.has(TypingIndicatorType.Bubble)) && (React__default.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged }))));
                    } })),
            React__default.createElement(React__default.Fragment, null, renderer.frozenNotification()),
            renderScrollToBottomOrUnread ? renderScrollToBottomOrUnread({
                onScrollToBottom: scrollToBottom,
                onScrollToUnread: scrollToBottom,
                unreadCount: newMessages.length,
                lastReadAt: unreadSinceDate,
                shouldDisplayScrollToBottom: delayedDisplayScrollToBottom,
                shouldDisplayUnreadNotifications: !!(!isScrollBottomReached && unreadSinceDate),
            }) : (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(React__default.Fragment, null, renderer.unreadMessagesNotification()),
                React__default.createElement(React__default.Fragment, null, renderer.scrollToBottomButton()))))));
};
var TypingIndicatorBubbleWrapper = function (props) {
    var stores = useSendbirdStateContext().stores;
    var _a = useState([]), typingMembers = _a[0], setTypingMembers = _a[1];
    useGroupChannelHandler(stores.sdkStore.sdk, {
        onTypingStatusUpdated: function (channel) {
            if (channel.url === props.channelUrl) {
                setTypingMembers(channel.getTypingUsers());
            }
        },
    });
    return React__default.createElement(TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: props.handleScroll });
};

export { MessageList, MessageList as default };
//# sourceMappingURL=MessageList.js.map
