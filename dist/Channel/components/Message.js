import { _ as __assign } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-D-z4U1wX.js';
import { a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted } from '../../chunks/bundle-B-z3huWI.js';
import { M as MessageView } from '../../chunks/bundle-CPBkB8_3.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-DyO1n8fC.js';
import '../../chunks/bundle-k5z_1yHM.js';
import '../../chunks/bundle-Dac-NyF8.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BMf2Gp0X.js';
import '../../chunks/bundle-BHNYgnEs.js';
import '../../chunks/bundle-DHrHSLDL.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../chunks/bundle-D8n4s-pk.js';
import '../../chunks/bundle-CIiROwS_.js';
import '../../chunks/bundle-DFFKNF1F.js';
import '../../chunks/bundle-C7dAdhH1.js';
import '../../chunks/bundle-DjAc13S7.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BwcI3bWM.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-uVhI82ml.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DZZlGxSQ.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Dlljvt37.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BYAK1f5c.js';
import 'dompurify';
import '../../chunks/bundle-CLXgPaQv.js';
import '../../chunks/bundle-D0Du43TQ.js';
import '../../chunks/bundle-CERaU6Re.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../chunks/bundle-CmBoH2-J.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-DsHrFpwT.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-B482kNJl.js';
import '../../chunks/bundle-DuWC7Y9x.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BytW9Azl.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-CU1y-8Hl.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DqwaElIt.js';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BAao5L-j.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
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
import '../utils/compareMessagesForGrouping.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-Co8U-uRc.js';
import '../../chunks/bundle-DT-XJx1T.js';
import '../../chunks/bundle-BLEkXiZc.js';
import '../../chunks/bundle-q0J75T9g.js';

var Message = function (props) {
    var _a, _b, _c;
    var config = useSendbirdStateContext().config;
    var _d = useChannelContext(), initialized = _d.initialized, currentGroupChannel = _d.currentGroupChannel, animatedMessageId = _d.animatedMessageId, setAnimatedMessageId = _d.setAnimatedMessageId, updateMessage = _d.updateMessage, scrollToMessage = _d.scrollToMessage, replyType = _d.replyType, threadReplySelectType = _d.threadReplySelectType, isReactionEnabled = _d.isReactionEnabled, toggleReaction = _d.toggleReaction, emojiContainer = _d.emojiContainer, nicknamesMap = _d.nicknamesMap, setQuoteMessage = _d.setQuoteMessage, resendMessage = _d.resendMessage, deleteMessage = _d.deleteMessage, renderUserMentionItem = _d.renderUserMentionItem, onReplyInThread = _d.onReplyInThread, onQuoteMessageClick = _d.onQuoteMessageClick, onMessageAnimated = _d.onMessageAnimated, sendMessage = _d.sendMessage, localMessages = _d.localMessages;
    var message = props.message, _e = props.renderRemoveMessageModal, renderRemoveMessageModal = _e === void 0 ? function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); } : _e;
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || isDisabledBecauseFrozen(currentGroupChannel) || isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies) &&
            (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === ((_c = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageId)) &&
            // the options should appear only when there's no failed or pending messages
            (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0 &&
            getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
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
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: renderRemoveMessageModal })));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
