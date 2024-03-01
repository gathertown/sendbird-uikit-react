'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-D0p__atb.js');
var GroupChannel_context = require('../context.js');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-Pv5sl1sx.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BelwaOYx.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('./SuggestedMentionList.js');
require('../../chunks/bundle-CbRjKF9P.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../withSendbird.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-B9CKUSwz.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-CZSBLAvZ.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-BtA6MlUR.js');
require('../../utils/message/getOutgoingMessageState.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-DHZxYemr.js');
require('../../chunks/bundle-meW-rxvL.js');
require('../../chunks/bundle-ROgXTJCJ.js');
require('../../chunks/bundle-D7wWsQ-z.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-mXFFmyyG.js');

var MessageInputWrapper = function (props) {
    var _a;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var context = GroupChannel_context.useGroupChannelContext();
    var messages = context.messages, currentChannel = context.currentChannel;
    var lastMessage = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.lastMessage;
    var isLastMessageSuggestedRepliesEnabled = uikitTools.useIIFE(function () {
        var _a;
        if (!((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies))
            return false;
        if (index.getSuggestedReplies(lastMessage).length === 0)
            return false;
        var lastMessageInContext = messages[messages.length - 1];
        if (index.isSendableMessage(lastMessageInContext) && lastMessageInContext.sendingStatus !== 'succeeded')
            return false;
        return true;
    });
    var disableMessageInput = props.disabled
        || isLastMessageSuggestedRepliesEnabled && !!((_a = lastMessage.extendedMessagePayload) === null || _a === void 0 ? void 0 : _a['disable_chat_input']);
    return (React.createElement(MessageInputWrapperView.MessageInputWrapperView, _tslib.__assign({}, props, context, { disabled: disableMessageInput })));
};

exports.VoiceMessageInputWrapper = MessageInputWrapperView.VoiceMessageInputWrapper;
exports.MessageInputWrapper = MessageInputWrapper;
exports.default = MessageInputWrapper;
//# sourceMappingURL=MessageInputWrapper.js.map
