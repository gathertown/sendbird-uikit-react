import { _ as __assign } from '../../chunks/bundle-UnAcr6wX.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { G as GroupChannelUIView } from '../../chunks/bundle-2nnZrM7w.js';
import { GroupChannelHeader } from './GroupChannelHeader.js';
import { MessageList } from './MessageList.js';
import { MessageInputWrapper } from './MessageInputWrapper.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-jDtVwIPR.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-XFxecIn0.js';
import '../../chunks/bundle-iU7PXFos.js';
import '../../chunks/bundle-7nLQi_YH.js';
import '../../chunks/bundle-WFlcI9AO.js';
import '../../chunks/bundle-1CfFFBx9.js';
import '../../chunks/bundle-H77M-_wK.js';
import '../../chunks/bundle-6aMfjTWv.js';
import '../../chunks/bundle-_6EZcp4H.js';
import '../../chunks/bundle-7BSf_PUT.js';
import './TypingIndicator.js';
import '../../chunks/bundle-ljRDDTki.js';
import '../../chunks/bundle-PIrj5Rm1.js';
import '../../chunks/bundle-hS8Jw8F1.js';
import '../../chunks/bundle-8u3PnqsX.js';
import '../../chunks/bundle-0Kp88b8b.js';
import '../../chunks/bundle-djjOQJpz.js';
import '../../ui/ConnectionStatus.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CRwhglru.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-6uJ_roBM.js';
import '../../ui/IconButton.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-LbQw2cVx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-fNigAmmf.js';
import '../../chunks/bundle-k8wZLjPN.js';
import '../../chunks/bundle-_9Y5-6si.js';
import '../../chunks/bundle-qlkGlvyT.js';
import '../../chunks/bundle-WrTlYypL.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-UuydkZ4A.js';
import './Message.js';
import '../../chunks/bundle-Dv-ua0wB.js';
import '../../chunks/bundle-ePTRDi6d.js';
import '../../chunks/bundle--NfXT-0k.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-02rQraFs.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-NK74hfcu.js';
import '../../ui/Button.js';
import '../../chunks/bundle-i3GNeBO2.js';
import 'dompurify';
import '../../chunks/bundle-v7DbCTsH.js';
import '../../chunks/bundle-BInhYJCq.js';
import '../../chunks/bundle-D_x1OSEQ.js';
import '../../chunks/bundle-coC6nc_5.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-FTNAU8Uq.js';
import '../../chunks/bundle-uq2crLI0.js';
import '../../chunks/bundle-6_aRz_Ld.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-AGNrfX7p.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-okHpD60h.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../hooks/useModal.js';
import '../../chunks/bundle--BlhOpUS.js';
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
import '../../chunks/bundle-S6OaNh10.js';
import '../../chunks/bundle-Z-iEmjEQ.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-1q5AhvE7.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-2C9iP99S.js';
import '../../chunks/bundle-YfeG6LQ5.js';
import '../../chunks/bundle-KL4mvVMo.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-r7HG_ptO.js';
import '../../VoiceRecorder/context.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../Channel/components/MessageFeedbackModal.js';
import '../../ui/Input.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-VwofrwBu.js';
import './FileViewer.js';
import '../../chunks/bundle-thfg3MZH.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-4fSjujOF.js';
import '../../chunks/bundle-zcfKjxS7.js';
import '../../Channel/utils/getMessagePartsInfo.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import './UnreadCount.js';
import './FrozenNotification.js';
import '../../ui/TypingIndicatorBubble.js';
import '../../chunks/bundle-RbS_k--P.js';
import './SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Syx3NAbT.js';
import '../hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-QJa2lTJw.js';

var GroupChannelUI = function (props) {
    var context = useGroupChannelContext();
    var channelUrl = context.channelUrl, fetchChannelError = context.fetchChannelError;
    // Inject components to presentation layer
    var _a = props.renderChannelHeader, renderChannelHeader = _a === void 0 ? function (props) { return React__default.createElement(GroupChannelHeader, __assign({}, props)); } : _a, _b = props.renderMessageList, renderMessageList = _b === void 0 ? function (props) { return React__default.createElement(MessageList, __assign({}, props, { className: "sendbird-conversation__message-list" })); } : _b, _c = props.renderMessageInput, renderMessageInput = _c === void 0 ? function () { return React__default.createElement(MessageInputWrapper, __assign({}, props)); } : _c;
    return (React__default.createElement(GroupChannelUIView, __assign({}, props, context, { isInvalid: fetchChannelError !== null, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

export { GroupChannelUI, GroupChannelUI as default };
//# sourceMappingURL=GroupChannelUI.js.map
