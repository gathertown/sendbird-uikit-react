import React__default, { useMemo } from 'react';
import ThreadListItem from './ThreadListItem.js';
import { useThreadContext } from '../context.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { isSameDay } from 'date-fns';
import { MessageProvider } from '../../Message/context.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-BhfKBScq.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-0yILBaSQ.js';
import 'react-dom';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../chunks/bundle-DwXszhWd.js';
import '../../chunks/bundle-DBtx2Gk9.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-CQ1BOFUN.js';
import '../../chunks/bundle-Ce5GUZrO.js';
import '../../chunks/bundle-BehMbQaw.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../context/types.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../ui/MessageItemMenu.js';
import '../../chunks/bundle-Djp37I3i.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../chunks/bundle-B9Guj1rz.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../ui/TextMessageItemBody.js';
import '../../chunks/bundle-iau93d70.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-CgW0dqme.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../chunks/bundle-CYWkde8y.js';
import '../../chunks/bundle-DOhbdcnA.js';
import '@sendbird/chat/message';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-B-v_xYnH.js';
import '../../chunks/bundle-se836s50.js';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';

function ThreadList(_a) {
    var className = _a.className, renderMessage = _a.renderMessage, renderCustomSeparator = _a.renderCustomSeparator, scrollRef = _a.scrollRef, scrollBottom = _a.scrollBottom;
    var config = useSendbirdStateContext().config;
    var userId = config.userId;
    var _b = useThreadContext(), currentChannel = _b.currentChannel, allThreadMessages = _b.allThreadMessages, localThreadMessages = _b.localThreadMessages;
    var MemorizedMessage = useMemo(function () { return function (_a) {
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
    return (React__default.createElement("div", { className: "sendbird-thread-list ".concat(className) },
        allThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = allThreadMessages[idx - 1];
            var nextMessage = allThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, MemorizedMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
            }) || (React__default.createElement(ThreadListItem, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderCustomSeparator: renderCustomSeparator, handleScroll: handleScroll }))));
        }),
        localThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = localThreadMessages[idx - 1];
            var nextMessage = localThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, MemorizedMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
            }) || (React__default.createElement(ThreadListItem, { message: message, hasSeparator: false, renderCustomSeparator: renderCustomSeparator, handleScroll: handleScroll }))));
        })));
}

export { ThreadList as default };
//# sourceMappingURL=ThreadList.js.map
