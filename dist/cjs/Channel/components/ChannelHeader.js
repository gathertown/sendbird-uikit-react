'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-C4WehMLC.js');
var Channel_context = require('../context.js');
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
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-bdifjM-k.js');
require('../../chunks/bundle-BECkGjrR.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-D0o2OzcU.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DYYV3xLB.js');
require('../../chunks/bundle-BcdtZarK.js');
require('../../chunks/bundle-DnTkOAfH.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../chunks/bundle-BjldQ7ts.js');
require('../../chunks/bundle-BFHEqzl9.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-0AYxVXD-.js');

var ChannelHeader = function (_a) {
    var className = _a.className;
    var context = Channel_context.useChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, context, { className: className, currentChannel: context.currentGroupChannel })));
};

exports.ChannelHeader = ChannelHeader;
exports.default = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map
