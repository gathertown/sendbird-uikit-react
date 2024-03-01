'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DvNeoTBz.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-BrCyH80n.js');
var GroupChannel_context = require('../context.js');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-D-432Irw.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-CBY-_ev_.js');
require('../../chunks/bundle-BeJ7-X59.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('./SuggestedMentionList.js');
require('../../chunks/bundle-Bz-YFFWm.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../chunks/bundle-ZB7RBE8F.js');
require('../../chunks/bundle-jIzB_4Er.js');
require('../../withSendbird.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-BhynwqRH.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-BelgkMC5.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('react-dom');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-D0W7zrvh.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-DTRxDvoK.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-k--aWKWA.js');
require('dompurify');
require('../../chunks/bundle-D93_K7IT.js');
require('../../chunks/bundle-fM1h2HCr.js');
require('../../chunks/bundle-DViNoq67.js');
require('../../chunks/bundle-Cdin1NhG.js');
require('../hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-D5ackF95.js');
require('../../utils/message/getOutgoingMessageState.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../chunks/bundle-cJLFan5_.js');
require('../../chunks/bundle-DgEnLJkx.js');
require('../../chunks/bundle-DTnbaOzD.js');
require('../../chunks/bundle-BZXuUIRS.js');
require('../../chunks/bundle-DKu6RR0i.js');
require('../../chunks/bundle-bHVBUPD1.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../chunks/bundle-DYXCvmUO.js');

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
