'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var FileViewerView = require('../../chunks/bundle-BZLPZVcJ.js');
var Channel_context = require('../context.js');
require('react-dom');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-C4EYGhv3.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-BWb5b9t8.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DzWthRdg.js');

var FileViewer = function (props) {
    var deleteMessage = Channel_context.useChannelContext().deleteMessage;
    return React.createElement(FileViewerView.FileViewerView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.FileViewer = FileViewer;
exports.default = FileViewer;
//# sourceMappingURL=FileViewer.js.map
