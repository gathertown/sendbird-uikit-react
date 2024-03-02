import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { g as getSuggestedReplies } from '../../chunks/bundle-BnYBX14T.js';
import { M as MessageInputWrapperView } from '../../chunks/bundle-6DgbtIRj.js';
import { useChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-BehMbQaw.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-CgW0dqme.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-BfCFd-dO.js';
import 'react-dom';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-BdCaC6yk.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-W3ZSZMhY.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-bFnpVx53.js';
import '../../chunks/bundle-Cd6XSYjN.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-B-v_xYnH.js';

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
