import { c as __spreadArray, _ as __assign } from './bundle-KMsJXUN2.js';
import React__default, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { f as format } from './bundle-vbGNKQpe.js';
import { u as useLocalization } from './bundle-msnuMA4R.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { M as MAX_USER_MENTION_COUNT, a as MAX_USER_SUGGESTION_COUNT } from './bundle-hKmRj7Ck.js';
import { i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted } from './bundle-38Dx0S9V.js';
import { useDirtyGetMentions } from '../Message/hooks/useDirtyGetMentions.js';
import { w as getClassName, g as getSuggestedReplies } from './bundle-ZnLsMTHr.js';
import DateSeparator from '../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './bundle-kMMCn6GE.js';
import MessageInput from '../ui/MessageInput.js';
import { M as MessageInputKeys } from './bundle-NOh3ukH6.js';
import MessageContent from '../ui/MessageContent.js';
import { SuggestedReplies } from '../GroupChannel/components/SuggestedReplies.js';
import { S as SuggestedMentionListView } from './bundle-CLnDoxQc.js';

var useDidMountEffect = function (func, deps) {
    var _a = useState(false), didMount = _a[0], setDidmount = _a[1];
    useEffect(function () {
        if (didMount) {
            func();
        }
        else {
            setDidmount(true);
        }
    }, deps);
};

// TODO: Refactor this component, is too complex now
var MessageView = function (props) {
    var _a, _b;
    var 
    // MessageProps
    message = props.message, renderMessage = props.renderMessage, children = props.children, _c = props.renderMessageContent, renderMessageContent = _c === void 0 ? function (props) { return React__default.createElement(MessageContent, __assign({}, props)); } : _c, renderCustomSeparator = props.renderCustomSeparator, renderEditInput = props.renderEditInput, hasSeparator = props.hasSeparator, chainTop = props.chainTop, chainBottom = props.chainBottom, handleScroll = props.handleScroll, 
    // MessageViewProps
    channel = props.channel, emojiContainer = props.emojiContainer, editInputDisabled = props.editInputDisabled, shouldRenderSuggestedReplies = props.shouldRenderSuggestedReplies, isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, renderUserMentionItem = props.renderUserMentionItem, scrollToMessage = props.scrollToMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onQuoteMessageClick = props.onQuoteMessageClick, onReplyInThreadClick = props.onReplyInThreadClick, sendUserMessage = props.sendUserMessage, updateUserMessage = props.updateUserMessage, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, renderFileViewer = props.renderFileViewer, renderRemoveMessageModal = props.renderRemoveMessageModal, setAnimatedMessageId = props.setAnimatedMessageId, animatedMessageId = props.animatedMessageId, onMessageAnimated = props.onMessageAnimated, highLightedMessageId = props.highLightedMessageId, setHighLightedMessageId = props.setHighLightedMessageId, onMessageHighlighted = props.onMessageHighlighted;
    var _d = useLocalization(), dateLocale = _d.dateLocale, stringSet = _d.stringSet;
    var globalStore = useSendbirdStateContext();
    var _e = globalStore.config, userId = _e.userId, isOnline = _e.isOnline, isMentionEnabled = _e.isMentionEnabled, userMention = _e.userMention, logger = _e.logger;
    var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || MAX_USER_MENTION_COUNT;
    var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || MAX_USER_SUGGESTION_COUNT;
    var _f = useState(false), showEdit = _f[0], setShowEdit = _f[1];
    var _g = useState(false), showRemove = _g[0], setShowRemove = _g[1];
    var _h = useState(false), showFileViewer = _h[0], setShowFileViewer = _h[1];
    var _j = useState(false), isAnimated = _j[0], setIsAnimated = _j[1];
    var _k = useState(false), isHighlighted = _k[0], setIsHighlighted = _k[1];
    var _l = useState(''), mentionNickname = _l[0], setMentionNickname = _l[1];
    var _m = useState([]), mentionedUsers = _m[0], setMentionedUsers = _m[1];
    var _o = useState([]), mentionedUserIds = _o[0], setMentionedUserIds = _o[1];
    var _p = useState(null), messageInputEvent = _p[0], setMessageInputEvent = _p[1];
    var _q = useState(null), selectedUser = _q[0], setSelectedUser = _q[1];
    var _r = useState([]), mentionSuggestedUsers = _r[0], setMentionSuggestedUsers = _r[1];
    var editMessageInputRef = useRef(null);
    var messageScrollRef = useRef(null);
    var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !isDisabledBecauseFrozen(channel) && !isDisabledBecauseMuted(channel);
    var mentionNodes = useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < maxUserMentionCount;
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
    /**
     * Move the messsage list scroll
     * when the message's height is changed by `showEdit` OR `message.reactions`
     */
    useDidMountEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
    }, [showEdit, (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length]);
    useDidMountEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    useLayoutEffect(function () {
        // Keep the scrollBottom value after fetching new message list
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, []);
    useLayoutEffect(function () {
        var timeouts = [];
        if (highLightedMessageId === message.messageId && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            setIsAnimated(false);
            timeouts.push(setTimeout(function () {
                setIsHighlighted(true);
            }, 500));
            timeouts.push(setTimeout(function () {
                setHighLightedMessageId(0);
                onMessageHighlighted === null || onMessageHighlighted === void 0 ? void 0 : onMessageHighlighted();
            }, 1600));
        }
        else {
            setIsHighlighted(false);
        }
        return function () {
            timeouts.forEach(function (it) { return clearTimeout(it); });
        };
    }, [highLightedMessageId, messageScrollRef.current, message.messageId]);
    useLayoutEffect(function () {
        var timeouts = [];
        if (animatedMessageId === message.messageId && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            setIsHighlighted(false);
            timeouts.push(setTimeout(function () {
                setIsAnimated(true);
            }, 500));
            timeouts.push(setTimeout(function () {
                setAnimatedMessageId(0);
                onMessageAnimated === null || onMessageAnimated === void 0 ? void 0 : onMessageAnimated();
            }, 1600));
        }
        else {
            setIsAnimated(false);
        }
        return function () {
            timeouts.forEach(function (it) { return clearTimeout(it); });
        };
    }, [animatedMessageId, messageScrollRef.current, message.messageId]);
    var renderedCustomSeparator = useMemo(function () { var _a; return (_a = renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message })) !== null && _a !== void 0 ? _a : null; }, [message, renderCustomSeparator]);
    var renderChildren = function () {
        if (children) {
            return children;
        }
        if (renderMessage) {
            var messageProps = __assign(__assign({}, props), { renderMessage: undefined });
            return renderMessage(messageProps);
        }
        return (React__default.createElement(React__default.Fragment, null,
            renderMessageContent({
                className: 'sendbird-message-hoc__message-content',
                userId: userId,
                scrollToMessage: scrollToMessage,
                channel: channel,
                message: message,
                disabled: !isOnline,
                chainTop: chainTop,
                chainBottom: chainBottom,
                isReactionEnabled: isReactionEnabled,
                replyType: replyType,
                threadReplySelectType: threadReplySelectType,
                nicknamesMap: nicknamesMap,
                emojiContainer: emojiContainer,
                showEdit: setShowEdit,
                showRemove: setShowRemove,
                showFileViewer: setShowFileViewer,
                resendMessage: resendMessage,
                deleteMessage: deleteMessage,
                toggleReaction: toggleReaction,
                setQuoteMessage: setQuoteMessage,
                onReplyInThread: onReplyInThreadClick,
                onQuoteMessageClick: onQuoteMessageClick,
                onMessageHeightChange: handleScroll,
            }),
            /** Suggested Replies */
            shouldRenderSuggestedReplies && React__default.createElement(SuggestedReplies, { replyOptions: getSuggestedReplies(message), onSendMessage: sendUserMessage }),
            showRemove && renderRemoveMessageModal({ message: message, onCancel: function () { return setShowRemove(false); } }),
            showFileViewer && renderFileViewer({ message: message, onCancel: function () { return setShowFileViewer(false); } })));
    };
    if (showEdit && ((_b = message === null || message === void 0 ? void 0 : message.isUserMessage) === null || _b === void 0 ? void 0 : _b.call(message))) {
        return ((renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || (React__default.createElement(React__default.Fragment, null,
            displaySuggestedMentionList && (React__default.createElement(SuggestedMentionListView, { currentChannel: channel, targetNickname: mentionNickname, inputEvent: messageInputEvent, renderUserMentionItem: renderUserMentionItem, onUserItemClick: function (user) {
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
                }, ableAddMention: ableMention, maxMentionCount: maxUserMentionCount, maxSuggestionCount: maxUserSuggestionCount })),
            React__default.createElement(MessageInput, { isEdit: true, channel: channel, disabled: editInputDisabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: message, onStartTyping: function () {
                    var _a;
                    (_a = channel === null || channel === void 0 ? void 0 : channel.startTyping) === null || _a === void 0 ? void 0 : _a.call(channel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateUserMessage(messageId, {
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionedMessageTemplate: mentionTemplate,
                    });
                    setShowEdit(false);
                    (_b = channel === null || channel === void 0 ? void 0 : channel.endTyping) === null || _b === void 0 ? void 0 : _b.call(channel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEdit(false);
                    (_a = channel === null || channel === void 0 ? void 0 : channel.endTyping) === null || _a === void 0 ? void 0 : _a.call(channel);
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
                    if (displaySuggestedMentionList
                        && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === MessageInputKeys.Enter && ableMention)
                            || e.key === MessageInputKeys.ArrowUp
                            || e.key === MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } }))));
    }
    return (React__default.createElement("div", { className: getClassName([
            'sendbird-msg-hoc sendbird-msg--scroll-ref',
            isAnimated ? 'sendbird-msg-hoc__animated' : '',
            isHighlighted ? 'sendbird-msg-hoc__highlighted' : '',
        ]), style: children || renderMessage ? undefined : { marginBottom: '2px' }, "data-sb-message-id": message.messageId, "data-sb-created-at": message.createdAt, ref: messageScrollRef },
        hasSeparator
            && (renderedCustomSeparator || (React__default.createElement(DateSeparator, null,
                React__default.createElement(Label, { type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, format(message.createdAt, stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR, {
                    locale: dateLocale,
                }))))),
        renderChildren()));
};

export { MessageView as M };
//# sourceMappingURL=bundle-lWG-n9p0.js.map
