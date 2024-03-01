'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var RemoveMessageModalView = require('../../chunks/bundle-DbgayEjr.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-LbGezufX.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D5I_z4K9.js');
require('../../chunks/bundle-CM_7-rFo.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('../../chunks/bundle-qJQUtN55.js');
require('../../chunks/bundle-s42eXH2a.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-Dibky18B.js');
require('../../chunks/bundle-D0ePEYoI.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('react-dom');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-BCNmULWo.js');
require('../../chunks/bundle-JVtSimaF.js');

var RemoveMessageModal = function (props) {
    var deleteMessage = GroupChannel_context.useGroupChannelContext().deleteMessage;
    return React.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.RemoveMessageModal = RemoveMessageModal;
exports.default = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
