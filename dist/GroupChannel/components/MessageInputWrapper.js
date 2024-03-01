import { _ as __assign } from '../../chunks/bundle-h5nSe8RU.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-IAX1zdhk.js';
export { V as VoiceMessageInputWrapper } from '../../chunks/bundle-IAX1zdhk.js';
import { useGroupChannelContext } from '../context.js';
import { useIIFE } from '@sendbird/uikit-tools';
import { g as getSuggestedReplies, f as isSendableMessage } from '../../chunks/bundle-CmPJV5ar.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BpISf_VF.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import './SuggestedMentionList.js';
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
import '../../withSendbird.js';
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
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
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
import '../hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-D4dNsiFL.js';
import '../../utils/message/getOutgoingMessageState.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-DZNsjEo9.js';
import '../../chunks/bundle-Bu9i9TgZ.js';
import '../../chunks/bundle-D2TKgUHv.js';
import '../../chunks/bundle-TVGnyGwG.js';
import '../../chunks/bundle-DE6jjGXF.js';
import '../../chunks/bundle-BZNaK1IM.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-Dc3tamRJ.js';

var MessageInputWrapper = function (props) {
    var _a;
    var config = useSendbirdStateContext().config;
    var context = useGroupChannelContext();
    var messages = context.messages, currentChannel = context.currentChannel;
    var lastMessage = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.lastMessage;
    var isLastMessageSuggestedRepliesEnabled = useIIFE(function () {
        var _a;
        if (!((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies))
            return false;
        if (getSuggestedReplies(lastMessage).length === 0)
            return false;
        var lastMessageInContext = messages[messages.length - 1];
        if (isSendableMessage(lastMessageInContext) && lastMessageInContext.sendingStatus !== 'succeeded')
            return false;
        return true;
    });
    var disableMessageInput = props.disabled
        || isLastMessageSuggestedRepliesEnabled && !!((_a = lastMessage.extendedMessagePayload) === null || _a === void 0 ? void 0 : _a['disable_chat_input']);
    return (React__default.createElement(MessageInputWrapperView, __assign({}, props, context, { disabled: disableMessageInput })));
};

export { MessageInputWrapper, MessageInputWrapper as default };
//# sourceMappingURL=MessageInputWrapper.js.map
