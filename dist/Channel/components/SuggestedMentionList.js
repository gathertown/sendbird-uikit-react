import { _ as __assign } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default from 'react';
import { S as SuggestedMentionListView } from '../../chunks/bundle-Co8U-uRc.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BJmqupdN.js';
import '../../chunks/bundle-BAao5L-j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BIF2bCQz.js';
import '../../chunks/bundle-BwcI3bWM.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-Caf8F3YR.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DyO1n8fC.js';
import '../../chunks/bundle-Dlljvt37.js';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../chunks/bundle-B-z3huWI.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-k5z_1yHM.js';
import '../../chunks/bundle-Dac-NyF8.js';
import '../../chunks/bundle-D-z4U1wX.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BMf2Gp0X.js';
import '../../chunks/bundle-BHNYgnEs.js';
import '../../chunks/bundle-DHrHSLDL.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-D8n4s-pk.js';
import '../../chunks/bundle-CIiROwS_.js';
import '../../chunks/bundle-DFFKNF1F.js';
import '../../chunks/bundle-C7dAdhH1.js';
import '../../chunks/bundle-DjAc13S7.js';

var SuggestedMentionList = function (props) {
    var currentGroupChannel = useChannelContext().currentGroupChannel;
    return (React__default.createElement(SuggestedMentionListView, __assign({}, props, { currentChannel: currentGroupChannel })));
};

export { SuggestedMentionList, SuggestedMentionList as default };
//# sourceMappingURL=SuggestedMentionList.js.map
