'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-PoiZwjvJ.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_Label = require('../chunks/bundle-2Pq38lvD.js');
var LocalizationContext = require('../chunks/bundle-Nz6fSUye.js');
require('../chunks/bundle-zYqQA3cT.js');
require('./ImageRenderer.js');
require('../chunks/bundle-Xwl4gw4D.js');
require('../chunks/bundle-5mXB6h1C.js');
require('../chunks/bundle-xYV6cL9E.js');
require('../chunks/bundle-eyiJykZ-.js');

function OpenchannelConversationHeader(_a) {
    var coverImage = _a.coverImage, title = _a.title, subTitle = _a.subTitle, amIOperator = _a.amIOperator, onActionClick = _a.onActionClick;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            coverImage ? (React.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "18px", height: "18px" }))),
            React.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React.createElement(ui_IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onActionClick },
                React.createElement(ui_Icon.default, { type: (amIOperator
                        ? ui_Icon.IconTypes.INFO
                        : ui_Icon.IconTypes.MEMBERS), fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenchannelConversationHeader.js.map
