import { _ as __assign } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default from 'react';
import { useGroupChannelContext } from '../context.js';
import { R as RemoveMessageModalView } from '../../chunks/bundle-BLEkXiZc.js';
import '@sendbird/chat/message';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-DSd-G7ux.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DFFKNF1F.js';
import '../../chunks/bundle-C7dAdhH1.js';
import '../../chunks/bundle-uVhI82ml.js';
import '../../chunks/bundle-B8MAflwf.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-B-z3huWI.js';
import '../../chunks/bundle-CTBShITC.js';
import '../../chunks/bundle-BfKgozDd.js';
import '../../chunks/bundle-CIiROwS_.js';
import '../../chunks/bundle-k5z_1yHM.js';
import '../../chunks/bundle-Zq-75Hl4.js';
import '../../chunks/bundle-D-z4U1wX.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BJmqupdN.js';
import 'react-dom';
import '../../chunks/bundle-BwcI3bWM.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BOy_tVjz.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-Caf8F3YR.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../chunks/bundle-BytW9Azl.js';
import '../../chunks/bundle-q0J75T9g.js';

var RemoveMessageModal = function (props) {
    var deleteMessage = useGroupChannelContext().deleteMessage;
    return React__default.createElement(RemoveMessageModalView, __assign({}, props, { deleteMessage: deleteMessage }));
};

export { RemoveMessageModal, RemoveMessageModal as default };
//# sourceMappingURL=RemoveMessageModal.js.map
