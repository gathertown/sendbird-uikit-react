'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Avatar = require('../../chunks/bundle-Bh7J_SsW.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_Header = require('../../ui/Header.js');
require('../../withSendbird.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/IconButton.js');

var GroupChannelListHeader = function (_a) {
    var renderTitle = _a.renderTitle, renderIconButton = _a.renderIconButton, onEdit = _a.onEdit, allowProfileEdit = _a.allowProfileEdit, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var user = stores.userStore.user;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var renderProfile = renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : renderTitle;
    return (React.createElement(ui_Header.default, { className: "sendbird-channel-header ".concat(allowProfileEdit ? 'sendbird-channel-header--allow-edit' : ''), renderLeft: renderLeft, renderMiddle: function () {
            var _a;
            return ((_a = renderProfile === null || renderProfile === void 0 ? void 0 : renderProfile()) !== null && _a !== void 0 ? _a : (React.createElement("div", { className: "sendbird-channel-header__title", role: "button", onClick: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, onKeyDown: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, tabIndex: 0 },
                React.createElement("div", { className: "sendbird-channel-header__title__left" },
                    React.createElement(ui_Avatar.Avatar, { width: "32px", height: "32px", src: user.profileUrl, alt: user.nickname })),
                React.createElement("div", { className: "sendbird-channel-header__title__right" },
                    React.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, user.nickname || stringSet.NO_NAME),
                    React.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__user-id", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)))));
        }, renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : renderIconButton }));
};

exports.GroupChannelListHeader = GroupChannelListHeader;
exports.default = GroupChannelListHeader;
//# sourceMappingURL=GroupChannelListHeader.js.map
