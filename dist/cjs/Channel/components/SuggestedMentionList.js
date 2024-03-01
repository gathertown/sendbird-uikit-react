'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-BurotX14.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../chunks/bundle-c87q7xEA.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bd2HznXA.js');
require('../../chunks/bundle-BUIoEqVv.js');
require('../../chunks/bundle-LbGezufX.js');
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
require('../../chunks/bundle-DE6wTTAM.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D20FXSz0.js');

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
