import { _ as __assign } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { R as RemoveMessageModalView } from '../../chunks/bundle-BknFMGO5.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-CnPq00g2.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BOvQopMz.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../chunks/bundle-BjdNFz7H.js';

var RemoveMessageModal = function (props) {
    var deleteMessage = useGroupChannelContext().deleteMessage;
    return React__default.createElement(RemoveMessageModalView, __assign({}, props, { deleteMessage: deleteMessage }));
};

export { RemoveMessageModal, RemoveMessageModal as default };
//# sourceMappingURL=RemoveMessageModal.js.map
