import { _ as __assign } from '../../chunks/bundle-KMsJXUN2.js';
import React__default from 'react';
import { useChannelContext } from '../context.js';
import { G as GroupChannelUIView } from '../../chunks/bundle-pVz6mMMM.js';
import { ChannelHeader } from './ChannelHeader.js';
import { MessageList } from './MessageList.js';
import { MessageInputWrapper } from './MessageInput.js';
import '../../chunks/bundle-x78eEPy7.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-hKmRj7Ck.js';
import '../../chunks/bundle-fO5XIU5Y.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-ay4_3U9k.js';
import '../../chunks/bundle-vbGNKQpe.js';
import '../../chunks/bundle-CsWYoRVd.js';
import '../../chunks/bundle-LZemF1A7.js';
import '../../chunks/bundle-Vkdvpta0.js';
import '../../chunks/bundle-xlx3bBW8.js';
import '../../chunks/bundle-1653azYX.js';
import '../../chunks/bundle-AFXr5NmI.js';
import '../../chunks/bundle-ZnLsMTHr.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-4_6x-RiC.js';
import '../../chunks/bundle-9zSaTC1n.js';
import '../../chunks/bundle-THTV9S18.js';
import '../../chunks/bundle-TLAngIsc.js';
import '../../chunks/bundle-4Q6J8UBD.js';
import '../../chunks/bundle-DJdbc2nP.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../chunks/bundle-kMMCn6GE.js';
import '../../chunks/bundle-Tg3CrpQU.js';
import '../../chunks/bundle-msnuMA4R.js';
import '../../chunks/bundle-sn2-VCB3.js';
import '../../ui/ConnectionStatus.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-7YRb7CRq.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-yWUWCKD5.js';
import '../../ui/IconButton.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-OJq071GK.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DhS-f2ZT.js';
import '../../chunks/bundle-E4eEah-U.js';
import '../../chunks/bundle-YvC6HhRC.js';
import '../../chunks/bundle-ZTmwWu_-.js';
import './Message.js';
import '../../chunks/bundle-lWG-n9p0.js';
import '../../chunks/bundle-38Dx0S9V.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-nGuCRoDK.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-NOh3ukH6.js';
import '../../ui/Button.js';
import '../../chunks/bundle-1uBgZh_D.js';
import 'dompurify';
import '../../chunks/bundle-qauKidkr.js';
import '../../chunks/bundle-wf7f-9LT.js';
import '../../chunks/bundle-cMznkLt0.js';
import '../../chunks/bundle-pODFB39J.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-GQ4rK0ER.js';
import '../../chunks/bundle-vWrgNSvP.js';
import '../../chunks/bundle-SpfAN5pr.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-lJ2SrsKF.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-3iFqiLDd.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../hooks/useModal.js';
import '../../chunks/bundle-O8mkJ7az.js';
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
import '../../chunks/bundle--jWawO0i.js';
import '../../chunks/bundle-m-u0cD67.js';
import '../../ui/ThreadReplies.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-AjBmMBJ5.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-pWK0f3qD.js';
import '../../chunks/bundle-13MqUbIu.js';
import '../../chunks/bundle-HUsfnqzD.js';
import '@sendbird/uikit-tools';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-8TMXvllw.js';
import '../../VoiceRecorder/context.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import './MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-CLnDoxQc.js';
import './FileViewer.js';
import '../../chunks/bundle-3wHCboJc.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-JMkFT5Td.js';
import '../../chunks/bundle-pZ049TQg.js';
import '../../GroupChannel/components/UnreadCount.js';
import '../../GroupChannel/components/FrozenNotification.js';
import '../../chunks/bundle-zhxgqh8X.js';
import '../../chunks/bundle-JMVaVraV.js';
import '../../ui/TypingIndicatorBubble.js';
import '../../chunks/bundle-lPKA2RTf.js';
import '../utils/getMessagePartsInfo.js';
import '../utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-zv656l7I.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-M3g0UgDk.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-J4Twjc27.js';

var ChannelUI = function (props) {
    var context = useChannelContext();
    var channelUrl = context.channelUrl, isInvalid = context.isInvalid;
    // Inject components to presentation layer
    var _a = props.renderChannelHeader, renderChannelHeader = _a === void 0 ? function (p) { return React__default.createElement(ChannelHeader, __assign({}, p)); } : _a, _b = props.renderMessageList, renderMessageList = _b === void 0 ? function (p) { return React__default.createElement(MessageList, __assign({}, p, { className: "sendbird-conversation__message-list" })); } : _b, _c = props.renderMessageInput, renderMessageInput = _c === void 0 ? function () { return React__default.createElement(MessageInputWrapper, __assign({}, props)); } : _c;
    return (React__default.createElement(GroupChannelUIView, __assign({}, props, context, { isLoading: props === null || props === void 0 ? void 0 : props.isLoading, isInvalid: isInvalid, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

export { ChannelUI as default };
//# sourceMappingURL=ChannelUI.js.map
