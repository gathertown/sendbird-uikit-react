import { a as __awaiter, b as __generator } from '../../chunks/bundle-5LMP4qQC.js';
import React__default, { useMemo, useState } from 'react';
import { u as useLocalization } from '../../chunks/bundle-BW5JWhMG.js';
import { l as isUserMessage, e as isEditedMessage, m as getUIKitMessageType, n as getUIKitMessageTypes, o as getUIKitFileType, t as truncateString, c as isMultipleFilesMessage, i as isVoiceMessage, p as isThumbnailMessage, q as isSentMessage, r as isVideoMessage, s as isGifMessage, b as isFileMessage } from '../../chunks/bundle-7Av17Vus.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DvIsR7kQ.js';
import ImageRenderer from '../../ui/ImageRenderer.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import TextButton from '../../ui/TextButton.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import EmojiReactions from '../../ui/EmojiReactions.js';
import { useThreadContext } from '../context.js';
import { VoiceMessageItemBody } from '../../ui/VoiceMessageItemBody.js';
import { T as TextFragment } from '../../chunks/bundle-vKEHnwCU.js';
import { t as tokenizeMessage } from '../../chunks/bundle-Bj505YcV.js';
import { u as useThreadMessageKindKeySelector, a as useFileInfoListWithUploaded, M as MultipleFilesMessageItemBody, T as ThreadMessageKind } from '../../chunks/bundle-DtUd3Fkz.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-U_2B1aWq.js';
import { C as Colors } from '../../chunks/bundle-CfII9A10.js';
import { o as openURL } from '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../withSendbird.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DbPsZWNm.js';
import '../../ui/ContextMenu.js';
import '../../chunks/bundle-BpHmAKa2.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BJD56sGG.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-c0D1F768.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../chunks/bundle-Hkpc7KpA.js';
import '../../chunks/bundle-CGLTg9iX.js';
import '../../chunks/bundle-mvJ9QD_D.js';
import '@sendbird/chat/message';
import '../context/types.js';
import '../../chunks/bundle-VHqJlR18.js';
import '../../chunks/bundle-D--y2PXM.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-Cg9ONuBG.js';
import '../../chunks/bundle-C160porH.js';

function ParentMessageInfoItem(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var className = _a.className, message = _a.message, showFileViewer = _a.showFileViewer, _l = _a.onBeforeDownloadFileMessage, onBeforeDownloadFileMessage = _l === void 0 ? null : _l;
    var _m = useSendbirdStateContext(), stores = _m.stores, config = _m.config, eventHandlers = _m.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_b = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _b === void 0 ? void 0 : _b.onPressUserProfile;
    var currentUserId = (_d = (_c = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = useLocalization().stringSet;
    var _o = useThreadContext(), currentChannel = _o.currentChannel, emojiContainer = _o.emojiContainer, nicknamesMap = _o.nicknamesMap, toggleReaction = _o.toggleReaction;
    var isMobile = useMediaQueryContext().isMobile;
    var isReactionEnabled = config.groupChannel.enableReactions;
    var isMentionEnabled = config.groupChannel.enableMention;
    var threadMessageKindKey = useThreadMessageKindKeySelector({
        threadMessageKind: ThreadMessageKind.PARENT,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded(message);
    var isMentionedMessage = isMentionEnabled
        && ((_e = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _e === void 0 ? void 0 : _e.length) > 0
        && ((_f = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _f === void 0 ? void 0 : _f.length) > 0;
    // Emoji reactions
    var isReactionActivated = isReactionEnabled
        && config.groupChannel.replyType === 'thread'
        && ((_g = message === null || message === void 0 ? void 0 : message.reactions) === null || _g === void 0 ? void 0 : _g.length) > 0;
    var tokens = useMemo(function () {
        if (isMentionedMessage) {
            return tokenizeMessage({
                mentionedUsers: message === null || message === void 0 ? void 0 : message.mentionedUsers,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
            });
        }
        return tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // Only for the FileMessageItemBody
    var downloadFileWithUrl = function () {
        if (isFileMessage(message))
            openURL(message.url);
    };
    var handleOnClickTextButton = onBeforeDownloadFileMessage
        ? function () { return __awaiter(_this, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(message.messageType === 'file')) return [3 /*break*/, 4];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                    case 2:
                        allowDownload = _c.sent();
                        if (allowDownload) {
                            downloadFileWithUrl();
                        }
                        else {
                            (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ParentMessageInfoItem: Not allowed to download.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ParentMessageInfoItem: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }
        : downloadFileWithUrl;
    // Thumbnail mesage
    var _p = useState(false), isImageRendered = _p[0], setImageRendered = _p[1];
    var thumbnailUrl = ((_h = message === null || message === void 0 ? void 0 : message.thumbnails) === null || _h === void 0 ? void 0 : _h.length) > 0
        ? (_j = message === null || message === void 0 ? void 0 : message.thumbnails[0]) === null || _j === void 0 ? void 0 : _j.url : '';
    return (React__default.createElement("div", { className: "sendbird-parent-message-info-item ".concat(className) },
        isUserMessage(message) && (React__default.createElement(Label, { className: "sendbird-parent-message-info-item__text-message", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 },
            React__default.createElement(TextFragment, { tokens: tokens }),
            isEditedMessage(message) && (React__default.createElement(Label, { className: "sendbird-parent-message-info-item__text-message edited", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
        // Instead of the FileMessageItemBody component
        (getUIKitMessageType(message) === getUIKitMessageTypes().FILE) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__file-message" },
            React__default.createElement("div", { className: "sendbird-parent-message-info-item__file-message__file-icon" },
                React__default.createElement(Icon, { className: "sendbird-parent-message-info-item__file-message__file-icon__icon", type: {
                        IMAGE: IconTypes.PHOTO,
                        VIDEO: IconTypes.PLAY,
                        AUDIO: IconTypes.FILE_AUDIO,
                        GIF: IconTypes.GIF,
                        OTHERS: IconTypes.FILE_DOCUMENT,
                    }[getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)], fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })),
            React__default.createElement(TextButton, { className: "sendbird-parent-message-info-item__file-message__file-name", onClick: handleOnClickTextButton, color: Colors.ONBACKGROUND_1 },
                React__default.createElement(Label, { className: "sendbird-parent-message-info-item__file-message__file-name__text", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url), 30))))),
        isMultipleFilesMessage(message) && (React__default.createElement(MultipleFilesMessageItemBody, { className: "sendbird-parent-message-info-item__multiple-files-message-wrapper", message: message, isByMe: false, isReactionEnabled: isReactionEnabled, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        isVoiceMessage(message) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__voice-message" },
            React__default.createElement(VoiceMessageItemBody, { className: "sendbird-parent-message-info-item__voice-message__item", message: message, channelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url, isByMe: false, isReactionEnabled: isReactionEnabled }))),
        isThumbnailMessage(message) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message", onClick: function () {
                if (isSentMessage(message)) {
                    showFileViewer(true);
                }
            } },
            React__default.createElement(ImageRenderer, { className: "sendbird-parent-message-info-item__thumbnail-message__thumbnail", url: thumbnailUrl || (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), alt: message === null || message === void 0 ? void 0 : message.type, width: "200px", height: "148px", onLoad: function () { setImageRendered(true); }, placeHolder: function (_a) {
                    var style = _a.style;
                    return (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder", style: style },
                        React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder__icon" },
                            React__default.createElement(Icon, { type: isVideoMessage(message) ? IconTypes.PLAY : IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" }))));
                } }),
            (isVideoMessage(message) && !thumbnailUrl) && !isImageRendered && (React__default.createElement("video", { className: "sendbird-parent-message-info-item__thumbnail-message__video" },
                React__default.createElement("source", { src: (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), type: message === null || message === void 0 ? void 0 : message.type }))),
            React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__image-cover" }),
            (isVideoMessage(message) || isGifMessage(message)) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper" },
                React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper__icon" },
                    React__default.createElement(Icon, { type: isVideoMessage(message) ? IconTypes.PLAY : IconTypes.GIF, fillColor: IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" })))))),
        getUIKitMessageType(message) === ((_k = getUIKitMessageTypes === null || getUIKitMessageTypes === void 0 ? void 0 : getUIKitMessageTypes()) === null || _k === void 0 ? void 0 : _k.UNKNOWN) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__unknown-message" },
            React__default.createElement(Label, { className: "sendbird-parent-message-info-item__unknown-message__header", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
            React__default.createElement(Label, { className: "sendbird-parent-message-info-item__unknown-message__description", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE))),
        isReactionActivated && (React__default.createElement("div", { className: "sendbird-parent-message-info__reactions" },
            React__default.createElement(EmojiReactions, { userId: currentUserId, message: message, channel: currentChannel, isByMe: false, emojiContainer: emojiContainer, memberNicknamesMap: nicknamesMap, toggleReaction: toggleReaction, onPressUserProfile: onPressUserProfileHandler })))));
}

export { ParentMessageInfoItem as default };
//# sourceMappingURL=ParentMessageInfoItem.js.map
