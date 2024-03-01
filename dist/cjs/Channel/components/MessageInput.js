'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var index = require('../../chunks/bundle-Pv5sl1sx.js');
var MessageInputWrapperView = require('../../chunks/bundle-D0p__atb.js');
var Channel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BelwaOYx.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
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
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
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
require('../../GroupChannel/hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-BtA6MlUR.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-DvhBOCzU.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-3znIJG3Q.js');

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
