'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../chunks/bundle-B_CLxaA8.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-CYjw4691.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-4lJ887l6.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-CG5E97k8.js');
require('react-dom');
require('../../chunks/bundle-DGx3xKBn.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');

var OpenChannelInput = React.forwardRef(function (props, ref) {
    var _a = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, disabled = _a.disabled, handleSendMessage = _a.handleSendMessage, handleFileUpload = _a.handleFileUpload, amIMuted = _a.amIMuted;
    var channel = currentOpenChannel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
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
    return (React.createElement("div", { className: "sendbird-openchannel-footer" },
        React.createElement(ui_MessageInput, { channel: currentOpenChannel, ref: ref, value: value, disabled: disabled, isVoiceMessageEnabled: false, onSendMessage: handleSendMessage, onFileUpload: handleFileUpload, placeholder: getPlaceHolderString() })));
});

module.exports = OpenChannelInput;
//# sourceMappingURL=OpenChannelInput.js.map
