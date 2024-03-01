import { c as __spreadArray } from '../chunks/bundle-5LMP4qQC.js';
import React__default from 'react';
import { f as format } from '../chunks/bundle-C-kkBK84.js';
import { i as isToday, a as isYesterday, b as isThisYear } from '../chunks/bundle-CCNsWru5.js';
import { A as Avatar } from '../chunks/bundle-DCv5_AWJ.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DvIsR7kQ.js';
import { u as useLocalization } from '../chunks/bundle-BW5JWhMG.js';
import '../chunks/bundle-DyVsaRLS.js';
import '../chunks/bundle-Ci84mwTW.js';
import './ImageRenderer.js';
import '../chunks/bundle-QtD1UM1r.js';
import '../chunks/bundle-Dzc4np9L.js';
import './Icon.js';
import '../chunks/bundle-BeAHyfuE.js';

// getCreatedAt
function getCreatedAt (_a) {
    var createdAt = _a.createdAt, locale = _a.locale, stringSet = _a.stringSet;
    var optionalParam = locale ? { locale: locale } : null;
    if (!createdAt) {
        return '';
    }
    if (isToday(createdAt)) {
        return format(createdAt, 'p', optionalParam);
    }
    if (isYesterday(createdAt)) {
        return (stringSet === null || stringSet === void 0 ? void 0 : stringSet.MESSAGE_STATUS__YESTERDAY) || 'Yesterday';
    }
    if (isThisYear(createdAt)) {
        return format(createdAt, 'MMM d', optionalParam);
    }
    return format(createdAt, 'yyyy/M/d', optionalParam);
}

function MessageSearchItem(_a) {
    var className = _a.className, message = _a.message, selected = _a.selected, onClick = _a.onClick;
    var createdAt = message.createdAt;
    var messageText = message.message;
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _b = useLocalization(), stringSet = _b.stringSet, dateLocale = _b.dateLocale;
    return (React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-item',
            selected ? 'sendbird-message-search-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick(message);
        } },
        React__default.createElement("div", { className: "sendbird-message-search-item__left" },
            React__default.createElement(Avatar, { className: "sendbird-message-search-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.createElement("div", { className: "sendbird-message-search-item__right" },
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__sender-name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__message-text", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_3 }, messageText),
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__message-created-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet }))),
        React__default.createElement("div", { className: "sendbird-message-search-item__right-footer" })));
}

export { MessageSearchItem as default };
//# sourceMappingURL=MessageSearchItem.js.map
