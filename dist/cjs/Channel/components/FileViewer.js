'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var FileViewerView = require('../../chunks/bundle-C-imsFfv.js');
var Channel_context = require('../context.js');
require('react-dom');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D0ePEYoI.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BCNmULWo.js');
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-Bd2HznXA.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dibky18B.js');
require('../../chunks/bundle-D_DzQR1j.js');
require('../../chunks/bundle-CvJFi8sD.js');
require('../../chunks/bundle-DMHUKzyz.js');
require('../../chunks/bundle-RX09O7xx.js');
require('../../chunks/bundle-DE6wTTAM.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D20FXSz0.js');

var FileViewer = function (props) {
    var deleteMessage = Channel_context.useChannelContext().deleteMessage;
    return React.createElement(FileViewerView.FileViewerView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.FileViewer = FileViewer;
exports.default = FileViewer;
//# sourceMappingURL=FileViewer.js.map
