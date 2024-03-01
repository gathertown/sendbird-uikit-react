import React__default, { useMemo } from 'react';
import ThreadListItem from './ThreadListItem.js';
import { useThreadContext } from '../context.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { isSameDay } from 'date-fns';
import { MessageProvider } from '../../Message/context.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-C2bpORYe.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../chunks/bundle-BjdNFz7H.js';
import '../../chunks/bundle-BKH-CUXx.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-vKqXYEfp.js';
import '../../chunks/bundle-CoNwTeeo.js';
import '../../chunks/bundle-CHpLoyhB.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../context/types.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../ui/MessageItemMenu.js';
import '../../chunks/bundle-CTZh68w8.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../chunks/bundle-D8nOQMZK.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../ui/TextMessageItemBody.js';
import '../../chunks/bundle-CHFeqEtk.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-CO0PW_ND.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../chunks/bundle-CrzldF0k.js';
import '../../chunks/bundle-BtZTAJgc.js';
import '@sendbird/chat/message';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-ChvmrzFX.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-B7dWJiLf.js';
import '../../chunks/bundle-CCH_gmPY.js';

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
