import React__default, { useContext, useState } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CRmP70eG.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-BNNafMXS.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../chunks/bundle-D5oLPMwM.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../ui/Button.js';
import '../../ui/IconButton.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import './UserListItem.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../ui/UserListItem.js';
import '../../ui/Checkbox.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DgYc_vhn.js';

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
