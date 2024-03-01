import React__default from 'react';
import { a as LabelTypography } from '../chunks/bundle-ZpyLpKbV.js';
import LinkLabel from './LinkLabel.js';
import { B as convertWordToStringObj, S as StringObjType } from '../chunks/bundle-4cxEU_h1.js';
import MentionLabel from './MentionLabel.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-DIC0UBC5.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import './ContextMenu.js';
import '../chunks/bundle-CmoRaDho.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-DLrfv-Hf.js';
import './UserProfile.js';
import '../chunks/bundle-VRwQbdO6.js';
import '../chunks/bundle-BIDYJkIe.js';
import '../chunks/bundle-CnPq00g2.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-oBEHM7Oi.js';
import '../chunks/bundle-D7hWtRqW.js';
import './ImageRenderer.js';
import '../chunks/bundle-DjvfRFVm.js';
import './Icon.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';

/**
 * @deprecated  This component is deprecated and will be removed in the next major version.
 * Use TextFragment instead.
 */
// Word and StringObj will include types: normal, mention, url
function Word(props) {
    var word = props.word, message = props.message, _a = props.isByMe, isByMe = _a === void 0 ? false : _a, _b = props.mentionTemplate, mentionTemplate = _b === void 0 ? '@' : _b, _c = props.renderString, renderString = _c === void 0 ? null : _c;
    if (word === '') {
        return null;
    }
    return (React__default.createElement("span", { className: "sendbird-word" }, convertWordToStringObj(word, message === null || message === void 0 ? void 0 : message.mentionedUsers).map(function (stringObj, index) {
        var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
        var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
        var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';
        var key = "".concat(value, "-").concat(index);
        if (renderString && typeof renderString === 'function') {
            return renderString(stringObj);
        }
        if (type === StringObjType.mention) {
            return (React__default.createElement(MentionLabel, { key: key, mentionTemplate: mentionTemplate, mentionedUserId: userId, mentionedUserNickname: value, isByMe: isByMe }));
        }
        else if (type === StringObjType.url) {
            return (React__default.createElement(LinkLabel, { key: key, className: "sendbird-word__url", src: word, type: LabelTypography.BODY_1 }, value));
        }
        else {
            return value;
        }
    })));
}

export { Word as default };
//# sourceMappingURL=Word.js.map
