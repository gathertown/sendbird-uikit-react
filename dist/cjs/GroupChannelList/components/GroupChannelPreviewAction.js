'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Modal = require('../../chunks/bundle-BPS3DFTX.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');

var LeaveGroupChannel = function (_a) {
    var channel = _a.channel, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger, isOnline = config.isOnline;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    if (channel) {
        return (React.createElement(ui_Modal.Modal, { disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
                logger.info('LeaveGroupChannel: Leaving channel', channel);
                channel.leave().then(function () {
                    logger.info('LeaveGroupChannel: Leaving channel successful!', channel);
                    onSubmit();
                });
            }, submitText: stringSet.MODAL__LEAVE_CHANNEL__FOOTER, titleText: stringSet.MODAL__LEAVE_CHANNEL__TITLE }));
    }
};

function GroupChannelPreviewAction(_a) {
    var channel = _a.channel, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onLeaveChannel = _a.onLeaveChannel;
    var parentRef = React.useRef(null);
    var parentContainerRef = React.useRef(null);
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { ref: parentContainerRef, tabIndex: 0, role: "button", style: { display: 'inline-block' }, onKeyDown: function (e) { return e.stopPropagation(); }, onClick: function (e) { return e.stopPropagation(); } },
        React.createElement(ui_ContextMenu.default, { menuTrigger: function (toggleDropdown) { return (React.createElement(ui_IconButton, { ref: parentRef, onClick: toggleDropdown, height: "32px", width: "32px" },
                React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }))); }, menuItems: function (closeDropdown) { return (React.createElement(ui_ContextMenu.MenuItems, { parentRef: parentRef, parentContainRef: parentContainerRef, closeDropdown: closeDropdown },
                React.createElement(ui_ContextMenu.MenuItem, { onClick: function () {
                        if (disabled)
                            return;
                        setShowModal(true);
                        closeDropdown();
                    }, dataSbId: "channel_list_item_context_menu_leave_channel" }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))); } }),
        showModal && (React.createElement(LeaveGroupChannel, { channel: channel, onSubmit: function () {
                setShowModal(false);
                onLeaveChannel === null || onLeaveChannel === void 0 ? void 0 : onLeaveChannel();
            }, onCancel: function () { return setShowModal(false); } }))));
}

exports.GroupChannelPreviewAction = GroupChannelPreviewAction;
exports.default = GroupChannelPreviewAction;
//# sourceMappingURL=GroupChannelPreviewAction.js.map