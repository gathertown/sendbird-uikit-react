import React__default, { useContext } from 'react';
import { M as Modal } from './bundle-OZ70K6ig.js';
import './bundle-BpxXmFQC.js';
import './bundle-ZpyLpKbV.js';
import { ButtonTypes } from '../ui/Button.js';
import { L as LocalizationContext } from './bundle-VRwQbdO6.js';
import { useThreadContext } from '../Thread/context.js';
import { g as getModalDeleteMessageTitle } from './bundle-BjdNFz7H.js';

var RemoveMessage = function (props) {
    var _a;
    var onCancel = props.onCancel, onSubmit = props.onSubmit, message = props.message;
    var stringSet = useContext(LocalizationContext).stringSet;
    var deleteMessage = useThreadContext().deleteMessage;
    return (React__default.createElement(Modal, { type: ButtonTypes.DANGER, disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0, onCancel: onCancel, onSubmit: function () {
            deleteMessage(message).then(function () {
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
            });
        }, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: getModalDeleteMessageTitle(stringSet, message) }));
};

export { RemoveMessage as R };
//# sourceMappingURL=bundle-C2bpORYe.js.map
