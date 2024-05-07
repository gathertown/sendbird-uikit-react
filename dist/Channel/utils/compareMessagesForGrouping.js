import { SendingStatus } from '@sendbird/chat/message';
import { f as format } from '../../chunks/bundle-Dac-NyF8.js';
import { a as isSendableMessage } from '../../chunks/bundle-D-z4U1wX.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-s7uQ7zAa.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';

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
var getMessageCreatedAt = function (message) { return format(message.createdAt, 'p'); };
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
var getIsByMe = function (userId, message) {
    if (!isSendableMessage(message) || !userId)
        return false;
    var messageIsLocalType = [SendingStatus.FAILED, SendingStatus.PENDING].includes(message.sendingStatus);
    return userId === message.sender.userId || messageIsLocalType;
};
var messages = {
    compareMessagesForGrouping: compareMessagesForGrouping,
    getMessageCreatedAt: getMessageCreatedAt,
    isSameGroup: isSameGroup,
};

export { areBothFromMyUserAndInSameGroup, compareMessagesForGrouping, messages as default, getIsByMe, getMessageCreatedAt, isSameGroup };
//# sourceMappingURL=compareMessagesForGrouping.js.map
