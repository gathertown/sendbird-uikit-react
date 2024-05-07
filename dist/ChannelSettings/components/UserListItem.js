import { c as __spreadArray } from '../../chunks/bundle-D8IuvsaW.js';
import React__default, { useRef, useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CRmP70eG.js';
import { a as UserProfileContext } from '../../chunks/bundle-BxO5H6aF.js';
import { A as Avatar } from '../../chunks/bundle-CvlHmT5j.js';
import MutedAvatarOverlay from '../../ui/MutedAvatarOverlay.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-BNNafMXS.js';
import UserProfile from '../../ui/UserProfile.js';
import ContextMenu, { MenuItems } from '../../ui/ContextMenu.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/Icon.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../ui/Button.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';

var UserListItem = function (_a) {
    var user = _a.user, className = _a.className, currentUser = _a.currentUser, action = _a.action;
    var actionRef = useRef(null);
    var parentRef = useRef(null);
    var avatarRef = useRef(null);
    var stringSet = useContext(LocalizationContext).stringSet;
    var _b = useContext(UserProfileContext), disableUserProfile = _b.disableUserProfile, renderUserProfile = _b.renderUserProfile;
    var injectingClassNames = Array.isArray(className) ? className : [className];
    return (React__default.createElement("div", { ref: parentRef, className: __spreadArray([
            'sendbird-user-list-item--small'
        ], injectingClassNames, true).join(' ') },
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Avatar, { onClick: function () {
                        if (!disableUserProfile) {
                            toggleDropdown();
                        }
                    }, ref: avatarRef, className: "sendbird-user-list-item--small__avatar", src: user.profileUrl, width: 24, height: 24 }),
                user.isMuted && (React__default.createElement(MutedAvatarOverlay, null)))); }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: user,
                    currentUserId: currentUser,
                    close: closeDropdown,
                    avatarRef: avatarRef,
                })
                : (React__default.createElement(MenuItems, { openLeft: true, parentRef: avatarRef, 
                    // for catching location(x, y) of MenuItems
                    parentContainRef: avatarRef, 
                    // for toggling more options(menus & reactions)
                    closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.createElement(UserProfile, { user: user, currentUserId: currentUser, onSuccess: closeDropdown })))); } }),
        React__default.createElement(Label, { className: "sendbird-user-list-item--small__title", type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 },
            user.nickname || stringSet.NO_NAME,
            (currentUser === user.userId) && (stringSet.CHANNEL_SETTING__MEMBERS__YOU)), // if there is now nickname, display userId
        !user.nickname && (React__default.createElement(Label, { className: "sendbird-user-list-item--small__subtitle", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, user.userId)),
        user.role === 'operator' && (React__default.createElement(Label, { className: "sendbird-user-list-item--small__operator", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.CHANNEL_SETTING__MEMBERS__OPERATOR)),
        action && (React__default.createElement("div", { ref: actionRef, className: "sendbird-user-list-item--small__action" }, action({ actionRef: actionRef, parentRef: parentRef })))));
};

export { UserListItem as default };
//# sourceMappingURL=UserListItem.js.map
