'use strict';

var React = require('react');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-CkvaXo1D.js');
var LocalizationContext = require('../chunks/bundle-BeJ7-X59.js');
require('react-dom');
require('../chunks/bundle-CjFSIiUv.js');
require('../chunks/bundle-DvNeoTBz.js');
require('../chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DQfemABy.js');
require('../chunks/bundle-BppUjcCZ.js');
require('./IconButton.js');
require('./Button.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-DGYTk4xX.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BelgkMC5.js');
require('../chunks/bundle-DHTHQj02.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-D0W7zrvh.js');
require('../chunks/bundle-BruYC2Km.js');
require('../chunks/bundle-DUeKijBO.js');

function MobileFeedbackMenu(props) {
    var hideMenu = props.hideMenu, onEditFeedback = props.onEditFeedback, onRemoveFeedback = props.onRemoveFeedback;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return (React.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
        React.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-options-menu' },
            React.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onEditFeedback();
                } },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.EDIT_COMMENT)),
            React.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onRemoveFeedback();
                } },
                React.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ERROR }, stringSet.REMOVE_FEEDBACK)))));
}

module.exports = MobileFeedbackMenu;
//# sourceMappingURL=MobileFeedbackMenu.js.map
