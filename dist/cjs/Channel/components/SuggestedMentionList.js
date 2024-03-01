'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-CbRjKF9P.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mXFFmyyG.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CHob45XV.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-DvhBOCzU.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-BKuNpBv5.js');
require('../../chunks/bundle-BDHpyltA.js');
require('../../chunks/bundle-3znIJG3Q.js');

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
