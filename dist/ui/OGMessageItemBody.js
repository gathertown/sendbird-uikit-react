import React__default, { useContext, useMemo, useRef, useEffect } from 'react';
import ImageRenderer from './ImageRenderer.js';
import Icon, { IconTypes } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ZpyLpKbV.js';
import { w as getClassName, e as isEditedMessage } from '../chunks/bundle-4cxEU_h1.js';
import { L as LocalizationContext } from '../chunks/bundle-VRwQbdO6.js';
import { T as TextFragment } from '../chunks/bundle-CHFeqEtk.js';
import { t as tokenizeMessage } from '../chunks/bundle-Z7nfE2Su.js';
import { O as OG_MESSAGE_BODY_CLASSNAME } from '../chunks/bundle-C4OSzTlA.js';
import { u as useMediaQueryContext } from '../chunks/bundle-NTpQiCzz.js';
import { o as openURL } from '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-fFCkIdkP.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-BIDYJkIe.js';
import '../Message/context.js';
import './MentionLabel.js';
import './ContextMenu.js';
import '../chunks/bundle-CmoRaDho.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-DLrfv-Hf.js';
import './UserProfile.js';
import '../chunks/bundle-CnPq00g2.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-oBEHM7Oi.js';
import '../chunks/bundle-D7hWtRqW.js';
import '../chunks/bundle-DjvfRFVm.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';
import './LinkLabel.js';

function OGMessageItemBody(_a) {
    var _b, _c, _d, _e;
    var className = _a.className, message = _a.message, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, _g = _a.mouseHover, mouseHover = _g === void 0 ? false : _g, _h = _a.isMentionEnabled, isMentionEnabled = _h === void 0 ? false : _h, _j = _a.isReactionEnabled, isReactionEnabled = _j === void 0 ? false : _j, _k = _a.onMessageHeightChange, onMessageHeightChange = _k === void 0 ? function () {
        /* noop */
    } : _k;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
    var tokens = useMemo(function () {
        if (isMessageMentioned) {
            return tokenizeMessage({
                mentionedUsers: message === null || message === void 0 ? void 0 : message.mentionedUsers,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
            });
        }
        return tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    var openOpenGraphURL = function () { var _a; return openURL((_a = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _a === void 0 ? void 0 : _a.url); };
    return (React__default.createElement("div", { className: getClassName([
            className,
            'sendbird-og-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            isReactionEnabled && ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : '',
        ]) },
        React__default.createElement(Label, { type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 },
            React__default.createElement("div", { className: OG_MESSAGE_BODY_CLASSNAME },
                React__default.createElement(TextFragment, { tokens: tokens }),
                isEditedMessage(message) && (React__default.createElement(Label, { className: "sendbird-og-message-item-body__text-bubble__message", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
        ((_e = message.ogMetaData) === null || _e === void 0 ? void 0 : _e.defaultImage) && (React__default.createElement(OGImageSection, { onClick: openOpenGraphURL, ogImage: message.ogMetaData.defaultImage, onMessageHeightChange: onMessageHeightChange })),
        message.ogMetaData && (React__default.createElement(OGDescriptionSection, { onClick: openOpenGraphURL, ogMetaData: message.ogMetaData, onMessageHeightChange: onMessageHeightChange })),
        React__default.createElement("div", { className: "sendbird-og-message-item-body__cover" })));
}
var OGImageSection = function (props) {
    var onClick = props.onClick, ogImage = props.ogImage, onMessageHeightChange = props.onMessageHeightChange;
    var imageRef = useRef(null);
    var isMobile = useMediaQueryContext().isMobile;
    return (React__default.createElement("div", { ref: imageRef, className: "sendbird-og-message-item-body__og-thumbnail ".concat(ogImage.url ? '' : 'sendbird-og-message-item-body__og-thumbnail__empty'), onClick: function () { return onClick(); } },
        React__default.createElement(ImageRenderer, { className: "sendbird-og-message-item-body__og-thumbnail__image", url: ogImage.url || '', alt: ogImage.alt, width: "100%", height: isMobile ? '136px' : '240px', onLoad: onMessageHeightChange, onError: function () {
                var _a, _b;
                try {
                    (_b = (_a = imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add('sendbird-og-message-item-body__og-thumbnail__empty');
                }
                catch (error) {
                    // do nothing
                }
            }, defaultComponent: React__default.createElement("div", { className: "sendbird-og-message-item-body__og-thumbnail__place-holder" },
                React__default.createElement(Icon, { className: "sendbird-og-message-item-body__og-thumbnail__place-holder__icon", type: IconTypes.THUMBNAIL_NONE, width: "56px", height: "56px" })) })));
};
var OGDescriptionSection = function (props) {
    var onClick = props.onClick, ogMetaData = props.ogMetaData, onMessageHeightChange = props.onMessageHeightChange;
    useEffect(function () {
        onMessageHeightChange();
    }, [ogMetaData.title, ogMetaData.description, ogMetaData.url]);
    return (React__default.createElement("div", { className: "sendbird-og-message-item-body__description", onClick: function () { return onClick(); } },
        ogMetaData.title && (React__default.createElement(Label, { className: "sendbird-og-message-item-body__description__title", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, ogMetaData.title)),
        ogMetaData.description && (React__default.createElement(Label, { className: "sendbird-og-message-item-body__description__description", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_1 }, ogMetaData.description)),
        ogMetaData.url && (React__default.createElement(Label, { className: "sendbird-og-message-item-body__description__url", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, ogMetaData.url))));
};

export { OGMessageItemBody as default };
//# sourceMappingURL=OGMessageItemBody.js.map
