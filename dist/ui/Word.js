import React__default from 'react';
import { a as LabelTypography } from '../chunks/bundle-BNNafMXS.js';
import LinkLabel from './LinkLabel.js';
import { B as convertWordToStringObj, S as StringObjType } from '../chunks/bundle-BnYBX14T.js';
import MentionLabel from './MentionLabel.js';
import '../chunks/bundle-D8IuvsaW.js';
import '../chunks/bundle-C9nxq4KD.js';
import '../chunks/bundle-0yILBaSQ.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import './ContextMenu.js';
import '../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-DgRY6xy0.js';
import './UserProfile.js';
import '../chunks/bundle-CRmP70eG.js';
import '../chunks/bundle-k7V2rNcW.js';
import '../chunks/bundle-BxO5H6aF.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-Cf2xHdC2.js';
import '../chunks/bundle-CvlHmT5j.js';
import './ImageRenderer.js';
import '../chunks/bundle-ttSanjmp.js';
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
