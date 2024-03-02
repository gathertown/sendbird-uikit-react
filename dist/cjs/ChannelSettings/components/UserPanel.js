'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var ui_Label = require('../../chunks/bundle-24sG-BP_.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../chunks/bundle-CKgkyFbI.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../ui/Button.js');
require('../../ui/IconButton.js');
require('../../ui/ContextMenu.js');
require('../../chunks/bundle-e1P14sMX.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('./UserListItem.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-9xv4YoP5.js');

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
