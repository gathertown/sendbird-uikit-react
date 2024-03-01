'use strict';

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var RemoveMessageModalView = require('../../chunks/bundle-IUMGWVtE.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
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
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../chunks/bundle-Dab6jGiJ.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-DvhBOCzU.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-3znIJG3Q.js');

var RemoveMessageModal = function (props) {
    var deleteMessage = Channel_context.useChannelContext().deleteMessage;
    return React.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

module.exports = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map