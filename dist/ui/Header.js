import { _ as __assign } from '../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ZpyLpKbV.js';
import { u as useMediaQueryContext } from '../chunks/bundle-NTpQiCzz.js';
import TextButton from './TextButton.js';
import Icon$1 from './Icon.js';
import IconButton$1 from './IconButton.js';
import { n as noop } from '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-jY1v8xbA.js';

var Header = function (_a) {
    var _b;
    var className = _a.className, renderLeft = _a.renderLeft, renderRight = _a.renderRight, renderMiddle = _a.renderMiddle;
    var isMobile = false;
    try {
        isMobile = (_b = useMediaQueryContext === null || useMediaQueryContext === void 0 ? void 0 : useMediaQueryContext()) === null || _b === void 0 ? void 0 : _b.isMobile;
    }
    catch (err) {
        // TODO: handle it
    }
    return (React__default.createElement("div", { className: "sendbird-ui-header ".concat(className) },
        renderLeft ? (React__default.createElement("div", { className: "sendbird-ui-header__left sendbird-ui-header--is-".concat(isMobile ? 'mobile' : 'desktop') }, renderLeft === null || renderLeft === void 0 ? void 0 : renderLeft())) : null,
        React__default.createElement("div", { className: "sendbird-ui-header__middle" }, renderMiddle === null || renderMiddle === void 0 ? void 0 : renderMiddle()),
        renderRight ? (React__default.createElement("div", { className: "sendbird-ui-header__right sendbird-ui-header--is-".concat(isMobile ? 'mobile' : 'desktop') }, renderRight === null || renderRight === void 0 ? void 0 : renderRight())) : null));
};
var Title = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, onClickSubtitle = _a.onClickSubtitle;
    return (React__default.createElement("div", { className: "sendbird-ui-header__middle" },
        title && (React__default.createElement(Label, { className: "sendbird-ui-header__middle__title", type: LabelTypography.H_2, color: LabelColors.ONBACKGROUND_1 }, title)),
        subtitle && (onClickSubtitle ? (React__default.createElement(TextButton, { className: "sendbird-ui-header__middle__subtitle__container", onClick: onClickSubtitle, disableUnderline: true },
            React__default.createElement(Label, { className: "sendbird-ui-header__middle__subtitle", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, subtitle))) : (React__default.createElement(Label, { className: "sendbird-ui-header__middle__subtitle", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, subtitle)))));
};
var IconButton = function (_a) {
    var className = _a.className, onClick = _a.onClick, type = _a.type, color = _a.color, _b = _a.width, width = _b === void 0 ? '32px' : _b, _c = _a.height, height = _c === void 0 ? '32px' : _c, _d = _a.renderIcon, renderIcon = _d === void 0 ? function (props) { return React__default.createElement(Icon, __assign({}, props)); } : _d;
    return (React__default.createElement(IconButton$1, { className: className, width: width, height: height, onClick: onClick }, renderIcon({ type: type, color: color })));
};
var Icon = function (_a) {
    var className = _a.className, type = _a.type, color = _a.color, _b = _a.width, width = _b === void 0 ? '22px' : _b, _c = _a.height, height = _c === void 0 ? '22px' : _c, _d = _a.onClick, onClick = _d === void 0 ? noop : _d;
    return (React__default.createElement(Icon$1, { className: className, type: type, fillColor: color, width: width, height: height, onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); } }));
};
var Header$1 = Object.assign(Header, { Title: Title, IconButton: IconButton, Icon: Icon });

export { Header, Icon, IconButton, Title, Header$1 as default };
//# sourceMappingURL=Header.js.map
