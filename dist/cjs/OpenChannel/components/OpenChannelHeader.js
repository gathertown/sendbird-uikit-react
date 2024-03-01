'use strict';

var React = require('react');
var ui_Avatar = require('../../chunks/bundle-Bh7J_SsW.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var OpenChannel_context = require('../../chunks/bundle-Cgs5uR4Y.js');
var MediaQueryContext = require('../../chunks/bundle-Gh-C2yIM.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-BeszEZzp.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-BtA6MlUR.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');

function OpenchannelConversationHeader() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _a = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, onChatHeaderActionClick = _a.onChatHeaderActionClick, amIOperator = _a.amIOperator, onBackClick = _a.onBackClick;
    var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
    var subTitle = "".concat(OpenChannel_context.kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
    var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    return (React.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            isMobile && (React.createElement(ui_Icon.default, { className: "sendbird-oepnchannel-header__icon_back", onClick: onBackClick, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px", type: ui_Icon.IconTypes.ARROW_LEFT })),
            coverImage ? (React.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "18px", height: "18px" }))),
            React.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React.createElement(ui_IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onChatHeaderActionClick },
                React.createElement(ui_Icon.default, { type: (amIOperator
                        ? ui_Icon.IconTypes.INFO
                        : ui_Icon.IconTypes.MEMBERS), fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenChannelHeader.js.map
