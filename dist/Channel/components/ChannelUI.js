import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { useChannelContext } from '../context.js';
import { G as GroupChannelUIView } from '../../chunks/bundle-BVxI91X_.js';
import { ChannelHeader } from './ChannelHeader.js';
import { MessageList } from './MessageList.js';
import { MessageInputWrapper } from './MessageInput.js';
import { d as deleteNullish } from '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-bFnpVx53.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-Cd6XSYjN.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-B-v_xYnH.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../ui/ConnectionStatus.js';
import '../../ui/Icon.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-DzeuvTbj.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-DD5Dgrc3.js';
import '../../chunks/bundle-C2aCBM4p.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/Header.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/IconButton.js';
import './Message.js';
import '../../chunks/bundle-BMQcX4ES.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-B9Guj1rz.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-Djp37I3i.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
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
import '../../chunks/bundle-CgW0dqme.js';
import '../../chunks/bundle-CYWkde8y.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-iau93d70.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../chunks/bundle-DOhbdcnA.js';
import '../../chunks/bundle-DBtx2Gk9.js';
import '../../chunks/bundle-CQ1BOFUN.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-DAWn6RVy.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-BehMbQaw.js';
import './FileViewer.js';
import '../../chunks/bundle-CpMVUlSc.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-Zc1QPz7M.js';
import '../../chunks/bundle-DwXszhWd.js';
import '../../GroupChannel/components/UnreadCount.js';
import '../../GroupChannel/components/FrozenNotification.js';
import '../../chunks/bundle-Vhx3hiGW.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../ui/TypingIndicatorBubble.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../utils/getMessagePartsInfo.js';
import '../utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-6DgbtIRj.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-BdCaC6yk.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-W3ZSZMhY.js';

var ChannelUI = function (props) {
    var context = useChannelContext();
    var channelUrl = context.channelUrl, isInvalid = context.isInvalid;
    // Inject components to presentation layer
    var _a = deleteNullish(props), _b = _a.renderChannelHeader, renderChannelHeader = _b === void 0 ? function (p) { return React__default.createElement(ChannelHeader, __assign({}, p)); } : _b, _c = _a.renderMessageList, renderMessageList = _c === void 0 ? function (p) { return React__default.createElement(MessageList, __assign({}, p, { className: "sendbird-conversation__message-list" })); } : _c, _d = _a.renderMessageInput, renderMessageInput = _d === void 0 ? function () { return React__default.createElement(MessageInputWrapper, __assign({}, props)); } : _d;
    return (React__default.createElement(GroupChannelUIView, __assign({}, props, context, { isLoading: props === null || props === void 0 ? void 0 : props.isLoading, isInvalid: isInvalid, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

export { ChannelUI as default };
//# sourceMappingURL=ChannelUI.js.map
