import React__default, { useState, useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BW5JWhMG.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DvIsR7kQ.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import EditDetails from './EditDetailsModal.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useOpenChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '../../chunks/bundle-5LMP4qQC.js';
import '../../chunks/bundle-CfII9A10.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BfWElK7u.js';
import '../../chunks/bundle-c0D1F768.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '../../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../chunks/bundle-U_2B1aWq.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BJD56sGG.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-BpHmAKa2.js';
import '../../ui/Input.js';
import '../../chunks/bundle-B0Dbuu28.js';

function ChannelProfile() {
    var _a, _b;
    var globalState = useSendbirdStateContext();
    var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
    var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
    var channel = useOpenChannelSettingsContext().channel;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var _c = useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-openchannel-profile" },
        React__default.createElement("div", { className: "sendbird-openchannel-profile--inner" },
            React__default.createElement("div", { className: "sendbird-openchannel-profile__avatar" },
                React__default.createElement(ChannelAvatar, { channel: channel, theme: theme, height: 80, width: 80 })),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1, className: "sendbird-openchannel-profile__title" }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE),
            React__default.createElement(TextButton, { disabled: disabled, className: "sendbird-openchannel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.createElement(EditDetails, { onCancel: function () { return setShowModal(false); } })))));
}

export { ChannelProfile as default };
//# sourceMappingURL=OpenChannelProfile.js.map
