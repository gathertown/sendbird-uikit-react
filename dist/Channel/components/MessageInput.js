import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { g as getSuggestedReplies } from '../../chunks/bundle-4cxEU_h1.js';
import { M as MessageInputWrapperView } from '../../chunks/bundle-CAg8fbpE.js';
import { useChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-CHpLoyhB.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-CO0PW_ND.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-OZ70K6ig.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CmoRaDho.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Cd6B0Zmh.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-B7dWJiLf.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-DuFEev3g.js';
import '../../chunks/bundle-CgMvdzKN.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-ChvmrzFX.js';

var MessageInputWrapper = function (props) {
    var _a, _b;
    var config = useSendbirdStateContext().config;
    var context = useChannelContext();
    var quoteMessage = context.quoteMessage, localMessages = context.localMessages, currentGroupChannel = context.currentGroupChannel, sendMessage = context.sendMessage, sendFileMessage = context.sendFileMessage, sendVoiceMessage = context.sendVoiceMessage, sendMultipleFilesMessage = context.sendMultipleFilesMessage;
    var lastMessage = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.lastMessage;
    var isLastMessageSuggestedRepliesEnabled = ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
        && getSuggestedReplies(lastMessage).length > 0
        && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0;
    var disableMessageInput = props.disabled
        || isLastMessageSuggestedRepliesEnabled && !!((_b = lastMessage.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b['disable_chat_input']);
    return (React__default.createElement(MessageInputWrapperView, __assign({}, props, context, { disabled: disableMessageInput, currentChannel: currentGroupChannel, sendUserMessage: function (params) {
            return sendMessage({
                message: params.message,
                mentionTemplate: params.mentionedMessageTemplate,
                mentionedUsers: params.mentionedUsers,
                quoteMessage: quoteMessage,
            });
        }, sendFileMessage: function (params) {
            return sendFileMessage(params.file, quoteMessage);
        }, sendVoiceMessage: function (_a, duration) {
            var file = _a.file;
            return sendVoiceMessage(file, duration, quoteMessage);
        }, sendMultipleFilesMessage: function (_a) {
            var fileInfoList = _a.fileInfoList;
            return sendMultipleFilesMessage(fileInfoList.map(function (fileInfo) { return fileInfo.file; }), quoteMessage);
        } })));
};

export { MessageInputWrapper, MessageInputWrapper as default };
//# sourceMappingURL=MessageInput.js.map
