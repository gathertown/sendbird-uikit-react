'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-BqtaDfJy.js');
var GroupChannel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../chunks/bundle-DDTTknuH.js');
require('../../chunks/bundle-Gl3fvXvG.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DDJZEPWj.js');
require('../../ui/IconButton.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-LbGezufX.js');
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

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
