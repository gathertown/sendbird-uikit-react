import { _ as __assign } from '../../chunks/bundle-xhjHZ041.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { G as GroupChannelUIView } from '../../chunks/bundle-R242M88I.js';
import { GroupChannelHeader } from './GroupChannelHeader.js';
import { MessageList } from './MessageList.js';
import { MessageInputWrapper } from './MessageInputWrapper.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-9GBao6H-.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-jbaxtoFd.js';
import '../../chunks/bundle-2FjmmgQK.js';
import '../../chunks/bundle-QzNkWqn-.js';
import '../../chunks/bundle-WP5dHmdm.js';
import '../../chunks/bundle-UKdN0Ihw.js';
import '../../chunks/bundle-LgR-0X7v.js';
import '../../chunks/bundle-p0z4OS-3.js';
import '../../chunks/bundle-ycx-QBOb.js';
import '../../chunks/bundle-yarrTY_z.js';
import './TypingIndicator.js';
import '../../chunks/bundle-sR62lMVk.js';
import '../../chunks/bundle--MbN9aKT.js';
import '../../chunks/bundle-1inZXcUV.js';
import '../../chunks/bundle-V_fO-GlK.js';
import '../../chunks/bundle-BZ3hPsJ8.js';
import '../../chunks/bundle-pHGswDjf.js';
import '../../ui/ConnectionStatus.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-IDH-OOHE.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-6JMaNtxg.js';
import '../../ui/IconButton.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-VE0ige0C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-3a5xXUZv.js';
import '../../chunks/bundle-gIGIUJq-.js';
import '../../chunks/bundle-yo9mJeAv.js';
import '../../chunks/bundle-pjLq9qJd.js';
import '../../chunks/bundle-Jwc7mleJ.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-AN6QCsUL.js';
import './Message.js';
import '../../chunks/bundle-oPPgR68J.js';
import '../../chunks/bundle-o-FVZr_e.js';
import '../../chunks/bundle-tIdypo_v.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-nMxV4WMS.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-8RTviqdm.js';
import '../../ui/Button.js';
import '../../chunks/bundle-p0_Jj2xm.js';
import 'dompurify';
import '../../chunks/bundle-zp72gyE3.js';
import '../../chunks/bundle-kgn8HcWj.js';
import '../../chunks/bundle-_MABCkOp.js';
import '../../chunks/bundle-IqjS0ok_.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-Vt_Z-0RJ.js';
import '../../chunks/bundle--WYMGSfi.js';
import '../../chunks/bundle-RfBkMeJ1.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-K3cm7JxF.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-FgXHPuhY.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../hooks/useModal.js';
import '../../chunks/bundle-ixiL_3Ds.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-NGtuBFFS.js';
import '../../chunks/bundle-p4vToXS1.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-wKuesro0.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jdHt0GId.js';
import '../../chunks/bundle-mMigBvPD.js';
import '../../chunks/bundle-2hneibdl.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-JkSXeub7.js';
import '../../VoiceRecorder/context.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../Channel/components/MessageFeedbackModal.js';
import '../../ui/Input.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-Xqf5M3Yn.js';
import './FileViewer.js';
import '../../chunks/bundle-cTgQo7nT.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-0g_j3SgI.js';
import '../../chunks/bundle-9qb1BPMn.js';
import '../../Channel/utils/getMessagePartsInfo.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import './UnreadCount.js';
import './FrozenNotification.js';
import '../../ui/TypingIndicatorBubble.js';
import '../../chunks/bundle-nzfPi40W.js';
import './SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-1AXEYxoC.js';
import '../hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-FmRroF-I.js';

var GroupChannelUI = function (props) {
    var context = useGroupChannelContext();
    var channelUrl = context.channelUrl, fetchChannelError = context.fetchChannelError;
    // Inject components to presentation layer
    var _a = props.renderChannelHeader, renderChannelHeader = _a === void 0 ? function (props) { return React__default.createElement(GroupChannelHeader, __assign({}, props)); } : _a, _b = props.renderMessageList, renderMessageList = _b === void 0 ? function (props) { return React__default.createElement(MessageList, __assign({}, props, { className: "sendbird-conversation__message-list" })); } : _b, _c = props.renderMessageInput, renderMessageInput = _c === void 0 ? function () { return React__default.createElement(MessageInputWrapper, __assign({}, props)); } : _c;
    return (React__default.createElement(GroupChannelUIView, __assign({}, props, context, { isInvalid: fetchChannelError !== null, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

export { GroupChannelUI, GroupChannelUI as default };
//# sourceMappingURL=GroupChannelUI.js.map
