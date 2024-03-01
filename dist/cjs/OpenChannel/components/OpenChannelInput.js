'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../chunks/bundle-Cgs5uR4Y.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-BeszEZzp.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-BtA6MlUR.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');

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
