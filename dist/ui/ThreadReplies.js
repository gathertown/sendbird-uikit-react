import React__default from 'react';
import { A as Avatar } from '../chunks/bundle-CvlHmT5j.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BNNafMXS.js';
import { u as useLocalization } from '../chunks/bundle-CRmP70eG.js';
import '../chunks/bundle-D8IuvsaW.js';
import './ImageRenderer.js';
import '../chunks/bundle-0yILBaSQ.js';
import '../chunks/bundle-ttSanjmp.js';
import '../chunks/bundle-C9nxq4KD.js';
import '../chunks/bundle-k7V2rNcW.js';

function ThreadReplies(_a, ref) {
    var _b;
    var className = _a.className, threadInfo = _a.threadInfo, onClick = _a.onClick;
    var _c = threadInfo.mostRepliedUsers, mostRepliedUsers = _c === void 0 ? [] : _c, replyCount = threadInfo.replyCount;
    var stringSet = useLocalization().stringSet;
    return (React__default.createElement("div", { className: "sendbird-ui-thread-replies ".concat(className), role: "button", onClick: function (e) {
            onClick(e);
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        }, onKeyDown: function (e) {
            onClick(e);
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        }, ref: ref },
        React__default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles" },
            mostRepliedUsers.slice(0, 4).map(function (user) {
                return (React__default.createElement(Avatar, { key: user.userId, className: "sendbird-ui-thread-replies__user-profiles__avatar", src: user === null || user === void 0 ? void 0 : user.profileUrl, alt: "user profile", width: "20px", height: "20px" }));
            }),
            (mostRepliedUsers === null || mostRepliedUsers === void 0 ? void 0 : mostRepliedUsers.length) >= 5 && (React__default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar" },
                React__default.createElement(Avatar, { className: "sendbird-ui-thread-replies__user-profiles__avatar__image", src: (_b = mostRepliedUsers === null || mostRepliedUsers === void 0 ? void 0 : mostRepliedUsers[4]) === null || _b === void 0 ? void 0 : _b.profileUrl, alt: "user profile", width: "20px", height: "20px" }),
                React__default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar__cover" }),
                React__default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar__plus" },
                    React__default.createElement(Icon, { type: IconTypes.PLUS, fillColor: IconColors.WHITE, width: "16px", height: "16px" }))))),
        React__default.createElement(Label, { className: "sendbird-ui-thread-replies__reply-counts", type: LabelTypography.CAPTION_2, color: LabelColors.PRIMARY }, replyCount === 1
            ? "".concat(replyCount, " ").concat(stringSet.CHANNEL__THREAD_REPLY)
            : "".concat(replyCount > 99 ? stringSet.CHANNEL__THREAD_OVER_MAX : replyCount, " ").concat(stringSet.CHANNEL__THREAD_REPLIES)),
        React__default.createElement(Icon, { className: "sendbird-ui-thread-replies__icon", type: IconTypes.CHEVRON_RIGHT, fillColor: IconColors.PRIMARY, width: "16px", height: "16px" })));
}
var ThreadReplies$1 = React__default.forwardRef(ThreadReplies);

export { ThreadReplies, ThreadReplies$1 as default };
//# sourceMappingURL=ThreadReplies.js.map
