import { _ as __assign } from '../chunks/bundle-s7uQ7zAa.js';
import React__default, { useContext, useRef } from 'react';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import { k as isUserMessage, p as isSentMessage, s as isFailedMessage, u as isPendingMessage, v as getClassName, w as copyToClipboard } from '../chunks/bundle-D-z4U1wX.js';
import { L as LocalizationContext } from '../chunks/bundle-BwcI3bWM.js';
import { R as Role } from '../chunks/bundle-CU1y-8Hl.js';
import { d as deleteNullish } from '../chunks/bundle-BJmqupdN.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { c as isOperator } from '../chunks/bundle-B-z3huWI.js';
import '../chunks/bundle-BytW9Azl.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-Caf8F3YR.js';
import '../chunks/bundle-BOy_tVjz.js';
import '../chunks/bundle-DqWrl4d1.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dyt8DaMp.js';
import '../withSendbird.js';
import '@sendbird/chat/message';

function MessageMenu(props) {
    var _a;
    var className = props.className, message = props.message, channel = props.channel, _b = props.isByMe, isByMe = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, replyType = props.replyType, _d = props.disableDeleteMessage, disableDeleteMessage = _d === void 0 ? null : _d, showEdit = props.showEdit, showRemove = props.showRemove, deleteMessage = props.deleteMessage, resendMessage = props.resendMessage, setQuoteMessage = props.setQuoteMessage, setSupposedHover = props.setSupposedHover, onReplyInThread = props.onReplyInThread, customTypeDenylistMap = props.customTypeDenylistMap, _e = props.onMoveToParentMessage, onMoveToParentMessage = _e === void 0 ? null : _e;
    var _f = deleteNullish(props).renderMenuItem, renderMenuItem = _f === void 0 ? function (props) { return React__default.createElement(MenuItem, __assign({}, props), props.text); } : _f;
    var stringSet = useContext(LocalizationContext).stringSet;
    var triggerRef = useRef(null);
    var containerRef = useRef(null);
    var store = useSendbirdStateContext();
    var isCurrentUserOperator = channel.isGroupChannel() ? isOperator(channel) : channel.isOperator(store.config.userId);
    var isInEditDenylist = !!(customTypeDenylistMap === null || customTypeDenylistMap === void 0 ? void 0 : customTypeDenylistMap.edit.includes(message.customType));
    var showMenuItemCopy = isUserMessage(message);
    var showMenuItemEdit = (!(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && isUserMessage(message) && isSentMessage(message) && isByMe && !isInEditDenylist);
    var showMenuItemResend = (isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe);
    var showMenuItemDelete = !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && !isPendingMessage(message) && (isByMe || isCurrentUserOperator);
    var showMenuItemOpenInChannel = onMoveToParentMessage !== null;
    /**
     * TODO: Manage timing issue
     * User delete pending message -> Sending message success
     */
    var isReplyTypeEnabled = !isFailedMessage(message) &&
        !isPendingMessage(message) &&
        ((_a = channel === null || channel === void 0 ? void 0 : channel.isGroupChannel) === null || _a === void 0 ? void 0 : _a.call(channel)) &&
        !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) &&
        (((channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (channel === null || channel === void 0 ? void 0 : channel.myRole) === Role.OPERATOR) || !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var showMenuItemReply = isReplyTypeEnabled && replyType === 'QUOTE_REPLY';
    var showMenuItemThread = isReplyTypeEnabled && replyType === 'THREAD' && !(message === null || message === void 0 ? void 0 : message.parentMessageId) && onReplyInThread;
    if (!(showMenuItemCopy ||
        showMenuItemReply ||
        showMenuItemThread ||
        showMenuItemOpenInChannel ||
        showMenuItemEdit ||
        showMenuItemResend ||
        showMenuItemDelete)) {
        return null;
    }
    return (React__default.createElement("div", { className: getClassName([className, 'sendbird-message-item-menu']), ref: containerRef },
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(IconButton, { className: "sendbird-message-item-menu__trigger", ref: triggerRef, width: "32px", height: "32px", onClick: function () {
                    toggleDropdown();
                    setSupposedHover(true);
                }, onBlur: function () {
                    setSupposedHover(false);
                } },
                React__default.createElement(Icon, { className: "sendbird-message-item-menu__trigger__icon", type: IconTypes.MORE, fillColor: IconColors.CONTENT_INVERSE, width: "24px", height: "24px" }))); }, menuItems: function (close) {
                var _a;
                var closeDropdown = function () {
                    close();
                    setSupposedHover(false);
                };
                return (React__default.createElement(MenuItems, { className: "sendbird-message-item-menu__list", parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: closeDropdown, openLeft: isByMe },
                    showMenuItemCopy &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-copy',
                            onClick: function () {
                                copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
                                closeDropdown();
                            },
                            dataSbId: 'ui_message_item_menu_copy',
                            text: stringSet.MESSAGE_MENU__COPY,
                        }),
                    showMenuItemReply &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-reply',
                            onClick: function () {
                                setQuoteMessage(message);
                                closeDropdown();
                            },
                            disable: (message === null || message === void 0 ? void 0 : message.parentMessageId) > 0,
                            dataSbId: 'ui_message_item_menu_reply',
                            text: stringSet.MESSAGE_MENU__REPLY,
                        }),
                    showMenuItemThread &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-thread',
                            onClick: function () {
                                onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                                closeDropdown();
                            },
                            dataSbId: 'ui_message_item_menu_thread',
                            text: stringSet.MESSAGE_MENU__THREAD,
                        }),
                    showMenuItemOpenInChannel &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-open-channel',
                            onClick: function () {
                                onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage();
                                closeDropdown();
                            },
                            dataSbId: 'ui_message_item_menu_open_in_channel',
                            text: stringSet.MESSAGE_MENU__OPEN_IN_CHANNEL,
                        }),
                    showMenuItemEdit &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-edit',
                            onClick: function () {
                                if (!disabled) {
                                    showEdit(true);
                                    closeDropdown();
                                }
                            },
                            dataSbId: 'ui_message_item_menu_edit',
                            text: stringSet.MESSAGE_MENU__EDIT,
                        }),
                    showMenuItemResend &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-resend',
                            onClick: function () {
                                if (!disabled) {
                                    resendMessage(message);
                                    closeDropdown();
                                }
                            },
                            dataSbId: 'ui_message_item_menu_resend',
                            text: stringSet.MESSAGE_MENU__RESEND,
                        }),
                    showMenuItemDelete &&
                        renderMenuItem({
                            className: 'sendbird-message-item-menu__list__menu-item menu-item-delete',
                            onClick: function () {
                                if (isFailedMessage(message)) {
                                    deleteMessage === null || deleteMessage === void 0 ? void 0 : deleteMessage(message);
                                }
                                else if (!disabled) {
                                    showRemove(true);
                                    closeDropdown();
                                }
                            },
                            disable: typeof disableDeleteMessage === 'boolean' ? disableDeleteMessage : ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0,
                            dataSbId: 'ui_message_item_menu_delete',
                            text: stringSet.MESSAGE_MENU__DELETE,
                        })));
            } })));
}

export { MessageMenu, MessageMenu as default };
//# sourceMappingURL=MessageItemMenu.js.map
