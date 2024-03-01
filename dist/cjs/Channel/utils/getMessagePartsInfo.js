'use strict';

var index = require('../../chunks/bundle-DB4Q30uD.js');
var Channel_utils_compareMessagesForGrouping = require('./compareMessagesForGrouping.js');
require('../../chunks/bundle-DZTJrxjG.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-D-432Irw.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');

/**
 * exported, should be backward compatible
 */
var getMessagePartsInfo = function (_a) {
    var _b = _a.allMessages, allMessages = _b === void 0 ? [] : _b, _c = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _c === void 0 ? true : _c, _d = _a.currentIndex, currentIndex = _d === void 0 ? 0 : _d, _e = _a.currentMessage, currentMessage = _e === void 0 ? null : _e, _f = _a.currentChannel, currentChannel = _f === void 0 ? null : _f, _g = _a.replyType, replyType = _g === void 0 ? '' : _g;
    var previousMessage = allMessages[currentIndex - 1];
    var nextMessage = allMessages[currentIndex + 1];
    var _h = isMessageGroupingEnabled
        ? Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(previousMessage, currentMessage, nextMessage, currentChannel, replyType)
        : [false, false], chainTop = _h[0], chainBottom = _h[1];
    var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
    var currentCreatedAt = currentMessage.createdAt;
    // NOTE: for pending/failed messages
    var isLocalMessage = 'sendingStatus' in currentMessage && (currentMessage.sendingStatus !== 'succeeded');
    // https://stackoverflow.com/a/41855608
    var hasSeparator = isLocalMessage ? false : !(previousMessageCreatedAt && (index.isSameDay(currentCreatedAt, previousMessageCreatedAt)));
    return {
        chainTop: chainTop,
        chainBottom: chainBottom,
        hasSeparator: hasSeparator,
    };
};

exports.getMessagePartsInfo = getMessagePartsInfo;
//# sourceMappingURL=getMessagePartsInfo.js.map
