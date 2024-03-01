'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DvNeoTBz.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-Bz-YFFWm.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-BNKSF9CJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-8jy5Sc-N.js');
require('../../chunks/bundle-BeJ7-X59.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-DGYTk4xX.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-ZB7RBE8F.js');
require('../../chunks/bundle-jIzB_4Er.js');
require('../../chunks/bundle-s9ulbp6E.js');
require('../../chunks/bundle-BZXuUIRS.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DYXCvmUO.js');
require('../../chunks/bundle-DZTJrxjG.js');
require('../../chunks/bundle-D-432Irw.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DhR_cfX5.js');
require('../../chunks/bundle-CuODNaEq.js');
require('../../chunks/bundle-DDl-TEX1.js');
require('../../chunks/bundle-DHTHQj02.js');
require('../../chunks/bundle-CCANegmB.js');
require('../../chunks/bundle-B6bAeEPF.js');
require('../../chunks/bundle-cJLFan5_.js');
require('../../chunks/bundle-DgEnLJkx.js');
require('../../chunks/bundle-CNa9Sv3b.js');

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
