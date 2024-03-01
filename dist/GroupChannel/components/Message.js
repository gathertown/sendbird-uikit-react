import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { useIIFE } from '@sendbird/uikit-tools';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { f as isSendableMessage, g as getSuggestedReplies } from '../../chunks/bundle-4cxEU_h1.js';
import { i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted } from '../../chunks/bundle-BFPIaXWl.js';
import { useGroupChannelContext } from '../context.js';
import { M as MessageView } from '../../chunks/bundle-D_ilFXVx.js';
import { FileViewer } from './FileViewer.js';
import { RemoveMessageModal } from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-D8nOQMZK.js';
import '../../ui/Loader.js';
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
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-CO0PW_ND.js';
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
import '../../chunks/bundle-PF08uncu.js';
import '../../chunks/bundle-BknFMGO5.js';
import '../../chunks/bundle-BjdNFz7H.js';

var Message = function (props) {
    var _a = useSendbirdStateContext(), config = _a.config, emojiManager = _a.emojiManager;
    var _b = useGroupChannelContext(), loading = _b.loading, currentChannel = _b.currentChannel, animatedMessageId = _b.animatedMessageId, setAnimatedMessageId = _b.setAnimatedMessageId, scrollToMessage = _b.scrollToMessage, replyType = _b.replyType, threadReplySelectType = _b.threadReplySelectType, isReactionEnabled = _b.isReactionEnabled, toggleReaction = _b.toggleReaction, nicknamesMap = _b.nicknamesMap, setQuoteMessage = _b.setQuoteMessage, renderUserMentionItem = _b.renderUserMentionItem, onQuoteMessageClick = _b.onQuoteMessageClick, onReplyInThreadClick = _b.onReplyInThreadClick, onMessageAnimated = _b.onMessageAnimated, onBeforeDownloadFileMessage = _b.onBeforeDownloadFileMessage, messages = _b.messages, updateUserMessage = _b.updateUserMessage, sendUserMessage = _b.sendUserMessage, resendMessage = _b.resendMessage, deleteMessage = _b.deleteMessage;
    var message = props.message;
    var initialized = !loading && Boolean(currentChannel);
    var shouldRenderSuggestedReplies = useIIFE(function () {
        var _a;
        var _b = config.groupChannel, enableSuggestedReplies = _b.enableSuggestedReplies, showSuggestedRepliesFor = _b.showSuggestedRepliesFor;
        var lastMessageInView = messages[messages.length - 1];
        var hasUnsentMessage = isSendableMessage(lastMessageInView) && lastMessageInView.sendingStatus !== 'succeeded';
        var showSuggestedReplies = showSuggestedRepliesFor === 'all_messages' ? true : message.messageId === ((_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.lastMessage) === null || _a === void 0 ? void 0 : _a.messageId);
        return enableSuggestedReplies && getSuggestedReplies(message).length > 0 && !hasUnsentMessage && showSuggestedReplies;
    });
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentChannel, emojiContainer: emojiManager.emojiContainer, editInputDisabled: !initialized || isDisabledBecauseFrozen(currentChannel) || isDisabledBecauseMuted(currentChannel) || !config.isOnline, shouldRenderSuggestedReplies: shouldRenderSuggestedReplies, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThreadClick, sendUserMessage: sendUserMessage, updateUserMessage: updateUserMessage, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); }, usedInLegacy: false, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })));
};

export { Message, Message as default };
//# sourceMappingURL=Message.js.map
