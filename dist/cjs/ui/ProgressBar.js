'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/* eslint-disable no-redeclare */
var ProgressBarColorTypes = {
    PRIMARY: 'progress-bar-color--primary',
    GRAY: 'progress-bar-color--gray',
};
var ProgressBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, maxSize = _a.maxSize, _d = _a.currentSize, currentSize = _d === void 0 ? 0 : _d, _e = _a.colorType, colorType = _e === void 0 ? ProgressBarColorTypes.PRIMARY : _e;
    var width = React.useMemo(function () {
        return "".concat(currentSize / maxSize * 100, "%");
    }, [currentSize, maxSize]);
    return (React.createElement("div", { className: "sendbird-progress-bar ".concat(className, " ").concat(colorType, " ").concat(disabled ? 'progress-bar--disabled' : '') },
        React.createElement("div", { className: "sendbird-progress-bar__fill", style: { width: width } })));
};

exports.ProgressBar = ProgressBar;
exports.ProgressBarColorTypes = ProgressBarColorTypes;
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map