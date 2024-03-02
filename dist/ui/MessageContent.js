import { _ as __assign, a as __awaiter, b as __generator } from '../chunks/bundle-D8IuvsaW.js';
import React__default, { useRef, useContext, useState, useMemo } from 'react';
import { f as format } from '../chunks/bundle-BlLFOUrw.js';
import { M as MessageStatus } from '../chunks/bundle-B9Guj1rz.js';
import { MessageMenu } from './MessageItemMenu.js';
import { MessageEmojiMenu } from './MessageItemReactionMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BNNafMXS.js';
import EmojiReactions from './EmojiReactions.js';
import AdminMessage from './AdminMessage.js';
import QuoteMessage from './QuoteMessage.js';
import { f as isSendableMessage, n as getUIKitMessageTypes, K, C as isTemplateMessage, M as isOGMessage, N as isTextMessage, m as getUIKitMessageType, c as isMultipleFilesMessage, i as isVoiceMessage, p as isThumbnailMessage, h as getSenderName, P as getMessageContentMiddleClassNameByContainerType, Q as isAdminMessage, w as getClassName, R as UI_CONTAINER_TYPES } from '../chunks/bundle-BnYBX14T.js';
import { u as useLocalization, L as LocalizationContext } from '../chunks/bundle-CRmP70eG.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { FeedbackRating, Feedback } from '@sendbird/chat/message';
import { u as useLongPress } from '../chunks/bundle-BaiQZ39W.js';
import { M as MobileMenu } from '../chunks/bundle-CYWkde8y.js';
import { u as useMediaQueryContext } from '../chunks/bundle-BBhSg6C_.js';
import ThreadReplies from './ThreadReplies.js';
import { T as ThreadReplySelectType } from '../chunks/bundle-DQwQl7bP.js';
import { d as deleteNullish, n as noop } from '../chunks/bundle-0yILBaSQ.js';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { A as Avatar } from '../chunks/bundle-CvlHmT5j.js';
import UserProfile from './UserProfile.js';
import { a as UserProfileContext } from '../chunks/bundle-BxO5H6aF.js';
import OGMessageItemBody from './OGMessageItemBody.js';
import TextMessageItemBody from './TextMessageItemBody.js';
import FileMessageItemBody from './FileMessageItemBody.js';
import { u as useThreadMessageKindKeySelector, a as useFileInfoListWithUploaded, M as MultipleFilesMessageItemBody } from '../chunks/bundle-DOhbdcnA.js';
import { VoiceMessageItemBody } from './VoiceMessageItemBody.js';
import ThumbnailMessageItemBody from './ThumbnailMessageItemBody.js';
import UnknownMessageItemBody from './UnknownMessageItemBody.js';
import { TemplateMessageItemBody } from './TemplateMessageItemBody.js';
import Icon, { IconTypes } from './Icon.js';
import FeedbackIconButton from './FeedbackIconButton.js';
import MobileFeedbackMenu from './MobileFeedbackMenu.js';
import MessageFeedbackModal from './MessageFeedbackModal.js';
import MessageFeedbackFailedModal from './MessageFeedbackFailedModal.js';
import '../chunks/bundle-k7V2rNcW.js';
import './Loader.js';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-CCxOcaGS.js';
import '../chunks/bundle-Ch8Obp48.js';
import './IconButton.js';
import '../chunks/bundle-Djp37I3i.js';
import '../chunks/bundle-CNHxvPPg.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-DgRY6xy0.js';
import '../chunks/bundle-C9nxq4KD.js';
import '@sendbird/chat/groupChannel';
import './ImageRenderer.js';
import './ReactionButton.js';
import './ReactionBadge.js';
import './BottomSheet.js';
import '../chunks/bundle-BfCFd-dO.js';
import './Button.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-CwSlabaO.js';
import '../chunks/bundle-w0s865vS.js';
import './UserListItem.js';
import './MutedAvatarOverlay.js';
import './Checkbox.js';
import '../chunks/bundle-ttSanjmp.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-Cf2xHdC2.js';
import './Tooltip.js';
import './TooltipWrapper.js';
import '../Message/context.js';
import '../chunks/bundle-Dn-yaG7j.js';
import '../chunks/bundle-CgW0dqme.js';
import '../chunks/bundle-iau93d70.js';
import '../chunks/bundle-CPqFGv23.js';
import './MentionLabel.js';
import './LinkLabel.js';
import '../chunks/bundle-B8-kxXoE.js';
import '../chunks/bundle-CGHxY6Os.js';
import './TextButton.js';
import '../chunks/bundle-nY4hBePV.js';
import '../chunks/bundle-DBtx2Gk9.js';
import '../chunks/bundle-CQ1BOFUN.js';
import './ProgressBar.js';
import '../VoicePlayer/useVoicePlayer.js';
import './PlaybackTime.js';
import '../chunks/bundle-DAWn6RVy.js';
import './FallbackTemplateMessageItemBody.tsx.js';
import './LoadingTemplateMessageItemBody.tsx.js';
import './Input.js';

function MessageProfile(props) {
    var message = props.message, channel = props.channel, userId = props.userId, _a = props.chainBottom, chainBottom = _a === void 0 ? false : _a, isByMe = props.isByMe, displayThreadReplies = props.displayThreadReplies, bottom = props.bottom;
    var avatarRef = useRef(null);
    var _b = useContext(UserProfileContext), disableUserProfile = _b.disableUserProfile, renderUserProfile = _b.renderUserProfile;
    if (isByMe || chainBottom || !isSendableMessage(message)) {
        return null;
    }
    return (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) {
            var _a, _b;
            return (React__default.createElement(Avatar, { className: "sendbird-message-content__left__avatar ".concat(displayThreadReplies ? 'use-thread-replies' : ''), src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { return (member === null || member === void 0 ? void 0 : member.userId) === message.sender.userId; })) === null || _b === void 0 ? void 0 : _b.profileUrl)
                    || message.sender.profileUrl
                    || '', 
                // TODO: Divide getting profileUrl logic to utils
                ref: avatarRef, width: "28px", height: "28px", bottom: bottom, onClick: function () {
                    if (!disableUserProfile)
                        toggleDropdown();
                } }));
        }, menuItems: function (closeDropdown) { return (renderUserProfile ? (renderUserProfile({
            user: message.sender,
            close: closeDropdown,
            currentUserId: userId,
            avatarRef: avatarRef,
        })) : (React__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
        */
        , { 
            /**
             * parentRef: For catching location(x, y) of MenuItems
             * parentContainRef: For toggling more options(menus & reactions)
            */
            parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
            React__default.createElement(UserProfile, { user: message.sender, onSuccess: closeDropdown })))); } }));
}

var MESSAGE_ITEM_BODY_CLASSNAME = 'sendbird-message-content__middle__message-item-body';
function MessageBody(props) {
    var message = props.message, channel = props.channel, showFileViewer = props.showFileViewer, onMessageHeightChange = props.onMessageHeightChange, onTemplateMessageRenderedCallback = props.onTemplateMessageRenderedCallback, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, mouseHover = props.mouseHover, isMobile = props.isMobile, config = props.config, isReactionEnabledInChannel = props.isReactionEnabledInChannel, isByMe = props.isByMe;
    var threadMessageKindKey = useThreadMessageKindKeySelector({
        isMobile: isMobile,
    });
    var statefulFileInfoList = useFileInfoListWithUploaded(message); // For MultipleFilesMessage.
    var messageTypes = getUIKitMessageTypes();
    var isOgMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableOgtag;
    return K(message)
        .when(isTemplateMessage, function () { return (React__default.createElement(TemplateMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, theme: config === null || config === void 0 ? void 0 : config.theme, onTemplateMessageRenderedCallback: onTemplateMessageRenderedCallback })); })
        .when(function (message) { return isOgMessageEnabledInGroupChannel
        && isSendableMessage(message)
        && isOGMessage(message); }, function () {
        var _a;
        return (React__default.createElement(OGMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, onMessageHeightChange: onMessageHeightChange }));
    })
        .when(isTextMessage, function () {
        var _a;
        return (React__default.createElement(TextMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(function (message) { return getUIKitMessageType(message) === messageTypes.FILE; }, function () { return (React__default.createElement(FileMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(isMultipleFilesMessage, function () { return (React__default.createElement(MultipleFilesMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(isVoiceMessage, function () {
        var _a;
        return (React__default.createElement(VoiceMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, channelUrl: (_a = channel === null || channel === void 0 ? void 0 : channel.url) !== null && _a !== void 0 ? _a : '', isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(isThumbnailMessage, function () { return (React__default.createElement(ThumbnailMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, showFileViewer: showFileViewer, style: isMobile ? { width: '100%' } : {} })); })
        .otherwise(function (message) { return (React__default.createElement(UnknownMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel })); });
}

function MessageHeader(props) {
    var _a, _b;
    var channel = props.channel, message = props.message;
    return (React__default.createElement(Label, { className: "sendbird-message-content__middle__sender-name", type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, 
    /**
     * To use the latest member profile information, message.sender might be outdated
     */
    ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
        var _a;
        // @ts-ignore
        return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
    })) === null || _b === void 0 ? void 0 : _b.nickname) || getSenderName(message)
    // TODO: Divide getting profileUrl logic to utils
    ));
}

var SbFeedbackStatus;
(function (SbFeedbackStatus) {
    /** Feedback is unavailable for this message. This is the default value for base message. */
    SbFeedbackStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    /** Feedback can be set for this message, but nothing has been submitted yet. */
    SbFeedbackStatus["NO_FEEDBACK"] = "NO_FEEDBACK";
    /** Feedback can be set for this message, and something has been submitted. */
    SbFeedbackStatus["SUBMITTED"] = "SUBMITTED";
})(SbFeedbackStatus || (SbFeedbackStatus = {}));

function MessageContent(props) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var 
    // Internal props
    className = props.className, userId = props.userId, channel = props.channel, message = props.message, _q = props.disabled, disabled = _q === void 0 ? false : _q, _r = props.chainTop, chainTop = _r === void 0 ? false : _r, _s = props.chainBottom, chainBottom = _s === void 0 ? false : _s, _t = props.isReactionEnabled, isReactionEnabled = _t === void 0 ? false : _t, _u = props.disableQuoteMessage, disableQuoteMessage = _u === void 0 ? false : _u, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, scrollToMessage = props.scrollToMessage, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, onQuoteMessageClick = props.onQuoteMessageClick, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage;
    // Public props for customization
    var _v = deleteNullish(props), _w = _v.renderSenderProfile, renderSenderProfile = _w === void 0 ? function (props) { return React__default.createElement(MessageProfile, __assign({}, props)); } : _w, _x = _v.renderMessageBody, renderMessageBody = _x === void 0 ? function (props) { return React__default.createElement(MessageBody, __assign({}, props)); } : _x, _y = _v.renderMessageHeader, renderMessageHeader = _y === void 0 ? function (props) { return React__default.createElement(MessageHeader, __assign({}, props)); } : _y, _z = _v.renderMessageMenu, renderMessageMenu = _z === void 0 ? function (props) { return React__default.createElement(MessageMenu, __assign({}, props)); } : _z, _0 = _v.renderEmojiMenu, renderEmojiMenu = _0 === void 0 ? function (props) { return React__default.createElement(MessageEmojiMenu, __assign({}, props)); } : _0, _1 = _v.renderEmojiReactions, renderEmojiReactions = _1 === void 0 ? function (props) { return React__default.createElement(EmojiReactions, __assign({}, props)); } : _1, _2 = _v.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _2 === void 0 ? function (props) { return React__default.createElement(MobileMenu, __assign({}, props)); } : _2;
    var dateLocale = useLocalization().dateLocale;
    var _3 = useSendbirdStateContext(), config = _3.config, eventHandlers = _3.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var contentRef = useRef(null);
    var timestampRef = useRef(null);
    var threadRepliesRef = useRef(null);
    var feedbackButtonsRef = useRef(null);
    var isMobile = useMediaQueryContext().isMobile;
    var _4 = useState(false), showMenu = _4[0], setShowMenu = _4[1];
    var _5 = useState(false), mouseHover = _5[0], setMouseHover = _5[1];
    var _6 = useState(false), supposedHover = _6[0], setSupposedHover = _6[1];
    // Feedback states
    var _7 = useState(false), showFeedbackOptionsMenu = _7[0], setShowFeedbackOptionsMenu = _7[1];
    var _8 = useState(false), showFeedbackModal = _8[0], setShowFeedbackModal = _8[1];
    var _9 = useState(''), feedbackFailedText = _9[0], setFeedbackFailedText = _9[1];
    var _10 = useState(getMessageContentMiddleClassNameByContainerType({
        message: message,
        isMobile: isMobile,
    })), uiContainerType = _10[0], setUiContainerType = _10[1];
    var onTemplateMessageRenderedCallback = function (renderedTemplateType) {
        if (renderedTemplateType === 'failed') {
            setUiContainerType(UI_CONTAINER_TYPES.DEFAULT);
        }
        else if (renderedTemplateType === 'composite') {
            /**
             * Composite templates must have default carousel view irregardless of given containerType.
             */
            setUiContainerType(UI_CONTAINER_TYPES.DEFAULT_CAROUSEL);
        }
    };
    var stringSet = useContext(LocalizationContext).stringSet;
    var isByMe = (userId === ((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'pending')
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'failed');
    var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
    var chainTopClassName = chainTop ? 'chain-top' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isReactionEnabledClassName = isReactionEnabledInChannel ? 'use-reactions' : '';
    var supposedHoverClassName = supposedHover ? 'sendbird-mouse-hover' : '';
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage)
        && !disableQuoteMessage);
    var useReplyingClassName = useReplying ? 'use-quote' : '';
    // Thread replies
    var displayThreadReplies = ((_c = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _c === void 0 ? void 0 : _c.replyCount) > 0 && replyType === 'THREAD';
    // Feedback buttons
    var isFeedbackMessage = !isByMe
        && (message === null || message === void 0 ? void 0 : message.myFeedbackStatus)
        && message.myFeedbackStatus !== SbFeedbackStatus.NOT_APPLICABLE;
    var isFeedbackEnabled = ((_d = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _d === void 0 ? void 0 : _d.enableFeedback) && isFeedbackMessage;
    /**
     * For TemplateMessage, do not display:
     *   - in web view:
     *     - message menu
     *     - reaction menu
     *     - reply in thread
     *   - in mobile view:
     *     - bottom sheet on long click
     */
    var isNotTemplateMessage = !isTemplateMessage(message);
    var showLongPressMenu = isNotTemplateMessage && isMobile;
    var showOutgoingMenu = isNotTemplateMessage && isByMe && !isMobile;
    var showThreadReplies = isNotTemplateMessage && displayThreadReplies;
    var showRightContent = isNotTemplateMessage && !isByMe && !isMobile;
    var isTimestampBottom = !!uiContainerType;
    var getTotalBottom = function () {
        var sum = 2;
        if (timestampRef.current && isTimestampBottom) {
            sum += 4 + timestampRef.current.clientHeight;
        }
        if (threadRepliesRef.current) {
            sum += 4 + threadRepliesRef.current.clientHeight;
        }
        if (feedbackButtonsRef.current) {
            sum += 4 + feedbackButtonsRef.current.clientHeight;
        }
        return sum;
    };
    var totalBottom = useMemo(function () { return getTotalBottom(); }, [isTimestampBottom]);
    var onCloseFeedbackForm = function () {
        setShowFeedbackModal(false);
    };
    var openFeedbackFormOrMenu = function () {
        if (isMobile) {
            setShowFeedbackOptionsMenu(true);
        }
        else {
            setShowFeedbackModal(true);
        }
    };
    // onMouseDown: (e: React.MouseEvent<T>) => void;
    // onTouchStart: (e: React.TouchEvent<T>) => void;
    // onMouseUp: (e: React.MouseEvent<T>) => void;
    // onMouseLeave: (e: React.MouseEvent<T>) => void;
    // onTouchEnd: (e: React.TouchEvent<T>) => void;
    var longPress = useLongPress({
        onLongPress: function () {
            if (showLongPressMenu) {
                setShowMenu(true);
            }
        },
        onClick: noop,
    }, {
        delay: 300,
        shouldPreventDefault: false,
    });
    if (isAdminMessage(message)) {
        return (React__default.createElement(AdminMessage, { message: message }));
    }
    return (React__default.createElement("div", { className: getClassName([
            className,
            'sendbird-message-content',
            isByMeClassName,
            uiContainerType,
        ]), onMouseOver: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } },
        React__default.createElement("div", { className: getClassName(['sendbird-message-content__left', isReactionEnabledClassName, isByMeClassName, useReplyingClassName]) },
            renderSenderProfile(__assign(__assign({}, props), { isByMe: isByMe, displayThreadReplies: displayThreadReplies, bottom: totalBottom > 0 ? totalBottom + 'px' : '' })),
            showOutgoingMenu && (React__default.createElement("div", { className: getClassName(['sendbird-message-content-menu', isReactionEnabledClassName, supposedHoverClassName, isByMeClassName]) },
                renderMessageMenu({
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    disabled: disabled,
                    showEdit: showEdit,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    setSupposedHover: setSupposedHover,
                    onReplyInThread: function (_a) {
                        var _b;
                        var message = _a.message;
                        if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                            scrollToMessage((_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (renderEmojiMenu({
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    setSupposedHover: setSupposedHover,
                }))))),
        React__default.createElement("div", __assign({ className: getClassName([
                'sendbird-message-content__middle',
                isTemplateMessage(message) ? 'sendbird-message-content__middle__for_template_message' : '',
                uiContainerType,
            ]) }, (isMobile ? __assign({}, longPress) : {}), { ref: contentRef }),
            !isByMe && !chainTop && !useReplying && renderMessageHeader(props),
            (useReplying) ? (React__default.createElement("div", { className: getClassName(['sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName]) },
                React__default.createElement(QuoteMessage, { className: "sendbird-message-content__middle__quote-message__quote", message: message, userId: userId, isByMe: isByMe, isUnavailable: ((_e = channel === null || channel === void 0 ? void 0 : channel.messageOffsetTimestamp) !== null && _e !== void 0 ? _e : 0) > ((_g = (_f = message.parentMessage) === null || _f === void 0 ? void 0 : _f.createdAt) !== null && _g !== void 0 ? _g : 0), onClick: function () {
                        var _a;
                        if (replyType === 'THREAD' && threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onQuoteMessageClick === null || onQuoteMessageClick === void 0 ? void 0 : onQuoteMessageClick({ message: message });
                        }
                        if ((replyType === 'QUOTE_REPLY' || (replyType === 'THREAD' && threadReplySelectType === ThreadReplySelectType.PARENT))
                            && ((_a = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message === null || message === void 0 ? void 0 : message.parentMessageId)) {
                            scrollToMessage(message.parentMessage.createdAt, message.parentMessageId);
                        }
                    } }))) : null,
            React__default.createElement("div", { className: getClassName([
                    'sendbird-message-content__middle__body-container',
                    isTemplateMessage(message) ? 'sendbird-message-content__middle__for_template_message' : '',
                ]) },
                (isByMe && !chainBottom) && (React__default.createElement("div", { className: getClassName([
                        'sendbird-message-content__middle__body-container__created-at',
                        'left',
                        supposedHoverClassName,
                        uiContainerType,
                    ]), ref: timestampRef },
                    React__default.createElement("div", { className: "sendbird-message-content__middle__body-container__created-at__component-container" },
                        React__default.createElement(MessageStatus, { message: message, channel: channel })))),
                renderMessageBody({
                    message: message,
                    channel: channel,
                    showFileViewer: showFileViewer,
                    onMessageHeightChange: onMessageHeightChange,
                    mouseHover: mouseHover,
                    isMobile: isMobile,
                    config: config,
                    isReactionEnabledInChannel: isReactionEnabledInChannel,
                    isByMe: isByMe,
                    onTemplateMessageRenderedCallback: onTemplateMessageRenderedCallback,
                    onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
                }),
                (isReactionEnabledInChannel && ((_h = message === null || message === void 0 ? void 0 : message.reactions) === null || _h === void 0 ? void 0 : _h.length) > 0) && (React__default.createElement("div", { className: getClassName([
                        'sendbird-message-content-reactions',
                        isMultipleFilesMessage(message)
                            ? 'image-grid'
                            : (!isByMe || isThumbnailMessage(message) || isOGMessage(message))
                                ? '' : 'primary',
                        mouseHover ? 'mouse-hover' : '',
                    ]) }, renderEmojiReactions({
                    userId: userId,
                    message: message,
                    channel: channel,
                    isByMe: isByMe,
                    emojiContainer: emojiContainer,
                    memberNicknamesMap: nicknamesMap,
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                }))),
                (!isByMe && !chainBottom) && (React__default.createElement(Label, { className: getClassName([
                        'sendbird-message-content__middle__body-container__created-at',
                        'right',
                        supposedHoverClassName,
                        uiContainerType,
                    ]), type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2, ref: timestampRef }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
                    locale: dateLocale,
                })))),
            isTimestampBottom && React__default.createElement("div", { style: {
                    width: '100%',
                    height: ((_k = (_j = timestampRef.current) === null || _j === void 0 ? void 0 : _j.clientHeight) !== null && _k !== void 0 ? _k : 0) + 'px',
                    marginTop: '4px',
                } }),
            showThreadReplies && (React__default.createElement(ThreadReplies, { className: "sendbird-message-content__middle__thread-replies", threadInfo: message === null || message === void 0 ? void 0 : message.threadInfo, onClick: function () { return onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message }); }, ref: threadRepliesRef })),
            isFeedbackEnabled && React__default.createElement("div", { className: "sendbird-message-content__middle__body-container__feedback-buttons-container", ref: feedbackButtonsRef },
                React__default.createElement(FeedbackIconButton, { isSelected: ((_l = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _l === void 0 ? void 0 : _l.rating) === FeedbackRating.GOOD, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!!((_a = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _a === void 0 ? void 0 : _a.rating)) return [3 /*break*/, 5];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message.submitFeedback({
                                            rating: FeedbackRating.GOOD,
                                        })];
                                case 2:
                                    _d.sent();
                                    openFeedbackFormOrMenu();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _d.sent();
                                    (_c = (_b = config === null || config === void 0 ? void 0 : config.logger) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.call(_b, 'Channel: Submit feedback failed.', error_1);
                                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    openFeedbackFormOrMenu();
                                    _d.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); }, disabled: (message === null || message === void 0 ? void 0 : message.myFeedback) && message.myFeedback.rating !== FeedbackRating.GOOD },
                    React__default.createElement(Icon, { type: IconTypes.FEEDBACK_LIKE, width: '24px', height: '24px' })),
                React__default.createElement(FeedbackIconButton, { isSelected: ((_m = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _m === void 0 ? void 0 : _m.rating) === FeedbackRating.BAD, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!!((_a = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _a === void 0 ? void 0 : _a.rating)) return [3 /*break*/, 5];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message.submitFeedback({
                                            rating: FeedbackRating.BAD,
                                        })];
                                case 2:
                                    _d.sent();
                                    openFeedbackFormOrMenu();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _d.sent();
                                    (_c = (_b = config === null || config === void 0 ? void 0 : config.logger) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.call(_b, 'Channel: Submit feedback failed.', error_2);
                                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    openFeedbackFormOrMenu();
                                    _d.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); }, disabled: (message === null || message === void 0 ? void 0 : message.myFeedback) && message.myFeedback.rating !== FeedbackRating.BAD },
                    React__default.createElement(Icon, { type: IconTypes.FEEDBACK_DISLIKE, width: '24px', height: '24px' })))),
        showRightContent && (React__default.createElement("div", { className: getClassName(['sendbird-message-content__right', chainTopClassName, isReactionEnabledClassName, useReplyingClassName]) },
            React__default.createElement("div", { className: getClassName(['sendbird-message-content-menu', chainTopClassName, supposedHoverClassName, isByMeClassName]) },
                isReactionEnabledInChannel && (renderEmojiMenu({
                    className: 'sendbird-message-content-menu__reaction-menu',
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    setSupposedHover: setSupposedHover,
                })),
                renderMessageMenu({
                    className: 'sendbird-message-content-menu__normal-menu',
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    disabled: disabled,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    setSupposedHover: setSupposedHover,
                    onReplyInThread: function (_a) {
                        var _b;
                        var message = _a.message;
                        if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                            scrollToMessage((_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                })))),
        showMenu && isSendableMessage(message) && renderMobileMenuOnLongPress({
            parentRef: contentRef,
            channel: channel,
            hideMenu: function () { setShowMenu(false); },
            message: message,
            isReactionEnabled: isReactionEnabledInChannel,
            isByMe: isByMe,
            userId: userId,
            replyType: replyType,
            disabled: disabled,
            showRemove: showRemove,
            emojiContainer: emojiContainer,
            resendMessage: resendMessage,
            deleteMessage: deleteMessage,
            setQuoteMessage: setQuoteMessage,
            toggleReaction: toggleReaction,
            showEdit: showEdit,
            onReplyInThread: function (_a) {
                var _b;
                var message = _a.message;
                if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                    onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                }
                else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                    scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(((_b = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) || 0, (message === null || message === void 0 ? void 0 : message.parentMessageId) || 0);
                }
            },
            onDownloadClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage) {
                                return [2 /*return*/, null];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'MessageContent: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'MessageContent: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        }),
        ((_o = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _o === void 0 ? void 0 : _o.rating) && showFeedbackOptionsMenu && (React__default.createElement(MobileFeedbackMenu, { hideMenu: function () {
                setShowFeedbackOptionsMenu(false);
            }, onEditFeedback: function () {
                setShowFeedbackOptionsMenu(false);
                setShowFeedbackModal(true);
            }, onRemoveFeedback: function () { return __awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, message.deleteFeedback(message.myFeedback.id)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Delete feedback failed.', error_3);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
                            return [3 /*break*/, 3];
                        case 3:
                            setShowFeedbackOptionsMenu(false);
                            return [2 /*return*/];
                    }
                });
            }); } })),
        ((_p = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _p === void 0 ? void 0 : _p.rating) && showFeedbackModal && (React__default.createElement(MessageFeedbackModal, { selectedFeedback: message.myFeedback.rating, message: message, onUpdate: function (selectedFeedback, comment) { return __awaiter(_this, void 0, void 0, function () {
                var newFeedback, error_4;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            newFeedback = new Feedback({
                                id: message.myFeedback.id,
                                rating: selectedFeedback,
                                comment: comment,
                            });
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, message.updateFeedback(newFeedback)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_4 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Update feedback failed.', error_4);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SAVE);
                            return [3 /*break*/, 4];
                        case 4:
                            onCloseFeedbackForm();
                            return [2 /*return*/];
                    }
                });
            }); }, onClose: onCloseFeedbackForm, onRemove: function () { return __awaiter(_this, void 0, void 0, function () {
                var error_5;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, message.deleteFeedback(message.myFeedback.id)];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Delete feedback failed.', error_5);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
                            return [3 /*break*/, 3];
                        case 3:
                            onCloseFeedbackForm();
                            return [2 /*return*/];
                    }
                });
            }); } })),
        feedbackFailedText && (React__default.createElement(MessageFeedbackFailedModal, { text: feedbackFailedText, onCancel: function () {
                setFeedbackFailedText('');
            } }))));
}

export { MessageContent as default };
//# sourceMappingURL=MessageContent.js.map
