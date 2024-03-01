'use strict';

var _tslib = require('../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var index$1 = require('../chunks/bundle-5izjntYE.js');
var ui_MessageStatus = require('../chunks/bundle-BQHlCNa7.js');
var ui_MessageItemMenu = require('./MessageItemMenu.js');
var ui_MessageItemReactionMenu = require('./MessageItemReactionMenu.js');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
var ui_EmojiReactions = require('./EmojiReactions.js');
var ui_AdminMessage = require('./AdminMessage.js');
var ui_QuoteMessage = require('./QuoteMessage.js');
var index = require('../chunks/bundle-Pv5sl1sx.js');
var LocalizationContext = require('../chunks/bundle-D2Bg8CLY.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var message = require('@sendbird/chat/message');
var useLongPress = require('../chunks/bundle-BewU7zpu.js');
var index$2 = require('../chunks/bundle-DLSKVE-z.js');
var MediaQueryContext = require('../chunks/bundle-Gh-C2yIM.js');
var ui_ThreadReplies = require('./ThreadReplies.js');
var _const = require('../chunks/bundle-BVHqwRlD.js');
var utils = require('../chunks/bundle-DMrzJD8i.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Avatar = require('../chunks/bundle-Bh7J_SsW.js');
var ui_UserProfile = require('./UserProfile.js');
var UserProfileContext = require('../chunks/bundle-k7WGsMsr.js');
var ui_OGMessageItemBody = require('./OGMessageItemBody.js');
var ui_TextMessageItemBody = require('./TextMessageItemBody.js');
var ui_FileMessageItemBody = require('./FileMessageItemBody.js');
var useFileInfoListWithUploaded = require('../chunks/bundle-BZB43WQ7.js');
var ui_VoiceMessageItemBody = require('./VoiceMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('./ThumbnailMessageItemBody.js');
var ui_UnknownMessageItemBody = require('./UnknownMessageItemBody.js');
var ui_TemplateMessageItemBody = require('./TemplateMessageItemBody.js');
var ui_Icon = require('./Icon.js');
var ui_FeedbackIconButton = require('./FeedbackIconButton.js');
var ui_MobileFeedbackMenu = require('./MobileFeedbackMenu.js');
var ui_MessageFeedbackModal = require('./MessageFeedbackModal.js');
var ui_MessageFeedbackFailedModal = require('./MessageFeedbackFailedModal.js');
require('../chunks/bundle-DzJC_TK7.js');
require('./Loader.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-1yGs9Nzf.js');
require('../chunks/bundle-CoFmIxJK.js');
require('./IconButton.js');
require('../chunks/bundle-GRPKdtY8.js');
require('../chunks/bundle-DLvdMF5T.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-aXbXs3dl.js');
require('../chunks/bundle-BlYafk3l.js');
require('@sendbird/chat/groupChannel');
require('./ImageRenderer.js');
require('./ReactionButton.js');
require('./ReactionBadge.js');
require('./BottomSheet.js');
require('../chunks/bundle-BPS3DFTX.js');
require('./Button.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('../chunks/bundle-BPDG2Sth.js');
require('../chunks/bundle-tCz2WwyT.js');
require('./UserListItem.js');
require('./MutedAvatarOverlay.js');
require('./Checkbox.js');
require('../chunks/bundle-DgzUMNGp.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-BeszEZzp.js');
require('./Tooltip.js');
require('./TooltipWrapper.js');
require('../Message/context.js');
require('../chunks/bundle-mXFFmyyG.js');
require('../chunks/bundle-B9CKUSwz.js');
require('../chunks/bundle-Bwn93cY-.js');
require('../chunks/bundle-Bkbq7HMf.js');
require('./MentionLabel.js');
require('./LinkLabel.js');
require('../chunks/bundle-_dPY3ICW.js');
require('../chunks/bundle-B3TtDetM.js');
require('./TextButton.js');
require('../chunks/bundle-Cxw_pnFf.js');
require('../chunks/bundle-JQgZk-Pu.js');
require('../chunks/bundle-C3yNDl4J.js');
require('./ProgressBar.js');
require('../VoicePlayer/useVoicePlayer.js');
require('./PlaybackTime.js');
require('../chunks/bundle-DSE-imlx.js');
require('./FallbackTemplateMessageItemBody.tsx.js');
require('./LoadingTemplateMessageItemBody.tsx.js');
require('./Input.js');

function MessageProfile(props) {
    var message = props.message, channel = props.channel, userId = props.userId, _a = props.chainBottom, chainBottom = _a === void 0 ? false : _a, isByMe = props.isByMe, displayThreadReplies = props.displayThreadReplies, bottom = props.bottom;
    var avatarRef = React.useRef(null);
    var _b = React.useContext(UserProfileContext.UserProfileContext), disableUserProfile = _b.disableUserProfile, renderUserProfile = _b.renderUserProfile;
    if (isByMe || chainBottom || !index.isSendableMessage(message)) {
        return null;
    }
    return (React.createElement(ui_ContextMenu.default, { menuTrigger: function (toggleDropdown) {
            var _a, _b;
            return (React.createElement(ui_Avatar.Avatar, { className: "sendbird-message-content__left__avatar ".concat(displayThreadReplies ? 'use-thread-replies' : ''), src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { return (member === null || member === void 0 ? void 0 : member.userId) === message.sender.userId; })) === null || _b === void 0 ? void 0 : _b.profileUrl)
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
        })) : (React.createElement(ui_ContextMenu.MenuItems
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
            React.createElement(ui_UserProfile, { user: message.sender, onSuccess: closeDropdown })))); } }));
}

var MESSAGE_ITEM_BODY_CLASSNAME = 'sendbird-message-content__middle__message-item-body';
function MessageBody(props) {
    var message = props.message, channel = props.channel, showFileViewer = props.showFileViewer, onMessageHeightChange = props.onMessageHeightChange, onTemplateMessageRenderedCallback = props.onTemplateMessageRenderedCallback, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, mouseHover = props.mouseHover, isMobile = props.isMobile, config = props.config, isReactionEnabledInChannel = props.isReactionEnabledInChannel, isByMe = props.isByMe;
    var threadMessageKindKey = useFileInfoListWithUploaded.useThreadMessageKindKeySelector({
        isMobile: isMobile,
    });
    var statefulFileInfoList = useFileInfoListWithUploaded.useFileInfoListWithUploaded(message); // For MultipleFilesMessage.
    var messageTypes = index.getUIKitMessageTypes();
    var isOgMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableOgtag;
    return index.K(message)
        .when(index.isTemplateMessage, function () { return (React.createElement(ui_TemplateMessageItemBody.TemplateMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, theme: config === null || config === void 0 ? void 0 : config.theme, onTemplateMessageRenderedCallback: onTemplateMessageRenderedCallback })); })
        .when(function (message) { return isOgMessageEnabledInGroupChannel
        && index.isSendableMessage(message)
        && index.isOGMessage(message); }, function () {
        var _a;
        return (React.createElement(ui_OGMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, onMessageHeightChange: onMessageHeightChange }));
    })
        .when(index.isTextMessage, function () {
        var _a;
        return (React.createElement(ui_TextMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(function (message) { return index.getUIKitMessageType(message) === messageTypes.FILE; }, function () { return (React.createElement(ui_FileMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(index.isMultipleFilesMessage, function () { return (React.createElement(useFileInfoListWithUploaded.MultipleFilesMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(index.isVoiceMessage, function () {
        var _a;
        return (React.createElement(ui_VoiceMessageItemBody.VoiceMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, channelUrl: (_a = channel === null || channel === void 0 ? void 0 : channel.url) !== null && _a !== void 0 ? _a : '', isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(index.isThumbnailMessage, function () { return (React.createElement(ui_ThumbnailMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, showFileViewer: showFileViewer, style: isMobile ? { width: '100%' } : {} })); })
        .otherwise(function (message) { return (React.createElement(ui_UnknownMessageItemBody, { className: MESSAGE_ITEM_BODY_CLASSNAME, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel })); });
}

function MessageHeader(props) {
    var _a, _b;
    var channel = props.channel, message = props.message;
    return (React.createElement(ui_Label.Label, { className: "sendbird-message-content__middle__sender-name", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, 
    /**
     * To use the latest member profile information, message.sender might be outdated
     */
    ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
        var _a;
        // @ts-ignore
        return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
    })) === null || _b === void 0 ? void 0 : _b.nickname) || index.getSenderName(message)
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
    className = props.className, userId = props.userId, channel = props.channel, message$1 = props.message, _q = props.disabled, disabled = _q === void 0 ? false : _q, _r = props.chainTop, chainTop = _r === void 0 ? false : _r, _s = props.chainBottom, chainBottom = _s === void 0 ? false : _s, _t = props.isReactionEnabled, isReactionEnabled = _t === void 0 ? false : _t, _u = props.disableQuoteMessage, disableQuoteMessage = _u === void 0 ? false : _u, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, scrollToMessage = props.scrollToMessage, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, onQuoteMessageClick = props.onQuoteMessageClick, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage;
    // Public props for customization
    var _v = utils.deleteNullish(props), _w = _v.renderSenderProfile, renderSenderProfile = _w === void 0 ? function (props) { return React.createElement(MessageProfile, _tslib.__assign({}, props)); } : _w, _x = _v.renderMessageBody, renderMessageBody = _x === void 0 ? function (props) { return React.createElement(MessageBody, _tslib.__assign({}, props)); } : _x, _y = _v.renderMessageHeader, renderMessageHeader = _y === void 0 ? function (props) { return React.createElement(MessageHeader, _tslib.__assign({}, props)); } : _y, _z = _v.renderMessageMenu, renderMessageMenu = _z === void 0 ? function (props) { return React.createElement(ui_MessageItemMenu.MessageMenu, _tslib.__assign({}, props)); } : _z, _0 = _v.renderEmojiMenu, renderEmojiMenu = _0 === void 0 ? function (props) { return React.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, _tslib.__assign({}, props)); } : _0, _1 = _v.renderEmojiReactions, renderEmojiReactions = _1 === void 0 ? function (props) { return React.createElement(ui_EmojiReactions, _tslib.__assign({}, props)); } : _1, _2 = _v.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _2 === void 0 ? function (props) { return React.createElement(index$2.MobileMenu, _tslib.__assign({}, props)); } : _2;
    var dateLocale = LocalizationContext.useLocalization().dateLocale;
    var _3 = useSendbirdStateContext.useSendbirdStateContext(), config = _3.config, eventHandlers = _3.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var contentRef = React.useRef(null);
    var timestampRef = React.useRef(null);
    var threadRepliesRef = React.useRef(null);
    var feedbackButtonsRef = React.useRef(null);
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var _4 = React.useState(false), showMenu = _4[0], setShowMenu = _4[1];
    var _5 = React.useState(false), mouseHover = _5[0], setMouseHover = _5[1];
    var _6 = React.useState(false), supposedHover = _6[0], setSupposedHover = _6[1];
    // Feedback states
    var _7 = React.useState(false), showFeedbackOptionsMenu = _7[0], setShowFeedbackOptionsMenu = _7[1];
    var _8 = React.useState(false), showFeedbackModal = _8[0], setShowFeedbackModal = _8[1];
    var _9 = React.useState(''), feedbackFailedText = _9[0], setFeedbackFailedText = _9[1];
    var _10 = React.useState(index.getMessageContentMiddleClassNameByContainerType({
        message: message$1,
        isMobile: isMobile,
    })), uiContainerType = _10[0], setUiContainerType = _10[1];
    var onTemplateMessageRenderedCallback = function (renderedTemplateType) {
        if (renderedTemplateType === 'failed') {
            setUiContainerType(index.UI_CONTAINER_TYPES.DEFAULT);
        }
        else if (renderedTemplateType === 'composite') {
            /**
             * Composite templates must have default carousel view irregardless of given containerType.
             */
            setUiContainerType(index.UI_CONTAINER_TYPES.DEFAULT_CAROUSEL);
        }
    };
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isByMe = (userId === ((_b = message$1 === null || message$1 === void 0 ? void 0 : message$1.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message$1 === null || message$1 === void 0 ? void 0 : message$1.sendingStatus) === 'pending')
        || ((message$1 === null || message$1 === void 0 ? void 0 : message$1.sendingStatus) === 'failed');
    var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
    var chainTopClassName = chainTop ? 'chain-top' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isReactionEnabledClassName = isReactionEnabledInChannel ? 'use-reactions' : '';
    var supposedHoverClassName = supposedHover ? 'sendbird-mouse-hover' : '';
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessageId) && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessage)
        && !disableQuoteMessage);
    var useReplyingClassName = useReplying ? 'use-quote' : '';
    // Thread replies
    var displayThreadReplies = ((_c = message$1 === null || message$1 === void 0 ? void 0 : message$1.threadInfo) === null || _c === void 0 ? void 0 : _c.replyCount) > 0 && replyType === 'THREAD';
    // Feedback buttons
    var isFeedbackMessage = !isByMe
        && (message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedbackStatus)
        && message$1.myFeedbackStatus !== SbFeedbackStatus.NOT_APPLICABLE;
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
    var isNotTemplateMessage = !index.isTemplateMessage(message$1);
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
    var totalBottom = React.useMemo(function () { return getTotalBottom(); }, [isTimestampBottom]);
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
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (showLongPressMenu) {
                setShowMenu(true);
            }
        },
        onClick: utils.noop,
    }, {
        delay: 300,
        shouldPreventDefault: false,
    });
    if (index.isAdminMessage(message$1)) {
        return (React.createElement(ui_AdminMessage, { message: message$1 }));
    }
    return (React.createElement("div", { className: index.getClassName([
            className,
            'sendbird-message-content',
            isByMeClassName,
            uiContainerType,
        ]), onMouseOver: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } },
        React.createElement("div", { className: index.getClassName(['sendbird-message-content__left', isReactionEnabledClassName, isByMeClassName, useReplyingClassName]) },
            renderSenderProfile(_tslib.__assign(_tslib.__assign({}, props), { isByMe: isByMe, displayThreadReplies: displayThreadReplies, bottom: totalBottom > 0 ? totalBottom + 'px' : '' })),
            showOutgoingMenu && (React.createElement("div", { className: index.getClassName(['sendbird-message-content-menu', isReactionEnabledClassName, supposedHoverClassName, isByMeClassName]) },
                renderMessageMenu({
                    channel: channel,
                    message: message$1,
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
                        if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                            scrollToMessage((_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (renderEmojiMenu({
                    message: message$1,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    setSupposedHover: setSupposedHover,
                }))))),
        React.createElement("div", _tslib.__assign({ className: index.getClassName([
                'sendbird-message-content__middle',
                index.isTemplateMessage(message$1) ? 'sendbird-message-content__middle__for_template_message' : '',
                uiContainerType,
            ]) }, (isMobile ? _tslib.__assign({}, longPress) : {}), { ref: contentRef }),
            !isByMe && !chainTop && !useReplying && renderMessageHeader(props),
            (useReplying) ? (React.createElement("div", { className: index.getClassName(['sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName]) },
                React.createElement(ui_QuoteMessage, { className: "sendbird-message-content__middle__quote-message__quote", message: message$1, userId: userId, isByMe: isByMe, isUnavailable: ((_e = channel === null || channel === void 0 ? void 0 : channel.messageOffsetTimestamp) !== null && _e !== void 0 ? _e : 0) > ((_g = (_f = message$1.parentMessage) === null || _f === void 0 ? void 0 : _f.createdAt) !== null && _g !== void 0 ? _g : 0), onClick: function () {
                        var _a;
                        if (replyType === 'THREAD' && threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onQuoteMessageClick === null || onQuoteMessageClick === void 0 ? void 0 : onQuoteMessageClick({ message: message$1 });
                        }
                        if ((replyType === 'QUOTE_REPLY' || (replyType === 'THREAD' && threadReplySelectType === _const.ThreadReplySelectType.PARENT))
                            && ((_a = message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessageId)) {
                            scrollToMessage(message$1.parentMessage.createdAt, message$1.parentMessageId);
                        }
                    } }))) : null,
            React.createElement("div", { className: index.getClassName([
                    'sendbird-message-content__middle__body-container',
                    index.isTemplateMessage(message$1) ? 'sendbird-message-content__middle__for_template_message' : '',
                ]) },
                (isByMe && !chainBottom) && (React.createElement("div", { className: index.getClassName([
                        'sendbird-message-content__middle__body-container__created-at',
                        'left',
                        supposedHoverClassName,
                        uiContainerType,
                    ]), ref: timestampRef },
                    React.createElement("div", { className: "sendbird-message-content__middle__body-container__created-at__component-container" },
                        React.createElement(ui_MessageStatus.MessageStatus, { message: message$1, channel: channel })))),
                renderMessageBody({
                    message: message$1,
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
                (isReactionEnabledInChannel && ((_h = message$1 === null || message$1 === void 0 ? void 0 : message$1.reactions) === null || _h === void 0 ? void 0 : _h.length) > 0) && (React.createElement("div", { className: index.getClassName([
                        'sendbird-message-content-reactions',
                        index.isMultipleFilesMessage(message$1)
                            ? 'image-grid'
                            : (!isByMe || index.isThumbnailMessage(message$1) || index.isOGMessage(message$1))
                                ? '' : 'primary',
                        mouseHover ? 'mouse-hover' : '',
                    ]) }, renderEmojiReactions({
                    userId: userId,
                    message: message$1,
                    channel: channel,
                    isByMe: isByMe,
                    emojiContainer: emojiContainer,
                    memberNicknamesMap: nicknamesMap,
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                }))),
                (!isByMe && !chainBottom) && (React.createElement(ui_Label.Label, { className: index.getClassName([
                        'sendbird-message-content__middle__body-container__created-at',
                        'right',
                        supposedHoverClassName,
                        uiContainerType,
                    ]), type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2, ref: timestampRef }, index$1.format((message$1 === null || message$1 === void 0 ? void 0 : message$1.createdAt) || 0, 'p', {
                    locale: dateLocale,
                })))),
            isTimestampBottom && React.createElement("div", { style: {
                    width: '100%',
                    height: ((_k = (_j = timestampRef.current) === null || _j === void 0 ? void 0 : _j.clientHeight) !== null && _k !== void 0 ? _k : 0) + 'px',
                    marginTop: '4px',
                } }),
            showThreadReplies && (React.createElement(ui_ThreadReplies.default, { className: "sendbird-message-content__middle__thread-replies", threadInfo: message$1 === null || message$1 === void 0 ? void 0 : message$1.threadInfo, onClick: function () { return onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message$1 }); }, ref: threadRepliesRef })),
            isFeedbackEnabled && React.createElement("div", { className: "sendbird-message-content__middle__body-container__feedback-buttons-container", ref: feedbackButtonsRef },
                React.createElement(ui_FeedbackIconButton, { isSelected: ((_l = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _l === void 0 ? void 0 : _l.rating) === message.FeedbackRating.GOOD, onClick: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        var _a, _b, _c;
                        return _tslib.__generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!!((_a = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _a === void 0 ? void 0 : _a.rating)) return [3 /*break*/, 5];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message$1.submitFeedback({
                                            rating: message.FeedbackRating.GOOD,
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
                    }); }, disabled: (message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) && message$1.myFeedback.rating !== message.FeedbackRating.GOOD },
                    React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FEEDBACK_LIKE, width: '24px', height: '24px' })),
                React.createElement(ui_FeedbackIconButton, { isSelected: ((_m = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _m === void 0 ? void 0 : _m.rating) === message.FeedbackRating.BAD, onClick: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        var _a, _b, _c;
                        return _tslib.__generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!!((_a = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _a === void 0 ? void 0 : _a.rating)) return [3 /*break*/, 5];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message$1.submitFeedback({
                                            rating: message.FeedbackRating.BAD,
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
                    }); }, disabled: (message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) && message$1.myFeedback.rating !== message.FeedbackRating.BAD },
                    React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FEEDBACK_DISLIKE, width: '24px', height: '24px' })))),
        showRightContent && (React.createElement("div", { className: index.getClassName(['sendbird-message-content__right', chainTopClassName, isReactionEnabledClassName, useReplyingClassName]) },
            React.createElement("div", { className: index.getClassName(['sendbird-message-content-menu', chainTopClassName, supposedHoverClassName, isByMeClassName]) },
                isReactionEnabledInChannel && (renderEmojiMenu({
                    className: 'sendbird-message-content-menu__reaction-menu',
                    message: message$1,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    setSupposedHover: setSupposedHover,
                })),
                renderMessageMenu({
                    className: 'sendbird-message-content-menu__normal-menu',
                    channel: channel,
                    message: message$1,
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
                        if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                            scrollToMessage((_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                })))),
        showMenu && index.isSendableMessage(message$1) && renderMobileMenuOnLongPress({
            parentRef: contentRef,
            channel: channel,
            hideMenu: function () { setShowMenu(false); },
            message: message$1,
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
                if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                    onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                }
                else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                    scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(((_b = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) || 0, (message === null || message === void 0 ? void 0 : message.parentMessageId) || 0);
                }
            },
            onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage) {
                                return [2 /*return*/, null];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message$1 })];
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
        ((_o = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _o === void 0 ? void 0 : _o.rating) && showFeedbackOptionsMenu && (React.createElement(ui_MobileFeedbackMenu, { hideMenu: function () {
                setShowFeedbackOptionsMenu(false);
            }, onEditFeedback: function () {
                setShowFeedbackOptionsMenu(false);
                setShowFeedbackModal(true);
            }, onRemoveFeedback: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, message$1.deleteFeedback(message$1.myFeedback.id)];
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
        ((_p = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _p === void 0 ? void 0 : _p.rating) && showFeedbackModal && (React.createElement(ui_MessageFeedbackModal, { selectedFeedback: message$1.myFeedback.rating, message: message$1, onUpdate: function (selectedFeedback, comment) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var newFeedback, error_4;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            newFeedback = new message.Feedback({
                                id: message$1.myFeedback.id,
                                rating: selectedFeedback,
                                comment: comment,
                            });
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, message$1.updateFeedback(newFeedback)];
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
            }); }, onClose: onCloseFeedbackForm, onRemove: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var error_5;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, message$1.deleteFeedback(message$1.myFeedback.id)];
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
        feedbackFailedText && (React.createElement(ui_MessageFeedbackFailedModal, { text: feedbackFailedText, onCancel: function () {
                setFeedbackFailedText('');
            } }))));
}

module.exports = MessageContent;
//# sourceMappingURL=MessageContent.js.map
