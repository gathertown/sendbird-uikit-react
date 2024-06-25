'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-Nz6fSUye.js');
var ui_Avatar = require('../../chunks/bundle-PoiZwjvJ.js');
var ui_Label = require('../../chunks/bundle-2Pq38lvD.js');
require('../../withSendbird.js');
require('../../chunks/bundle-zYqQA3cT.js');
require('../../chunks/bundle-xYV6cL9E.js');
require('../../chunks/bundle-eyiJykZ-.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xwl4gw4D.js');
require('../../chunks/bundle-5mXB6h1C.js');
require('../../ui/Icon.js');

var GroupChannelListHeader = function (_a) {
    var renderTitle = _a.renderTitle, renderIconButton = _a.renderIconButton, onEdit = _a.onEdit, allowProfileEdit = _a.allowProfileEdit;
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var user = stores.userStore.user;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return (React.createElement("div", { className: [
            'sendbird-channel-header',
            allowProfileEdit ? 'sendbird-channel-header--allow-edit' : '',
        ].join(' ') },
        (renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle()) || (React.createElement("div", { className: "sendbird-channel-header__title", role: "button", onClick: function () {
                onEdit === null || onEdit === void 0 ? void 0 : onEdit();
            }, onKeyDown: function () {
                onEdit === null || onEdit === void 0 ? void 0 : onEdit();
            }, tabIndex: 0 },
            React.createElement("div", { className: "sendbird-channel-header__title__left" },
                React.createElement(ui_Avatar.Avatar, { width: "32px", height: "32px", src: user.profileUrl, alt: user.nickname })),
            React.createElement("div", { className: "sendbird-channel-header__title__right" },
                React.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, user.nickname || stringSet.NO_NAME),
                React.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__user-id", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)))),
        React.createElement("div", { className: "sendbird-channel-header__right-icon" }, renderIconButton === null || renderIconButton === void 0 ? void 0 : renderIconButton())));
};

exports.GroupChannelListHeader = GroupChannelListHeader;
exports.default = GroupChannelListHeader;
//# sourceMappingURL=GroupChannelListHeader.js.map
