'use strict';

var React = require('react');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-24sG-BP_.js');
var LocalizationContext = require('../chunks/bundle-BD2bIoH6.js');
require('react-dom');
require('../chunks/bundle-CG5E97k8.js');
require('../chunks/bundle-DHh3VdoS.js');
require('../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-BvJOj_Nb.js');
require('../chunks/bundle-DGx3xKBn.js');
require('./IconButton.js');
require('./Button.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-DDY1xx_n.js');
require('../chunks/bundle-BPGreBtw.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-e1P14sMX.js');
require('../chunks/bundle-DoHigaWY.js');
require('../chunks/bundle-C8yEdUBb.js');

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
