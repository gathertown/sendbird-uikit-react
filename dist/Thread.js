import React__default from 'react';
import { ThreadProvider } from './Thread/context.js';
import ThreadUI from './Thread/components/ThreadUI.js';
import './chunks/bundle-C311xsP9.js';
import './chunks/bundle-ixYJ-kgW.js';
import './chunks/bundle-TVGnyGwG.js';
import './chunks/bundle-h5nSe8RU.js';
import '@sendbird/chat/message';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-DuvSpEUl.js';
import './chunks/bundle-D4SykqtT.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './Thread/context/types.js';
import '@sendbird/chat';
import './chunks/bundle-Dil758s4.js';
import '@sendbird/chat/groupChannel';
import './chunks/bundle-1rHkiOvv.js';
import './chunks/bundle-_-u6U1pM.js';
import './chunks/bundle-BBVJixDe.js';
import './chunks/bundle-Bh_HZf7x.js';
import './chunks/bundle-DTkxB28y.js';
import './chunks/bundle-DQrTazCe.js';
import './chunks/bundle-DBtyGp-i.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-g-7qyWG4.js';
import './chunks/bundle-dMQnlgaN.js';
import './chunks/bundle-BpF0Qo8A.js';
import './chunks/bundle-CmPJV5ar.js';
import './chunks/bundle-CbUL9vb-.js';
import 'react-dom';
import './chunks/bundle-BfXjuJZP.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import './chunks/bundle-Blox0Tl9.js';
import './chunks/bundle-BsPw6HPN.js';
import './chunks/bundle-KOP8NnFs.js';
import './Thread/components/ParentMessageInfoItem.js';
import './ui/ImageRenderer.js';
import './ui/TextButton.js';
import './chunks/bundle-CeRxCnOB.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/ReactionButton.js';
import './chunks/bundle-TmVTNucb.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './chunks/bundle-BJEESw7S.js';
import './chunks/bundle-RDd4rAzg.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './chunks/bundle-Dc3tamRJ.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/Loader.js';
import './chunks/bundle-_lgzP0oA.js';
import './chunks/bundle-CjXL-Zhv.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './chunks/bundle-BRQsywy2.js';
import './chunks/bundle-CxH5pvZA.js';
import './chunks/bundle-B8YFOQl1.js';
import './chunks/bundle-CYJUjTIO.js';
import './chunks/bundle-DTBDVk9A.js';
import './chunks/bundle-Qz_mnbcy.js';
import './chunks/bundle-DyyEjGYc.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-BGsrkr_s.js';
import './ui/MessageItemReactionMenu.js';
import './ui/MessageInput.js';
import './chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import './chunks/bundle-D0BqMFi-.js';
import './chunks/bundle-jiObN6zC.js';
import './chunks/bundle-Dnb-49Dd.js';
import './chunks/bundle-Bdj4fv0v.js';
import './Message/hooks/useDirtyGetMentions.js';
import './chunks/bundle-Bu9i9TgZ.js';
import './Thread/components/ThreadHeader.js';
import './ui/Header.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import './ui/DateSeparator.js';
import './chunks/bundle-_orI-r2C.js';
import './chunks/bundle-CLbk4-g8.js';
import './chunks/bundle-BlILx8DA.js';
import './ui/TextMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './chunks/bundle-BKQYQg-b.js';
import './ui/UnknownMessageItemBody.js';
import './Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './chunks/bundle-IAX1zdhk.js';
import './chunks/bundle-BpISf_VF.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-Cl7RLJio.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-D4dNsiFL.js';
import './GroupChannel/context.js';
import './chunks/bundle-DZNsjEo9.js';
import './chunks/bundle-D2TKgUHv.js';
import './chunks/bundle-DE6jjGXF.js';
import './chunks/bundle-BZNaK1IM.js';
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
