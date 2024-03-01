'use strict';

var React = require('react');
var Thread_context = require('./Thread/context.js');
var Thread_components_ThreadUI = require('./Thread/components/ThreadUI.js');
require('./chunks/bundle-CNa9Sv3b.js');
require('./chunks/bundle-B6bAeEPF.js');
require('./chunks/bundle-BZXuUIRS.js');
require('./chunks/bundle-DvNeoTBz.js');
require('@sendbird/chat/message');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DHTHQj02.js');
require('./chunks/bundle-s9ulbp6E.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./Thread/context/types.js');
require('@sendbird/chat');
require('./chunks/bundle-DhR_cfX5.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-DGYTk4xX.js');
require('./chunks/bundle-CuODNaEq.js');
require('./chunks/bundle-BeJ7-X59.js');
require('./chunks/bundle-BruYC2Km.js');
require('./chunks/bundle-DUeKijBO.js');
require('./chunks/bundle-DCaERiZJ.js');
require('./chunks/bundle-CkvaXo1D.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-DZTJrxjG.js');
require('./chunks/bundle-_1OEGjxz.js');
require('./chunks/bundle-CjFSIiUv.js');
require('./chunks/bundle-D-432Irw.js');
require('./chunks/bundle-DQfemABy.js');
require('react-dom');
require('./chunks/bundle-BppUjcCZ.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BelgkMC5.js');
require('./chunks/bundle-D0W7zrvh.js');
require('./chunks/bundle-c_asXXlZ.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./ui/ImageRenderer.js');
require('./ui/TextButton.js');
require('./chunks/bundle-C79vYLB2.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-Cg5zpjjy.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./chunks/bundle-BNKSF9CJ.js');
require('./chunks/bundle-8jy5Sc-N.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./chunks/bundle-DYXCvmUO.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/Loader.js');
require('./chunks/bundle-ByTdTPZ5.js');
require('./chunks/bundle-Cdin1NhG.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle--j4UOdes.js');
require('./chunks/bundle-C2ogzi2N.js');
require('./chunks/bundle-Bzjc69tJ.js');
require('./chunks/bundle-BLM8alVq.js');
require('./chunks/bundle-Bz-YFFWm.js');
require('./chunks/bundle-ZB7RBE8F.js');
require('./chunks/bundle-jIzB_4Er.js');
require('./ui/MessageItemMenu.js');
require('./chunks/bundle-BTMviSy8.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-k--aWKWA.js');
require('dompurify');
require('./chunks/bundle-D93_K7IT.js');
require('./chunks/bundle-fM1h2HCr.js');
require('./chunks/bundle-DViNoq67.js');
require('./chunks/bundle-DFOcYmwW.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./chunks/bundle-DgEnLJkx.js');
require('./Thread/components/ThreadHeader.js');
require('./ui/Header.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-sYslZdOT.js');
require('./chunks/bundle-DodGNrpo.js');
require('./chunks/bundle-DB4Q30uD.js');
require('./ui/TextMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./chunks/bundle-BhynwqRH.js');
require('./ui/UnknownMessageItemBody.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./chunks/bundle-BrCyH80n.js');
require('./chunks/bundle-CBY-_ev_.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-DTRxDvoK.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-D5ackF95.js');
require('./GroupChannel/context.js');
require('./chunks/bundle-cJLFan5_.js');
require('./chunks/bundle-DTnbaOzD.js');
require('./chunks/bundle-DKu6RR0i.js');
require('./chunks/bundle-bHVBUPD1.js');
require('./Channel/hooks/useHandleUploadFiles.js');
require('./ui/PlaceHolder.js');

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
    return (React.createElement("div", { className: "sendbird-thread ".concat(className) },
        React.createElement(Thread_context.ThreadProvider, { channelUrl: channelUrl, message: message, onHeaderActionClick: onHeaderActionClick, onMoveToParentMessage: onMoveToParentMessage, onBeforeSendUserMessage: onBeforeSendUserMessage, onBeforeSendFileMessage: onBeforeSendFileMessage, onBeforeSendVoiceMessage: onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage: onBeforeSendMultipleFilesMessage, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled },
            React.createElement(Thread_components_ThreadUI, { renderHeader: renderHeader, renderParentMessageInfo: renderParentMessageInfo, renderMessage: renderMessage, renderMessageInput: renderMessageInput, renderCustomSeparator: renderCustomSeparator, renderParentMessageInfoPlaceholder: renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder: renderThreadListPlaceHolder, renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

module.exports = Thread;
//# sourceMappingURL=Thread.js.map
