'use strict';

var React = require('react');

var SuggestedReplies = function (_a) {
    var replyOptions = _a.replyOptions, onSendMessage = _a.onSendMessage, _b = _a.type, type = _b === void 0 ? 'vertical' : _b;
    var _c = React.useState(false), replied = _c[0], setReplied = _c[1];
    var onClickReply = function (event, option) {
        event.preventDefault();
        onSendMessage({ message: option });
        setReplied(true);
    };
    if (replied) {
        return null;
    }
    var children = replyOptions.map(function (option, index) {
        return (React.createElement("div", { className: "sendbird-suggested-replies__option", id: option, key: index + option, onClick: function (e) { return onClickReply(e, option); } }, option));
    });
    return React.createElement("div", { className: "sendbird-suggested-replies ".concat(type) }, children);
};

module.exports = SuggestedReplies;
//# sourceMappingURL=SuggestedReplies.js.map
