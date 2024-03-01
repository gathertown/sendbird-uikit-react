import React__default, { useContext } from 'react';
import { A as Avatar } from '../../chunks/bundle-D7hWtRqW.js';
import Icon, { IconColors, IconTypes } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ZpyLpKbV.js';
import { L as LocalizationContext } from '../../chunks/bundle-VRwQbdO6.js';
import { u as useOpenChannelContext, k as kFormatter } from '../../chunks/bundle-DLH_rtYX.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-NTpQiCzz.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-DKsuU1oI.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';

function OpenchannelConversationHeader() {
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, onChatHeaderActionClick = _a.onChatHeaderActionClick, amIOperator = _a.amIOperator, onBackClick = _a.onBackClick;
    var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
    var subTitle = "".concat(kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
    var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
    var isMobile = useMediaQueryContext().isMobile;
    return (React__default.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            isMobile && (React__default.createElement(Icon, { className: "sendbird-oepnchannel-header__icon_back", onClick: onBackClick, fillColor: IconColors.PRIMARY, width: "24px", height: "24px", type: IconTypes.ARROW_LEFT })),
            coverImage ? (React__default.createElement(Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React__default.createElement(Icon, { type: IconTypes.CHANNELS, fillColor: IconColors.CONTENT, width: "18px", height: "18px" }))),
            React__default.createElement(Label, { className: "sendbird-openchannel-conversation-header__left__title", type: LabelTypography.H_2, color: LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React__default.createElement(Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React__default.createElement(IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onChatHeaderActionClick },
                React__default.createElement(Icon, { type: (amIOperator
                        ? IconTypes.INFO
                        : IconTypes.MEMBERS), fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

export { OpenchannelConversationHeader as default };
//# sourceMappingURL=OpenChannelHeader.js.map
