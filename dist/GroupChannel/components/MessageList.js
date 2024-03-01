import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default, { useState, useEffect } from 'react';
import { useGroupChannelHandler } from '@sendbird/uikit-tools';
import { f as isSendableMessage, T as TypingIndicatorType } from '../../chunks/bundle-4cxEU_h1.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { Message } from './Message.js';
import { getMessagePartsInfo } from '../../Channel/utils/getMessagePartsInfo.js';
import { UnreadCount } from './UnreadCount.js';
import { FrozenNotification } from './FrozenNotification.js';
import { S as SCROLL_BUFFER } from '../../chunks/bundle-GlkAQINh.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { MessageProvider } from '../../Message/context.js';
import TypingIndicatorBubble from '../../ui/TypingIndicatorBubble.js';
import { useGroupChannelContext } from '../context.js';
import { g as getComponentKeyFromMessage } from '../../chunks/bundle-BFPIaXWl.js';
import { d as deleteNullish } from '../../chunks/bundle-DIC0UBC5.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-D_ilFXVx.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-D8nOQMZK.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CmoRaDho.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CTZh68w8.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-CO0PW_ND.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CrzldF0k.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-CHFeqEtk.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-BtZTAJgc.js';
import '../../chunks/bundle-BKH-CUXx.js';
import '../../chunks/bundle-vKqXYEfp.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-CH7pY17S.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-CHpLoyhB.js';
import './FileViewer.js';
import '../../chunks/bundle-PF08uncu.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-BknFMGO5.js';
import '../../chunks/bundle-BjdNFz7H.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';

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
