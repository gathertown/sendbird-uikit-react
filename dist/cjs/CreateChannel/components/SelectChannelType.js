'use strict';

var React = require('react');
var sendbirdSelectors = require('../../sendbirdSelectors.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var CreateChannel_context = require('../../chunks/bundle-COwOuaYd.js');
var LocalizationContext = require('../../chunks/bundle-D2Bg8CLY.js');
var ui_Label = require('../../chunks/bundle-BUH06mHS.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Modal = require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../withSendbird.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');

var isBroadcastChannelEnabled = function (sdk) {
    var _a;
    var ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
    var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;
    if (Array.isArray(applicationAttributes)) {
        return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
    }
    return false;
};
var isSuperGroupChannelEnabled = function (sdk) {
    var _a;
    var ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
    var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;
    if (Array.isArray(applicationAttributes)) {
        return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
    }
    return false;
};

var SelectChannelType = function (props) {
    var onCancel = props.onCancel;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var sdk = sendbirdSelectors.getSdk(store);
    var createChannelProps = CreateChannel_context.useCreateChannelContext();
    var setStep = createChannelProps.setStep, setType = createChannelProps.setType;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
    var isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);
    return (React.createElement(ui_Modal.Modal, { titleText: stringSet === null || stringSet === void 0 ? void 0 : stringSet.MODAL__CREATE_CHANNEL__TITLE, hideFooter: true, onCancel: function () { onCancel(); }, className: "sendbird-add-channel__modal" },
        React.createElement("div", { className: "sendbird-add-channel__rectangle-wrap" },
            React.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.GROUP);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.GROUP);
                    setStep(1);
                } },
                React.createElement(ui_Icon.default, { className: "sendbird-add-channel__rectangle__chat-icon", type: ui_Icon.IconTypes.CHAT, fillColor: ui_Icon.IconColors.PRIMARY, width: "28px", height: "28px" }),
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__GROUP)),
            isSupergroupAvailable && (React.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.SUPERGROUP);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.SUPERGROUP);
                    setStep(1);
                } },
                React.createElement(ui_Icon.default, { className: "sendbird-add-channel__rectangle__supergroup-icon", type: ui_Icon.IconTypes.SUPERGROUP, fillColor: ui_Icon.IconColors.PRIMARY, width: "28px", height: "28px" }),
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__SUPER))),
            isBroadcastAvailable && (React.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.BROADCAST);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CreateChannel_context.CHANNEL_TYPE.BROADCAST);
                    setStep(1);
                } },
                React.createElement(ui_Icon.default, { className: "sendbird-add-channel__rectangle__broadcast-icon", type: ui_Icon.IconTypes.BROADCAST, fillColor: ui_Icon.IconColors.PRIMARY, width: "28px", height: "28px" }),
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__BROADCAST))))));
};

module.exports = SelectChannelType;
//# sourceMappingURL=SelectChannelType.js.map
