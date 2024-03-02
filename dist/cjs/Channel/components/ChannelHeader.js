'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-CtN4XRDz.js');
var Channel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('../../chunks/bundle-CkxVRfa7.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BwAK1D9u.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-C4EYGhv3.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-BWb5b9t8.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DzWthRdg.js');

var ChannelHeader = function (_a) {
    var className = _a.className;
    var context = Channel_context.useChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, context, { className: className, currentChannel: context.currentGroupChannel })));
};

exports.ChannelHeader = ChannelHeader;
exports.default = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map
