'use strict';

var _tslib = require('../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var UserProfileContext = require('../chunks/bundle-BKwrdy8Y.js');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
var ui_Avatar = require('../chunks/bundle-JS-CtPko.js');
var ui_MutedAvatarOverlay = require('./MutedAvatarOverlay.js');
var ui_Checkbox = require('./Checkbox.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('../chunks/bundle-Xx0kBn7q.js');
require('./Icon.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-CYjw4691.js');
require('./Button.js');
require('../useSendbirdStateContext.js');
require('../withSendbird.js');
require('../chunks/bundle-e1P14sMX.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-DtHyD1hB.js');
require('../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');

function UserListItem(_a) {
    var user = _a.user, className = _a.className, checked = _a.checked, checkBox = _a.checkBox, isOperator = _a.isOperator, disabled = _a.disabled, disableMessaging = _a.disableMessaging, currentUser = _a.currentUser, action = _a.action, onChange = _a.onChange, _b = _a.avatarSize, avatarSize = _b === void 0 ? '40px' : _b, onClick = _a.onClick, onUserAvatarClick = _a.onUserAvatarClick;
    var operator = isOperator !== null && isOperator !== void 0 ? isOperator : (user === null || user === void 0 ? void 0 : user.role) === 'operator';
    var uniqueKey = user.userId;
    var actionRef = React.useRef(null);
    var parentRef = React.useRef(null);
    var avatarRef = React.useRef(null);
    var _c = React.useContext(UserProfileContext.UserProfileContext), disableUserProfile = _c.disableUserProfile, renderUserProfile = _c.renderUserProfile;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-user-list-item',
        ], false).join(' '), ref: parentRef },
        (user === null || user === void 0 ? void 0 : user.isMuted) && (React.createElement(ui_MutedAvatarOverlay, { height: 40, width: 40 })),
        React.createElement(ui_ContextMenu.default, { menuTrigger: function (toggleDropdown) { return (React.createElement(ui_Avatar.Avatar, { className: "sendbird-user-list-item__avatar", ref: avatarRef, src: (user === null || user === void 0 ? void 0 : user.profileUrl) || (user === null || user === void 0 ? void 0 : user.plainProfileUrl) || '', width: avatarSize, height: avatarSize, onClick: function () {
                    var _a;
                    if (!disableUserProfile) {
                        toggleDropdown();
                        (_a = (onUserAvatarClick !== null && onUserAvatarClick !== void 0 ? onUserAvatarClick : onClick)) === null || _a === void 0 ? void 0 : _a();
                    }
                } })); }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: user,
                    currentUserId: currentUser,
                    close: closeDropdown,
                    avatarRef: avatarRef,
                })
                : (React.createElement(ui_ContextMenu.MenuItems, { openLeft: true, parentRef: avatarRef, 
                    // for catching location(x, y) of MenuItems
                    parentContainRef: avatarRef, 
                    // for toggling more options(menus & reactions)
                    closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React.createElement(ui_UserProfile, { disableMessaging: disableMessaging, user: user, currentUserId: currentUser, onSuccess: closeDropdown })))); } }),
        React.createElement(ui_Label.Label, { className: "sendbird-user-list-item__title", type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
            user.nickname || stringSet.NO_NAME,
            (currentUser === user.userId) && (stringSet.CHANNEL_SETTING__MEMBERS__YOU)), // if there is now nickname, display userId
        !user.nickname && (React.createElement(ui_Label.Label, { className: "sendbird-user-list-item__subtitle", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)),
        checkBox && (React.createElement("label", { className: "sendbird-user-list-item__checkbox", htmlFor: uniqueKey },
            React.createElement(ui_Checkbox, { id: uniqueKey, checked: checked, disabled: disabled, onChange: function (event) { return onChange(event); } }))),
        operator && (React.createElement(ui_Label.Label, { className: [
                'sendbird-user-list-item__operator',
                checkBox ? 'checkbox' : '',
            ].join(' '), type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.LABEL__OPERATOR)),
        action && (React.createElement("div", { className: "sendbird-user-list-item__action", ref: actionRef }, action({ actionRef: actionRef, parentRef: parentRef })))));
}

module.exports = UserListItem;
//# sourceMappingURL=UserListItem.js.map
