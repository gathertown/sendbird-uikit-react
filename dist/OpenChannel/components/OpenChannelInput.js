import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CRmP70eG.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-WO6U02Im.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-W3ZSZMhY.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-BfCFd-dO.js';
import 'react-dom';
import '../../chunks/bundle-BBhSg6C_.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';

var OpenChannelInput = React__default.forwardRef(function (props, ref) {
    var _a = useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, disabled = _a.disabled, handleSendMessage = _a.handleSendMessage, handleFileUpload = _a.handleFileUpload, amIMuted = _a.amIMuted;
    var channel = currentOpenChannel;
    var stringSet = useContext(LocalizationContext).stringSet;
    var value = props.value;
    function getPlaceHolderString() {
        if (amIMuted) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED;
        }
        if (disabled) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED;
        }
        return '';
    }
    if (!channel) {
        return null;
    }
    return (React__default.createElement("div", { className: "sendbird-openchannel-footer" },
        React__default.createElement(MessageInput, { channel: currentOpenChannel, ref: ref, value: value, disabled: disabled, isVoiceMessageEnabled: false, onSendMessage: handleSendMessage, onFileUpload: handleFileUpload, placeholder: getPlaceHolderString() })));
});

export { OpenChannelInput as default };
//# sourceMappingURL=OpenChannelInput.js.map
