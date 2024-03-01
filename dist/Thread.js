import React__default from 'react';
import { ThreadProvider } from './Thread/context.js';
import ThreadUI from './Thread/components/ThreadUI.js';
import './chunks/bundle-ChvmrzFX.js';
import './chunks/bundle-oBEHM7Oi.js';
import './chunks/bundle-CIf4rTGV.js';
import './chunks/bundle-BpxXmFQC.js';
import '@sendbird/chat/message';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-GlkAQINh.js';
import './chunks/bundle-CnPq00g2.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './Thread/context/types.js';
import '@sendbird/chat';
import './chunks/bundle-B7dWJiLf.js';
import '@sendbird/chat/groupChannel';
import './chunks/bundle-DLrfv-Hf.js';
import './chunks/bundle-CCH_gmPY.js';
import './chunks/bundle-VRwQbdO6.js';
import './chunks/bundle-fFCkIdkP.js';
import './chunks/bundle-BIDYJkIe.js';
import './chunks/bundle-RhEG-6rt.js';
import './chunks/bundle-ZpyLpKbV.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-C4J9I_bG.js';
import './chunks/bundle-C2bpORYe.js';
import './chunks/bundle-OZ70K6ig.js';
import './chunks/bundle-4cxEU_h1.js';
import './chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import './chunks/bundle-NTpQiCzz.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DOX5a7sk.js';
import './chunks/bundle-CmoRaDho.js';
import './chunks/bundle-BjdNFz7H.js';
import './Thread/components/ParentMessageInfoItem.js';
import './ui/ImageRenderer.js';
import './ui/TextButton.js';
import './chunks/bundle-jY1v8xbA.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/ReactionButton.js';
import './chunks/bundle-7w1t0thc.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './chunks/bundle-D7hWtRqW.js';
import './chunks/bundle-DjvfRFVm.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './chunks/bundle-BOvQopMz.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/Loader.js';
import './chunks/bundle-CHFeqEtk.js';
import './chunks/bundle-Z7nfE2Su.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './chunks/bundle-BtZTAJgc.js';
import './chunks/bundle-BKH-CUXx.js';
import './chunks/bundle-vKqXYEfp.js';
import './chunks/bundle-CoNwTeeo.js';
import './chunks/bundle-CHpLoyhB.js';
import './chunks/bundle-CLBxUFi0.js';
import './chunks/bundle-DdjSgEBI.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-CTZh68w8.js';
import './ui/MessageItemReactionMenu.js';
import './ui/MessageInput.js';
import './chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import './chunks/bundle-B-B5rbcY.js';
import './chunks/bundle-dp1lZZxR.js';
import './chunks/bundle-C4OSzTlA.js';
import './chunks/bundle-CrzldF0k.js';
import './Message/hooks/useDirtyGetMentions.js';
import './chunks/bundle-BzfhGr6P.js';
import './Thread/components/ThreadHeader.js';
import './ui/Header.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import './ui/DateSeparator.js';
import './chunks/bundle-D8nOQMZK.js';
import './chunks/bundle-BOFstL3F.js';
import './chunks/bundle-vUCKPp-d.js';
import './ui/TextMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './chunks/bundle-CO0PW_ND.js';
import './ui/UnknownMessageItemBody.js';
import './Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './chunks/bundle-CAg8fbpE.js';
import './chunks/bundle-BFPIaXWl.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-Cd6B0Zmh.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-DKsuU1oI.js';
import './GroupChannel/context.js';
import './chunks/bundle-BKYZA3wN.js';
import './chunks/bundle-C0cag-Px.js';
import './chunks/bundle-CFNlvlB-.js';
import './chunks/bundle-D_-LQOFW.js';
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
