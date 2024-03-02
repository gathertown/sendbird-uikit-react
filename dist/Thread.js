import React__default from 'react';
import { ThreadProvider } from './Thread/context.js';
import ThreadUI from './Thread/components/ThreadUI.js';
import './chunks/bundle-B-v_xYnH.js';
import './chunks/bundle-Cf2xHdC2.js';
import './chunks/bundle-se836s50.js';
import './chunks/bundle-D8IuvsaW.js';
import '@sendbird/chat/message';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-w0s865vS.js';
import './chunks/bundle-BxO5H6aF.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './Thread/context/types.js';
import '@sendbird/chat';
import './chunks/bundle-COwB5DaQ.js';
import '@sendbird/chat/groupChannel';
import './chunks/bundle-DgRY6xy0.js';
import './chunks/bundle-BFBEOrCk.js';
import './chunks/bundle-CRmP70eG.js';
import './chunks/bundle-C9nxq4KD.js';
import './chunks/bundle-k7V2rNcW.js';
import './chunks/bundle-C2aCBM4p.js';
import './chunks/bundle-BNNafMXS.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-BlLFOUrw.js';
import './chunks/bundle-BhfKBScq.js';
import './chunks/bundle-BfCFd-dO.js';
import './chunks/bundle-BnYBX14T.js';
import './chunks/bundle-0yILBaSQ.js';
import 'react-dom';
import './chunks/bundle-BBhSg6C_.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CwSlabaO.js';
import './chunks/bundle-CNHxvPPg.js';
import './chunks/bundle-DwXszhWd.js';
import './Thread/components/ParentMessageInfoItem.js';
import './ui/ImageRenderer.js';
import './ui/TextButton.js';
import './chunks/bundle-nY4hBePV.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/ReactionButton.js';
import './chunks/bundle-BaiQZ39W.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './chunks/bundle-CvlHmT5j.js';
import './chunks/bundle-ttSanjmp.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './chunks/bundle-Dn-yaG7j.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/Loader.js';
import './chunks/bundle-iau93d70.js';
import './chunks/bundle-CPqFGv23.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './chunks/bundle-DOhbdcnA.js';
import './chunks/bundle-DBtx2Gk9.js';
import './chunks/bundle-CQ1BOFUN.js';
import './chunks/bundle-Ce5GUZrO.js';
import './chunks/bundle-BehMbQaw.js';
import './chunks/bundle-DQwQl7bP.js';
import './chunks/bundle-8UWMMSrw.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-Djp37I3i.js';
import './ui/MessageItemReactionMenu.js';
import './ui/MessageInput.js';
import './chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import './chunks/bundle-DqsDxEmW.js';
import './chunks/bundle-CGHxY6Os.js';
import './chunks/bundle-B8-kxXoE.js';
import './chunks/bundle-CYWkde8y.js';
import './Message/hooks/useDirtyGetMentions.js';
import './chunks/bundle-CvlF6SbQ.js';
import './Thread/components/ThreadHeader.js';
import './ui/Header.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import './ui/DateSeparator.js';
import './chunks/bundle-B9Guj1rz.js';
import './chunks/bundle-CCxOcaGS.js';
import './chunks/bundle-Ch8Obp48.js';
import './ui/TextMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './chunks/bundle-CgW0dqme.js';
import './ui/UnknownMessageItemBody.js';
import './Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './chunks/bundle-6DgbtIRj.js';
import './chunks/bundle-BEXtjKJK.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-BdCaC6yk.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-W3ZSZMhY.js';
import './GroupChannel/context.js';
import './chunks/bundle-BNAtsapc.js';
import './chunks/bundle-CbyShdHS.js';
import './chunks/bundle-DgYc_vhn.js';
import './chunks/bundle-BWic18XY.js';
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
