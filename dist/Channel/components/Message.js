import { _ as __assign } from '../../chunks/bundle-5LMP4qQC.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-7Av17Vus.js';
import { a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted } from '../../chunks/bundle-mvJ9QD_D.js';
import { M as MessageView } from '../../chunks/bundle-y-awP3__.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-6itdh-PI.js';
import '../../chunks/bundle-Hkpc7KpA.js';
import '../../chunks/bundle-C-kkBK84.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-VHqJlR18.js';
import '../../chunks/bundle-D--y2PXM.js';
import '../../chunks/bundle-DkhSKEDZ.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-BJD56sGG.js';
import '../../chunks/bundle-Dl28BsqX.js';
import '../../chunks/bundle-c0D1F768.js';
import '../../chunks/bundle-Cs0iNLFK.js';
import '../../chunks/bundle-CTUiHvvY.js';
import '../../chunks/bundle-CGLTg9iX.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BW5JWhMG.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-BURD6lB9.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-CfII9A10.js';
import '../../chunks/bundle-DvIsR7kQ.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-IoL2Eken.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DGq3-eYB.js';
import 'dompurify';
import '../../chunks/bundle-BrbMpwH_.js';
import '../../chunks/bundle-DBk8133F.js';
import '../../chunks/bundle-BP0NKLAx.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-Bj505YcV.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-CL5Sk05l.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CCNsWru5.js';
import '../../chunks/bundle-Ci84mwTW.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BpHmAKa2.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BWzgMOjJ.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DbPsZWNm.js';
import '../../chunks/bundle-U_2B1aWq.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-B_KMvG4e.js';
import '../../chunks/bundle-D5RayXbV.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-vKEHnwCU.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DtUd3Fkz.js';
import '../../chunks/bundle-Cg9ONuBG.js';
import '../../chunks/bundle-C160porH.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-BHQlX9Dw.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-jzCf_x2O.js';
import '../../chunks/bundle-CAkCkcWc.js';
import '../../chunks/bundle-AdWAESbF.js';
import '../../chunks/bundle-CfMartL1.js';

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
