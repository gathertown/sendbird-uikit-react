import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BBVJixDe.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-BMZrET1K.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-DyyEjGYc.js';
import '../../chunks/bundle-Qz_mnbcy.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-jiObN6zC.js';
import '../../chunks/bundle-Dnb-49Dd.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CjXL-Zhv.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-_-u6U1pM.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-D4dNsiFL.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import 'react-dom';
import '../../chunks/bundle-BfXjuJZP.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';

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
