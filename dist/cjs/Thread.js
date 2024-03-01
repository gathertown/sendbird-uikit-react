'use strict';

var React = require('react');
var Thread_context = require('./Thread/context.js');
var Thread_components_ThreadUI = require('./Thread/components/ThreadUI.js');
require('./chunks/bundle-3znIJG3Q.js');
require('./chunks/bundle-BeszEZzp.js');
require('./chunks/bundle-meW-rxvL.js');
require('./chunks/bundle-2PlwnSzC.js');
require('@sendbird/chat/message');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-tCz2WwyT.js');
require('./chunks/bundle-k7WGsMsr.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./Thread/context/types.js');
require('@sendbird/chat');
require('./chunks/bundle-CHob45XV.js');
require('@sendbird/chat/groupChannel');
require('./chunks/bundle-aXbXs3dl.js');
require('./chunks/bundle-Djq4xnZO.js');
require('./chunks/bundle-D2Bg8CLY.js');
require('./chunks/bundle-BlYafk3l.js');
require('./chunks/bundle-DzJC_TK7.js');
require('./chunks/bundle-4hEewA7J.js');
require('./chunks/bundle-BUH06mHS.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-5izjntYE.js');
require('./chunks/bundle-D62_-ZQt.js');
require('./chunks/bundle-BPS3DFTX.js');
require('./chunks/bundle-Pv5sl1sx.js');
require('./chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('./chunks/bundle-Gh-C2yIM.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BPDG2Sth.js');
require('./chunks/bundle-DLvdMF5T.js');
require('./chunks/bundle-Dab6jGiJ.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./ui/ImageRenderer.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Cxw_pnFf.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-BewU7zpu.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./chunks/bundle-Bh7J_SsW.js');
require('./chunks/bundle-DgzUMNGp.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./chunks/bundle-mXFFmyyG.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/Loader.js');
require('./chunks/bundle-Bwn93cY-.js');
require('./chunks/bundle-Bkbq7HMf.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-BZB43WQ7.js');
require('./chunks/bundle-JQgZk-Pu.js');
require('./chunks/bundle-C3yNDl4J.js');
require('./chunks/bundle-olOmKFOu.js');
require('./chunks/bundle-CbRjKF9P.js');
require('./chunks/bundle-BVHqwRlD.js');
require('./chunks/bundle-Jzj8VRgZ.js');
require('./ui/MessageItemMenu.js');
require('./chunks/bundle-GRPKdtY8.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-B1G67D6x.js');
require('dompurify');
require('./chunks/bundle-DFlw8iK3.js');
require('./chunks/bundle-B3TtDetM.js');
require('./chunks/bundle-_dPY3ICW.js');
require('./chunks/bundle-DLSKVE-z.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./chunks/bundle-BDHpyltA.js');
require('./Thread/components/ThreadHeader.js');
require('./ui/Header.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-BQHlCNa7.js');
require('./chunks/bundle-1yGs9Nzf.js');
require('./chunks/bundle-CoFmIxJK.js');
require('./ui/TextMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./chunks/bundle-B9CKUSwz.js');
require('./ui/UnknownMessageItemBody.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./chunks/bundle-D0p__atb.js');
require('./chunks/bundle-BelwaOYx.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-CZSBLAvZ.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-BtA6MlUR.js');
require('./GroupChannel/context.js');
require('./chunks/bundle-BKuNpBv5.js');
require('./chunks/bundle-DHZxYemr.js');
require('./chunks/bundle-ROgXTJCJ.js');
require('./chunks/bundle-D7wWsQ-z.js');
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
