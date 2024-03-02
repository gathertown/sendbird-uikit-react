import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { S as SuggestedMentionListView } from '../../chunks/bundle-BehMbQaw.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-COwB5DaQ.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-bFnpVx53.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-Cd6XSYjN.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-B-v_xYnH.js';

var SuggestedMentionList = function (props) {
    var currentGroupChannel = useChannelContext().currentGroupChannel;
    return (React__default.createElement(SuggestedMentionListView, __assign({}, props, { currentChannel: currentGroupChannel })));
};

export { SuggestedMentionList, SuggestedMentionList as default };
//# sourceMappingURL=SuggestedMentionList.js.map
