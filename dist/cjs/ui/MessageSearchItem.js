'use strict';

var _tslib = require('../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var index$1 = require('../chunks/bundle-DqGwmW4S.js');
var index = require('../chunks/bundle-D09pvvgs.js');
var ui_Avatar = require('../chunks/bundle-JS-CtPko.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
require('../chunks/bundle-C8yEdUBb.js');
require('../chunks/bundle-uiV3qgX6.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('../chunks/bundle-Xx0kBn7q.js');
require('./Icon.js');
require('../chunks/bundle-DoHigaWY.js');

// getCreatedAt
function getCreatedAt (_a) {
    var createdAt = _a.createdAt, locale = _a.locale, stringSet = _a.stringSet;
    var optionalParam = locale ? { locale: locale } : null;
    if (!createdAt) {
        return '';
    }
    if (index.isToday(createdAt)) {
        return index$1.format(createdAt, 'p', optionalParam);
    }
    if (index.isYesterday(createdAt)) {
        return (stringSet === null || stringSet === void 0 ? void 0 : stringSet.MESSAGE_STATUS__YESTERDAY) || 'Yesterday';
    }
    if (index.isThisYear(createdAt)) {
        return index$1.format(createdAt, 'MMM d', optionalParam);
    }
    return index$1.format(createdAt, 'yyyy/M/d', optionalParam);
}

function MessageSearchItem(_a) {
    var className = _a.className, message = _a.message, selected = _a.selected, onClick = _a.onClick;
    var createdAt = message.createdAt;
    var messageText = message.message;
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _b = LocalizationContext.useLocalization(), stringSet = _b.stringSet, dateLocale = _b.dateLocale;
    return (React.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-item',
            selected ? 'sendbird-message-search-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick(message);
        } },
        React.createElement("div", { className: "sendbird-message-search-item__left" },
            React.createElement(ui_Avatar.Avatar, { className: "sendbird-message-search-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React.createElement("div", { className: "sendbird-message-search-item__right" },
            React.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__sender-name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__message-text", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, messageText),
            React.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__message-created-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet }))),
        React.createElement("div", { className: "sendbird-message-search-item__right-footer" })));
}

module.exports = MessageSearchItem;
//# sourceMappingURL=MessageSearchItem.js.map
