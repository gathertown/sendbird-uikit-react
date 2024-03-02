'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-Cg_f3y_1.js');
var GroupChannel_context = require('../context.js');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-CiDSKL46.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-Cu63GBZj.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('./SuggestedMentionList.js');
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
require('../../withSendbird.js');
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
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
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
require('../hooks/useHandleUploadFiles.js');
require('../../chunks/bundle-4lJ887l6.js');
require('../../utils/message/getOutgoingMessageState.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-etwgXqw-.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-CQ6ec9FA.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-BwAK1D9u.js');

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
