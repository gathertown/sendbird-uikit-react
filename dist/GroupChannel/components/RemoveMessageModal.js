import { _ as __assign } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { R as RemoveMessageModalView } from '../../chunks/bundle-Zc1QPz7M.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-se836s50.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../chunks/bundle-BWic18XY.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-Dn-yaG7j.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-BnYBX14T.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-0yILBaSQ.js';
import 'react-dom';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../chunks/bundle-DwXszhWd.js';

var RemoveMessageModal = function (props) {
    var deleteMessage = useGroupChannelContext().deleteMessage;
    return React__default.createElement(RemoveMessageModalView, __assign({}, props, { deleteMessage: deleteMessage }));
};

export { RemoveMessageModal, RemoveMessageModal as default };
//# sourceMappingURL=RemoveMessageModal.js.map
