'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var message = require('@sendbird/chat/message');
var index = require('../../chunks/bundle-BCfv3yiy.js');
var index$1 = require('../../chunks/bundle-C6gATKTE.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../chunks/bundle-BO5OZWjS.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');

/**
 * exported, should be backward compatible
 * @returns [chainTop: `boolean`, chainBottom: `boolean`]
 */
var compareMessagesForGrouping = function (prevMessage, currMessage, nextMessage, currentChannel, replyType, currentUserId) {
    if (!currentChannel || currentChannel.channelType !== 'group') {
        return [
            isSameGroup(prevMessage, currMessage),
            isSameGroup(currMessage, nextMessage),
        ];
    }
    if (replyType === 'THREAD' && (currMessage === null || currMessage === void 0 ? void 0 : currMessage.threadInfo)) {
        return [false, false];
    }
    var sendingStatus = (currMessage === null || currMessage === void 0 ? void 0 : currMessage.sendingStatus) || '';
    var isAcceptable = sendingStatus !== 'failed';
    return [
        isSameGroup(prevMessage, currMessage, currentUserId) && isAcceptable,
        isSameGroup(currMessage, nextMessage, currentUserId) && isAcceptable,
    ];
};
var getMessageCreatedAt = function (message) { return index.format(message.createdAt, 'p'); };
// Group current user's messages together. The current user's messages
// may not have their userId on it, and if not, we assume that messages w/ a
// local send status is the current user's as well.
// Given the above is true, group by timestamp
var areBothFromMyUserAndInSameGroup = function (message, comparingMessage, currentUserId) {
    if (!currentUserId || !(message === null || message === void 0 ? void 0 : message.createdAt) || !(comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.createdAt))
        return false;
    var isFirstMessageByMe = getIsByMe(currentUserId, message);
    var isSecondMessageByMe = getIsByMe(currentUserId, comparingMessage);
    if (isFirstMessageByMe && isSecondMessageByMe) {
        return getMessageCreatedAt(message) === getMessageCreatedAt(comparingMessage);
    }
    return false;
};
var isSameGroup = function (message, comparingMessage, currentUserId) {
    var _a, _b;
    if (areBothFromMyUserAndInSameGroup(message, comparingMessage, currentUserId)) {
        return true;
    }
    if (!(message
        && comparingMessage
        && message.messageType
        && message.messageType !== 'admin'
        && comparingMessage.messageType
        && (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.messageType) !== 'admin'
        && 'sender' in message
        && 'sender' in comparingMessage
        && message.createdAt
        && comparingMessage.createdAt
        && message.sender.userId
        && comparingMessage.sender.userId)) {
        return false;
    }
    return ((message === null || message === void 0 ? void 0 : message.sendingStatus) === (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sendingStatus)
        && ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sender) === null || _b === void 0 ? void 0 : _b.userId)
        && getMessageCreatedAt(message) === getMessageCreatedAt(comparingMessage));
};
var getIsByMe = function (userId, message$1) {
    if (!index$1.isSendableMessage(message$1) || !userId)
        return false;
    var messageIsLocalType = [message.SendingStatus.FAILED, message.SendingStatus.PENDING].includes(message$1.sendingStatus);
    return userId === message$1.sender.userId || messageIsLocalType;
};
var messages = {
    compareMessagesForGrouping: compareMessagesForGrouping,
    getMessageCreatedAt: getMessageCreatedAt,
    isSameGroup: isSameGroup,
};

exports.areBothFromMyUserAndInSameGroup = areBothFromMyUserAndInSameGroup;
exports.compareMessagesForGrouping = compareMessagesForGrouping;
exports.default = messages;
exports.getIsByMe = getIsByMe;
exports.getMessageCreatedAt = getMessageCreatedAt;
exports.isSameGroup = isSameGroup;
//# sourceMappingURL=compareMessagesForGrouping.js.map
