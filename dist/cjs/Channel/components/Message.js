'use strict';

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../context.js');
var index = require('../../chunks/bundle-Pv5sl1sx.js');
var utils = require('../../chunks/bundle-meW-rxvL.js');
var MessageView = require('../../chunks/bundle-Bih6GK_n.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-DvhBOCzU.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-3znIJG3Q.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-BelwaOYx.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-BQHlCNa7.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-1yGs9Nzf.js');
require('../../chunks/bundle-CoFmIxJK.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-GRPKdtY8.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-B9CKUSwz.js');
require('../../chunks/bundle-DLSKVE-z.js');
require('../../ui/ThreadReplies.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-Bwn93cY-.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-BZB43WQ7.js');
require('../../chunks/bundle-JQgZk-Pu.js');
require('../../chunks/bundle-C3yNDl4J.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-DSE-imlx.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-CbRjKF9P.js');
require('../../chunks/bundle-Xwq3zxl-.js');
require('../../chunks/bundle-IUMGWVtE.js');
require('../../chunks/bundle-Dab6jGiJ.js');

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
