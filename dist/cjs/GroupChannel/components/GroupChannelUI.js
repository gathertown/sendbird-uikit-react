'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var GroupChannelUIView = require('../../chunks/bundle-Cdo0fJPi.js');
var GroupChannel_components_GroupChannelHeader = require('./GroupChannelHeader.js');
var GroupChannel_components_MessageList = require('./MessageList.js');
var GroupChannel_components_MessageInputWrapper = require('./MessageInputWrapper.js');
var utils = require('../../chunks/bundle-DMrzJD8i.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-BelwaOYx.js');
require('../../chunks/bundle-DHZxYemr.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-meW-rxvL.js');
require('../../chunks/bundle-ROgXTJCJ.js');
require('../../chunks/bundle-D7wWsQ-z.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-mXFFmyyG.js');
require('./TypingIndicator.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../ui/ConnectionStatus.js');
require('../../ui/Icon.js');
require('../../ui/PlaceHolder.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-C0ErZ9_k.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BQNX69rh.js');
require('../../chunks/bundle-4hEewA7J.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/IconButton.js');
require('./Message.js');
require('../../chunks/bundle-Bih6GK_n.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../ui/Button.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-BQHlCNa7.js');
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
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../ui/UserListItem.js');
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
require('./SuggestedReplies.js');
require('../../chunks/bundle-CbRjKF9P.js');
require('./FileViewer.js');
require('../../chunks/bundle-Xwq3zxl-.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-IUMGWVtE.js');
require('../../chunks/bundle-Dab6jGiJ.js');
require('../../Channel/utils/getMessagePartsInfo.js');
require('../../Channel/utils/compareMessagesForGrouping.js');
require('./UnreadCount.js');
require('./FrozenNotification.js');
require('../../ui/TypingIndicatorBubble.js');
require('../../chunks/bundle-D0p__atb.js');
require('./SuggestedMentionList.js');
require('../../ui/QuoteMessageInput.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-CZSBLAvZ.js');
require('../hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-BtA6MlUR.js');

var GroupChannelUI = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    var channelUrl = context.channelUrl, fetchChannelError = context.fetchChannelError;
    // Inject components to presentation layer
    var _a = utils.deleteNullish(props), _b = _a.renderChannelHeader, renderChannelHeader = _b === void 0 ? function (props) { return React.createElement(GroupChannel_components_GroupChannelHeader.GroupChannelHeader, _tslib.__assign({}, props)); } : _b, _c = _a.renderMessageList, renderMessageList = _c === void 0 ? function (props) { return React.createElement(GroupChannel_components_MessageList.MessageList, _tslib.__assign({}, props, { className: "sendbird-conversation__message-list" })); } : _c, _d = _a.renderMessageInput, renderMessageInput = _d === void 0 ? function () { return React.createElement(GroupChannel_components_MessageInputWrapper.MessageInputWrapper, _tslib.__assign({}, props)); } : _d;
    return (React.createElement(GroupChannelUIView.GroupChannelUIView, _tslib.__assign({}, props, context, { isInvalid: fetchChannelError !== null, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

exports.GroupChannelUI = GroupChannelUI;
exports.default = GroupChannelUI;
//# sourceMappingURL=GroupChannelUI.js.map
