import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-4cxEU_h1.js';
import { a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted } from '../../chunks/bundle-CIf4rTGV.js';
import { M as MessageView } from '../../chunks/bundle-D_ilFXVx.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-B7dWJiLf.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-DuFEev3g.js';
import '../../chunks/bundle-GlkAQINh.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CgMvdzKN.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-ChvmrzFX.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BFPIaXWl.js';
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
import '@sendbird/uikit-tools';
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
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-CHpLoyhB.js';
import '../../chunks/bundle-PF08uncu.js';
import '../../chunks/bundle-BknFMGO5.js';
import '../../chunks/bundle-BjdNFz7H.js';

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
