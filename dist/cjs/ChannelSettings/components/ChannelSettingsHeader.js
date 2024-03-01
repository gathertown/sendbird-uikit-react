'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BeJ7-X59.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Header = require('../../ui/Header.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-C79vYLB2.js');
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
