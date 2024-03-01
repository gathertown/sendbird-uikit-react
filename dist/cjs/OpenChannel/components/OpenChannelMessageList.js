'use strict';

var React = require('react');
var index$1 = require('../../chunks/bundle-DB4Q30uD.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_context = require('../../chunks/bundle-D8gbp0yC.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
var Message_context = require('../../Message/context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-Bjv1Th5q.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-DZTJrxjG.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-BeJ7-X59.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../chunks/bundle-CuODNaEq.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../chunks/bundle-D5ackF95.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../chunks/bundle-CjFSIiUv.js');
require('../../chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-BelgkMC5.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-D0W7zrvh.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-6brfXTaf.js');
require('../../chunks/bundle-hMga4Q50.js');
require('../../chunks/bundle-Cg5zpjjy.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-ByTdTPZ5.js');
require('../../chunks/bundle-Cdin1NhG.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-jIzB_4Er.js');
require('../../chunks/bundle-ZB7RBE8F.js');
require('../../chunks/bundle-k--aWKWA.js');
require('dompurify');
require('../../chunks/bundle-D93_K7IT.js');
require('../../chunks/bundle-fM1h2HCr.js');
require('../../chunks/bundle-DViNoq67.js');
require('../../chunks/bundle-C2ogzi2N.js');
require('../../chunks/bundle-Bzjc69tJ.js');
require('../../chunks/bundle-c_asXXlZ.js');
require('../../chunks/bundle-DKu6RR0i.js');
require('../../chunks/bundle-BZXuUIRS.js');
require('@sendbird/chat/message');

function OpenChannelMessageList(props, ref) {
    var _a = OpenChannel_context.useOpenChannelContext(), _b = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _b === void 0 ? true : _b, allMessages = _a.allMessages, hasMore = _a.hasMore, onScroll = _a.onScroll;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var userId = store.config.userId;
    var scrollRef = ref || React.useRef(null);
    var _c = React.useState(false), showScrollDownButton = _c[0], setShowScrollDownButton = _c[1];
    var scrollToBottom = function () {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
            setShowScrollDownButton(false);
        }
    };
    var handleOnScroll = index.useHandleOnScrollCallback({
        setShowScrollDownButton: setShowScrollDownButton,
        hasMore: hasMore,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var memoizedMessageList = React.useMemo(function () {
        var _a;
        if (allMessages.length > 0) {
            return (allMessages.map(function (message, index) {
                var _a;
                var previousMessage = allMessages[index - 1];
                var nextMessage = allMessages[index - 1];
                var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
                var currentCreatedAt = message === null || message === void 0 ? void 0 : message.createdAt;
                // https://stackoverflow.com/a/41855608
                var hasSeparator = !(previousMessageCreatedAt && (index$1.isSameDay(currentCreatedAt, previousMessageCreatedAt)));
                var _b = isMessageGroupingEnabled
                    ? Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(previousMessage, message, nextMessage)
                    : [false, false], chainTop = _b[0], chainBottom = _b[1];
                var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
                var key = (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId);
                return (React.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: key },
                    React.createElement(OpenChannel_components_OpenChannelMessage, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage })));
            }));
        }
        return (((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || (React.createElement(ui_PlaceHolder.default, { className: "sendbird-openchannel-conversation-scroll__container__place-holder", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES })));
    }, [allMessages]);
    return (React.createElement("div", { className: "sendbird-openchannel-conversation-scroll" },
        React.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container" },
            React.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__padding" }),
            React.createElement("div", { className: [
                    'sendbird-openchannel-conversation-scroll__container__item-container',
                    (allMessages.length > 0) ? '' : 'no-messages',
                ].join(' '), onScroll: handleOnScroll, ref: scrollRef }, memoizedMessageList)),
        showScrollDownButton && (React.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button", onClick: scrollToBottom, onKeyDown: scrollToBottom, tabIndex: 0, role: "button" },
            React.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.CONTENT })))));
}
var OpenChannelMessageList$1 = React.forwardRef(OpenChannelMessageList);

module.exports = OpenChannelMessageList$1;
//# sourceMappingURL=OpenChannelMessageList.js.map
