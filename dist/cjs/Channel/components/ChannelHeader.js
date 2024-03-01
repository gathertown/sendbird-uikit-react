'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-C0ErZ9_k.js');
var Channel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BQNX69rh.js');
require('../../chunks/bundle-4hEewA7J.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-DvhBOCzU.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-3znIJG3Q.js');

var ChannelHeader = function (_a) {
    var className = _a.className;
    var context = Channel_context.useChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, context, { className: className, currentChannel: context.currentGroupChannel })));
};

exports.ChannelHeader = ChannelHeader;
exports.default = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map
