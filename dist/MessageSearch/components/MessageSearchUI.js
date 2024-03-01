import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import { useMessageSearchContext } from '../context.js';
import MessageSearchItem from '../../ui/MessageSearchItem.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import MessageSearchFileItem from '../../ui/MessageSearchFileItem.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CO0PW_ND.js';

var COMPONENT_CLASS_NAME = 'sendbird-message-search';
var MessageSearchUI = function (_a) {
    var renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderPlaceHolderNoString = _a.renderPlaceHolderNoString, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderSearchItem = _a.renderSearchItem;
    var _b = useMessageSearchContext(), isInvalid = _b.isInvalid, searchString = _b.searchString, requestString = _b.requestString, currentChannel = _b.currentChannel, retryCount = _b.retryCount, setRetryCount = _b.setRetryCount, loading = _b.loading, scrollRef = _b.scrollRef, hasMoreResult = _b.hasMoreResult, onScroll = _b.onScroll, allMessages = _b.allMessages, onResultClick = _b.onResultClick, selectedMessageId = _b.selectedMessageId, setSelectedMessageId = _b.setSelectedMessageId;
    var stringSet = useContext(LocalizationContext).stringSet;
    var handleRetryToConnect = function () {
        setRetryCount(retryCount + 1);
    };
    var handleOnScroll = function (e) {
        var scrollElement = e.target;
        var scrollTop = scrollElement.scrollTop, scrollHeight = scrollElement.scrollHeight, clientHeight = scrollElement.clientHeight;
        if (!hasMoreResult) {
            return;
        }
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            onScroll(function () {
                // after load more searched messages
            });
        }
    };
    var getChannelName = function () {
        if (currentChannel && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) !== 'Group Channel') {
            return currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name;
        }
        if (currentChannel && ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) === 'Group Channel' || !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name))) {
            return currentChannel.members.map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        }
        return stringSet.NO_TITLE;
    };
    if (isInvalid && searchString && requestString) {
        return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG, retryToConnect: handleRetryToConnect })));
    }
    if (loading && searchString && requestString) {
        return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.SEARCHING })));
    }
    if (!searchString) {
        return (renderPlaceHolderNoString === null || renderPlaceHolderNoString === void 0 ? void 0 : renderPlaceHolderNoString()) || (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.SEARCH_IN, searchInString: getChannelName() })));
    }
    return (React__default.createElement("div", { className: COMPONENT_CLASS_NAME, onScroll: handleOnScroll, ref: scrollRef }, (allMessages.length > 0)
        ? (allMessages.map(function (message) {
            if (renderSearchItem) {
                return renderSearchItem({ message: message, onResultClick: onResultClick });
            }
            if (message.messageType === 'file') {
                return (React__default.createElement(MessageSearchFileItem, { className: "".concat(COMPONENT_CLASS_NAME, "__message-search-item"), message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                        onResultClick(message);
                        setSelectedMessageId(message.messageId);
                    } }));
            }
            return (React__default.createElement(MessageSearchItem, { className: "".concat(COMPONENT_CLASS_NAME, "__message-search-item"), message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                    onResultClick(message);
                    setSelectedMessageId(message.messageId);
                } }));
        }))
        : (renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList()) || (React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.NO_RESULTS }))));
};

export { MessageSearchUI, MessageSearchUI as default };
//# sourceMappingURL=MessageSearchUI.js.map
