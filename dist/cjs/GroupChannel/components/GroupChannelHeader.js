'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-CtN4XRDz.js');
var GroupChannel_context = require('../context.js');
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
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-BKwrdy8Y.js');
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

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
