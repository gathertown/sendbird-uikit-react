'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var RemoveMessageModalView = require('../../chunks/bundle-D2-x0BmY.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-Cu63GBZj.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-etwgXqw-.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-CQ6ec9FA.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../chunks/bundle-DWcNmk2G.js');

var RemoveMessageModal = function (props) {
    var deleteMessage = GroupChannel_context.useGroupChannelContext().deleteMessage;
    return React.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.RemoveMessageModal = RemoveMessageModal;
exports.default = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
