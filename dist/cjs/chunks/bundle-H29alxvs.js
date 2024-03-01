'use strict';

var React = require('react');

var LOG_PRESET = 'useToggleReactionCallback:';
function useToggleReactionCallback(currentChannel, logger) {
    return React.useCallback(function (message, key, isReacted) {
        if (!currentChannel) {
            logger.warning("".concat(LOG_PRESET, " currentChannel doesn't exist"), currentChannel);
            return;
        }
        if (isReacted) {
            currentChannel
                .deleteReaction(message, key)
                .then(function (res) {
                logger.info("".concat(LOG_PRESET, " Delete reaction success"), res);
            })
                .catch(function (err) {
                logger.warning("".concat(LOG_PRESET, " Delete reaction failed"), err);
            });
        }
        else {
            currentChannel
                .addReaction(message, key)
                .then(function (res) {
                logger.info("".concat(LOG_PRESET, " Add reaction success"), res);
            })
                .catch(function (err) {
                logger.warning("".concat(LOG_PRESET, " Add reaction failed"), err);
            });
        }
    }, [currentChannel]);
}

exports.useToggleReactionCallback = useToggleReactionCallback;
//# sourceMappingURL=bundle-H29alxvs.js.map
