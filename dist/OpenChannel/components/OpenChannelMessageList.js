import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../chunks/bundle-vUCKPp-d.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-DLH_rtYX.js';
import OpenChannelMessage from './OpenChannelMessage.js';
import { MessageProvider } from '../../Message/context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useHandleOnScrollCallback } from '../../chunks/bundle-3cQg389j.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-_Ymy0XJB.js';
import '../../chunks/bundle-DhcOoc-p.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-CHFeqEtk.js';
import '../../chunks/bundle-Z7nfE2Su.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-dp1lZZxR.js';
import '../../chunks/bundle-C4OSzTlA.js';
import '../../chunks/bundle-BKH-CUXx.js';
import '../../chunks/bundle-vKqXYEfp.js';
import '../../chunks/bundle-BjdNFz7H.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';

function OpenChannelMessageList(props, ref) {
    var _a = useOpenChannelContext(), _b = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _b === void 0 ? true : _b, allMessages = _a.allMessages, hasMore = _a.hasMore, onScroll = _a.onScroll;
    var store = useSendbirdStateContext();
    var userId = store.config.userId;
    var scrollRef = ref || useRef(null);
    var _c = useState(false), showScrollDownButton = _c[0], setShowScrollDownButton = _c[1];
    var scrollToBottom = function () {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
            setShowScrollDownButton(false);
        }
    };
    var handleOnScroll = useHandleOnScrollCallback({
        setShowScrollDownButton: setShowScrollDownButton,
        hasMore: hasMore,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var memoizedMessageList = useMemo(function () {
        var _a;
        if (allMessages.length > 0) {
            return (allMessages.map(function (message, index) {
                var _a;
                var previousMessage = allMessages[index - 1];
                var nextMessage = allMessages[index - 1];
                var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
                var currentCreatedAt = message === null || message === void 0 ? void 0 : message.createdAt;
                // https://stackoverflow.com/a/41855608
                var hasSeparator = !(previousMessageCreatedAt && (isSameDay(currentCreatedAt, previousMessageCreatedAt)));
                var _b = isMessageGroupingEnabled
                    ? compareMessagesForGrouping(previousMessage, message, nextMessage)
                    : [false, false], chainTop = _b[0], chainBottom = _b[1];
                var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
                var key = (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId);
                return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: key },
                    React__default.createElement(OpenChannelMessage, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage })));
            }));
        }
        return (((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || (React__default.createElement(PlaceHolder, { className: "sendbird-openchannel-conversation-scroll__container__place-holder", type: PlaceHolderTypes.NO_MESSAGES })));
    }, [allMessages]);
    return (React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll" },
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container" },
            React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__padding" }),
            React__default.createElement("div", { className: [
                    'sendbird-openchannel-conversation-scroll__container__item-container',
                    (allMessages.length > 0) ? '' : 'no-messages',
                ].join(' '), onScroll: handleOnScroll, ref: scrollRef }, memoizedMessageList)),
        showScrollDownButton && (React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button", onClick: scrollToBottom, onKeyDown: scrollToBottom, tabIndex: 0, role: "button" },
            React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.CHEVRON_DOWN, fillColor: IconColors.CONTENT })))));
}
var OpenChannelMessageList$1 = React__default.forwardRef(OpenChannelMessageList);

export { OpenChannelMessageList$1 as default };
//# sourceMappingURL=OpenChannelMessageList.js.map
