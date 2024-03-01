'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var index = require('../../chunks/bundle-sSPmDeMC.js');
var MessageInputWrapperView = require('../../chunks/bundle-C8N9DrH4.js');
var Channel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D5I_z4K9.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
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
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
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
require('../../GroupChannel/hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-BQnz8R9q.js');
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dibky18B.js');
require('../../chunks/bundle-D_DzQR1j.js');
require('../../chunks/bundle-CvJFi8sD.js');
require('../../chunks/bundle-DMHUKzyz.js');
require('../../chunks/bundle-RX09O7xx.js');
require('../../chunks/bundle-DE6wTTAM.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D20FXSz0.js');

var MessageInputWrapper = function (props) {
    var _a, _b;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var context = Channel_context.useChannelContext();
    var quoteMessage = context.quoteMessage, localMessages = context.localMessages, currentGroupChannel = context.currentGroupChannel, sendMessage = context.sendMessage, sendFileMessage = context.sendFileMessage, sendVoiceMessage = context.sendVoiceMessage, sendMultipleFilesMessage = context.sendMultipleFilesMessage;
    var lastMessage = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.lastMessage;
    var isLastMessageSuggestedRepliesEnabled = ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
        && index.getSuggestedReplies(lastMessage).length > 0
        && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0;
    var disableMessageInput = props.disabled
        || isLastMessageSuggestedRepliesEnabled && !!((_b = lastMessage.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b['disable_chat_input']);
    return (React.createElement(MessageInputWrapperView.MessageInputWrapperView, _tslib.__assign({}, props, context, { disabled: disableMessageInput, currentChannel: currentGroupChannel, sendUserMessage: function (params) {
            return sendMessage({
                message: params.message,
                mentionTemplate: params.mentionedMessageTemplate,
                mentionedUsers: params.mentionedUsers,
                quoteMessage: quoteMessage,
            });
        }, sendFileMessage: function (params) {
            return sendFileMessage(params.file, quoteMessage);
        }, sendVoiceMessage: function (_a, duration) {
            var file = _a.file;
            return sendVoiceMessage(file, duration, quoteMessage);
        }, sendMultipleFilesMessage: function (_a) {
            var fileInfoList = _a.fileInfoList;
            return sendMultipleFilesMessage(fileInfoList.map(function (fileInfo) { return fileInfo.file; }), quoteMessage);
        } })));
};

exports.MessageInputWrapper = MessageInputWrapper;
exports.default = MessageInputWrapper;
//# sourceMappingURL=MessageInput.js.map
