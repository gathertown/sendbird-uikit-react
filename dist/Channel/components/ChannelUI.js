import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { useChannelContext } from '../context.js';
import { G as GroupChannelUIView } from '../../chunks/bundle-2y2QG-k8.js';
import { ChannelHeader } from './ChannelHeader.js';
import { MessageList } from './MessageList.js';
import { MessageInputWrapper } from './MessageInput.js';
import { d as deleteNullish } from '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-B7dWJiLf.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-DuFEev3g.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CgMvdzKN.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-ChvmrzFX.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../ui/ConnectionStatus.js';
import '../../ui/Icon.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-DDaPfQqk.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-DccoJxVN.js';
import '../../chunks/bundle-RhEG-6rt.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/Header.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/IconButton.js';
import './Message.js';
import '../../chunks/bundle-D_ilFXVx.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-D8nOQMZK.js';
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
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
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
import '../../chunks/bundle-CO0PW_ND.js';
import '../../chunks/bundle-CrzldF0k.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-CHFeqEtk.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
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
import './FileViewer.js';
import '../../chunks/bundle-PF08uncu.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-BknFMGO5.js';
import '../../chunks/bundle-BjdNFz7H.js';
import '../../GroupChannel/components/UnreadCount.js';
import '../../GroupChannel/components/FrozenNotification.js';
import '../../chunks/bundle-3cQg389j.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../ui/TypingIndicatorBubble.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../utils/getMessagePartsInfo.js';
import '../utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-CAg8fbpE.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Cd6B0Zmh.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-DKsuU1oI.js';

var ChannelUI = function (props) {
    var context = useChannelContext();
    var channelUrl = context.channelUrl, isInvalid = context.isInvalid;
    // Inject components to presentation layer
    var _a = deleteNullish(props), _b = _a.renderChannelHeader, renderChannelHeader = _b === void 0 ? function (p) { return React__default.createElement(ChannelHeader, __assign({}, p)); } : _b, _c = _a.renderMessageList, renderMessageList = _c === void 0 ? function (p) { return React__default.createElement(MessageList, __assign({}, p, { className: "sendbird-conversation__message-list" })); } : _c, _d = _a.renderMessageInput, renderMessageInput = _d === void 0 ? function () { return React__default.createElement(MessageInputWrapper, __assign({}, props)); } : _d;
    return (React__default.createElement(GroupChannelUIView, __assign({}, props, context, { isLoading: props === null || props === void 0 ? void 0 : props.isLoading, isInvalid: isInvalid, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

export { ChannelUI as default };
//# sourceMappingURL=ChannelUI.js.map