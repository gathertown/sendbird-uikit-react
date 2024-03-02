'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-IrSx78Gk.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../chunks/bundle-BKwrdy8Y.js');
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
require('../../chunks/bundle-uwsvYO4l.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-h4wKJtrO.js');
require('../../chunks/bundle-C1rrs9fy.js');
require('../../chunks/bundle-DzWthRdg.js');

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
