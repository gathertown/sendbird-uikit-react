'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./chunks/bundle-xbdnJE9-.js');
var React = require('react');
var GroupChannel_context = require('./GroupChannel/context.js');
var GroupChannel_components_GroupChannelUI = require('./GroupChannel/components/GroupChannelUI.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('./chunks/bundle-uzKywAVp.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-H29alxvs.js');
require('./chunks/bundle-MK0CJsqZ.js');
require('./chunks/bundle-U2YYVRfT.js');
require('./chunks/bundle-48AiK3oz.js');
require('./chunks/bundle-Atn5EZwu.js');
require('./chunks/bundle-6xWNZugu.js');
require('./chunks/bundle-Zw2P8RwZ.js');
require('./chunks/bundle-2xXFQXmk.js');
require('./chunks/bundle-VqRllkVd.js');
require('./chunks/bundle-OSMOOULc.js');
require('./GroupChannel/components/TypingIndicator.js');
require('./chunks/bundle-KkCwxjVN.js');
require('./chunks/bundle-Yzhiyr0t.js');
require('./chunks/bundle-WKa05h0_.js');
require('./chunks/bundle-HY8cubCp.js');
require('./chunks/bundle-SOIkTCep.js');
require('./chunks/bundle-gZD5lzcX.js');
require('./ui/ConnectionStatus.js');
require('./ui/Icon.js');
require('./chunks/bundle-jCTpndN0.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./GroupChannel/components/GroupChannelHeader.js');
require('./chunks/bundle-7NDZV1cp.js');
require('./ui/IconButton.js');
require('./ui/ChannelAvatar.js');
require('./chunks/bundle--jUKLwRX.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-kftX5Dbs.js');
require('./chunks/bundle-aadmp473.js');
require('./chunks/bundle-ZXiz-rp_.js');
require('./chunks/bundle-4WvE40Un.js');
require('./GroupChannel/components/MessageList.js');
require('./chunks/bundle-Uw6P-cM9.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-tNuJSOqI.js');
require('./GroupChannel/components/Message.js');
require('./chunks/bundle-Q3LgnX7F.js');
require('./chunks/bundle-KOig1nUx.js');
require('./chunks/bundle-pi-jk3re.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-0uk8Bfy0.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-ZK5PhDxY.js');
require('./ui/Button.js');
require('./chunks/bundle-d6SaHkg0.js');
require('dompurify');
require('./chunks/bundle-h9YDQxpQ.js');
require('./chunks/bundle-fqNhuMna.js');
require('./chunks/bundle-yk__vyz_.js');
require('./chunks/bundle-2_j4r1Cc.js');
require('./ui/MessageContent.js');
require('./chunks/bundle-VehpyAT7.js');
require('./chunks/bundle-_wF3sJvp.js');
require('./chunks/bundle-iPt3h7ba.js');
require('./ui/MessageItemMenu.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./chunks/bundle-K3wEmKTu.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-pOf7PZ4G.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/BottomSheet.js');
require('./hooks/useModal.js');
require('./chunks/bundle-6hGNMML2.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./ui/AdminMessage.js');
require('./ui/QuoteMessage.js');
require('./chunks/bundle--4Ob_RGQ.js');
require('./chunks/bundle-m5pFb_tZ.js');
require('./ui/ThreadReplies.js');
require('./ui/OGMessageItemBody.js');
require('./chunks/bundle-DqKLlsGU.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./ui/TextMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/TextButton.js');
require('./chunks/bundle-wezC76id.js');
require('./chunks/bundle-s5WIvT8N.js');
require('./chunks/bundle-noP7JXqE.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./chunks/bundle-jXnX-7jH.js');
require('./VoiceRecorder/context.js');
require('./ui/PlaybackTime.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/FeedbackIconButton.js');
require('./ui/MobileFeedbackMenu.js');
require('./Channel/components/MessageFeedbackModal.js');
require('./ui/Input.js');
require('./GroupChannel/components/SuggestedReplies.js');
require('./chunks/bundle-rYFzQpzQ.js');
require('./GroupChannel/components/FileViewer.js');
require('./chunks/bundle-JARyNexc.js');
require('./GroupChannel/components/RemoveMessageModal.js');
require('./chunks/bundle-L8T4CdY4.js');
require('./chunks/bundle-gOYUXAiI.js');
require('./Channel/utils/getMessagePartsInfo.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./GroupChannel/components/UnreadCount.js');
require('./GroupChannel/components/FrozenNotification.js');
require('./ui/TypingIndicatorBubble.js');
require('./GroupChannel/components/MessageInputWrapper.js');
require('./chunks/bundle-Xa3hXyhu.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-pKCe2hVu.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-a5LHhP6m.js');

var GroupChannel = function (props) {
    return (React.createElement(GroupChannel_context.GroupChannelProvider, _tslib.__assign({}, props),
        React.createElement(GroupChannel_components_GroupChannelUI.GroupChannelUI, _tslib.__assign({}, props))));
};

exports.GroupChannel = GroupChannel;
exports.default = GroupChannel;
//# sourceMappingURL=GroupChannel.js.map
