'use strict';

var React = require('react');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-BUH06mHS.js');
var LocalizationContext = require('../chunks/bundle-D2Bg8CLY.js');
require('react-dom');
require('../chunks/bundle-BPS3DFTX.js');
require('../chunks/bundle-2PlwnSzC.js');
require('../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DMrzJD8i.js');
require('../chunks/bundle-Gh-C2yIM.js');
require('./IconButton.js');
require('./Button.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BPDG2Sth.js');
require('../chunks/bundle-tCz2WwyT.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-DLvdMF5T.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');

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
