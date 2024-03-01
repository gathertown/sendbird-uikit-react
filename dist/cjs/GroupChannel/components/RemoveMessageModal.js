'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var RemoveMessageModalView = require('../../chunks/bundle-IUMGWVtE.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-BelwaOYx.js');
require('../../chunks/bundle-DHZxYemr.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-meW-rxvL.js');
require('../../chunks/bundle-ROgXTJCJ.js');
require('../../chunks/bundle-D7wWsQ-z.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../chunks/bundle-Dab6jGiJ.js');

var RemoveMessageModal = function (props) {
    var deleteMessage = GroupChannel_context.useGroupChannelContext().deleteMessage;
    return React.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.RemoveMessageModal = RemoveMessageModal;
exports.default = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
