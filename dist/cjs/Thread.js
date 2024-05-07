'use strict';

var React = require('react');
var Thread_context = require('./Thread/context.js');
var Thread_components_ThreadUI = require('./Thread/components/ThreadUI.js');
require('./chunks/bundle-0AYxVXD-.js');
require('./chunks/bundle-z9miKj3U.js');
require('./chunks/bundle-BECkGjrR.js');
require('./chunks/bundle-BO5OZWjS.js');
require('@sendbird/chat/message');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-DI6hrkhw.js');
require('./chunks/bundle-CJtsI7GU.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./Thread/context/types.js');
require('@sendbird/chat');
require('./chunks/bundle-DYYV3xLB.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-BjldQ7ts.js');
require('./chunks/bundle-BcdtZarK.js');
require('./chunks/bundle-DKL8dMjq.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./chunks/bundle-BrrOctBx.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-BCfv3yiy.js');
require('./chunks/bundle-CS9POQt4.js');
require('./chunks/bundle-CBfBMqDz.js');
require('./chunks/bundle-C6gATKTE.js');
require('./chunks/bundle-DgAALupQ.js');
require('react-dom');
require('./chunks/bundle-BFgXaSuR.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-3bmKYTJ_.js');
require('./chunks/bundle-BOaew5JK.js');
require('./chunks/bundle-BmCw9st3.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./ui/ImageRenderer.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-3dhw8iOw.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./chunks/bundle-D0o2OzcU.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/Loader.js');
require('./chunks/bundle-3cmB6Ad_.js');
require('./chunks/bundle-BZ6Z0MYZ.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-BPjQVFvN.js');
require('./chunks/bundle-Bexsprs_.js');
require('./chunks/bundle-DegkGksZ.js');
require('./chunks/bundle-DsD_N26f.js');
require('./chunks/bundle-CSU8NDw4.js');
require('./chunks/bundle-bdifjM-k.js');
require('./chunks/bundle-BwKmyBpq.js');
require('./ui/MessageItemMenu.js');
require('./chunks/bundle-8sH2G7Ap.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-9HKIAf5f.js');
require('dompurify');
require('./chunks/bundle-CIs7k40W.js');
require('./chunks/bundle-CN0Ev9mV.js');
require('./chunks/bundle-BxYGiW8y.js');
require('./chunks/bundle-KUfIzdnQ.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./chunks/bundle-D_b5XkOl.js');
require('./Thread/components/ThreadHeader.js');
require('./ui/Header.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-CjsR5IvJ.js');
require('./chunks/bundle-Bmt-jCO8.js');
require('./chunks/bundle-C_eHyq_M.js');
require('./ui/TextMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./chunks/bundle-BGyfIsKK.js');
require('./ui/UnknownMessageItemBody.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./chunks/bundle-mUzNM8nv.js');
require('./chunks/bundle-D0q1P-FU.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-BrCaOsc5.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-C_L4ik8x.js');
require('./GroupChannel/context.js');
require('./chunks/bundle-QyttZIkx.js');
require('./chunks/bundle--oP96AvO.js');
require('./chunks/bundle-CZJazoZ7.js');
require('./chunks/bundle-BoYSz_zM.js');
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
