import React__default, { useRef, useState, useContext } from 'react';
import { u as useLocalization, L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import ContextMenu, { MenuItems, MenuItem } from '../../ui/ContextMenu.js';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { M as Modal } from '../../chunks/bundle-OZ70K6ig.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../chunks/bundle-BpxXmFQC.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';

var LeaveGroupChannel = function (_a) {
    var channel = _a.channel, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var config = useSendbirdStateContext().config;
    var logger = config.logger, isOnline = config.isOnline;
    var stringSet = useLocalization().stringSet;
    if (channel) {
        return (React__default.createElement(Modal, { disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
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
    var parentRef = useRef(null);
    var parentContainerRef = useRef(null);
    var _c = useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { ref: parentContainerRef, tabIndex: 0, role: "button", style: { display: 'inline-block' }, onKeyDown: function (e) { return e.stopPropagation(); }, onClick: function (e) { return e.stopPropagation(); } },
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(IconButton, { ref: parentRef, onClick: toggleDropdown, height: "32px", width: "32px" },
                React__default.createElement(Icon, { type: IconTypes.MORE, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems, { parentRef: parentRef, parentContainRef: parentContainerRef, closeDropdown: closeDropdown },
                React__default.createElement(MenuItem, { onClick: function () {
                        if (disabled)
                            return;
                        setShowModal(true);
                        closeDropdown();
                    }, dataSbId: "channel_list_item_context_menu_leave_channel" }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))); } }),
        showModal && (React__default.createElement(LeaveGroupChannel, { channel: channel, onSubmit: function () {
                setShowModal(false);
                onLeaveChannel === null || onLeaveChannel === void 0 ? void 0 : onLeaveChannel();
            }, onCancel: function () { return setShowModal(false); } }))));
}

export { GroupChannelPreviewAction, GroupChannelPreviewAction as default };
//# sourceMappingURL=GroupChannelPreviewAction.js.map