'use strict';

var _tslib = require('../../chunks/bundle-DvNeoTBz.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../context.js');
var index = require('../../chunks/bundle-D-432Irw.js');
var utils = require('../../chunks/bundle-BZXuUIRS.js');
var MessageView = require('../../chunks/bundle-kOuAJ_56.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../chunks/bundle-ZB7RBE8F.js');
require('../../chunks/bundle-DYXCvmUO.js');
require('../../chunks/bundle-DZTJrxjG.js');
require('../../chunks/bundle-DUeKijBO.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DhR_cfX5.js');
require('../../chunks/bundle-CuODNaEq.js');
require('../../chunks/bundle-DDl-TEX1.js');
require('../../chunks/bundle-DHTHQj02.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../chunks/bundle-CCANegmB.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../chunks/bundle-cJLFan5_.js');
require('../../chunks/bundle-DgEnLJkx.js');
require('../../chunks/bundle-CNa9Sv3b.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BeJ7-X59.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-CBY-_ev_.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-jIzB_4Er.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-k--aWKWA.js');
require('dompurify');
require('../../chunks/bundle-D93_K7IT.js');
require('../../chunks/bundle-fM1h2HCr.js');
require('../../chunks/bundle-DViNoq67.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-Cdin1NhG.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-sYslZdOT.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DodGNrpo.js');
require('../../chunks/bundle-DB4Q30uD.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-D0W7zrvh.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-BTMviSy8.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-Cg5zpjjy.js');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BelgkMC5.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-BhynwqRH.js');
require('../../chunks/bundle-DFOcYmwW.js');
require('../../ui/ThreadReplies.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-ByTdTPZ5.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle--j4UOdes.js');
require('../../chunks/bundle-C2ogzi2N.js');
require('../../chunks/bundle-Bzjc69tJ.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-mdN5dLY0.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-Bz-YFFWm.js');
require('../../chunks/bundle-Bp2ox-Kd.js');
require('../../chunks/bundle-DZGNDZ9S.js');
require('../../chunks/bundle-c_asXXlZ.js');

var Message = function (props) {
    var _a, _b, _c;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var _d = Channel_context.useChannelContext(), initialized = _d.initialized, currentGroupChannel = _d.currentGroupChannel, animatedMessageId = _d.animatedMessageId, setAnimatedMessageId = _d.setAnimatedMessageId, updateMessage = _d.updateMessage, scrollToMessage = _d.scrollToMessage, replyType = _d.replyType, threadReplySelectType = _d.threadReplySelectType, isReactionEnabled = _d.isReactionEnabled, toggleReaction = _d.toggleReaction, emojiContainer = _d.emojiContainer, nicknamesMap = _d.nicknamesMap, setQuoteMessage = _d.setQuoteMessage, resendMessage = _d.resendMessage, deleteMessage = _d.deleteMessage, renderUserMentionItem = _d.renderUserMentionItem, onReplyInThread = _d.onReplyInThread, onQuoteMessageClick = _d.onQuoteMessageClick, onMessageAnimated = _d.onMessageAnimated, sendMessage = _d.sendMessage, localMessages = _d.localMessages;
    var message = props.message;
    return (React.createElement(MessageView.MessageView, _tslib.__assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || utils.isDisabledBecauseFrozen(currentGroupChannel) || utils.isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
            && (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === ((_c = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageId))
            // the options should appear only when there's no failed or pending messages
            && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0
            && index.getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
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
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React.createElement(Channel_components_FileViewer.FileViewer, _tslib.__assign({}, props)); }, renderRemoveMessageModal: function (props) { return React.createElement(Channel_components_RemoveMessageModal, _tslib.__assign({}, props)); } })));
};

module.exports = Message;
//# sourceMappingURL=Message.js.map
