import React__default, { useContext } from 'react';
import { A as Avatar } from '../../chunks/bundle-DCv5_AWJ.js';
import Icon, { IconColors, IconTypes } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DvIsR7kQ.js';
import { L as LocalizationContext } from '../../chunks/bundle-BW5JWhMG.js';
import { u as useOpenChannelContext, k as kFormatter } from '../../chunks/bundle-wdXnkVNB.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-U_2B1aWq.js';
import '../../chunks/bundle-5LMP4qQC.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-D--y2PXM.js';
import '../../chunks/bundle-c0D1F768.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BJD56sGG.js';
import '../../chunks/bundle-8VKseiqC.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '../../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-BpHmAKa2.js';

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
