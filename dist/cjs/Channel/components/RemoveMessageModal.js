'use strict';

var _tslib = require('../../chunks/bundle-BO5OZWjS.js');
var React = require('react');
var RemoveMessageModalView = require('../../chunks/bundle-XgOiPyHW.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-CBfBMqDz.js');
require('../../chunks/bundle-C6gATKTE.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DgAALupQ.js');
require('react-dom');
require('../../chunks/bundle-DKL8dMjq.js');
require('../../chunks/bundle-CNnH6vJ_.js');
require('../../chunks/bundle-B8rdv1pq.js');
require('../../chunks/bundle-BFgXaSuR.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CRRWhSHD.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-BjldQ7ts.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-3bmKYTJ_.js');
require('../../chunks/bundle-DI6hrkhw.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BOaew5JK.js');
require('../../chunks/bundle-BmCw9st3.js');
require('../../chunks/bundle-CJtsI7GU.js');
require('../../chunks/bundle-bdifjM-k.js');
require('../../chunks/bundle-BECkGjrR.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-D0o2OzcU.js');
require('../../chunks/bundle-BCfv3yiy.js');
require('../../chunks/bundle-DYYV3xLB.js');
require('../../chunks/bundle-BcdtZarK.js');
require('../../chunks/bundle-DnTkOAfH.js');
require('../../chunks/bundle-BFHEqzl9.js');
require('../../chunks/bundle-z9miKj3U.js');
require('../../chunks/bundle-QyttZIkx.js');
require('../../chunks/bundle-D_b5XkOl.js');
require('../../chunks/bundle-0AYxVXD-.js');

var RemoveMessageModal = function (props) {
    var deleteMessage = Channel_context.useChannelContext().deleteMessage;
    return React.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

module.exports = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
