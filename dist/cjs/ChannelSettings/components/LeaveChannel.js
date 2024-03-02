'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../chunks/bundle-BvJOj_Nb.js');
var ui_Modal = require('../../chunks/bundle-CG5E97k8.js');
var LocalizationContext = require('../../chunks/bundle-BD2bIoH6.js');
var MediaQueryContext = require('../../chunks/bundle-DGx3xKBn.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_Label = require('../../chunks/bundle-24sG-BP_.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DTKihS4S.js');

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
