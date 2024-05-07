'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-C4WehMLC.js');
var GroupChannel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DgAALupQ.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Cd7XOuNj.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CoSi4lOw.js');
require('../../chunks/bundle-DuKfsNCh.js');
require('../../chunks/bundle-BrrOctBx.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DKL8dMjq.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Ev5kAkGi.js');
require('../../ui/IconButton.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-D0q1P-FU.js');
require('../../chunks/bundle--oP96AvO.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../chunks/bundle-BECkGjrR.js');
require('../../chunks/bundle-CZJazoZ7.js');
require('../../chunks/bundle-BoYSz_zM.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-D0o2OzcU.js');

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
