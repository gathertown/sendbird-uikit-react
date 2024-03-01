import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../chunks/bundle-BlILx8DA.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-BMZrET1K.js';
import OpenChannelMessage from './OpenChannelMessage.js';
import { MessageProvider } from '../../Message/context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useHandleOnScrollCallback } from '../../chunks/bundle-voj5Ykce.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-g-7qyWG4.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-_-u6U1pM.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-D4dNsiFL.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-D-5CYqFq.js';
import '../../chunks/bundle-Ca7m2hEN.js';
import '../../chunks/bundle-TmVTNucb.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-_lgzP0oA.js';
import '../../chunks/bundle-CjXL-Zhv.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-DyyEjGYc.js';
import '../../chunks/bundle-Qz_mnbcy.js';
import '../../chunks/bundle-MhcOuoGZ.js';
import 'dompurify';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-jiObN6zC.js';
import '../../chunks/bundle-Dnb-49Dd.js';
import '../../chunks/bundle-CxH5pvZA.js';
import '../../chunks/bundle-B8YFOQl1.js';
import '../../chunks/bundle-KOP8NnFs.js';
import '../../chunks/bundle-DE6jjGXF.js';
import '../../chunks/bundle-TVGnyGwG.js';
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
