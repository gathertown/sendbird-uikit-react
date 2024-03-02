import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-6DgbtIRj.js';
export { V as VoiceMessageInputWrapper } from '../../chunks/bundle-6DgbtIRj.js';
import { useGroupChannelContext } from '../context.js';
import { useIIFE } from '@sendbird/uikit-tools';
import { g as getSuggestedReplies, f as isSendableMessage } from '../../chunks/bundle-BnYBX14T.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import './SuggestedMentionList.js';
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
import '../../withSendbird.js';
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
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
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
import '../hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-W3ZSZMhY.js';
import '../../utils/message/getOutgoingMessageState.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-se836s50.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../chunks/bundle-BWic18XY.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-Dn-yaG7j.js';

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
