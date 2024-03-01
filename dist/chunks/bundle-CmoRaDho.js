import { d as __extends, _ as __assign } from './bundle-BpxXmFQC.js';
import React__default from 'react';
import { createPortal } from 'react-dom';

// padding to handle height of last item in message-list
var HEIGHT_PADDING = 60;
var MenuItems = /** @class */ (function (_super) {
    __extends(MenuItems, _super);
    function MenuItems(props) {
        var _this = _super.call(this, props) || this;
        _this.menuRef = React__default.createRef();
        _this.setupEvents = function () {
            var closeDropdown = _this.props.closeDropdown;
            var menuRef = _this.menuRef;
            var handleClickOutside = function (event) {
                var _a, _b;
                if ((menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) && !((_b = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, event.target))) {
                    closeDropdown === null || closeDropdown === void 0 ? void 0 : closeDropdown();
                }
            };
            _this.setState({
                handleClickOutside: handleClickOutside,
            });
            document.addEventListener('mousedown', handleClickOutside);
        };
        _this.cleanUpEvents = function () {
            var handleClickOutside = _this.state.handleClickOutside;
            document.removeEventListener('mousedown', handleClickOutside);
        };
        _this.getMenuPosition = function () {
            var _a, _b;
            var _c = _this.props, parentRef = _c.parentRef, openLeft = _c.openLeft;
            var parentRect = (_b = (_a = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect) === null || _b === void 0 ? void 0 : _b.call(_a);
            var x = (parentRect === null || parentRect === void 0 ? void 0 : parentRect.x) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.left) || 0;
            var y = (parentRect === null || parentRect === void 0 ? void 0 : parentRect.y) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.top) || 0;
            var menuStyle = {
                top: y,
                left: x,
            };
            if (!_this.menuRef.current)
                return menuStyle;
            var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
            var rect = _this.menuRef.current.getBoundingClientRect();
            if (y + rect.height + HEIGHT_PADDING > innerHeight) {
                menuStyle.top -= rect.height;
            }
            if (x + rect.width > innerWidth && !openLeft) {
                menuStyle.left -= rect.width;
            }
            if (menuStyle.top < 0) {
                menuStyle.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
            }
            menuStyle.top += 32;
            if (openLeft) {
                var padding = Number.isNaN(rect.width - 30)
                    ? 108 // default
                    : rect.width - 30;
                menuStyle.left -= padding;
            }
            // warning: this section has to be executed after the openLeft is calculated
            // menu is outside viewport
            if (menuStyle.left < 0) {
                menuStyle.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
            }
            _this.setState({ menuStyle: menuStyle });
            return menuStyle;
        };
        _this.state = {
            menuStyle: {},
            handleClickOutside: function () { },
        };
        return _this;
    }
    MenuItems.prototype.componentDidMount = function () {
        this.setupEvents();
        this.getMenuPosition();
    };
    MenuItems.prototype.componentWillUnmount = function () {
        this.cleanUpEvents();
    };
    MenuItems.prototype.render = function () {
        var _a;
        var menuStyle = this.state.menuStyle;
        var _b = this.props, children = _b.children, style = _b.style, _c = _b.className, className = _c === void 0 ? '' : _c;
        return (createPortal((React__default.createElement("div", { className: (_a = this.props) === null || _a === void 0 ? void 0 : _a.className },
            React__default.createElement("div", { className: "sendbird-dropdown__menu-backdrop" }),
            React__default.createElement("ul", { className: "".concat(className, " sendbird-dropdown__menu"), ref: this.menuRef, style: __assign({ display: 'inline-block', position: 'fixed', left: "".concat(Math.round(menuStyle.left), "px"), top: "".concat(Math.round(menuStyle.top), "px") }, style) }, children))), document.getElementById('sendbird-dropdown-portal')));
    };
    return MenuItems;
}(React__default.Component));

export { MenuItems as M };
//# sourceMappingURL=bundle-CmoRaDho.js.map
