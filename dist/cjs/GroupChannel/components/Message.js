'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-CiDSKL46.js');
var utils = require('../../chunks/bundle-Cu63GBZj.js');
var GroupChannel_context = require('../context.js');
var MessageView = require('../../chunks/bundle-C-gcz8bw.js');
var GroupChannel_components_FileViewer = require('./FileViewer.js');
var GroupChannel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-etwgXqw-.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-CQ6ec9FA.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-CXIbPam9.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-e1P14sMX.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-22C_FmJz.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-CG5E97k8.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-C7KrtZZP.js');
require('../../chunks/bundle-CqdGdIiY.js');
require('../../ui/ThreadReplies.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-B4c5-CEo.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CUWAopRQ.js');
require('../../chunks/bundle-DQKTGusP.js');
require('../../chunks/bundle-DoLTlc_l.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-EyWIzGTz.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-IrSx78Gk.js');
require('../../chunks/bundle-BZLPZVcJ.js');
require('../../chunks/bundle-D2-x0BmY.js');
require('../../chunks/bundle-DWcNmk2G.js');

var Message = function (props) {
    var _a = useSendbirdStateContext.useSendbirdStateContext(), config = _a.config, emojiManager = _a.emojiManager;
    var _b = GroupChannel_context.useGroupChannelContext(), loading = _b.loading, currentChannel = _b.currentChannel, animatedMessageId = _b.animatedMessageId, setAnimatedMessageId = _b.setAnimatedMessageId, scrollToMessage = _b.scrollToMessage, replyType = _b.replyType, threadReplySelectType = _b.threadReplySelectType, isReactionEnabled = _b.isReactionEnabled, toggleReaction = _b.toggleReaction, nicknamesMap = _b.nicknamesMap, setQuoteMessage = _b.setQuoteMessage, renderUserMentionItem = _b.renderUserMentionItem, onQuoteMessageClick = _b.onQuoteMessageClick, onReplyInThreadClick = _b.onReplyInThreadClick, onMessageAnimated = _b.onMessageAnimated, onBeforeDownloadFileMessage = _b.onBeforeDownloadFileMessage, messages = _b.messages, updateUserMessage = _b.updateUserMessage, sendUserMessage = _b.sendUserMessage, resendMessage = _b.resendMessage, deleteMessage = _b.deleteMessage;
    var message = props.message;
    var initialized = !loading && Boolean(currentChannel);
    var shouldRenderSuggestedReplies = uikitTools.useIIFE(function () {
        var _a;
        var _b = config.groupChannel, enableSuggestedReplies = _b.enableSuggestedReplies, showSuggestedRepliesFor = _b.showSuggestedRepliesFor;
        var lastMessageInView = messages[messages.length - 1];
        var hasUnsentMessage = index.isSendableMessage(lastMessageInView) && lastMessageInView.sendingStatus !== 'succeeded';
        var showSuggestedReplies = showSuggestedRepliesFor === 'all_messages' ? true : message.messageId === ((_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.lastMessage) === null || _a === void 0 ? void 0 : _a.messageId);
        return enableSuggestedReplies && index.getSuggestedReplies(message).length > 0 && !hasUnsentMessage && showSuggestedReplies;
    });
    return (React.createElement(MessageView.MessageView, _tslib.__assign({}, props, { channel: currentChannel, emojiContainer: emojiManager.emojiContainer, editInputDisabled: !initialized || utils.isDisabledBecauseFrozen(currentChannel) || utils.isDisabledBecauseMuted(currentChannel) || !config.isOnline, shouldRenderSuggestedReplies: shouldRenderSuggestedReplies, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThreadClick, sendUserMessage: sendUserMessage, updateUserMessage: updateUserMessage, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React.createElement(GroupChannel_components_FileViewer.FileViewer, _tslib.__assign({}, props)); }, renderRemoveMessageModal: function (props) { return React.createElement(GroupChannel_components_RemoveMessageModal.RemoveMessageModal, _tslib.__assign({}, props)); }, usedInLegacy: false, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })));
};

exports.Message = Message;
exports.default = Message;
//# sourceMappingURL=Message.js.map
