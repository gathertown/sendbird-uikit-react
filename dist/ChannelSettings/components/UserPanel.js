import React__default, { useContext, useState } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ZpyLpKbV.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../chunks/bundle-B-Gv7uWB.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../ui/Button.js';
import '../../ui/IconButton.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CmoRaDho.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import './UserListItem.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../ui/UserListItem.js';
import '../../ui/Checkbox.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CFNlvlB-.js';

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var UserPanel = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useState(false), showAccordion = _a[0], setShowAccordion = _a[1];
    var channel = useChannelSettingsContext().channel;
    return (React__default.createElement("div", { className: 'sendbird-channel-settings__user-panel' },
        React__default.createElement("div", { className: [
                'sendbird-channel-settings__panel-item',
                'sendbird-channel-settings__members',
            ].join(' '), role: "switch", "aria-checked": showAccordion, onKeyDown: function () { return setShowAccordion(!showAccordion); }, onClick: function () { return setShowAccordion(!showAccordion); }, tabIndex: 0 },
            React__default.createElement(Icon, { className: "sendbird-channel-settings__panel-icon-left", type: IconTypes.MEMBERS, fillColor: IconColors.PRIMARY, height: "24px", width: "24px" }),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 },
                stringSet.CHANNEL_SETTING__MEMBERS__TITLE,
                React__default.createElement(Badge, { className: 'sendbird-channel-settings__badge', count: kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount) })),
            React__default.createElement(Icon, { className: [
                    'sendbird-channel-settings__panel-icon-right',
                    'sendbird-channel-settings__panel-icon--chevron',
                    (showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''),
                ].join(' '), type: IconTypes.CHEVRON_RIGHT, height: "24px", width: "24px" })),
        showAccordion && (React__default.createElement(MemberList, null))));
};

export { UserPanel as default };
//# sourceMappingURL=UserPanel.js.map
