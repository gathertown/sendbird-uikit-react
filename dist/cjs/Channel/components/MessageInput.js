'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var index = require('../../chunks/bundle-C6gATKTE.js');
var MessageInputWrapperView = require('../../chunks/bundle-mUzNM8nv.js');
var Channel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D0q1P-FU.js');
require('../../chunks/bundle-DKL8dMjq.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../chunks/bundle-CSU8NDw4.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DgAALupQ.js');
require('../../chunks/bundle-Cd7XOuNj.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../chunks/bundle-BjldQ7ts.js');
require('../../chunks/bundle-bdifjM-k.js');
require('../../chunks/bundle-BwKmyBpq.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-BGyfIsKK.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('react-dom');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BOaew5JK.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-BrCaOsc5.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Ev5kAkGi.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-9HKIAf5f.js');
require('dompurify');
require('../../chunks/bundle-CIs7k40W.js');
require('../../chunks/bundle-CN0Ev9mV.js');
require('../../chunks/bundle-BxYGiW8y.js');
require('../../chunks/bundle-BZ6Z0MYZ.js');
require('../../GroupChannel/hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-C_L4ik8x.js');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-BECkGjrR.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-D0o2OzcU.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../chunks/bundle-DYYV3xLB.js');
require('../../chunks/bundle-BcdtZarK.js');
require('../../chunks/bundle-DnTkOAfH.js');
require('../../chunks/bundle-BFHEqzl9.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-0AYxVXD-.js');

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
