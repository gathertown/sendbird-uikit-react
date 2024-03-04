'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../chunks/bundle-QStqvuCY.js');
var ui_Modal = require('../../chunks/bundle-CfdtYkhL.js');
var LocalizationContext = require('../../chunks/bundle-60kIt9Rq.js');
var MediaQueryContext = require('../../chunks/bundle-MZHOyRuu.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_Label = require('../../chunks/bundle-26QzFMMl.js');
require('../../withSendbird.js');
require('../../chunks/bundle-2dG9SU7T.js');
require('../../chunks/bundle-DKcL-93i.js');
require('../../chunks/bundle-Gzug-R-w.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-eH49AisR.js');
require('../../chunks/bundle-gDA5XZ0C.js');
require('../../chunks/bundle-KNt569rP.js');

var LeaveChannel = function (props) {
    var _a, _b;
    var _c = props.onSubmit, onSubmit = _c === void 0 ? utils.noop : _c, _d = props.onCancel, onCancel = _d === void 0 ? utils.noop : _d;
    var _e = ChannelSettings_context.useChannelSettingsContext(), channel = _e.channel, onLeaveChannel = _e.onLeaveChannel;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var logger = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.logger;
    var isOnline = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.isOnline;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var getChannelName = function (channel) {
        if ((channel === null || channel === void 0 ? void 0 : channel.name) && (channel === null || channel === void 0 ? void 0 : channel.name) !== 'Group Channel') {
            return channel.name;
        }
        if ((channel === null || channel === void 0 ? void 0 : channel.name) === 'Group Channel' || !(channel === null || channel === void 0 ? void 0 : channel.name)) {
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        }
        return stringSet.NO_TITLE;
    };
    if (isMobile) {
        return (React.createElement(ui_Modal.Modal, { className: "sendbird-channel-settings__leave--mobile", titleText: getChannelName(channel), hideFooter: true, isCloseOnClickOutside: true, onCancel: onCancel },
            React.createElement(ui_TextButton, { onClick: function () {
                    logger.info('ChannelSettings: Leaving channel', channel);
                    channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
                        logger.info('ChannelSettings: Leaving channel successful!', channel);
                        onLeaveChannel();
                    });
                }, className: "sendbird-channel-settings__leave-label--mobile" },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_PREVIEW_MOBILE_LEAVE))));
    }
    return (React.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
            logger.info('ChannelSettings: Leaving channel', channel);
            channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
                logger.info('ChannelSettings: Leaving channel successful!', channel);
                // is for backward compactability
                if (onLeaveChannel) {
                    onLeaveChannel();
                }
                else {
                    onSubmit();
                }
            });
        }, submitText: stringSet.MODAL__LEAVE_CHANNEL__FOOTER, titleText: stringSet.MODAL__LEAVE_CHANNEL__TITLE }));
};

module.exports = LeaveChannel;
//# sourceMappingURL=LeaveChannel.js.map
