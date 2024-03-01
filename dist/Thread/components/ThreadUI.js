import React__default, { useMemo, useState, useRef } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-VRwQbdO6.js';
import { g as getChannelTitle } from '../../chunks/bundle-RhEG-6rt.js';
import { useThreadContext } from '../context.js';
import ParentMessageInfo from './ParentMessageInfo.js';
import ThreadHeader from './ThreadHeader.js';
import ThreadList from './ThreadList.js';
import ThreadMessageInput from './ThreadMessageInput.js';
import { ParentMessageStateTypes, ThreadListStateTypes } from '../context/types.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ZpyLpKbV.js';
import { i as isAboutSame } from '../../chunks/bundle-ChvmrzFX.js';
import { MessageProvider } from '../../Message/context.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-CnPq00g2.js';
import '@sendbird/chat';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-B7dWJiLf.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-C2bpORYe.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../chunks/bundle-BjdNFz7H.js';
import './ParentMessageInfoItem.js';
import '../../ui/ImageRenderer.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CHFeqEtk.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-BtZTAJgc.js';
import '../../chunks/bundle-BKH-CUXx.js';
import '../../chunks/bundle-vKqXYEfp.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CoNwTeeo.js';
import '../../chunks/bundle-CHpLoyhB.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../ui/MessageItemMenu.js';
import '../../chunks/bundle-CTZh68w8.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-CrzldF0k.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../ui/Header.js';
import './ThreadListItem.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-D8nOQMZK.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-CO0PW_ND.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import '../../chunks/bundle-CAg8fbpE.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-Cd6B0Zmh.js';
import '../../GroupChannel/hooks/useHandleUploadFiles.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../GroupChannel/context.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';
import '../../Channel/hooks/useHandleUploadFiles.js';

var useMemorizedHeader = function (_a) {
    var renderHeader = _a.renderHeader;
    return useMemo(function () {
        if (typeof renderHeader === 'function') {
            return renderHeader();
        }
        return null;
    }, [renderHeader]);
};

var useMemorizedParentMessageInfo = function (_a) {
    var parentMessage = _a.parentMessage, parentMessageState = _a.parentMessageState, renderParentMessageInfo = _a.renderParentMessageInfo, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder;
    return useMemo(function () {
        if (parentMessageState === ParentMessageStateTypes.NIL
            || parentMessageState === ParentMessageStateTypes.LOADING
            || parentMessageState === ParentMessageStateTypes.INVALID) {
            if (typeof renderParentMessageInfoPlaceholder === 'function') {
                return renderParentMessageInfoPlaceholder(parentMessageState);
            }
            switch (parentMessageState) {
                case ParentMessageStateTypes.NIL: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-nil", type: PlaceHolderTypes.NO_RESULTS, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                default: {
                    return null;
                }
            }
        }
        else if (parentMessageState === ParentMessageStateTypes.INITIALIZED) {
            if (typeof renderParentMessageInfo === 'function') {
                return renderParentMessageInfo();
            }
        }
        return null;
    }, [
        parentMessage,
        parentMessageState,
        renderParentMessageInfo,
        renderParentMessageInfoPlaceholder,
    ]);
};

var useMemorizedThreadList = function (_a) {
    var threadListState = _a.threadListState, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder;
    return useMemo(function () {
        if (threadListState === ThreadListStateTypes.NIL
            || threadListState === ThreadListStateTypes.LOADING
            || threadListState === ThreadListStateTypes.INVALID) {
            if (typeof renderThreadListPlaceHolder === 'function') {
                return renderThreadListPlaceHolder(threadListState);
            }
            switch (threadListState) {
                case ThreadListStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ThreadListStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                case ThreadListStateTypes.NIL: {
                    return React__default.createElement(React__default.Fragment, null);
                }
                default: {
                    return null;
                }
            }
        }
        return null;
    }, [
        threadListState,
        renderThreadListPlaceHolder,
    ]);
};

var ThreadUI = function (_a) {
    var _b, _c, _d, _e;
    var renderHeader = _a.renderHeader, renderParentMessageInfo = _a.renderParentMessageInfo, renderMessage = _a.renderMessage, renderMessageInput = _a.renderMessageInput, renderCustomSeparator = _a.renderCustomSeparator, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder, renderFileUploadIcon = _a.renderFileUploadIcon, renderVoiceMessageIcon = _a.renderVoiceMessageIcon, renderSendMessageIcon = _a.renderSendMessageIcon;
    var stores = useSendbirdStateContext().stores;
    var currentUserId = (_d = (_c = (_b = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk) === null || _c === void 0 ? void 0 : _c.currentUser) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = useLocalization().stringSet;
    var _f = useThreadContext(), currentChannel = _f.currentChannel, allThreadMessages = _f.allThreadMessages, parentMessage = _f.parentMessage, parentMessageState = _f.parentMessageState, threadListState = _f.threadListState, hasMorePrev = _f.hasMorePrev, hasMoreNext = _f.hasMoreNext, fetchPrevThreads = _f.fetchPrevThreads, fetchNextThreads = _f.fetchNextThreads, onHeaderActionClick = _f.onHeaderActionClick, onMoveToParentMessage = _f.onMoveToParentMessage;
    var replyCount = allThreadMessages.length;
    var isByMe = currentUserId === ((_e = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _e === void 0 ? void 0 : _e.userId);
    // Memoized custom components
    var MemorizedHeader = useMemorizedHeader({ renderHeader: renderHeader });
    var MemorizedParentMessageInfo = useMemorizedParentMessageInfo({
        parentMessage: parentMessage,
        parentMessageState: parentMessageState,
        renderParentMessageInfo: renderParentMessageInfo,
        renderParentMessageInfoPlaceholder: renderParentMessageInfoPlaceholder,
    });
    var MemorizedThreadList = useMemorizedThreadList({
        threadListState: threadListState,
        renderThreadListPlaceHolder: renderThreadListPlaceHolder,
    });
    // scroll
    var _g = useState(0), scrollBottom = _g[0], setScrollBottom = _g[1];
    var scrollRef = useRef(null);
    var onScroll = function (e) {
        var _a;
        var element = e.target;
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        var threadItemNodes = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.sendbird-thread-list-item');
        var firstNode = threadItemNodes === null || threadItemNodes === void 0 ? void 0 : threadItemNodes[0];
        if (isAboutSame(scrollTop, 0, 10) && hasMorePrev) {
            fetchPrevThreads(function (messages) {
                var _a;
                if (messages) {
                    try {
                        (_a = firstNode === null || firstNode === void 0 ? void 0 : firstNode.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(firstNode, { block: 'start', inline: 'nearest' });
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        if (isAboutSame(clientHeight + scrollTop, scrollHeight, 10) && hasMoreNext) {
            var scrollTop_1 = scrollTop;
            fetchNextThreads(function (messages) {
                if (messages) {
                    try {
                        element.scrollTop = scrollTop_1;
                        scrollRef.current.scrollTop = scrollTop_1;
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        // save the lastest scroll bottom value
        if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
            var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
            setScrollBottom(current.scrollHeight - current.scrollTop - current.offsetHeight);
        }
    };
    return (React__default.createElement("div", { className: 'sendbird-thread-ui' },
        MemorizedHeader || (React__default.createElement(ThreadHeader, { className: "sendbird-thread-ui__header", channelName: getChannelTitle(currentChannel, currentUserId, stringSet), onActionIconClick: onHeaderActionClick, onChannelNameClick: function () {
                onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
            } })),
        React__default.createElement("div", { className: "sendbird-thread-ui--scroll", ref: scrollRef, onScroll: onScroll },
            React__default.createElement(MessageProvider, { message: parentMessage, isByMe: isByMe }, MemorizedParentMessageInfo || (React__default.createElement(ParentMessageInfo, { className: "sendbird-thread-ui__parent-message-info" }))),
            replyCount > 0 && (React__default.createElement("div", { className: "sendbird-thread-ui__reply-counts" },
                React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, "".concat(replyCount, " ").concat(replyCount > 1 ? stringSet.THREAD__THREAD_REPLIES : stringSet.THREAD__THREAD_REPLY)))),
            MemorizedThreadList || (React__default.createElement(ThreadList, { className: "sendbird-thread-ui__thread-list", renderMessage: renderMessage, renderCustomSeparator: renderCustomSeparator, scrollRef: scrollRef, scrollBottom: scrollBottom }))),
        (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || (React__default.createElement(ThreadMessageInput, { className: "sendbird-thread-ui__message-input", renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

export { ThreadUI as default };
//# sourceMappingURL=ThreadUI.js.map
