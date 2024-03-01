import { _ as __assign } from '../../chunks/bundle-h5nSe8RU.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-CmPJV5ar.js';
import { a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted } from '../../chunks/bundle-TVGnyGwG.js';
import { M as MessageView } from '../../chunks/bundle-DnlQsy2d.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-Qz_mnbcy.js';
import '../../chunks/bundle-Dc3tamRJ.js';
import '../../chunks/bundle-g-7qyWG4.js';
import '../../chunks/bundle-DTkxB28y.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Dil758s4.js';
import '../../chunks/bundle-_-u6U1pM.js';
import '../../chunks/bundle-BqHJZCfO.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-DZuFrRTP.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-DZNsjEo9.js';
import '../../chunks/bundle-Bu9i9TgZ.js';
import '../../chunks/bundle-C311xsP9.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-BpISf_VF.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DyyEjGYc.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-jiObN6zC.js';
import '../../chunks/bundle-Dnb-49Dd.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-CjXL-Zhv.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-_orI-r2C.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CLbk4-g8.js';
import '../../chunks/bundle-BlILx8DA.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BsPw6HPN.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BGsrkr_s.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-TmVTNucb.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-BKQYQg-b.js';
import '../../chunks/bundle-Bdj4fv0v.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-_lgzP0oA.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-BRQsywy2.js';
import '../../chunks/bundle-CxH5pvZA.js';
import '../../chunks/bundle-B8YFOQl1.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-yvxYC2sc.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-DTBDVk9A.js';
import '../../chunks/bundle-CBaYIseh.js';
import '../../chunks/bundle-CVTT5ylH.js';
import '../../chunks/bundle-KOP8NnFs.js';

var Message = function (props) {
    var _a, _b, _c;
    var config = useSendbirdStateContext().config;
    var _d = useChannelContext(), initialized = _d.initialized, currentGroupChannel = _d.currentGroupChannel, animatedMessageId = _d.animatedMessageId, setAnimatedMessageId = _d.setAnimatedMessageId, updateMessage = _d.updateMessage, scrollToMessage = _d.scrollToMessage, replyType = _d.replyType, threadReplySelectType = _d.threadReplySelectType, isReactionEnabled = _d.isReactionEnabled, toggleReaction = _d.toggleReaction, emojiContainer = _d.emojiContainer, nicknamesMap = _d.nicknamesMap, setQuoteMessage = _d.setQuoteMessage, resendMessage = _d.resendMessage, deleteMessage = _d.deleteMessage, renderUserMentionItem = _d.renderUserMentionItem, onReplyInThread = _d.onReplyInThread, onQuoteMessageClick = _d.onQuoteMessageClick, onMessageAnimated = _d.onMessageAnimated, sendMessage = _d.sendMessage, localMessages = _d.localMessages;
    var message = props.message;
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || isDisabledBecauseFrozen(currentGroupChannel) || isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
            && (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === ((_c = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageId))
            // the options should appear only when there's no failed or pending messages
            && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0
            && getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
            sendMessage({
                message: params.message,
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, updateUserMessage: function (messageId, params) {
            updateMessage({
                messageId: messageId,
                message: params.message,
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); } })));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
