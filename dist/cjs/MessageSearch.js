'use strict';

var React = require('react');
var MessageSearch_components_MessageSearchUI = require('./MessageSearch/components/MessageSearchUI.js');
var LocalizationContext = require('./chunks/bundle-DKL8dMjq.js');
var ui_Icon = require('./ui/Icon.js');
var ui_Loader = require('./ui/Loader.js');
var MessageSearch_context = require('./MessageSearch/context.js');
var ui_Header = require('./ui/Header.js');
require('./ui/MessageSearchItem.js');
require('./chunks/bundle-BO5OZWjS.js');
require('./chunks/bundle-BCfv3yiy.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./chunks/bundle-Bmt-jCO8.js');
require('./chunks/bundle-C_eHyq_M.js');
require('./chunks/bundle-Cd7XOuNj.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-DgAALupQ.js');
require('./chunks/bundle-CoSi4lOw.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./chunks/bundle-CNnH6vJ_.js');
require('./ui/PlaceHolder.js');
require('./ui/MessageSearchFileItem.js');
require('./chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-BGyfIsKK.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-BFgXaSuR.js');
require('./ui/TextButton.js');
require('./chunks/bundle-Ev5kAkGi.js');
require('./ui/IconButton.js');

var COMPONENT_CLASS_NAME = 'sendbird-message-search-pannel';
function MessageSearchPannel(props) {
    var channelUrl = props.channelUrl, onResultClick = props.onResultClick, onCloseClick = props.onCloseClick, messageSearchQuery = props.messageSearchQuery, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderNoString = props.renderPlaceHolderNoString, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList, renderSearchItem = props.renderSearchItem;
    var _a = React.useState(''), searchString = _a[0], setSearchString = _a[1];
    var _b = React.useState(''), inputString = _b[0], setInputString = _b[1];
    var _c = React.useState(false), loading = _c[0], setLoading = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var timeout = null;
    React.useEffect(function () {
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
    return (React.createElement("div", { className: COMPONENT_CLASS_NAME },
        React.createElement(ui_Header.default, { className: "".concat(COMPONENT_CLASS_NAME, "__header"), renderMiddle: function () { return (React.createElement(ui_Header.default.Title, { title: stringSet.SEARCH_IN_CHANNEL })); }, renderRight: function () { return (React.createElement(ui_Header.default.IconButton, { className: "".concat(COMPONENT_CLASS_NAME, "__header__close-button"), onClick: onCloseClick, type: ui_Icon.IconTypes.CLOSE, color: ui_Icon.IconColors.ON_BACKGROUND_1 })); } }),
        React.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__input") },
            React.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__input__container") },
                React.createElement(ui_Icon.default, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__search-icon"), type: ui_Icon.IconTypes.SEARCH, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "24px", height: "24px" }),
                React.createElement("input", { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__input-area"), placeholder: stringSet.SEARCH, value: inputString, onChange: handleOnChangeInputString }),
                inputString && loading && (React.createElement(ui_Loader, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__spinner"), width: "20px", height: "20px" },
                    React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.PRIMARY, width: "20px", height: "20px" }))),
                !loading && inputString && (React.createElement(ui_Icon.default, { className: "".concat(COMPONENT_CLASS_NAME, "__input__container__reset-input-button"), type: ui_Icon.IconTypes.REMOVE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "20px", height: "20px", onClick: handleOnClickResetStringButton })))),
        React.createElement("div", { className: "".concat(COMPONENT_CLASS_NAME, "__message-search") },
            React.createElement(MessageSearch_context.MessageSearchProvider, { channelUrl: channelUrl, searchString: searchString, onResultClick: onResultClick, onResultLoaded: handleOnResultLoaded, messageSearchQuery: messageSearchQuery },
                React.createElement(MessageSearch_components_MessageSearchUI.MessageSearchUI, { renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderNoString: renderPlaceHolderNoString, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, renderSearchItem: renderSearchItem })))));
}

module.exports = MessageSearchPannel;
//# sourceMappingURL=MessageSearch.js.map
