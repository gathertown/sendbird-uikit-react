'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../chunks/bundle-k8P3IlGQ.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../ui/Button.js');
require('../../ui/IconButton.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('./UserListItem.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../chunks/bundle-DHZxYemr.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-ROgXTJCJ.js');

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var UserPanel = function () {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _a = React.useState(false), showAccordion = _a[0], setShowAccordion = _a[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    return (React.createElement("div", { className: 'sendbird-channel-settings__user-panel' },
        React.createElement("div", { className: [
                'sendbird-channel-settings__panel-item',
                'sendbird-channel-settings__members',
            ].join(' '), role: "switch", "aria-checked": showAccordion, onKeyDown: function () { return setShowAccordion(!showAccordion); }, onClick: function () { return setShowAccordion(!showAccordion); }, tabIndex: 0 },
            React.createElement(ui_Icon.default, { className: "sendbird-channel-settings__panel-icon-left", type: ui_Icon.IconTypes.MEMBERS, fillColor: ui_Icon.IconColors.PRIMARY, height: "24px", width: "24px" }),
            React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
                stringSet.CHANNEL_SETTING__MEMBERS__TITLE,
                React.createElement(ui_Badge, { className: 'sendbird-channel-settings__badge', count: kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount) })),
            React.createElement(ui_Icon.default, { className: [
                    'sendbird-channel-settings__panel-icon-right',
                    'sendbird-channel-settings__panel-icon--chevron',
                    (showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''),
                ].join(' '), type: ui_Icon.IconTypes.CHEVRON_RIGHT, height: "24px", width: "24px" })),
        showAccordion && (React.createElement(MemberList.MemberList, null))));
};

module.exports = UserPanel;
//# sourceMappingURL=UserPanel.js.map
