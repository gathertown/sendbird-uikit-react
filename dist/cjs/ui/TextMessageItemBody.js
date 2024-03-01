'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-CkvaXo1D.js');
var index = require('../chunks/bundle-D-432Irw.js');
var LocalizationContext = require('../chunks/bundle-BeJ7-X59.js');
var tokenize = require('../chunks/bundle-Cdin1NhG.js');
var index$1 = require('../chunks/bundle-ByTdTPZ5.js');
var consts = require('../chunks/bundle-fM1h2HCr.js');
require('../chunks/bundle-DvNeoTBz.js');
require('../chunks/bundle-BruYC2Km.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DUeKijBO.js');
require('../Message/context.js');
require('./MentionLabel.js');
require('./ContextMenu.js');
require('../chunks/bundle-D0W7zrvh.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-DGYTk4xX.js');
require('./UserProfile.js');
require('../chunks/bundle-s9ulbp6E.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-B6bAeEPF.js');
require('../chunks/bundle-DQfemABy.js');
require('../chunks/bundle-BNKSF9CJ.js');
require('./ImageRenderer.js');
require('../chunks/bundle-8jy5Sc-N.js');
require('./Icon.js');
require('./Button.js');
require('../useSendbirdStateContext.js');
require('../withSendbird.js');
require('./LinkLabel.js');

function TextMessageItemBody(_a) {
    var _b, _c, _d;
    var _e = _a.className, className = _e === void 0 ? '' : _e, message = _a.message, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, _g = _a.mouseHover, mouseHover = _g === void 0 ? false : _g, _h = _a.isMentionEnabled, isMentionEnabled = _h === void 0 ? false : _h, _j = _a.isReactionEnabled, isReactionEnabled = _j === void 0 ? false : _j;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled
        && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0
        && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
    var tokens = React.useMemo(function () {
        if (isMessageMentioned) {
            return tokenize.tokenizeMessage({
                mentionedUsers: message === null || message === void 0 ? void 0 : message.mentionedUsers,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
            });
        }
        return tokenize.tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    return (React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 },
        React.createElement("div", { className: index.getClassName([
                className,
                consts.TEXT_MESSAGE_BODY_CLASSNAME,
                isByMe ? 'outgoing' : 'incoming',
                mouseHover ? 'mouse-hover' : '',
                (isReactionEnabled && ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0) ? 'reactions' : '',
            ]) },
            React.createElement(index$1.TextFragment, { tokens: tokens }),
            index.isEditedMessage(message) && (React.createElement(ui_Label.Label, { className: "sendbird-text-message-item-body__message edited", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))));
}

module.exports = TextMessageItemBody;
//# sourceMappingURL=TextMessageItemBody.js.map
