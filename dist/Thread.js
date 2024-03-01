import React__default from 'react';
import { ThreadProvider } from './Thread/context.js';
import ThreadUI from './Thread/components/ThreadUI.js';
import './chunks/bundle-CGLTg9iX.js';
import './chunks/bundle-c0D1F768.js';
import './chunks/bundle-mvJ9QD_D.js';
import './chunks/bundle-5LMP4qQC.js';
import '@sendbird/chat/message';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-CzOn0UCC.js';
import './chunks/bundle-B0Dbuu28.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './Thread/context/types.js';
import '@sendbird/chat';
import './chunks/bundle-VHqJlR18.js';
import '@sendbird/chat/groupChannel';
import './chunks/bundle-BJD56sGG.js';
import './chunks/bundle-D--y2PXM.js';
import './chunks/bundle-BW5JWhMG.js';
import './chunks/bundle-BeAHyfuE.js';
import './chunks/bundle-DyVsaRLS.js';
import './chunks/bundle-CHkMSFMV.js';
import './chunks/bundle-DvIsR7kQ.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-C-kkBK84.js';
import './chunks/bundle-CsiGOjIf.js';
import './chunks/bundle-xaiK2tjx.js';
import './chunks/bundle-7Av17Vus.js';
import './chunks/bundle-QtD1UM1r.js';
import 'react-dom';
import './chunks/bundle-U_2B1aWq.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DtWPTHU4.js';
import './chunks/bundle-BpHmAKa2.js';
import './chunks/bundle-CfMartL1.js';
import './Thread/components/ParentMessageInfoItem.js';
import './ui/ImageRenderer.js';
import './ui/TextButton.js';
import './chunks/bundle-CfII9A10.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/ReactionButton.js';
import './chunks/bundle-DbPsZWNm.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './chunks/bundle-DCv5_AWJ.js';
import './chunks/bundle-Dzc4np9L.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './chunks/bundle-Hkpc7KpA.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/Loader.js';
import './chunks/bundle-vKEHnwCU.js';
import './chunks/bundle-Bj505YcV.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './chunks/bundle-DtUd3Fkz.js';
import './chunks/bundle-Cg9ONuBG.js';
import './chunks/bundle-C160porH.js';
import './chunks/bundle-2qin9H84.js';
import './chunks/bundle-jzCf_x2O.js';
import './chunks/bundle-6itdh-PI.js';
import './chunks/bundle-IoL2Eken.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-BWzgMOjJ.js';
import './ui/MessageItemReactionMenu.js';
import './ui/MessageInput.js';
import './chunks/bundle-DGq3-eYB.js';
import 'dompurify';
import './chunks/bundle-BrbMpwH_.js';
import './chunks/bundle-DBk8133F.js';
import './chunks/bundle-BP0NKLAx.js';
import './chunks/bundle-D5RayXbV.js';
import './Message/hooks/useDirtyGetMentions.js';
import './chunks/bundle-CTUiHvvY.js';
import './Thread/components/ThreadHeader.js';
import './ui/Header.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import './ui/DateSeparator.js';
import './chunks/bundle-CL5Sk05l.js';
import './chunks/bundle-CCNsWru5.js';
import './chunks/bundle-Ci84mwTW.js';
import './ui/TextMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './chunks/bundle-B_KMvG4e.js';
import './ui/UnknownMessageItemBody.js';
import './Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './chunks/bundle-BmuLOcMI.js';
import './chunks/bundle-BURD6lB9.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-jZVn7NFj.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-8VKseiqC.js';
import './GroupChannel/context.js';
import './chunks/bundle-Cs0iNLFK.js';
import './chunks/bundle-CPs5faB9.js';
import './chunks/bundle-TBQO6kEO.js';
import './chunks/bundle-DOAIKZSq.js';
import './Channel/hooks/useHandleUploadFiles.js';
import './ui/PlaceHolder.js';

var Thread = function (props) {
    var 
    // props
    className = props.className, 
    // ThreadProviderProps
    channelUrl = props.channelUrl, message = props.message, onHeaderActionClick = props.onHeaderActionClick, onMoveToParentMessage = props.onMoveToParentMessage, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, 
    // onBeforeSend~~~Message
    onBeforeSendUserMessage = props.onBeforeSendUserMessage, onBeforeSendFileMessage = props.onBeforeSendFileMessage, onBeforeSendVoiceMessage = props.onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage = props.onBeforeSendMultipleFilesMessage, 
    // ThreadUIProps
    renderHeader = props.renderHeader, renderParentMessageInfo = props.renderParentMessageInfo, renderMessage = props.renderMessage, renderMessageInput = props.renderMessageInput, renderCustomSeparator = props.renderCustomSeparator, renderParentMessageInfoPlaceholder = props.renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder = props.renderThreadListPlaceHolder, renderFileUploadIcon = props.renderFileUploadIcon, renderVoiceMessageIcon = props.renderVoiceMessageIcon, renderSendMessageIcon = props.renderSendMessageIcon;
    return (React__default.createElement("div", { className: "sendbird-thread ".concat(className) },
        React__default.createElement(ThreadProvider, { channelUrl: channelUrl, message: message, onHeaderActionClick: onHeaderActionClick, onMoveToParentMessage: onMoveToParentMessage, onBeforeSendUserMessage: onBeforeSendUserMessage, onBeforeSendFileMessage: onBeforeSendFileMessage, onBeforeSendVoiceMessage: onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage: onBeforeSendMultipleFilesMessage, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled },
            React__default.createElement(ThreadUI, { renderHeader: renderHeader, renderParentMessageInfo: renderParentMessageInfo, renderMessage: renderMessage, renderMessageInput: renderMessageInput, renderCustomSeparator: renderCustomSeparator, renderParentMessageInfoPlaceholder: renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder: renderThreadListPlaceHolder, renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

export { Thread as default };
//# sourceMappingURL=Thread.js.map
