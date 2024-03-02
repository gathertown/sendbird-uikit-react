import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-BnYBX14T.js';
import { a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted } from '../../chunks/bundle-se836s50.js';
import { M as MessageView } from '../../chunks/bundle-BMQcX4ES.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-bFnpVx53.js';
import '../../chunks/bundle-w0s865vS.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-Cd6XSYjN.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-B-v_xYnH.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-B9Guj1rz.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
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
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-CgW0dqme.js';
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
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-BehMbQaw.js';
import '../../chunks/bundle-CpMVUlSc.js';
import '../../chunks/bundle-Zc1QPz7M.js';
import '../../chunks/bundle-DwXszhWd.js';

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
