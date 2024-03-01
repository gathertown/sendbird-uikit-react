import { _ as __assign } from '../../chunks/bundle-5LMP4qQC.js';
import React__default from 'react';
import { S as SuggestedMentionListView } from '../../chunks/bundle-jzCf_x2O.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-DvIsR7kQ.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-QtD1UM1r.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../chunks/bundle-BW5JWhMG.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '../../chunks/bundle-BJD56sGG.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-6itdh-PI.js';
import '../../chunks/bundle-IoL2Eken.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-mvJ9QD_D.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Hkpc7KpA.js';
import '../../chunks/bundle-C-kkBK84.js';
import '../../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-VHqJlR18.js';
import '../../chunks/bundle-D--y2PXM.js';
import '../../chunks/bundle-DkhSKEDZ.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-Dl28BsqX.js';
import '../../chunks/bundle-c0D1F768.js';
import '../../chunks/bundle-Cs0iNLFK.js';
import '../../chunks/bundle-CTUiHvvY.js';
import '../../chunks/bundle-CGLTg9iX.js';

var SuggestedMentionList = function (props) {
    var currentGroupChannel = useChannelContext().currentGroupChannel;
    return (React__default.createElement(SuggestedMentionListView, __assign({}, props, { currentChannel: currentGroupChannel })));
};

export { SuggestedMentionList, SuggestedMentionList as default };
//# sourceMappingURL=SuggestedMentionList.js.map
