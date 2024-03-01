'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-C8N9DrH4.js');
var GroupChannel_context = require('../context.js');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-sSPmDeMC.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-D5I_z4K9.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('./SuggestedMentionList.js');
require('../../chunks/bundle-BurotX14.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../chunks/bundle-c87q7xEA.js');
require('../../chunks/bundle-Bd2HznXA.js');
require('../../chunks/bundle-BUIoEqVv.js');
require('../../withSendbird.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-BDRzoesd.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-D0ePEYoI.js');
require('react-dom');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-BCNmULWo.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-BRVl0JdG.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DDJZEPWj.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-DfO_LJIk.js');
require('dompurify');
require('../../chunks/bundle-Bddon8U5.js');
require('../../chunks/bundle-pvAfZAmL.js');
require('../../chunks/bundle-Ct8yW-FR.js');
require('../../chunks/bundle-Bcu8PYMG.js');
require('../hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-BQnz8R9q.js');
require('../../utils/message/getOutgoingMessageState.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-CM_7-rFo.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('../../chunks/bundle-qJQUtN55.js');
require('../../chunks/bundle-s42eXH2a.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-Dibky18B.js');

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
