import { c as __spreadArray } from '../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { A as Avatar } from '../chunks/bundle-D7hWtRqW.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ZpyLpKbV.js';
import { u as useLocalization } from '../chunks/bundle-VRwQbdO6.js';
import { f as format } from '../chunks/bundle-C4J9I_bG.js';
import { i as isToday, a as isYesterday, b as isThisYear } from '../chunks/bundle-BOFstL3F.js';
import { i as isVoiceMessage } from '../chunks/bundle-4cxEU_h1.js';
import { g as getMessageFirstFileUrl, b as getMessageFirstFileName } from '../chunks/bundle-CO0PW_ND.js';
import './ImageRenderer.js';
import '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-DjvfRFVm.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-BIDYJkIe.js';
import '../chunks/bundle-vUCKPp-d.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';

function getCreatedAt(_a) {
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
function getIconOfFileType(message) {
    var _a, _b, _c;
    var fileMessageUrl = (_a = getMessageFirstFileUrl(message)) !== null && _a !== void 0 ? _a : '';
    var fileExtension = (_c = (_b = (fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/))) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '';
    if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
        return IconTypes.PHOTO;
    }
    else if (/mp4$/i.test(fileExtension) || isVoiceMessage(message)) {
        return IconTypes.PLAY;
    }
    else if (/mp3/i.test(fileExtension)) {
        return IconTypes.FILE_AUDIO;
    }
    else if (/gif/i.test(fileExtension)) {
        return IconTypes.GIF;
    }
    else {
        return IconTypes.FILE_DOCUMENT;
    }
}

function MessageSearchFileItem(props) {
    var className = props.className, message = props.message, selected = props.selected, onClick = props.onClick;
    var createdAt = message.createdAt;
    var url = getMessageFirstFileUrl(message);
    var name = getMessageFirstFileName(message);
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _a = useLocalization(), stringSet = _a.stringSet, dateLocale = _a.dateLocale;
    var isVoiceMsg = isVoiceMessage(message);
    var prettyFilename = isVoiceMsg ? stringSet.VOICE_MESSAGE : (name || url);
    return (React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-file-item',
            selected ? 'sendbird-message-search-file-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick(message);
        } },
        React__default.createElement("div", { className: "sendbird-message-search-file-item__left" },
            React__default.createElement(Avatar, { className: "sendbird-message-search-file-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.createElement("div", { className: "sendbird-message-search-file-item__right" },
            React__default.createElement(Label, { className: "sendbird-message-search-file-item__right__sender-name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.createElement("div", { className: "sendbird-message-search-file-item__right__content" },
                !isVoiceMsg && (React__default.createElement("div", { className: 'sendbird-message-search-file-item__right__content__type-icon' },
                    React__default.createElement(Icon, { type: getIconOfFileType(message), fillColor: IconColors.PRIMARY, width: "18px", height: "18px" }))),
                React__default.createElement(Label, { className: "sendbird-message-search-file-item__right__content__url", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_1 }, prettyFilename))),
        React__default.createElement(Label, { className: "sendbird-message-search-file-item__message-created-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet })),
        React__default.createElement("div", { className: "sendbird-message-search-file-item__right-footer" })));
}

export { MessageSearchFileItem as default };
//# sourceMappingURL=MessageSearchFileItem.js.map
