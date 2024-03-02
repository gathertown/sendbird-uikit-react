'use strict';

var React = require('react');
var Thread_context = require('./Thread/context.js');
var Thread_components_ThreadUI = require('./Thread/components/ThreadUI.js');
require('./chunks/bundle-DzWthRdg.js');
require('./chunks/bundle-CYjw4691.js');
require('./chunks/bundle-etwgXqw-.js');
require('./chunks/bundle-DHh3VdoS.js');
require('@sendbird/chat/message');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-BPGreBtw.js');
require('./chunks/bundle-BKwrdy8Y.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./Thread/context/types.js');
require('@sendbird/chat');
require('./chunks/bundle-C4EYGhv3.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-DtHyD1hB.js');
require('./chunks/bundle-CruSSYSP.js');
require('./chunks/bundle-BD2bIoH6.js');
require('./chunks/bundle-DoHigaWY.js');
require('./chunks/bundle-C8yEdUBb.js');
require('./chunks/bundle-CkxVRfa7.js');
require('./chunks/bundle-24sG-BP_.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-DqGwmW4S.js');
require('./chunks/bundle-CEdKSLxt.js');
require('./chunks/bundle-CG5E97k8.js');
require('./chunks/bundle-CiDSKL46.js');
require('./chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('./chunks/bundle-DGx3xKBn.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DDY1xx_n.js');
require('./chunks/bundle-e1P14sMX.js');
require('./chunks/bundle-DWcNmk2G.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./ui/ImageRenderer.js');
require('./ui/TextButton.js');
require('./chunks/bundle-DTKihS4S.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-BkazCoxG.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./chunks/bundle-JS-CtPko.js');
require('./chunks/bundle-Xx0kBn7q.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./chunks/bundle-BwAK1D9u.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/Loader.js');
require('./chunks/bundle-B4c5-CEo.js');
require('./chunks/bundle-C9xbaXbn.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-CUWAopRQ.js');
require('./chunks/bundle-DQKTGusP.js');
require('./chunks/bundle-DoLTlc_l.js');
require('./chunks/bundle-D0Uq8f5x.js');
require('./chunks/bundle-IrSx78Gk.js');
require('./chunks/bundle-BF3GXMyf.js');
require('./chunks/bundle-BlK0Q1jH.js');
require('./ui/MessageItemMenu.js');
require('./chunks/bundle-22C_FmJz.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('./chunks/bundle-QohGAzPZ.js');
require('./chunks/bundle-DS6HeXaS.js');
require('./chunks/bundle-B98KPr4A.js');
require('./chunks/bundle-CqdGdIiY.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./chunks/bundle-C1rrs9fy.js');
require('./Thread/components/ThreadHeader.js');
require('./ui/Header.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-CXIbPam9.js');
require('./chunks/bundle-D09pvvgs.js');
require('./chunks/bundle-uiV3qgX6.js');
require('./ui/TextMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./chunks/bundle-C7KrtZZP.js');
require('./ui/UnknownMessageItemBody.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./chunks/bundle-Cg_f3y_1.js');
require('./chunks/bundle-Cu63GBZj.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-8s7mDLC7.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-4lJ887l6.js');
require('./GroupChannel/context.js');
require('./chunks/bundle-h4wKJtrO.js');
require('./chunks/bundle-DQY0kimN.js');
require('./chunks/bundle-9xv4YoP5.js');
require('./chunks/bundle-CQ6ec9FA.js');
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
