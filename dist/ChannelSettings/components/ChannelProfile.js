import React__default, { useContext, useState } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-BBVJixDe.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DBtyGp-i.js';
import EditDetails from './EditDetailsModal.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../withSendbird.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BdvKKcJL.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../ui/Input.js';

var ChannelProfile = function () {
    var _a, _b, _c;
    var state = useSendbirdStateContext();
    var channelSettingStore = useChannelSettingsContext();
    var stringSet = useContext(LocalizationContext).stringSet;
    var _d = useState(false), showModal = _d[0], setShowModal = _d[1];
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = ((_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
    var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;
    var disabled = !isOnline;
    var channel = channelSettingStore.channel;
    var getChannelName = function () {
        if ((channel === null || channel === void 0 ? void 0 : channel.name) && (channel === null || channel === void 0 ? void 0 : channel.name) !== 'Group Channel') {
            return channel.name;
        }
        if ((channel === null || channel === void 0 ? void 0 : channel.name) === 'Group Channel' || !(channel === null || channel === void 0 ? void 0 : channel.name)) {
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        }
        return stringSet.NO_TITLE;
    };
    return (React__default.createElement("div", { className: "sendbird-channel-profile" },
        React__default.createElement("div", { className: "sendbird-channel-profile--inner" },
            React__default.createElement("div", { className: "sendbird-channel-profile__avatar" },
                React__default.createElement(ChannelAvatar, { channel: channel, userId: userId, theme: theme, width: 80, height: 80 })),
            React__default.createElement(Label, { className: "sendbird-channel-profile__title", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, getChannelName()),
            React__default.createElement(TextButton, { disabled: disabled, className: "sendbird-channel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.createElement(EditDetails, { onCancel: function () { return setShowModal(false); }, onSubmit: function () { return setShowModal(false); } })))));
};

export { ChannelProfile as default };
//# sourceMappingURL=ChannelProfile.js.map
