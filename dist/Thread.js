import React__default from 'react';
import { ThreadProvider } from './Thread/context.js';
import ThreadUI from './Thread/components/ThreadUI.js';
import './chunks/bundle-DjAc13S7.js';
import './chunks/bundle-CIiROwS_.js';
import './chunks/bundle-B-z3huWI.js';
import './chunks/bundle-s7uQ7zAa.js';
import '@sendbird/chat/message';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-BUsOkeT7.js';
import './chunks/bundle-DSd-G7ux.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './Thread/context/types.js';
import '@sendbird/chat';
import './chunks/bundle-BMf2Gp0X.js';
import '@sendbird/chat/groupChannel';
import './chunks/bundle-Caf8F3YR.js';
import './chunks/bundle-BHNYgnEs.js';
import './chunks/bundle-BwcI3bWM.js';
import './chunks/bundle-DqWrl4d1.js';
import './chunks/bundle-Dyt8DaMp.js';
import './chunks/bundle-CqgM2owU.js';
import './chunks/bundle-BOy_tVjz.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-Dac-NyF8.js';
import './chunks/bundle-DI25B_zK.js';
import './chunks/bundle-Zq-75Hl4.js';
import './chunks/bundle-D-z4U1wX.js';
import './chunks/bundle-BJmqupdN.js';
import 'react-dom';
import './chunks/bundle-Bs8Nuk02.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CuXnBg6p.js';
import './chunks/bundle-BytW9Azl.js';
import './chunks/bundle-q0J75T9g.js';
import './Thread/components/ParentMessageInfoItem.js';
import './ui/ImageRenderer.js';
import './ui/TextButton.js';
import './chunks/bundle-DZZlGxSQ.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/ReactionButton.js';
import './chunks/bundle-DqwaElIt.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './chunks/bundle-BAao5L-j.js';
import './chunks/bundle-BIF2bCQz.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './chunks/bundle-k5z_1yHM.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/Loader.js';
import './chunks/bundle-CoLFT4a9.js';
import './chunks/bundle-CmBoH2-J.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './chunks/bundle-B_Ka0sX0.js';
import './chunks/bundle-D9H0zuk1.js';
import './chunks/bundle-By1BYZYf.js';
import './chunks/bundle-C0ryDw4r.js';
import './chunks/bundle-Co8U-uRc.js';
import './chunks/bundle-DyO1n8fC.js';
import './chunks/bundle-Dlljvt37.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-CU1y-8Hl.js';
import './ui/MessageItemReactionMenu.js';
import './ui/MessageInput.js';
import './chunks/bundle-BYAK1f5c.js';
import 'dompurify';
import './chunks/bundle-CLXgPaQv.js';
import './chunks/bundle-D0Du43TQ.js';
import './chunks/bundle-CERaU6Re.js';
import './chunks/bundle-CNgxRTaJ.js';
import './Message/hooks/useDirtyGetMentions.js';
import './chunks/bundle-C7dAdhH1.js';
import './Thread/components/ThreadHeader.js';
import './ui/Header.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import './ui/DateSeparator.js';
import './chunks/bundle-DsHrFpwT.js';
import './chunks/bundle-B482kNJl.js';
import './chunks/bundle-DuWC7Y9x.js';
import './ui/TextMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './chunks/bundle-D7eq_YKI.js';
import './ui/UnknownMessageItemBody.js';
import './Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './chunks/bundle-EVUaLXYQ.js';
import './chunks/bundle-uVhI82ml.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-Ce5Bj2QL.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-DqLkcURj.js';
import './GroupChannel/context.js';
import './chunks/bundle-DFFKNF1F.js';
import './chunks/bundle-B8MAflwf.js';
import './chunks/bundle-CTBShITC.js';
import './chunks/bundle-BfKgozDd.js';
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
