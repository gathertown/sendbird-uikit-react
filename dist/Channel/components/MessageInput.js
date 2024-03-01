import { _ as __assign } from '../../chunks/bundle-h5nSe8RU.js';
import React__default from 'react';
import { g as getSuggestedReplies } from '../../chunks/bundle-CmPJV5ar.js';
import { M as MessageInputWrapperView } from '../../chunks/bundle-IAX1zdhk.js';
import { useChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BpISf_VF.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-DTBDVk9A.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-Qz_mnbcy.js';
import '../../chunks/bundle-DyyEjGYc.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-BKQYQg-b.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import 'react-dom';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Cl7RLJio.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-jiObN6zC.js';
import '../../chunks/bundle-Dnb-49Dd.js';
import '../../chunks/bundle-CjXL-Zhv.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-D4dNsiFL.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-TVGnyGwG.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Dc3tamRJ.js';
import '../../chunks/bundle-g-7qyWG4.js';
import '../../chunks/bundle-Dil758s4.js';
import '../../chunks/bundle-_-u6U1pM.js';
import '../../chunks/bundle-BqHJZCfO.js';
import '../../chunks/bundle-DZuFrRTP.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-DZNsjEo9.js';
import '../../chunks/bundle-Bu9i9TgZ.js';
import '../../chunks/bundle-C311xsP9.js';

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
