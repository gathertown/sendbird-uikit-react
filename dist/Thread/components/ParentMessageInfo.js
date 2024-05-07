import { c as __spreadArray, _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-D8IuvsaW.js';
import React__default, { useState, useRef, useEffect, useContext } from 'react';
import { f as format } from '../../chunks/bundle-BlLFOUrw.js';
import { R as RemoveMessage } from '../../chunks/bundle-BhfKBScq.js';
import ParentMessageInfoItem from './ParentMessageInfoItem.js';
import { h as getSenderName } from '../../chunks/bundle-BnYBX14T.js';
import { g as getIsReactionEnabled } from '../../chunks/bundle-Dn-yaG7j.js';
import { u as useLocalization } from '../../chunks/bundle-CRmP70eG.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useThreadContext } from '../context.js';
import { a as UserProfileContext } from '../../chunks/bundle-BxO5H6aF.js';
import { S as SuggestedMentionList } from '../../chunks/bundle-Ce5GUZrO.js';
import { A as Avatar } from '../../chunks/bundle-CvlHmT5j.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-BNNafMXS.js';
import { F as FileViewer } from '../../chunks/bundle-DBtx2Gk9.js';
import { MessageMenu } from '../../ui/MessageItemMenu.js';
import { MessageEmojiMenu } from '../../ui/MessageItemReactionMenu.js';
import ContextMenu, { MenuItems } from '../../ui/ContextMenu.js';
import UserProfile from '../../ui/UserProfile.js';
import MessageInput from '../../ui/MessageInput.js';
import { M as MessageInputKeys } from '../../chunks/bundle-8UWMMSrw.js';
import { R as Role } from '../../chunks/bundle-Djp37I3i.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-BBhSg6C_.js';
import { u as useLongPress } from '../../chunks/bundle-BaiQZ39W.js';
import { M as MobileMenu } from '../../chunks/bundle-CYWkde8y.js';
import { useDirtyGetMentions } from '../../Message/hooks/useDirtyGetMentions.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-0yILBaSQ.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../chunks/bundle-DwXszhWd.js';
import '../../ui/ImageRenderer.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../ui/SortByRow.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-iau93d70.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-DOhbdcnA.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-B-v_xYnH.js';
import '../../chunks/bundle-se836s50.js';
import '../context/types.js';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-BehMbQaw.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-CQ1BOFUN.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';

function ParentMessageInfo(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className;
    var _h = useSendbirdStateContext(), stores = _h.stores, config = _h.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_c = (_b = stores.userStore.user) === null || _b === void 0 ? void 0 : _b.userId) !== null && _c !== void 0 ? _c : '';
    var dateLocale = useLocalization().dateLocale;
    var _j = useThreadContext(), currentChannel = _j.currentChannel, parentMessage = _j.parentMessage, allThreadMessages = _j.allThreadMessages, emojiContainer = _j.emojiContainer, toggleReaction = _j.toggleReaction, updateMessage = _j.updateMessage, deleteMessage = _j.deleteMessage, onMoveToParentMessage = _j.onMoveToParentMessage, onHeaderActionClick = _j.onHeaderActionClick, isMuted = _j.isMuted, isChannelFrozen = _j.isChannelFrozen, onBeforeDownloadFileMessage = _j.onBeforeDownloadFileMessage;
    var isMobile = useMediaQueryContext().isMobile;
    var _k = useState(false), showRemove = _k[0], setShowRemove = _k[1];
    var _l = useState(false), supposedHover = _l[0], setSupposedHover = _l[1];
    var _m = useState(false), showFileViewer = _m[0], setShowFileViewer = _m[1];
    var isReactionEnabled = getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    var isByMe = userId === parentMessage.sender.userId;
    // Mobile
    var mobileMenuRef = useRef(null);
    var _o = useState(false), showMobileMenu = _o[0], setShowMobileMenu = _o[1];
    var longPress = useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    // Edit message
    var _p = useState(false), showEditInput = _p[0], setShowEditInput = _p[1];
    var disabled = !isOnline || isMuted || isChannelFrozen && !((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === Role.OPERATOR);
    // Mention
    var editMessageInputRef = useRef(null);
    var _q = useState(''), mentionNickname = _q[0], setMentionNickname = _q[1];
    var _r = useState([]), mentionedUsers = _r[0], setMentionedUsers = _r[1];
    var _s = useState([]), mentionedUserIds = _s[0], setMentionedUserIds = _s[1];
    var _t = useState(null), messageInputEvent = _t[0], setMessageInputEvent = _t[1];
    var _u = useState(null), selectedUser = _u[0], setSelectedUser = _u[1];
    var _v = useState([]), mentionSuggestedUsers = _v[0], setMentionSuggestedUsers = _v[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === Role.OPERATOR));
    var mentionNodes = useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    useEffect(function () {
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
    var handleOnDownloadClick = function (e) { return __awaiter(_this, void 0, void 0, function () {
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
                    return [4 /*yield*/, onBeforeDownloadFileMessage({ message: parentMessage })];
                case 2:
                    allowDownload = _c.sent();
                    if (!allowDownload) {
                        e.preventDefault();
                        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ParentMessageInfo: Not allowed to download.');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _c.sent();
                    (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ParentMessageInfo: Error occurred while determining download continuation:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // User Profile
    var avatarRef = useRef(null);
    var _w = useContext(UserProfileContext), disableUserProfile = _w.disableUserProfile, renderUserProfile = _w.renderUserProfile;
    if (showEditInput && ((_d = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.isUserMessage) === null || _d === void 0 ? void 0 : _d.call(parentMessage))) {
        return (React__default.createElement(React__default.Fragment, null,
            displaySuggestedMentionList && (React__default.createElement(SuggestedMentionList, { className: "parent-message-info--suggested-mention-list", targetNickname: mentionNickname, inputEvent: messageInputEvent, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React__default.createElement(MessageInput, { channel: currentChannel, isEdit: true, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: parentMessage, onStartTyping: function () {
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
                    setShowEditInput(false);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEditInput(false);
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
                        && ((e.key === MessageInputKeys.Enter && ableMention) || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React__default.createElement("div", __assign({ className: "sendbird-parent-message-info ".concat(className) }, (isMobile) ? __assign({}, longPress) : {}, { ref: mobileMenuRef }),
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) {
                var _a, _b, _c;
                return (React__default.createElement(Avatar, { className: "sendbird-parent-message-info__sender", ref: avatarRef, src: ((_b = (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _a === void 0 ? void 0 : _a.find(function (m) { var _a; return (m === null || m === void 0 ? void 0 : m.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _b === void 0 ? void 0 : _b.profileUrl)
                        || ((_c = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _c === void 0 ? void 0 : _c.profileUrl), alt: "thread message sender", width: "40px", height: "40px", onClick: function () {
                        if (!disableUserProfile) {
                            toggleDropdown();
                        }
                    } }));
            }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender,
                    close: closeDropdown,
                    currentUserId: userId,
                    avatarRef: avatarRef,
                })
                : (React__default.createElement(MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.createElement(UserProfile, { user: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender, currentUserId: userId, onSuccess: closeDropdown })))); } }),
        React__default.createElement("div", { className: "sendbird-parent-message-info__content" },
            React__default.createElement("div", { className: "sendbird-parent-message-info__content__info" },
                React__default.createElement(Label, { className: "sendbird-parent-message-info__content__info__sender-name".concat(isReactionEnabled ? '--use-reaction' : ''), type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, ((_f = (_e = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _e === void 0 ? void 0 : _e.find(function (member) { var _a; return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _f === void 0 ? void 0 : _f.nickname) || (getSenderName === null || getSenderName === void 0 ? void 0 : getSenderName(parentMessage))),
                React__default.createElement(Label, { className: "sendbird-parent-message-info__content__info__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, format((parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.createdAt) || 0, 'p', { locale: dateLocale }))),
            React__default.createElement(ParentMessageInfoItem, { message: parentMessage, showFileViewer: setShowFileViewer, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        !isMobile && (React__default.createElement(MessageMenu, { className: "sendbird-parent-message-info__context-menu ".concat(isReactionEnabled ? 'use-reaction' : '', " ").concat(supposedHover ? 'sendbird-mouse-hover' : ''), channel: currentChannel, message: parentMessage, isByMe: userId === ((_g = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _g === void 0 ? void 0 : _g.userId), disableDeleteMessage: allThreadMessages.length > 0, replyType: replyType, showEdit: setShowEditInput, showRemove: setShowRemove, setSupposedHover: setSupposedHover, onMoveToParentMessage: function () {
                onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
            }, deleteMessage: deleteMessage })),
        (isReactionEnabled && !isMobile) && (React__default.createElement(MessageEmojiMenu, { className: "sendbird-parent-message-info__reaction-menu ".concat(supposedHover ? 'sendbird-mouse-hover' : ''), message: parentMessage, userId: userId, emojiContainer: emojiContainer, toggleReaction: toggleReaction, setSupposedHover: setSupposedHover })),
        showRemove && (React__default.createElement(RemoveMessage, { onCancel: function () { return setShowRemove(false); }, onSubmit: function () {
                onHeaderActionClick === null || onHeaderActionClick === void 0 ? void 0 : onHeaderActionClick();
            }, message: parentMessage })),
        showFileViewer && (React__default.createElement(FileViewer, { message: parentMessage, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(parentMessage)
                    .then(function () {
                    setShowFileViewer(false);
                });
            }, onDownloadClick: handleOnDownloadClick })),
        showMobileMenu && (React__default.createElement(MobileMenu, { parentRef: mobileMenuRef, channel: currentChannel, message: parentMessage, userId: userId, replyType: replyType, hideMenu: function () {
                setShowMobileMenu(false);
            }, deleteMessage: deleteMessage, deleteMenuState: (allThreadMessages === null || allThreadMessages === void 0 ? void 0 : allThreadMessages.length) === 0
                ? 'ACTIVE'
                : 'HIDE', isReactionEnabled: isReactionEnabled, isByMe: isByMe, emojiContainer: emojiContainer, showEdit: setShowEditInput, showRemove: setShowRemove, toggleReaction: toggleReaction, isOpenedFromThread: true, onDownloadClick: handleOnDownloadClick }))));
}

export { ParentMessageInfo as default };
//# sourceMappingURL=ParentMessageInfo.js.map
