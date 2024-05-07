import { _ as __assign } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default from 'react';
import { g as getSuggestedReplies } from '../../chunks/bundle-D-z4U1wX.js';
import { M as MessageInputWrapperView } from '../../chunks/bundle-EVUaLXYQ.js';
import { useChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-uVhI82ml.js';
import '../../chunks/bundle-BwcI3bWM.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-Co8U-uRc.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../chunks/bundle-BAao5L-j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../chunks/bundle-DyO1n8fC.js';
import '../../chunks/bundle-Dlljvt37.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-D7eq_YKI.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import 'react-dom';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BytW9Azl.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Ce5Bj2QL.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DZZlGxSQ.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-BYAK1f5c.js';
import 'dompurify';
import '../../chunks/bundle-CLXgPaQv.js';
import '../../chunks/bundle-D0Du43TQ.js';
import '../../chunks/bundle-CERaU6Re.js';
import '../../chunks/bundle-CmBoH2-J.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-DqLkcURj.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-B-z3huWI.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-k5z_1yHM.js';
import '../../chunks/bundle-Dac-NyF8.js';
import '../../chunks/bundle-BMf2Gp0X.js';
import '../../chunks/bundle-BHNYgnEs.js';
import '../../chunks/bundle-DHrHSLDL.js';
import '../../chunks/bundle-D8n4s-pk.js';
import '../../chunks/bundle-CIiROwS_.js';
import '../../chunks/bundle-DFFKNF1F.js';
import '../../chunks/bundle-C7dAdhH1.js';
import '../../chunks/bundle-DjAc13S7.js';

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
