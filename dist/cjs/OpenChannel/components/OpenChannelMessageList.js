'use strict';

var React = require('react');
var index$1 = require('../../chunks/bundle-uiV3qgX6.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_context = require('../../chunks/bundle-B_CLxaA8.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
var Message_context = require('../../Message/context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-BXBfcBnf.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-CYjw4691.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-4lJ887l6.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BL3NDt72.js');
require('../../chunks/bundle-CR1j53bM.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-B4c5-CEo.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../chunks/bundle-DQKTGusP.js');
require('../../chunks/bundle-DoLTlc_l.js');
require('../../chunks/bundle-DWcNmk2G.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-etwgXqw-.js');
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
