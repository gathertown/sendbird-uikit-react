'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
var ui_LinkLabel = require('./LinkLabel.js');
var index = require('../chunks/bundle-CiDSKL46.js');
var ui_MentionLabel = require('./MentionLabel.js');
require('../chunks/bundle-DHh3VdoS.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('./ContextMenu.js');
require('../chunks/bundle-e1P14sMX.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-DtHyD1hB.js');
require('./UserProfile.js');
require('../chunks/bundle-BD2bIoH6.js');
require('../chunks/bundle-C8yEdUBb.js');
require('../chunks/bundle-BKwrdy8Y.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-CYjw4691.js');
require('../chunks/bundle-JS-CtPko.js');
require('./ImageRenderer.js');
require('../chunks/bundle-Xx0kBn7q.js');
require('./Icon.js');
require('./Button.js');
require('../useSendbirdStateContext.js');
require('../withSendbird.js');

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
    return (React.createElement("span", { className: "sendbird-word" }, index.convertWordToStringObj(word, message === null || message === void 0 ? void 0 : message.mentionedUsers).map(function (stringObj, index$1) {
        var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
        var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
        var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';
        var key = "".concat(value, "-").concat(index$1);
        if (renderString && typeof renderString === 'function') {
            return renderString(stringObj);
        }
        if (type === index.StringObjType.mention) {
            return (React.createElement(ui_MentionLabel, { key: key, mentionTemplate: mentionTemplate, mentionedUserId: userId, mentionedUserNickname: value, isByMe: isByMe }));
        }
        else if (type === index.StringObjType.url) {
            return (React.createElement(ui_LinkLabel.default, { key: key, className: "sendbird-word__url", src: word, type: ui_Label.LabelTypography.BODY_1 }, value));
        }
        else {
            return value;
        }
    })));
}

module.exports = Word;
//# sourceMappingURL=Word.js.map
