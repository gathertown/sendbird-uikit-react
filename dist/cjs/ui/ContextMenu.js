'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MenuItems$1 = require('../chunks/bundle-D0W7zrvh.js');
var SendbirdChat = require('@sendbird/chat');
var openChannel = require('@sendbird/chat/openChannel');
var reactDom = require('react-dom');
var ui_SortByRow = require('./SortByRow.js');
var index = require('../chunks/bundle-D-432Irw.js');
var ui_Label = require('../chunks/bundle-CkvaXo1D.js');
require('../chunks/bundle-DvNeoTBz.js');
require('../chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-BruYC2Km.js');

var MuteMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = React.useState(user.isMuted), isMuted = _g[0], setIsMuted = _g[1];
    var isProcessing = React.useRef(false);
    var onClickHandler = React.useCallback(function () {
        if (!isProcessing.current) {
            isProcessing.current = true;
            if (isMuted) {
                channel.unmuteUser(user)
                    .then(function () {
                    setIsMuted(false);
                    onChange(channel, user, false);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
            else {
                channel.muteUser(user)
                    .then(function () {
                    setIsMuted(true);
                    onChange(channel, user, true);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
        }
    }, [isProcessing, isMuted]);
    return (React.createElement(MenuItem, { className: className, disable: disable, dataSbId: dataSbId, onClick: onClickHandler }, children));
};

var OperatorMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = React.useState(channel instanceof openChannel.OpenChannel
        ? channel.isOperator(user)
        : user.role === SendbirdChat.Role.OPERATOR), isOperator = _g[0], setIsOperator = _g[1];
    var isProcessing = React.useRef(false);
    var onClickHandler = React.useCallback(function () {
        if (!isProcessing.current) {
            isProcessing.current = true;
            if (isOperator) {
                channel.removeOperators([user.userId])
                    .then(function () {
                    setIsOperator(false);
                    onChange(channel, user, false);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
            else {
                channel.addOperators([user.userId])
                    .then(function () {
                    setIsOperator(true);
                    onChange(channel, user, true);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
        }
    }, [isProcessing, isOperator]);
    return (React.createElement(MenuItem, { className: className, disable: disable, dataSbId: dataSbId, onClick: onClickHandler }, children));
};

var defaultParentRect = { x: 0, y: 0, left: 0, top: 0, height: 0 };
var EmojiListItems$1 = function (_a) {
    var children = _a.children, parentRef = _a.parentRef, parentContainRef = _a.parentContainRef, _b = _a.spaceFromTrigger, spaceFromTrigger = _b === void 0 ? { x: 0, y: 0 } : _b, closeDropdown = _a.closeDropdown;
    var _c = React.useState({ left: 0, top: 0 }), reactionStyle = _c[0], setReactionStyle = _c[1];
    var reactionRef = React.useRef(null);
    /* showParent & hideParent */
    React.useEffect(function () {
        if (parentContainRef && (parentContainRef === null || parentContainRef === void 0 ? void 0 : parentContainRef.current)) {
            parentContainRef.current.classList.add('sendbird-reactions--pressed');
        }
        return function () {
            if (parentContainRef && (parentContainRef === null || parentContainRef === void 0 ? void 0 : parentContainRef.current)) {
                parentContainRef.current.classList.remove('sendbird-reactions--pressed');
            }
        };
    }, []);
    /* setupEvents & cleanupEvents */
    React.useEffect(function () {
        var handleClickOutSide = function (event) {
            var _a, _b;
            if ((reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) && !((_b = (_a = reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, event.target))) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutSide);
        return function () {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);
    /* getBarPosition */
    React.useEffect(function () {
        var _a, _b, _c;
        var spaceFromTriggerX = (spaceFromTrigger === null || spaceFromTrigger === void 0 ? void 0 : spaceFromTrigger.x) || 0;
        var spaceFromTriggerY = (spaceFromTrigger === null || spaceFromTrigger === void 0 ? void 0 : spaceFromTrigger.y) || 0;
        var parentRect = (_b = (_a = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : defaultParentRect;
        var x = parentRect.x || parentRect.left;
        var y = parentRect.y || parentRect.top;
        var reactionStyle = {
            top: y,
            left: x,
        };
        if (!(reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current)) {
            setReactionStyle(reactionStyle);
        }
        else {
            var rect = (_c = reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
            if (reactionStyle.top < rect.height) {
                reactionStyle.top += parentRect.height;
                reactionStyle.top += spaceFromTriggerY;
            }
            else {
                reactionStyle.top -= rect.height;
                reactionStyle.top -= spaceFromTriggerY;
            }
            reactionStyle.left -= rect.width / 2;
            reactionStyle.left += (parentRect.height / 2) - 2;
            reactionStyle.left += spaceFromTriggerX;
            var maximumLeft = window.innerWidth - rect.width;
            if (maximumLeft < reactionStyle.left) {
                reactionStyle.left = maximumLeft;
            }
            if (reactionStyle.left < 0) {
                reactionStyle.left = 0;
            }
            setReactionStyle(reactionStyle);
        }
    }, []);
    var rootElement = document.getElementById('sendbird-emoji-list-portal');
    if (rootElement) {
        return (reactDom.createPortal(React.createElement(React.Fragment, null,
            React.createElement("div", { className: "sendbird-dropdown__menu-backdrop" }),
            React.createElement("ul", { className: "sendbird-dropdown__reaction-bar", ref: reactionRef, style: {
                    display: 'inline-block',
                    position: 'fixed',
                    left: "".concat(Math.round(reactionStyle.left), "px"),
                    top: "".concat(Math.round(reactionStyle.top), "px"),
                } },
                React.createElement(ui_SortByRow, { className: "sendbird-dropdown__reaction-bar__row", maxItemCount: 8, itemWidth: 44, itemHeight: 40 }, children))), rootElement));
    }
    return null;
};

var ENTER_KEY = 13;
var MenuItems = MenuItems$1.MenuItems;
var EmojiListItems = EmojiListItems$1;
var MenuItem = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onClick = _a.onClick, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d;
    var handleClickEvent = function (e) {
        if (!disable && onClick) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }
    };
    return (React.createElement("li", { className: index.getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']), role: "menuitem", "aria-disabled": disable ? true : false, onClick: handleClickEvent, onKeyPress: function (e) { if (e.keyCode === ENTER_KEY)
            handleClickEvent(e); }, tabIndex: 0, "data-sb-id": dataSbId },
        React.createElement(ui_Label.Label, { className: "sendbird-dropdown__menu-item__text", type: ui_Label.LabelTypography.SUBTITLE_2, color: disable ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1 }, children)));
};
var MenuRoot = function () { return (React.createElement("div", { id: "sendbird-dropdown-portal", className: "sendbird-dropdown-portal" })); };
// For the test environment
var EmojiReactionListRoot = function () { return React.createElement("div", { id: "sendbird-emoji-list-portal" }); };
function ContextMenu(_a) {
    var menuTrigger = _a.menuTrigger, menuItems = _a.menuItems, isOpen = _a.isOpen, onClick = _a.onClick;
    var _b = React.useState(false), showMenu = _b[0], setShowMenu = _b[1];
    return (React.createElement("div", { className: "sendbird-context-menu", style: { display: 'inline' }, onClick: onClick }, menuTrigger === null || menuTrigger === void 0 ? void 0 :
        menuTrigger(function () { return setShowMenu(!showMenu); }),
        (showMenu || isOpen) && menuItems(function () { return setShowMenu(false); })));
}

exports.EmojiListItems = EmojiListItems;
exports.EmojiReactionListRoot = EmojiReactionListRoot;
exports.MenuItem = MenuItem;
exports.MenuItems = MenuItems;
exports.MenuRoot = MenuRoot;
exports.MuteMenuItem = MuteMenuItem;
exports.OperatorMenuItem = OperatorMenuItem;
exports.default = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
