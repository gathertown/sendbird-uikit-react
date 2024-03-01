import React__default, { useState } from 'react';

var SuggestedReplies = function (_a) {
    var replyOptions = _a.replyOptions, onSendMessage = _a.onSendMessage, _b = _a.type, type = _b === void 0 ? 'vertical' : _b;
    var _c = useState(false), replied = _c[0], setReplied = _c[1];
    var onClickReply = function (event, option) {
        event.preventDefault();
        onSendMessage({ message: option });
        setReplied(true);
    };
    if (replied) {
        return null;
    }
    var children = replyOptions.map(function (option, index) {
        return (React__default.createElement("div", { className: "sendbird-suggested-replies__option", id: option, key: index + option, onClick: function (e) { return onClickReply(e, option); } }, option));
    });
    return React__default.createElement("div", { className: "sendbird-suggested-replies ".concat(type) }, children);
};

export { SuggestedReplies as default };
//# sourceMappingURL=SuggestedReplies.js.map
