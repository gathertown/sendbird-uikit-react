import { _ as __assign } from '../../chunks/bundle-5LMP4qQC.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { R as RemoveMessageModalView } from '../../chunks/bundle-AdWAESbF.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-Cs0iNLFK.js';
import '../../chunks/bundle-CTUiHvvY.js';
import '../../chunks/bundle-BURD6lB9.js';
import '../../chunks/bundle-CPs5faB9.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-mvJ9QD_D.js';
import '../../chunks/bundle-TBQO6kEO.js';
import '../../chunks/bundle-DOAIKZSq.js';
import '../../chunks/bundle-c0D1F768.js';
import '../../chunks/bundle-Hkpc7KpA.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '../../chunks/bundle-7Av17Vus.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-QtD1UM1r.js';
import 'react-dom';
import '../../chunks/bundle-BW5JWhMG.js';
import '../../chunks/bundle-BeAHyfuE.js';
import '../../chunks/bundle-DyVsaRLS.js';
import '../../chunks/bundle-U_2B1aWq.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-DvIsR7kQ.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BJD56sGG.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-BpHmAKa2.js';
import '../../chunks/bundle-CfMartL1.js';

var RemoveMessageModal = function (props) {
    var deleteMessage = useGroupChannelContext().deleteMessage;
    return React__default.createElement(RemoveMessageModalView, __assign({}, props, { deleteMessage: deleteMessage }));
};

export { RemoveMessageModal, RemoveMessageModal as default };
//# sourceMappingURL=RemoveMessageModal.js.map
