import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-CAg8fbpE.js';
export { V as VoiceMessageInputWrapper } from '../../chunks/bundle-CAg8fbpE.js';
import { useGroupChannelContext } from '../context.js';
import { useIIFE } from '@sendbird/uikit-tools';
import { g as getSuggestedReplies, f as isSendableMessage } from '../../chunks/bundle-4cxEU_h1.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import './SuggestedMentionList.js';
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
import '../../withSendbird.js';
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
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
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
import '../hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../utils/message/getOutgoingMessageState.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BOvQopMz.js';

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
