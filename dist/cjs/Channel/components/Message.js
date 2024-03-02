'use strict';

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../context.js');
var index = require('../../chunks/bundle-CiDSKL46.js');
var utils = require('../../chunks/bundle-etwgXqw-.js');
var MessageView = require('../../chunks/bundle-C-gcz8bw.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-C4EYGhv3.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-BWb5b9t8.js');
require('../../chunks/bundle-BPGreBtw.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DzWthRdg.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-Cu63GBZj.js');
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
require('@sendbird/uikit-tools');
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
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-IrSx78Gk.js');
require('../../chunks/bundle-BZLPZVcJ.js');
require('../../chunks/bundle-D2-x0BmY.js');
require('../../chunks/bundle-DWcNmk2G.js');

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
