import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { S as SuggestedMentionListView } from '../../chunks/bundle-CHpLoyhB.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CLBxUFi0.js';
import '../../chunks/bundle-DdjSgEBI.js';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-B7dWJiLf.js';
import '../../chunks/bundle-CCH_gmPY.js';
import '../../chunks/bundle-DuFEev3g.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CgMvdzKN.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-ChvmrzFX.js';

var SuggestedMentionList = function (props) {
    var currentGroupChannel = useChannelContext().currentGroupChannel;
    return (React__default.createElement(SuggestedMentionListView, __assign({}, props, { currentChannel: currentGroupChannel })));
};

export { SuggestedMentionList, SuggestedMentionList as default };
//# sourceMappingURL=SuggestedMentionList.js.map
