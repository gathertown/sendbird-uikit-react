import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BwcI3bWM.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-BMxPY5Fr.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-s7uQ7zAa.js';
import '../../chunks/bundle-Dlljvt37.js';
import '../../chunks/bundle-DyO1n8fC.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../chunks/bundle-BYAK1f5c.js';
import 'dompurify';
import '../../chunks/bundle-CLXgPaQv.js';
import '../../chunks/bundle-D0Du43TQ.js';
import '../../chunks/bundle-CERaU6Re.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CmBoH2-J.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-BHNYgnEs.js';
import '../../chunks/bundle-CIiROwS_.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../chunks/bundle-DqLkcURj.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import 'react-dom';
import '../../chunks/bundle-Bs8Nuk02.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-BytW9Azl.js';

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
