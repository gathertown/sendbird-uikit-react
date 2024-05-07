import { c as __spreadArray, _ as __assign } from '../chunks/bundle-5LMP4qQC.js';
import React__default, { useContext, useState, useRef, useMemo, useEffect } from 'react';
import { f as format } from '../chunks/bundle-C-kkBK84.js';
import { u as useLocalization } from '../chunks/bundle-BW5JWhMG.js';
import { A as Avatar } from '../chunks/bundle-DCv5_AWJ.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconColors, IconTypes } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DvIsR7kQ.js';
import Loader from './Loader.js';
import UserProfile from './UserProfile.js';
import { a as UserProfileContext } from '../chunks/bundle-B0Dbuu28.js';
import { g as getSenderFromMessage, b as isFineResend, s as showMenuTrigger, c as isFineDelete, O as OpenChannelMobileMenu, f as checkIsSent, d as checkIsPending, e as checkIsFailed } from '../chunks/bundle-CLNqemIR.js';
import { u as useMediaQueryContext } from '../chunks/bundle-U_2B1aWq.js';
import { u as useLongPress } from '../chunks/bundle-DbPsZWNm.js';
import '../chunks/bundle-DyVsaRLS.js';
import '../chunks/bundle-BeAHyfuE.js';
import '../chunks/bundle-Dzc4np9L.js';
import '../chunks/bundle-BpHmAKa2.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-BJD56sGG.js';
import '../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-QtD1UM1r.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-c0D1F768.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';

var SUPPORTING_TYPES = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
    UNSUPPORTED: 'UNSUPPORTED',
};
var SUPPORTED_MIMES = {
    IMAGE: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
    ],
    VIDEO: [
        'video/mpeg',
        'video/ogg',
        'video/webm',
        'video/mp4',
    ],
};
var getSupportingFileType = function (type) {
    if (SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0) {
        return SUPPORTING_TYPES.IMAGE;
    }
    if (SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0) {
        return SUPPORTING_TYPES.VIDEO;
    }
    return SUPPORTING_TYPES.UNSUPPORTED;
};

function OpenchannelThumbnailMessage(_a) {
    var _b;
    var className = _a.className, message = _a.message, isOperator = _a.isOperator, _c = _a.isEphemeral, isEphemeral = _c === void 0 ? false : _c, disabled = _a.disabled, userId = _a.userId, chainTop = _a.chainTop, onClick = _a.onClick, showRemove = _a.showRemove, resendMessage = _a.resendMessage;
    var type = message.type, url = message.url, thumbnails = message.thumbnails, localUrl = message.localUrl;
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var thumbnailUrl = (thumbnails && thumbnails.length > 0 && thumbnails[0].url) || null;
    var _d = useLocalization(), stringSet = _d.stringSet, dateLocale = _d.dateLocale;
    var _e = useContext(UserProfileContext), disableUserProfile = _e.disableUserProfile, renderUserProfile = _e.renderUserProfile;
    var _f = useState(360), messageWidth = _f[0], setMessageWidth = _f[1];
    var _g = useState(false), contextMenu = _g[0], setContextMenu = _g[1];
    var messageRef = useRef(null);
    var mobileMenuRef = useRef(null);
    var contextMenuRef = useRef(null);
    var avatarRef = useRef(null);
    var onLongPress = useLongPress({
        onLongPress: function () { setContextMenu(true); },
        onClick: function () { onClick(true); },
    });
    var isMobile = useMediaQueryContext().isMobile;
    var memorizedThumbnailPlaceHolder = useMemo(function () { return function (type) { return function (_a) {
        var style = _a.style;
        return ( // eslint-disable-line
        React__default.createElement("div", { style: style },
            React__default.createElement(Icon, { type: type, fillColor: IconColors.ON_BACKGROUND_2, width: "56px", height: "56px" })));
    }; }; }, []);
    var isMessageSent = checkIsSent(status);
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    useEffect(function () {
        var _a, _b;
        var thumbnailWidth = ((_b = (_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0) - 80;
        setMessageWidth(thumbnailWidth > 360 ? 360 : thumbnailWidth);
    }, []);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-thumbnail-message',
            ], false).join(' '), ref: messageRef },
            React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__left" }, !chainTop && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(Avatar, { className: "sendbird-openchannel-thumbnail-message__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
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
            React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right" },
                !chainTop && (React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right__title" },
                    React__default.createElement(Label, { className: "sendbird-openchannel-thumbnail-message__right__title__sender-name", type: LabelTypography.CAPTION_2, color: isOperator ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                        || sender.nickname
                        || sender.userId)),
                    React__default.createElement(Label, { className: "sendbird-openchannel-thumbnail-message__right__title__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (format(message.createdAt, 'p', {
                        locale: dateLocale,
                    }))))),
                React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right__body", ref: mobileMenuRef },
                    React__default.createElement("div", __assign({ className: "sendbird-openchannel-thumbnail-message__right__body__wrap", role: "button", onClick: function () {
                            if (isMessageSent) {
                                onClick(true);
                            }
                        }, onKeyDown: function () {
                            if (isMessageSent) {
                                onClick(true);
                            }
                        }, tabIndex: 0 }, (isMobile ? __assign({}, onLongPress) : {})),
                        React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__overlay" }),
                        (_b = {},
                            _b[SUPPORTING_TYPES.VIDEO] = ((url || localUrl)
                                ? (React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video" },
                                    (thumbnailUrl)
                                        ? (React__default.createElement(ImageRenderer, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video", url: thumbnailUrl, width: messageWidth, height: "270px", alt: "image", placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PLAY) }))
                                        : (React__default.createElement("video", { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__video" },
                                            React__default.createElement("source", { src: url || localUrl, type: type }))),
                                    React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__icon", type: IconTypes.PLAY, fillColor: IconColors.ON_BACKGROUND_2, width: "56px", height: "56px" })))
                                : (React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video--icon", type: IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: "56px", height: "56px" }))),
                            _b[SUPPORTING_TYPES.IMAGE] = ((url || localUrl)
                                ? (React__default.createElement(ImageRenderer, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image", url: thumbnailUrl || url || localUrl, alt: "image", width: messageWidth, height: "270px", placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PHOTO) }))
                                : (React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image--icon", type: IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: "56px", height: "56px" }))),
                            _b[SUPPORTING_TYPES.UNSUPPORTED] = (React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__body__wrap__unknown", type: IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: "56px", height: "56px" })),
                            _b)[getSupportingFileType(type)])),
                (isPending || isFailed) && (React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__right__tail" },
                    isPending && (React__default.createElement(Loader, { width: "16px", height: "16px" },
                        React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__tail__pending", type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.createElement(Icon, { className: "sendbird-openchannel-thumbnail-message__right__tail__failed", type: IconTypes.ERROR, fillColor: IconColors.ERROR, width: "16px", height: "16px" }))))),
            !isMobile && (React__default.createElement("div", { className: "sendbird-openchannel-thumbnail-message__context-menu", ref: contextMenuRef }, (isFineResend({ message: message, userId: userId, status: status }) || !isEphemeral) && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.createElement(IconButton, { className: "sendbird-openchannel-thumbnail-message__context-menu--icon", width: "32px", height: "32px", onClick: toggleDropdown },
                    React__default.createElement(Icon, { type: IconTypes.MORE, fillColor: IconColors.CONTENT_INVERSE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                    isFineResend({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { onClick: function () {
                            resendMessage(message);
                            closeDropdown();
                        }, dataSbId: "open_channel_thumbnail_message_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                    (!isEphemeral && isFineDelete({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { onClick: function () {
                            if (disabled) {
                                return;
                            }
                            showRemove(true);
                            closeDropdown();
                        }, dataSbId: "open_channel_thumbnail_message_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } }))))),
        contextMenu && (React__default.createElement(OpenChannelMobileMenu, { message: message, parentRef: mobileMenuRef, hideMenu: function () {
                setContextMenu(false);
            }, showRemove: function () {
                setContextMenu(false);
                showRemove(true);
            }, resendMessage: function () {
                setContextMenu(false);
                resendMessage(message);
            } }))));
}

export { OpenchannelThumbnailMessage as default };
//# sourceMappingURL=OpenchannelThumbnailMessage.js.map
