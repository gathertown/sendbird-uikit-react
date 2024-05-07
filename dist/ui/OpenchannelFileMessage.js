import { c as __spreadArray, _ as __assign } from '../chunks/bundle-s7uQ7zAa.js';
import React__default, { useRef, useContext, useState } from 'react';
import { f as format } from '../chunks/bundle-Dac-NyF8.js';
import { A as Avatar } from '../chunks/bundle-BAao5L-j.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BOy_tVjz.js';
import Loader from './Loader.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import TextButton from './TextButton.js';
import UserProfile from './UserProfile.js';
import { a as UserProfileContext } from '../chunks/bundle-DSd-G7ux.js';
import { u as useLocalization } from '../chunks/bundle-BwcI3bWM.js';
import { g as getSenderFromMessage, b as isFineResend, s as showMenuTrigger, c as isFineDelete, O as OpenChannelMobileMenu, d as checkIsPending, e as checkIsFailed } from '../chunks/bundle-C8H-fZ3M.js';
import { u as useMediaQueryContext } from '../chunks/bundle-Bs8Nuk02.js';
import { u as useLongPress } from '../chunks/bundle-DqwaElIt.js';
import { o as openURL } from '../chunks/bundle-BJmqupdN.js';
import '../chunks/bundle-Dyt8DaMp.js';
import './ImageRenderer.js';
import '../chunks/bundle-BIF2bCQz.js';
import '../chunks/bundle-BytW9Azl.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-Caf8F3YR.js';
import '../chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DqWrl4d1.js';
import '../chunks/bundle-DZZlGxSQ.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-CIiROwS_.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';

var checkFileType = function (fileUrl) {
    var audioFile = /(\.mp3)$/i;
    var gifFile = /(\.gif)$/i;
    if (audioFile.test(fileUrl)) {
        return IconTypes.FILE_AUDIO;
    }
    if (gifFile.test(fileUrl)) {
        return IconTypes.GIF;
    }
    return IconTypes.FILE_DOCUMENT;
};
var truncate = function (fullStr, strLen) {
    if (fullStr === null || fullStr === undefined)
        return '';
    if (fullStr.length <= strLen)
        return fullStr;
    var separator = '...';
    var sepLen = separator.length;
    var charsToShow = strLen - sepLen;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

function OpenChannelFileMessage(_a) {
    var className = _a.className, message = _a.message, isOperator = _a.isOperator, _b = _a.isEphemeral, isEphemeral = _b === void 0 ? false : _b, userId = _a.userId, disabled = _a.disabled, chainTop = _a.chainTop, showRemove = _a.showRemove, resendMessage = _a.resendMessage;
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var _c = useLocalization(), dateLocale = _c.dateLocale, stringSet = _c.stringSet;
    var contextMenuRef = useRef(null);
    var mobileMenuRef = useRef(null);
    var avatarRef = useRef(null);
    var _d = useContext(UserProfileContext), disableUserProfile = _d.disableUserProfile, renderUserProfile = _d.renderUserProfile;
    var isMobile = useMediaQueryContext().isMobile;
    var openFileUrl = function () { return openURL(message.url); };
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    var _e = useState(false), contextMenu = _e[0], setContextMenu = _e[1];
    var longPress = useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setContextMenu(true);
            }
        },
        onClick: openFileUrl,
    }, { delay: 300 });
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-file-message',
            ], false).join(' '), ref: mobileMenuRef },
            React__default.createElement("div", { className: "sendbird-openchannel-file-message__left" }, !chainTop && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(Avatar, { className: "sendbird-openchannel-file-message__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
                        if (!disableUserProfile) {
                            toggleDropdown();
                        }
                    } })); }, menuItems: function (closeDropdown) { return (renderUserProfile
                    ? (renderUserProfile({
                        user: sender,
                        close: closeDropdown,
                        currentUserId: userId,
                        avatarRef: avatarRef,
                    }))
                    : (React__default.createElement(MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                        React__default.createElement(UserProfile, { user: sender, onSuccess: closeDropdown, disableMessaging: true })))); } }))),
            React__default.createElement("div", { className: "sendbird-openchannel-file-message__right" },
                !chainTop && (React__default.createElement("div", { className: "sendbird-openchannel-file-message__right__title" },
                    React__default.createElement(Label, { className: "sendbird-openchannel-file-message__right__title__sender-name", type: LabelTypography.CAPTION_2, color: isOperator ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                        || sender.nickname
                        || sender.userId)),
                    React__default.createElement(Label, { className: "sendbird-openchannel-file-message__right__title__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (format(message.createdAt, 'p', {
                        locale: dateLocale,
                    }))))),
                React__default.createElement("div", __assign({ className: "sendbird-openchannel-file-message__right__body" }, (isMobile ? __assign({}, longPress) : {})),
                    checkFileType(message.url) && (React__default.createElement(Icon, { className: "sendbird-openchannel-file-message__right__body__icon", type: checkFileType(message.url), fillColor: IconColors.PRIMARY, width: "48px", height: "48px" })),
                    React__default.createElement(TextButton, { className: "sendbird-openchannel-file-message__right__body__file-name", onClick: openFileUrl },
                        React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, truncate(message.name || message.url, 40)))),
                (isPending || isFailed) && (React__default.createElement("div", { className: "sendbird-openchannel-file-message__right__tail" },
                    isPending && (React__default.createElement(Loader, { width: "16px", height: "16px" },
                        React__default.createElement(Icon, { className: "sendbird-openchannel-file-message__right__tail__pending", type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.createElement(Icon, { className: "sendbird-openchannel-file-message__right__tail__failed", type: IconTypes.ERROR, fillColor: IconColors.ERROR, width: "16px", height: "16px" }))))),
            !isMobile && (React__default.createElement("div", { className: "sendbird-openchannel-file-message__context-menu", ref: contextMenuRef }, (isFineResend({ message: message, userId: userId, status: status }) || !isEphemeral) && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.createElement(IconButton, { className: "sendbird-openchannel-file-message__context-menu__icon", width: "32px", height: "32px", onClick: toggleDropdown },
                    React__default.createElement(Icon, { type: IconTypes.MORE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                    isFineResend({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { onClick: function () {
                            if (disabled) {
                                return;
                            }
                            resendMessage(message);
                            closeDropdown();
                        }, dataSbId: "open_channel_file_message_context_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                    (!isEphemeral && isFineDelete({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { onClick: function () {
                            if (disabled) {
                                return;
                            }
                            showRemove(true);
                            closeDropdown();
                        }, dataSbId: "open_channel_file_message_context_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } }))))),
        contextMenu && (React__default.createElement(OpenChannelMobileMenu, { message: message, hideMenu: function () {
                setContextMenu(false);
            }, parentRef: mobileMenuRef, showRemove: function () {
                setContextMenu(false);
                showRemove(true);
            } }))));
}

export { OpenChannelFileMessage as default };
//# sourceMappingURL=OpenchannelFileMessage.js.map
