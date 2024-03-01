'use strict';

var React = require('react');
var Thread_components_ThreadListItem = require('./ThreadListItem.js');
var Thread_context = require('../context.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var dateFns = require('date-fns');
var Message_context = require('../../Message/context.js');
var resolvedReplyType = require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-D62_-ZQt.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../chunks/bundle-Dab6jGiJ.js');
require('../../chunks/bundle-JQgZk-Pu.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-C3yNDl4J.js');
require('../../chunks/bundle-olOmKFOu.js');
require('../../chunks/bundle-CbRjKF9P.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../context/types.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../ui/MessageItemMenu.js');
require('../../chunks/bundle-GRPKdtY8.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../chunks/bundle-BQHlCNa7.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-1yGs9Nzf.js');
require('../../chunks/bundle-CoFmIxJK.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../ui/TextMessageItemBody.js');
require('../../chunks/bundle-Bwn93cY-.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-B9CKUSwz.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../chunks/bundle-DLSKVE-z.js');
require('../../chunks/bundle-BZB43WQ7.js');
require('@sendbird/chat/message');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-3znIJG3Q.js');
require('../../chunks/bundle-meW-rxvL.js');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');

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
