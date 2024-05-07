'use strict';

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var index$1 = require('../../chunks/bundle-BCfv3yiy.js');
var LocalizationContext = require('../../chunks/bundle-DKL8dMjq.js');
var ui_DateSeparator = require('../../ui/DateSeparator.js');
var ui_Label = require('../../chunks/bundle-CRRWhSHD.js');
var RemoveMessageModal = require('../../chunks/bundle-CS9POQt4.js');
var ui_FileViewer = require('../../chunks/bundle-Bexsprs_.js');
var Thread_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var SuggestedMentionList = require('../../chunks/bundle-DsD_N26f.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var Thread_context_types = require('../context/types.js');
var _const = require('../../chunks/bundle-BwKmyBpq.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var ui_Avatar = require('../../chunks/bundle-Cd7XOuNj.js');
var UserProfileContext = require('../../chunks/bundle-CJtsI7GU.js');
var ui_UserProfile = require('../../ui/UserProfile.js');
var ui_MessageItemMenu = require('../../ui/MessageItemMenu.js');
var ui_MessageItemReactionMenu = require('../../ui/MessageItemReactionMenu.js');
var index = require('../../chunks/bundle-C6gATKTE.js');
var ui_MessageStatus = require('../../chunks/bundle-CjsR5IvJ.js');
var ui_EmojiReactions = require('../../ui/EmojiReactions.js');
var ui_TextMessageItemBody = require('../../ui/TextMessageItemBody.js');
var ui_OGMessageItemBody = require('../../ui/OGMessageItemBody.js');
var ui_FileMessageItemBody = require('../../ui/FileMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('../../ui/ThumbnailMessageItemBody.js');
var ui_UnknownMessageItemBody = require('../../ui/UnknownMessageItemBody.js');
var ui_VoiceMessageItemBody = require('../../ui/VoiceMessageItemBody.js');
var MediaQueryContext = require('../../chunks/bundle-BFgXaSuR.js');
var useLongPress = require('../../chunks/bundle-3dhw8iOw.js');
var index$2 = require('../../chunks/bundle-KUfIzdnQ.js');
var useFileInfoListWithUploaded = require('../../chunks/bundle-BPjQVFvN.js');
var types = require('../../chunks/bundle-8sH2G7Ap.js');
var Message_hooks_useDirtyGetMentions = require('../../Message/hooks/useDirtyGetMentions.js');
var getIsReactionEnabled = require('../../chunks/bundle-D0o2OzcU.js');
var resolvedReplyType = require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-Ev5kAkGi.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('../../chunks/bundle-DgAALupQ.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../chunks/bundle-BOaew5JK.js');
require('../../chunks/bundle-BmCw9st3.js');
require('../../chunks/bundle-DegkGksZ.js');
require('../../chunks/bundle-0AYxVXD-.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-BECkGjrR.js');
require('@sendbird/chat/message');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DYYV3xLB.js');
require('../../chunks/bundle-BcdtZarK.js');
require('../../chunks/bundle-CSU8NDw4.js');
require('../../chunks/bundle-bdifjM-k.js');
require('../../chunks/bundle-9HKIAf5f.js');
require('dompurify');
require('../../chunks/bundle-CIs7k40W.js');
require('../../chunks/bundle-CN0Ev9mV.js');
require('../../chunks/bundle-BxYGiW8y.js');
require('../../chunks/bundle-BZ6Z0MYZ.js');
require('../../ui/SortByRow.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../sendbirdSelectors.js');
require('../../ui/ReactionButton.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Bmt-jCO8.js');
require('../../chunks/bundle-C_eHyq_M.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../chunks/bundle-3cmB6Ad_.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-BGyfIsKK.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');

function ThreadListItemContent(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f;
    var className = _a.className, userId = _a.userId, channel = _a.channel, message = _a.message, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.chainTop, chainTop = _h === void 0 ? false : _h, _j = _a.chainBottom, chainBottom = _j === void 0 ? false : _j, _k = _a.isMentionEnabled, isMentionEnabled = _k === void 0 ? false : _k, _l = _a.isReactionEnabled, isReactionEnabled = _l === void 0 ? false : _l, _m = _a.disableQuoteMessage, disableQuoteMessage = _m === void 0 ? false : _m, replyType = _a.replyType, nicknamesMap = _a.nicknamesMap, emojiContainer = _a.emojiContainer, showEdit = _a.showEdit, showRemove = _a.showRemove, showFileViewer = _a.showFileViewer, resendMessage = _a.resendMessage, toggleReaction = _a.toggleReaction, onReplyInThread = _a.onReplyInThread;
    var messageTypes = index.getUIKitMessageTypes();
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var dateLocale = LocalizationContext.useLocalization().dateLocale;
    var _o = (useSendbirdStateContext.useSendbirdStateContext === null || useSendbirdStateContext.useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext.useSendbirdStateContext()) || {}, config = _o.config, eventHandlers = _o.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_b = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _b === void 0 ? void 0 : _b.onPressUserProfile;
    var _p = React.useState(false), supposedHover = _p[0], setSupposedHover = _p[1];
    var _q = React.useContext(UserProfileContext.UserProfileContext), disableUserProfile = _q.disableUserProfile, renderUserProfile = _q.renderUserProfile;
    var _r = Thread_context.useThreadContext(), deleteMessage = _r.deleteMessage, onBeforeDownloadFileMessage = _r.onBeforeDownloadFileMessage;
    var avatarRef = React.useRef(null);
    var isByMe = (userId === ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.userId))
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'pending')
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'failed');
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage)
        && !disableQuoteMessage);
    var supposedHoverClassName = supposedHover ? 'sendbird-mouse-hover' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isOgMessageEnabledInGroupChannel = channel.isGroupChannel() && config.groupChannel.enableOgtag;
    // Mobile
    var mobileMenuRef = React.useRef(null);
    var _s = React.useState(false), showMobileMenu = _s[0], setShowMobileMenu = _s[1];
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    var threadMessageKindKey = useFileInfoListWithUploaded.useThreadMessageKindKeySelector({
        threadMessageKind: useFileInfoListWithUploaded.ThreadMessageKind.CHILD,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded.useFileInfoListWithUploaded(message);
    return (React.createElement("div", { className: "sendbird-thread-list-item-content ".concat(className, " ").concat(isByMe ? 'outgoing' : 'incoming'), ref: mobileMenuRef },
        React.createElement("div", { className: "sendbird-thread-list-item-content__left ".concat(isReactionEnabledInChannel ? 'use-reaction' : '', " ").concat(isByMe ? 'outgoing' : 'incoming') },
            (!isByMe && !chainBottom) && (React.createElement(ui_ContextMenu.default, { menuTrigger: function (toggleDropdown) {
                    var _a, _b, _c;
                    return (React.createElement(ui_Avatar.Avatar, { className: "sendbird-thread-list-item-content__left__avatar", src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { var _a; return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _b === void 0 ? void 0 : _b.profileUrl) || ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.profileUrl) || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
                            if (!disableUserProfile) {
                                toggleDropdown === null || toggleDropdown === void 0 ? void 0 : toggleDropdown();
                            }
                        } }));
                }, menuItems: function (closeDropdown) { return (renderUserProfile
                    ? renderUserProfile({
                        user: message === null || message === void 0 ? void 0 : message.sender,
                        close: closeDropdown,
                        currentUserId: userId,
                        avatarRef: avatarRef,
                    })
                    : (React.createElement(ui_ContextMenu.MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                        React.createElement(ui_UserProfile, { user: message === null || message === void 0 ? void 0 : message.sender, onSuccess: closeDropdown })))); } })),
            (isByMe && !isMobile) && (React.createElement("div", { className: "sendbird-thread-list-item-content-menu ".concat(isReactionEnabledInChannel ? 'use-reaction' : '', " ").concat(isByMe ? 'outgoing' : 'incoming', " ").concat(supposedHoverClassName) },
                React.createElement(ui_MessageItemMenu.MessageMenu, { className: "sendbird-thread-list-item-content-menu__normal-menu", channel: channel, message: message, isByMe: isByMe, replyType: replyType, disabled: disabled, showEdit: showEdit, showRemove: showRemove, resendMessage: resendMessage, setSupposedHover: setSupposedHover, onReplyInThread: onReplyInThread, deleteMessage: deleteMessage }),
                isReactionEnabledInChannel && (React.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, { className: "sendbird-thread-list-item-content-menu__reaction-menu", message: message, userId: userId, emojiContainer: emojiContainer, toggleReaction: toggleReaction, setSupposedHover: setSupposedHover }))))),
        React.createElement("div", _tslib.__assign({ className: "sendbird-thread-list-item-content__middle" }, (isMobile) ? _tslib.__assign({}, longPress) : {}),
            (!isByMe && !chainTop && !useReplying) && (React.createElement(ui_Label.Label, { className: "sendbird-thread-list-item-content__middle__sender-name", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ((_e = (_d = channel === null || channel === void 0 ? void 0 : channel.members) === null || _d === void 0 ? void 0 : _d.find(function (member) { var _a; return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _e === void 0 ? void 0 : _e.nickname)
                || index.getSenderName(message)
            // TODO: Divide getting profileUrl logic to utils
            )),
            React.createElement("div", { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container']) },
                (isByMe && !chainBottom) && (React.createElement("div", { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'left', supposedHoverClassName]) },
                    React.createElement("div", { className: "sendbird-thread-list-item-content__middle__body-container__created-at__component-container" },
                        React.createElement(ui_MessageStatus.MessageStatus, { message: message, channel: channel })))),
                isOgMessageEnabledInGroupChannel && index.isOGMessage(message)
                    ? (React.createElement(ui_OGMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isMentionEnabled: isMentionEnabled, isReactionEnabled: isReactionEnabledInChannel })) : index.isTextMessage(message) && (React.createElement(ui_TextMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isMentionEnabled: isMentionEnabled, isReactionEnabled: isReactionEnabledInChannel })),
                index.isVoiceMessage(message) && (React.createElement(ui_VoiceMessageItemBody.VoiceMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, channelUrl: channel === null || channel === void 0 ? void 0 : channel.url, isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel })),
                (index.getUIKitMessageType(message) === messageTypes.FILE) && (React.createElement(ui_FileMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel, truncateLimit: isByMe ? 18 : 14, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
                index.isMultipleFilesMessage(message) && (React.createElement(useFileInfoListWithUploaded.MultipleFilesMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isReactionEnabled: isReactionEnabled, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList })),
                (index.isThumbnailMessage(message)) && (React.createElement(ui_ThumbnailMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel, showFileViewer: showFileViewer, style: {
                        width: isMobile ? '100%' : '200px',
                        height: '148px',
                    } })),
                (index.getUIKitMessageType(message) === messageTypes.UNKNOWN) && (React.createElement(ui_UnknownMessageItemBody, { className: "sendbird-thread-list-item-content__middle__message-item-body", message: message, isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel })),
                (isReactionEnabledInChannel && ((_f = message === null || message === void 0 ? void 0 : message.reactions) === null || _f === void 0 ? void 0 : _f.length) > 0) && (React.createElement("div", { className: index.getClassName([
                        'sendbird-thread-list-item-content-reactions',
                        (!isByMe
                            || index.isThumbnailMessage(message)
                            || (isOgMessageEnabledInGroupChannel && index.isOGMessage(message))
                            || index.isMultipleFilesMessage(message)) ? '' : 'primary',
                    ]) },
                    React.createElement(ui_EmojiReactions, { userId: userId, message: message, channel: channel, isByMe: isByMe, emojiContainer: emojiContainer, memberNicknamesMap: nicknamesMap, toggleReaction: toggleReaction, onPressUserProfile: onPressUserProfileHandler }))),
                (!isByMe && !chainBottom) && (React.createElement(ui_Label.Label, { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'right', supposedHoverClassName]), type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
                    locale: dateLocale,
                }))))),
        React.createElement("div", { className: "sendbird-thread-list-item-content__right ".concat(chainTop ? 'chain-top' : '', " ").concat(isByMe ? 'outgoing' : 'incoming') }, (!isByMe && !isMobile) && (React.createElement("div", { className: "sendbird-thread-list-item-content-menu ".concat(supposedHoverClassName) },
            isReactionEnabledInChannel && (React.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, { className: "sendbird-thread-list-item-content-menu__reaction-menu", message: message, userId: userId, emojiContainer: emojiContainer, toggleReaction: toggleReaction, setSupposedHover: setSupposedHover })),
            React.createElement(ui_MessageItemMenu.MessageMenu, { className: "sendbird-thread-list-item-content-menu__normal-menu", channel: channel, message: message, isByMe: isByMe, replyType: replyType, disabled: disabled, showRemove: showRemove, resendMessage: resendMessage, setSupposedHover: setSupposedHover, onReplyInThread: onReplyInThread, deleteMessage: deleteMessage })))),
        showMobileMenu && (React.createElement(index$2.MobileMenu, { parentRef: mobileMenuRef, channel: channel, message: message, userId: userId, replyType: replyType, hideMenu: function () {
                setShowMobileMenu(false);
            }, isReactionEnabled: isReactionEnabled, isByMe: isByMe, emojiContainer: emojiContainer, showEdit: showEdit, showRemove: showRemove, toggleReaction: toggleReaction, isOpenedFromThread: true, deleteMessage: deleteMessage, onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
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
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItemContent: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItemContent: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); } }))));
}

function ThreadListItem(_a) {
    var _this = this;
    var _b, _c, _d, _e;
    var className = _a.className, message = _a.message, chainTop = _a.chainTop, chainBottom = _a.chainBottom, hasSeparator = _a.hasSeparator, renderCustomSeparator = _a.renderCustomSeparator, handleScroll = _a.handleScroll;
    var _f = useSendbirdStateContext.useSendbirdStateContext(), stores = _f.stores, config = _f.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_c = (_b = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.userId;
    var _g = LocalizationContext.useLocalization(), dateLocale = _g.dateLocale, stringSet = _g.stringSet;
    var threadContext = Thread_context.useThreadContext === null || Thread_context.useThreadContext === void 0 ? void 0 : Thread_context.useThreadContext();
    var currentChannel = threadContext.currentChannel, nicknamesMap = threadContext.nicknamesMap, emojiContainer = threadContext.emojiContainer, toggleReaction = threadContext.toggleReaction, threadListState = threadContext.threadListState, updateMessage = threadContext.updateMessage, resendMessage = threadContext.resendMessage, deleteMessage = threadContext.deleteMessage, isMuted = threadContext.isMuted, isChannelFrozen = threadContext.isChannelFrozen, onBeforeDownloadFileMessage = threadContext.onBeforeDownloadFileMessage;
    var openingMessage = threadContext === null || threadContext === void 0 ? void 0 : threadContext.message;
    var _h = React.useState(false), showEdit = _h[0], setShowEdit = _h[1];
    var _j = React.useState(false), showRemove = _j[0], setShowRemove = _j[1];
    var _k = React.useState(false), showFileViewer = _k[0], setShowFileViewer = _k[1];
    var isReactionEnabled = getIsReactionEnabled.getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = resolvedReplyType.getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    // Move to message
    var messageScrollRef = React.useRef(null);
    React.useLayoutEffect(function () {
        var _a;
        if ((openingMessage === null || openingMessage === void 0 ? void 0 : openingMessage.messageId) === (message === null || message === void 0 ? void 0 : message.messageId) && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            (_a = messageScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'center', inline: 'center' });
        }
    }, [openingMessage, messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current]);
    // reactions
    React.useLayoutEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
    }, [showEdit, (_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length]);
    // mention
    var editMessageInputRef = React.useRef(null);
    var _l = React.useState(''), mentionNickname = _l[0], setMentionNickname = _l[1];
    var _m = React.useState([]), mentionedUsers = _m[0], setMentionedUsers = _m[1];
    var _o = React.useState([]), mentionedUserIds = _o[0], setMentionedUserIds = _o[1];
    var _p = React.useState(null), messageInputEvent = _p[0], setMessageInputEvent = _p[1];
    var _q = React.useState(null), selectedUser = _q[0], setSelectedUser = _q[1];
    var _r = React.useState([]), mentionSuggestedUsers = _r[0], setMentionSuggestedUsers = _r[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === types.Role.OPERATOR));
    var mentionNodes = Message_hooks_useDirtyGetMentions.useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    React.useEffect(function () {
        setMentionedUsers(mentionedUsers.filter(function (_a) {
            var userId = _a.userId;
            var i = mentionedUserIds.indexOf(userId);
            if (i < 0) {
                return false;
            }
            else {
                mentionedUserIds.splice(i, 1);
                return true;
            }
        }));
    }, [mentionedUserIds]);
    // edit input
    var disabled = !(threadListState === Thread_context_types.ThreadListStateTypes.INITIALIZED)
        || !isOnline
        || isMuted
        || isChannelFrozen;
    // memorize
    var MemorizedSeparator = React.useMemo(function () {
        if (typeof renderCustomSeparator === 'function') {
            return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message });
        }
    }, [message, renderCustomSeparator]);
    // Edit message
    if (showEdit && message.isUserMessage()) {
        return (React.createElement(React.Fragment, null,
            displaySuggestedMentionList && (React.createElement(SuggestedMentionList.SuggestedMentionList, { targetNickname: mentionNickname, inputEvent: messageInputEvent, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React.createElement(ui_MessageInput, { isEdit: true, channel: currentChannel, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: message, onStartTyping: function () {
                    var _a;
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateMessage({
                        messageId: messageId,
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionTemplate: mentionTemplate,
                    });
                    setShowEdit(false);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEdit(false);
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUserMentioned: function (user) {
                    if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
                        setSelectedUser(null);
                        setMentionNickname('');
                    }
                }, onMentionStringChange: function (mentionText) {
                    setMentionNickname(mentionText);
                }, onMentionedUserIdsUpdated: function (userIds) {
                    setMentionedUserIds(userIds);
                }, onKeyDown: function (e) {
                    if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === _const.MessageInputKeys.Enter && ableMention) || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React.createElement("div", { ref: messageScrollRef, className: "sendbird-thread-list-item ".concat(className) },
        hasSeparator && (message === null || message === void 0 ? void 0 : message.createdAt) && (MemorizedSeparator || (React.createElement(ui_DateSeparator, null,
            React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$1.format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__THREAD_LIST__DATE_SEPARATOR, { locale: dateLocale }))))),
        React.createElement(ThreadListItemContent, { userId: userId, channel: currentChannel, message: message, chainTop: chainTop, chainBottom: chainBottom, isReactionEnabled: isReactionEnabled, isMentionEnabled: isMentionEnabled, disableQuoteMessage: true, replyType: replyType, nicknamesMap: nicknamesMap, emojiContainer: emojiContainer, resendMessage: resendMessage, showRemove: setShowRemove, showFileViewer: setShowFileViewer, toggleReaction: toggleReaction, showEdit: setShowEdit }),
        showRemove && (React.createElement(RemoveMessageModal.RemoveMessage, { message: message, onCancel: function () { return setShowRemove(false); } })),
        showFileViewer && (React.createElement(ui_FileViewer.FileViewer, { message: message, isByMe: ((_e = message === null || message === void 0 ? void 0 : message.sender) === null || _e === void 0 ? void 0 : _e.userId) === userId, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(message);
                setShowFileViewer(false);
            }, onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
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
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItem: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItem: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); } }))));
}

module.exports = ThreadListItem;
//# sourceMappingURL=ThreadListItem.js.map
