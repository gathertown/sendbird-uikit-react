import React__default, { useRef, useState, useCallback } from 'react';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-DvIsR7kQ.js';
import UserProfile from './UserProfile.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-BpHmAKa2.js';
import '../chunks/bundle-5LMP4qQC.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-BJD56sGG.js';
import '../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-BeAHyfuE.js';
import '../chunks/bundle-BW5JWhMG.js';
import '../chunks/bundle-DyVsaRLS.js';
import '../chunks/bundle-B0Dbuu28.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-c0D1F768.js';
import '../chunks/bundle-QtD1UM1r.js';
import '../chunks/bundle-DCv5_AWJ.js';
import './ImageRenderer.js';
import '../chunks/bundle-Dzc4np9L.js';
import './Icon.js';
import './Button.js';
import '../withSendbird.js';

function MentionLabel(props) {
    var _a, _b, _c;
    var mentionTemplate = props.mentionTemplate, mentionedUserId = props.mentionedUserId, mentionedUserNickname = props.mentionedUserNickname, isByMe = props.isByMe;
    var mentionRef = useRef();
    var sendbirdState = useSendbirdStateContext();
    var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
    var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
    var amIBeingMentioned = userId === mentionedUserId;
    var _d = useState(), user = _d[0], setUser = _d[1];
    var fetchUser = useCallback(function (toggleDropdown) {
        if (user || !(sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery)) {
            toggleDropdown();
            return;
        }
        var query = sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery({
            userIdsFilter: [mentionedUserId],
        });
        query.next().then(function (members) {
            if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
                setUser(members[0]);
            }
            toggleDropdown();
        });
    }, [sdk, mentionedUserId]);
    return (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement("a", { className: "\n            sendbird-word__mention\n            ".concat(amIBeingMentioned ? 'sendbird-word__mention--me' : '', "\n          "), onClick: function () { return fetchUser(toggleDropdown); }, ref: mentionRef, "data-userid": mentionedUserId, "data-nickname": mentionedUserNickname, "data-sb-mention": true },
            React__default.createElement(Label, { type: LabelTypography.CAPTION_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, "".concat(mentionTemplate).concat(mentionedUserNickname)))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems
        /**
        * parentRef: For catching location(x, y) of MenuItems
        * parentContainRef: For toggling more options(menus & reactions)
        */
        , { 
            /**
            * parentRef: For catching location(x, y) of MenuItems
            * parentContainRef: For toggling more options(menus & reactions)
            */
            parentRef: mentionRef, parentContainRef: mentionRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
            React__default.createElement(UserProfile, { user: user, onSuccess: closeDropdown, currentUserId: userId }))); } }));
}

export { MentionLabel as default };
//# sourceMappingURL=MentionLabel.js.map
