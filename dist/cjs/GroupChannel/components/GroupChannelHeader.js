'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-C0ErZ9_k.js');
var GroupChannel_context = require('../context.js');
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
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-k7WGsMsr.js');
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

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
