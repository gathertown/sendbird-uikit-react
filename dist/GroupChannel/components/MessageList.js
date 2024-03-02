import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default, { useState, useEffect } from 'react';
import { useGroupChannelHandler } from '@sendbird/uikit-tools';
import { f as isSendableMessage, T as TypingIndicatorType } from '../../chunks/bundle-BnYBX14T.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { Message } from './Message.js';
import { getMessagePartsInfo } from '../../Channel/utils/getMessagePartsInfo.js';
import { UnreadCount } from './UnreadCount.js';
import { FrozenNotification } from './FrozenNotification.js';
import { S as SCROLL_BUFFER } from '../../chunks/bundle-w0s865vS.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { MessageProvider } from '../../Message/context.js';
import TypingIndicatorBubble from '../../ui/TypingIndicatorBubble.js';
import { useGroupChannelContext } from '../context.js';
import { g as getComponentKeyFromMessage } from '../../chunks/bundle-BEXtjKJK.js';
import { d as deleteNullish } from '../../chunks/bundle-0yILBaSQ.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BMQcX4ES.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-B9Guj1rz.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-Djp37I3i.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-CgW0dqme.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CYWkde8y.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-iau93d70.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DOhbdcnA.js';
import '../../chunks/bundle-DBtx2Gk9.js';
import '../../chunks/bundle-CQ1BOFUN.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-DAWn6RVy.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-BehMbQaw.js';
import './FileViewer.js';
import '../../chunks/bundle-CpMVUlSc.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-Zc1QPz7M.js';
import '../../chunks/bundle-DwXszhWd.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-se836s50.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../chunks/bundle-BWic18XY.js';

var MessageList = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = props.className, className = _f === void 0 ? '' : _f;
    var _g = deleteNullish(props), _h = _g.renderMessage, renderMessage = _h === void 0 ? function (props) { return React__default.createElement(Message, __assign({}, props)); } : _h, renderMessageContent = _g.renderMessageContent, renderSuggestedReplies = _g.renderSuggestedReplies, renderCustomSeparator = _g.renderCustomSeparator, _j = _g.renderPlaceholderLoader, renderPlaceholderLoader = _j === void 0 ? function () { return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING }); } : _j, _k = _g.renderPlaceholderEmpty, renderPlaceholderEmpty = _k === void 0 ? function () { return React__default.createElement(PlaceHolder, { className: "sendbird-conversation__no-messages", type: PlaceHolderTypes.NO_MESSAGES }); } : _k, _l = _g.renderFrozenNotification, renderFrozenNotification = _l === void 0 ? function () { return React__default.createElement(FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _l;
    var _m = useGroupChannelContext(), channelUrl = _m.channelUrl, hasNext = _m.hasNext, loading = _m.loading, messages = _m.messages, newMessages = _m.newMessages, scrollToBottom = _m.scrollToBottom, isScrollBottomReached = _m.isScrollBottomReached, isMessageGroupingEnabled = _m.isMessageGroupingEnabled, scrollRef = _m.scrollRef, scrollDistanceFromBottomRef = _m.scrollDistanceFromBottomRef, currentChannel = _m.currentChannel, replyType = _m.replyType, scrollPubSub = _m.scrollPubSub;
    var store = useSendbirdStateContext();
    var _o = useState(), unreadSinceDate = _o[0], setUnreadSinceDate = _o[1];
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
                React__default.createElement("div", { ref: scrollRef, className: "sendbird-conversation__messages-padding" },
                    messages.map(function (message, idx) {
                        var _a = getMessagePartsInfo({
                            allMessages: messages,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: message,
                            currentChannel: currentChannel,
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
                        })));
                    }),
                    !hasNext()
                        && ((_b = (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.groupChannel) === null || _b === void 0 ? void 0 : _b.enableTypingIndicator)
                        && ((_e = (_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.typingIndicatorTypes) === null || _e === void 0 ? void 0 : _e.has(TypingIndicatorType.Bubble)) && (React__default.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged })))),
            React__default.createElement(React__default.Fragment, null, renderer.frozenNotification()),
            React__default.createElement(React__default.Fragment, null, renderer.unreadMessagesNotification()),
            React__default.createElement(React__default.Fragment, null, renderer.scrollToBottomButton()))));
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
