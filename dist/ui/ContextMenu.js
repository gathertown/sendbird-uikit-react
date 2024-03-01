import React__default, { useState, useRef, useCallback, useEffect } from 'react';
import { M as MenuItems$1 } from '../chunks/bundle-BsPw6HPN.js';
import { Role } from '@sendbird/chat';
import { OpenChannel } from '@sendbird/chat/openChannel';
import { createPortal } from 'react-dom';
import SortByRow from './SortByRow.js';
import { w as getClassName } from '../chunks/bundle-CmPJV5ar.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DBtyGp-i.js';
import '../chunks/bundle-h5nSe8RU.js';
import '../chunks/bundle-1rHkiOvv.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Bh_HZf7x.js';

var MuteMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = useState(user.isMuted), isMuted = _g[0], setIsMuted = _g[1];
    var isProcessing = useRef(false);
    var onClickHandler = useCallback(function () {
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
    return (React__default.createElement(MenuItem, { className: className, disable: disable, dataSbId: dataSbId, onClick: onClickHandler }, children));
};

var OperatorMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = useState(channel instanceof OpenChannel
        ? channel.isOperator(user)
        : user.role === Role.OPERATOR), isOperator = _g[0], setIsOperator = _g[1];
    var isProcessing = useRef(false);
    var onClickHandler = useCallback(function () {
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
    return (React__default.createElement(MenuItem, { className: className, disable: disable, dataSbId: dataSbId, onClick: onClickHandler }, children));
};

var defaultParentRect = { x: 0, y: 0, left: 0, top: 0, height: 0 };
var EmojiListItems$1 = function (_a) {
    var children = _a.children, parentRef = _a.parentRef, parentContainRef = _a.parentContainRef, _b = _a.spaceFromTrigger, spaceFromTrigger = _b === void 0 ? { x: 0, y: 0 } : _b, closeDropdown = _a.closeDropdown;
    var _c = useState({ left: 0, top: 0 }), reactionStyle = _c[0], setReactionStyle = _c[1];
    var reactionRef = useRef(null);
    /* showParent & hideParent */
    useEffect(function () {
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
    useEffect(function () {
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
    useEffect(function () {
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
        return (createPortal(React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: "sendbird-dropdown__menu-backdrop" }),
            React__default.createElement("ul", { className: "sendbird-dropdown__reaction-bar", ref: reactionRef, style: {
                    display: 'inline-block',
                    position: 'fixed',
                    left: "".concat(Math.round(reactionStyle.left), "px"),
                    top: "".concat(Math.round(reactionStyle.top), "px"),
                } },
                React__default.createElement(SortByRow, { className: "sendbird-dropdown__reaction-bar__row", maxItemCount: 8, itemWidth: 44, itemHeight: 40 }, children))), rootElement));
    }
    return null;
};

var ENTER_KEY = 13;
var MenuItems = MenuItems$1;
var EmojiListItems = EmojiListItems$1;
var MenuItem = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onClick = _a.onClick, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d;
    var handleClickEvent = function (e) {
        if (!disable && onClick) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }
    };
    return (React__default.createElement("li", { className: getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']), role: "menuitem", "aria-disabled": disable ? true : false, onClick: handleClickEvent, onKeyPress: function (e) { if (e.keyCode === ENTER_KEY)
            handleClickEvent(e); }, tabIndex: 0, "data-sb-id": dataSbId },
        React__default.createElement(Label, { className: "sendbird-dropdown__menu-item__text", type: LabelTypography.SUBTITLE_2, color: disable ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, children)));
};
var MenuRoot = function () { return (React__default.createElement("div", { id: "sendbird-dropdown-portal", className: "sendbird-dropdown-portal" })); };
// For the test environment
var EmojiReactionListRoot = function () { return React__default.createElement("div", { id: "sendbird-emoji-list-portal" }); };
function ContextMenu(_a) {
    var menuTrigger = _a.menuTrigger, menuItems = _a.menuItems, isOpen = _a.isOpen, onClick = _a.onClick;
    var _b = useState(false), showMenu = _b[0], setShowMenu = _b[1];
    return (React__default.createElement("div", { className: "sendbird-context-menu", style: { display: 'inline' }, onClick: onClick }, menuTrigger === null || menuTrigger === void 0 ? void 0 :
        menuTrigger(function () { return setShowMenu(!showMenu); }),
        (showMenu || isOpen) && menuItems(function () { return setShowMenu(false); })));
}

export { EmojiListItems, EmojiReactionListRoot, MenuItem, MenuItems, MenuRoot, MuteMenuItem, OperatorMenuItem, ContextMenu as default };
//# sourceMappingURL=ContextMenu.js.map
