import React__default, { useState, useContext, useEffect } from 'react';
import { MessageSearchUI } from './MessageSearch/components/MessageSearchUI.js';
import { L as LocalizationContext } from './chunks/bundle-VRwQbdO6.js';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import Loader from './ui/Loader.js';
import { MessageSearchProvider } from './MessageSearch/context.js';
import Header from './ui/Header.js';
import './ui/MessageSearchItem.js';
import './chunks/bundle-BpxXmFQC.js';
import './chunks/bundle-C4J9I_bG.js';
import './chunks/bundle-BIDYJkIe.js';
import './chunks/bundle-BOFstL3F.js';
import './chunks/bundle-vUCKPp-d.js';
import './chunks/bundle-D7hWtRqW.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-DIC0UBC5.js';
import './chunks/bundle-DjvfRFVm.js';
import './chunks/bundle-ZpyLpKbV.js';
import './chunks/bundle-fFCkIdkP.js';
import './ui/PlaceHolder.js';
import './ui/MessageSearchFileItem.js';
import './chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-CO0PW_ND.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './chunks/bundle-NTpQiCzz.js';
import './ui/TextButton.js';
import './chunks/bundle-jY1v8xbA.js';
import './ui/IconButton.js';

var COMPONENT_CLASS_NAME = 'sendbird-message-search-pannel';
function MessageSearchPannel(props) {
    var channelUrl = props.channelUrl, onResultClick = props.onResultClick, onCloseClick = props.onCloseClick, messageSearchQuery = props.messageSearchQuery, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderNoString = props.renderPlaceHolderNoString, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList, renderSearchItem = props.renderSearchItem;
    var _a = useState(''), searchString = _a[0], setSearchString = _a[1];
    var _b = useState(''), inputString = _b[0], setInputString = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var timeout = null;
    useEffect(function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            setSearchString(inputString);
            setLoading(true);
            timeout = null;
        }, 500);
    }, [inputString]);
    var handleOnChangeInputString = function (e) {
        setInputString(e.target.value);
    };
    var handleOnResultLoaded = function () {
        setLoading(false);
    };
    var handleOnClickResetStringButton = function (e) {
        e.stopPropagation();
        setInputString('');
        setSearchString('');
    };
    return (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
        React__default.createElement(Header, { className: "".concat(COMPONENT_CLASS_NAME, "__header"), renderMiddle: function () { return (React__default.createElement(Header.Title, { title: stringSet.SEARCH_IN_CHANNEL })); }, renderRight: function () { return (React__default.createElement(Header.IconButton, { className: "".concat(COMPONENT_CLASS_NAME, "__header__close-button"), onClick: onCloseClick, type: IconTypes.CLOSE, color: IconColors.ON_BACKGROUND_1 })); } }),
        React__default.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__input") },
            React__default.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__input__container") },
                React__default.createElement(Icon, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__search-icon"), type: IconTypes.SEARCH, fillColor: IconColors.ON_BACKGROUND_3, width: "24px", height: "24px" }),
                React__default.createElement("input", { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__input-area"), placeholder: stringSet.SEARCH, value: inputString, onChange: handleOnChangeInputString }),
                inputString && loading && (React__default.createElement(Loader, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__spinner"), width: "20px", height: "20px" },
                    React__default.createElement(Icon, { type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "20px", height: "20px" }))),
                !loading && inputString && (React__default.createElement(Icon, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__reset-input-button"), type: IconTypes.REMOVE, fillColor: IconColors.ON_BACKGROUND_3, width: "20px", height: "20px", onClick: handleOnClickResetStringButton })))),
        React__default.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__message-search") },
            React__default.createElement(MessageSearchProvider, { channelUrl: channelUrl, searchString: searchString, onResultClick: onResultClick, onResultLoaded: handleOnResultLoaded, messageSearchQuery: messageSearchQuery },
                React__default.createElement(MessageSearchUI, { renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderNoString: renderPlaceHolderNoString, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, renderSearchItem: renderSearchItem })))));
}

export { MessageSearchPannel as default };
//# sourceMappingURL=MessageSearch.js.map
