import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-DLH_rtYX.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-OZ70K6ig.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';

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
