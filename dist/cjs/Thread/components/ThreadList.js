'use strict';

var React = require('react');
var Thread_components_ThreadListItem = require('./ThreadListItem.js');
var Thread_context = require('../context.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var dateFns = require('date-fns');
var Message_context = require('../../Message/context.js');
var resolvedReplyType = require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-CEdKSLxt.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../chunks/bundle-DWcNmk2G.js');
require('../../chunks/bundle-DQKTGusP.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-DoLTlc_l.js');
require('../../chunks/bundle-D0Uq8f5x.js');
require('../../chunks/bundle-IrSx78Gk.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../context/types.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../ui/MessageItemMenu.js');
require('../../chunks/bundle-22C_FmJz.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../chunks/bundle-CXIbPam9.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../ui/TextMessageItemBody.js');
require('../../chunks/bundle-B4c5-CEo.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-C7KrtZZP.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../chunks/bundle-CqdGdIiY.js');
require('../../chunks/bundle-CUWAopRQ.js');
require('@sendbird/chat/message');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-DzWthRdg.js');
require('../../chunks/bundle-etwgXqw-.js');
require('../../chunks/bundle-C4EYGhv3.js');
require('../../chunks/bundle-CruSSYSP.js');

function ThreadList(_a) {
    var className = _a.className, renderMessage = _a.renderMessage, renderCustomSeparator = _a.renderCustomSeparator, scrollRef = _a.scrollRef, scrollBottom = _a.scrollBottom;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var userId = config.userId;
    var _b = Thread_context.useThreadContext(), currentChannel = _b.currentChannel, allThreadMessages = _b.allThreadMessages, localThreadMessages = _b.localThreadMessages;
    var MemorizedMessage = React.useMemo(function () { return function (_a) {
        var message = _a.message, chainTop = _a.chainTop, chainBottom = _a.chainBottom, hasSeparator = _a.hasSeparator;
        if (typeof renderMessage === 'function') {
            return renderMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
            });
        }
        return null;
    }; }, [renderMessage]);
    return (React.createElement("div", { className: "sendbird-thread-list ".concat(className) },
        allThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = allThreadMessages[idx - 1];
            var nextMessage = allThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, resolvedReplyType.getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (dateFns.isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, MemorizedMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
            }) || (React.createElement(Thread_components_ThreadListItem, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderCustomSeparator: renderCustomSeparator, handleScroll: handleScroll }))));
        }),
        localThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = localThreadMessages[idx - 1];
            var nextMessage = localThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, resolvedReplyType.getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (dateFns.isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, MemorizedMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
            }) || (React.createElement(Thread_components_ThreadListItem, { message: message, hasSeparator: false, renderCustomSeparator: renderCustomSeparator, handleScroll: handleScroll }))));
        })));
}

module.exports = ThreadList;
//# sourceMappingURL=ThreadList.js.map
