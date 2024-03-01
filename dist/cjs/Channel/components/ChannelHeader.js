'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-BqtaDfJy.js');
var Channel_context = require('../context.js');
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
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-Bd2HznXA.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dibky18B.js');
require('../../chunks/bundle-D_DzQR1j.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CvJFi8sD.js');
require('../../chunks/bundle-DMHUKzyz.js');
require('../../chunks/bundle-RX09O7xx.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-c87q7xEA.js');
require('../../chunks/bundle-DE6wTTAM.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D20FXSz0.js');

var ChannelHeader = function (_a) {
    var className = _a.className;
    var context = Channel_context.useChannelContext();
    return (React.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, context, { className: className, currentChannel: context.currentGroupChannel })));
};

exports.ChannelHeader = ChannelHeader;
exports.default = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map
