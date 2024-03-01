'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Header = require('../../ui/Header.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../withSendbird.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/IconButton.js');

var ChannelSettingsHeader = function (_a) {
    var onCloseClick = _a.onCloseClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger;
    return (React.createElement(ui_Header.default, { className: "sendbird-channel-settings__header", renderLeft: renderLeft, renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React.createElement(ui_Header.default.Title, { title: stringSet.CHANNEL_SETTING__HEADER__TITLE })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React.createElement("div", { className: "sendbird-channel-settings__header-icon" },
            React.createElement(ui_Header.default.IconButton, { type: ui_Icon.IconTypes.CLOSE, onClick: function (e) {
                    logger.info('ChannelSettings: Click close');
                    onCloseClick(e);
                } }))); }) }));
};

exports.ChannelSettingsHeader = ChannelSettingsHeader;
//# sourceMappingURL=ChannelSettingsHeader.js.map
