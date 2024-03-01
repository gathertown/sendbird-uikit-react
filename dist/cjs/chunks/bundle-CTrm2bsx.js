'use strict';

var _tslib = require('./bundle-DvNeoTBz.js');
var React = require('react');
var ui_Icon = require('../ui/Icon.js');
var ui_ChannelAvatar = require('../ui/ChannelAvatar.js');
var utils = require('./bundle-DCaERiZJ.js');
var MediaQueryContext = require('./bundle-BppUjcCZ.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var LocalizationContext = require('./bundle-BeJ7-X59.js');
var ui_Header = require('../ui/Header.js');

var GroupChannelHeaderView = function (_a) {
    var className = _a.className, currentChannel = _a.currentChannel, showSearchIcon = _a.showSearchIcon, onBackClick = _a.onBackClick, onSearchClick = _a.onSearchClick, onChatHeaderActionClick = _a.onChatHeaderActionClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var userId = config.userId, theme = config.theme;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var isMuted = (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myMutedState) === 'muted';
    var channelTitle = utils.getChannelTitle(currentChannel, userId, stringSet);
    return (React.createElement(ui_Header.default, { className: "sendbird-chat-header ".concat(className), renderLeft: renderLeft !== null && renderLeft !== void 0 ? renderLeft : (function () { return (React.createElement(React.Fragment, null,
            isMobile && (React.createElement(ui_Header.default.Icon, { className: "sendbird-chat-header__icon_back", onClick: onBackClick, type: ui_Icon.IconTypes.ARROW_LEFT, color: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })),
            React.createElement(ui_ChannelAvatar, { theme: theme, channel: currentChannel, userId: userId, height: 32, width: 32 }))); }), renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React.createElement(ui_Header.default.Title, { title: channelTitle })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React.createElement(React.Fragment, null,
            isMuted && (React.createElement(ui_Header.default.Icon, { className: "sendbird-chat-header__right__mute", type: ui_Icon.IconTypes.NOTIFICATIONS_OFF_FILLED, color: ui_Icon.IconColors.ON_BACKGROUND_2, width: "24px", height: "24px" })),
            (showSearchIcon && !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isEphemeral)) && (React.createElement(ui_Header.default.IconButton, { className: "sendbird-chat-header__right__search", onClick: onSearchClick, type: ui_Icon.IconTypes.SEARCH, color: ui_Icon.IconColors.PRIMARY, renderIcon: function (props) { return React.createElement(ui_Header.default.Icon, _tslib.__assign({}, props, { width: "24px", height: "24px" })); } })),
            React.createElement(ui_Header.default.IconButton, { className: "sendbird-chat-header__right__info", onClick: onChatHeaderActionClick, type: ui_Icon.IconTypes.INFO, color: ui_Icon.IconColors.PRIMARY, renderIcon: function (props) { return React.createElement(ui_Header.default.Icon, _tslib.__assign({}, props, { width: "24px", height: "24px" })); } }))); }) }));
};

exports.GroupChannelHeaderView = GroupChannelHeaderView;
//# sourceMappingURL=bundle-CTrm2bsx.js.map
