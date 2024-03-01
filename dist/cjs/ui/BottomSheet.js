'use strict';

var React = require('react');
var reactDom = require('react-dom');
var ui_Modal = require('../chunks/bundle-BPS3DFTX.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../chunks/bundle-2PlwnSzC.js');
require('../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DMrzJD8i.js');
require('../chunks/bundle-D2Bg8CLY.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');
require('../chunks/bundle-Gh-C2yIM.js');
require('./IconButton.js');
require('./Button.js');
require('../chunks/bundle-BUH06mHS.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BPDG2Sth.js');
require('../chunks/bundle-tCz2WwyT.js');
require('../chunks/bundle-DLvdMF5T.js');

var BottomSheet = function (props) {
    var _a, _b, _c;
    var _d = props.className, className = _d === void 0 ? '' : _d, children = props.children, onBackdropClick = props.onBackdropClick;
    var logger = (_b = (_a = useSendbirdStateContext.useSendbirdStateContext()) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logger;
    // https://github.com/testing-library/react-testing-library/issues/62#issuecomment-438653348
    var portalRoot = React.useRef();
    portalRoot.current = document.getElementById(ui_Modal.MODAL_ROOT);
    if (!portalRoot.current) {
        portalRoot.current = document.createElement('div');
        portalRoot.current.setAttribute('id', ui_Modal.MODAL_ROOT);
        document.body.appendChild(portalRoot.current);
        (_c = logger === null || logger === void 0 ? void 0 : logger.warning) === null || _c === void 0 ? void 0 : _c.call(logger, '@sendbird/uikit-react/ui/BottomSheet | Should put a ModalRoot to use the BottomSheet.');
    }
    return reactDom.createPortal(React.createElement("div", { className: "".concat(className, " sendbird-bottomsheet") },
        React.createElement("div", { className: 'sendbird-bottomsheet__content', role: 'dialog', "aria-modal": 'true', "aria-expanded": 'true' }, children),
        React.createElement("div", { className: "\n          sendbird-bottomsheet__backdrop\n        ", onClick: function (e) {
                e === null || e === void 0 ? void 0 : e.stopPropagation();
                onBackdropClick();
            } })), portalRoot.current);
};

module.exports = BottomSheet;
//# sourceMappingURL=BottomSheet.js.map