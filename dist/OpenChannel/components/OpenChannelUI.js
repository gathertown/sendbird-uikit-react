import React__default from 'react';
import { u as useOpenChannelContext } from '../../chunks/bundle-WO6U02Im.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-BFBEOrCk.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-W3ZSZMhY.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
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
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-8UWMMSrw.js';
import '../../chunks/bundle-DQwQl7bP.js';
import '../../chunks/bundle-CrqmuvN4.js';
import 'dompurify';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-CGHxY6Os.js';
import '../../chunks/bundle-B8-kxXoE.js';
import '../../chunks/bundle-CPqFGv23.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../chunks/bundle-BlLFOUrw.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-DLRoImjz.js';
import '../../chunks/bundle-BJa8Qoy0.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-iau93d70.js';
import '../../Message/context.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DBtx2Gk9.js';
import '../../chunks/bundle-CQ1BOFUN.js';
import '../../chunks/bundle-DwXszhWd.js';
import '../../chunks/bundle-Vhx3hiGW.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../Channel/utils/compareMessagesForGrouping.js';

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.createElement(OpenchannelConversationHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React__default.createElement(FrozenNotification, null),
        React__default.createElement(OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React__default.createElement(OpenChannelInput, { ref: messageInputRef })));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelUI.js.map
