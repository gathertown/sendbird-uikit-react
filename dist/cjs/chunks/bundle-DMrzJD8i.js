'use strict';

var noop = function () {
    /** noop * */
};
var isMobileIOS = function (userAgent) {
    var isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    var isWebkit = /WebKit/i.test(userAgent);
    var isSafari = /Safari/i.test(userAgent);
    return isIOS && (isWebkit || isSafari);
};
var deleteNullish = function (obj) {
    var cleaned = {};
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== undefined && value !== null) {
            cleaned[key] = value;
        }
    });
    return cleaned;
};
function openURL(url) {
    var safeURL = url;
    if (safeURL) {
        if (!safeURL.startsWith('http://') && !safeURL.startsWith('https://')) {
            safeURL = 'https://' + safeURL;
        }
        window.open(safeURL, '_blank', 'noopener,noreferrer');
    }
}
function classnames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(Boolean).join(' ');
}

exports.classnames = classnames;
exports.deleteNullish = deleteNullish;
exports.isMobileIOS = isMobileIOS;
exports.noop = noop;
exports.openURL = openURL;
//# sourceMappingURL=bundle-DMrzJD8i.js.map
