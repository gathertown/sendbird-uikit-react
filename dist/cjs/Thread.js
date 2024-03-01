'use strict';

var React = require('react');
var Thread_context = require('./Thread/context.js');
var Thread_components_ThreadUI = require('./Thread/components/ThreadUI.js');
require('./chunks/bundle-D20FXSz0.js');
require('./chunks/bundle-BSU5Fq75.js');
require('./chunks/bundle-B8bLSHlY.js');
require('./chunks/bundle-B67weJWw.js');
require('@sendbird/chat/message');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DiHFDa7q.js');
require('./chunks/bundle-LbGezufX.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./Thread/context/types.js');
require('@sendbird/chat');
require('./chunks/bundle-CvJFi8sD.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-c87q7xEA.js');
require('./chunks/bundle-DMHUKzyz.js');
require('./chunks/bundle-BplSuW2v.js');
require('./chunks/bundle-z7hq7hFO.js');
require('./chunks/bundle-DEDYKTrW.js');
require('./chunks/bundle-Gl3fvXvG.js');
require('./chunks/bundle-X-ZtnRCT.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-D_DzQR1j.js');
require('./chunks/bundle-CW-q8RZU.js');
require('./chunks/bundle-D0ePEYoI.js');
require('./chunks/bundle-sSPmDeMC.js');
require('./chunks/bundle-CrJkvCS4.js');
require('react-dom');
require('./chunks/bundle-DPOXwvBX.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CeqSSVZ9.js');
require('./chunks/bundle-BCNmULWo.js');
require('./chunks/bundle-JVtSimaF.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./ui/ImageRenderer.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DDJZEPWj.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-ZbsP2hNa.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./chunks/bundle-5IKAPUOJ.js');
require('./chunks/bundle-CR__rOP0.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./chunks/bundle-Dibky18B.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/Loader.js');
require('./chunks/bundle-CNAzw9HQ.js');
require('./chunks/bundle-Bcu8PYMG.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-DEaN7Lj7.js');
require('./chunks/bundle-BWpdADkp.js');
require('./chunks/bundle-CdWTlj2q.js');
require('./chunks/bundle-BW69ifC8.js');
require('./chunks/bundle-BurotX14.js');
require('./chunks/bundle-Bd2HznXA.js');
require('./chunks/bundle-BUIoEqVv.js');
require('./ui/MessageItemMenu.js');
require('./chunks/bundle-X6sNGE_A.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-DfO_LJIk.js');
require('dompurify');
require('./chunks/bundle-Bddon8U5.js');
require('./chunks/bundle-pvAfZAmL.js');
require('./chunks/bundle-Ct8yW-FR.js');
require('./chunks/bundle-BPnd9Pxy.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./chunks/bundle-BE6ALQMq.js');
require('./Thread/components/ThreadHeader.js');
require('./ui/Header.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-KsO_OPhB.js');
require('./chunks/bundle-Cfv9PJWJ.js');
require('./chunks/bundle-BHQe7HpU.js');
require('./ui/TextMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./chunks/bundle-BDRzoesd.js');
require('./ui/UnknownMessageItemBody.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./chunks/bundle-C8N9DrH4.js');
require('./chunks/bundle-D5I_z4K9.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-BRVl0JdG.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-BQnz8R9q.js');
require('./GroupChannel/context.js');
require('./chunks/bundle-DYph6CG_.js');
require('./chunks/bundle-CM_7-rFo.js');
require('./chunks/bundle-qJQUtN55.js');
require('./chunks/bundle-s42eXH2a.js');
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
