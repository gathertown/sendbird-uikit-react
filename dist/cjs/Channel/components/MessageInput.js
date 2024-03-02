'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var index = require('../../chunks/bundle-CiDSKL46.js');
var MessageInputWrapperView = require('../../chunks/bundle-Cg_f3y_1.js');
var Channel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Cu63GBZj.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../chunks/bundle-IrSx78Gk.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-C7KrtZZP.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-CG5E97k8.js');
require('react-dom');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-e1P14sMX.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-8s7mDLC7.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../GroupChannel/hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-4lJ887l6.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C4EYGhv3.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-BWb5b9t8.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DzWthRdg.js');

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
