import React__default, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { b as MODAL_ROOT } from '../chunks/bundle-OZ70K6ig.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-VRwQbdO6.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-BIDYJkIe.js';
import '../chunks/bundle-NTpQiCzz.js';
import './IconButton.js';
import './Button.js';
import '../chunks/bundle-ZpyLpKbV.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-DOX5a7sk.js';
import '../chunks/bundle-GlkAQINh.js';
import '../chunks/bundle-CmoRaDho.js';

var BottomSheet = function (props) {
    var _a, _b, _c;
    var _d = props.className, className = _d === void 0 ? '' : _d, children = props.children, onBackdropClick = props.onBackdropClick;
    var logger = (_b = (_a = useSendbirdStateContext()) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logger;
    // https://github.com/testing-library/react-testing-library/issues/62#issuecomment-438653348
    var portalRoot = useRef();
    portalRoot.current = document.getElementById(MODAL_ROOT);
    if (!portalRoot.current) {
        portalRoot.current = document.createElement('div');
        portalRoot.current.setAttribute('id', MODAL_ROOT);
        document.body.appendChild(portalRoot.current);
        (_c = logger === null || logger === void 0 ? void 0 : logger.warning) === null || _c === void 0 ? void 0 : _c.call(logger, '@sendbird/uikit-react/ui/BottomSheet | Should put a ModalRoot to use the BottomSheet.');
    }
    return createPortal(React__default.createElement("div", { className: "".concat(className, " sendbird-bottomsheet") },
        React__default.createElement("div", { className: 'sendbird-bottomsheet__content', role: 'dialog', "aria-modal": 'true', "aria-expanded": 'true' }, children),
        React__default.createElement("div", { className: "\n          sendbird-bottomsheet__backdrop\n        ", onClick: function (e) {
                e === null || e === void 0 ? void 0 : e.stopPropagation();
                onBackdropClick();
            } })), portalRoot.current);
};

export { BottomSheet as default };
//# sourceMappingURL=BottomSheet.js.map
