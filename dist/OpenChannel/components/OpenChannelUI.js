import React__default from 'react';
import { u as useOpenChannelContext } from '../../chunks/bundle-wdXnkVNB.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../chunks/bundle-B0Dbuu28.js';
import '../../chunks/bundle-5LMP4qQC.js';
import '../../chunks/bundle-D--y2PXM.js';
import '../../chunks/bundle-c0D1F768.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BJD56sGG.js';
import '../../chunks/bundle-8VKseiqC.js';
import '../../chunks/bundle-Dzc4np9L.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-xaiK2tjx.js';
import '../../chunks/bundle-7Av17Vus.js';
import '@sendbird/chat/groupChannel';
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
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DtWPTHU4.js';
import '../../chunks/bundle-CzOn0UCC.js';
import '../../chunks/bundle-BpHmAKa2.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-IoL2Eken.js';
import '../../chunks/bundle-6itdh-PI.js';
import '../../chunks/bundle-DGq3-eYB.js';
import 'dompurify';
import '../../chunks/bundle-BrbMpwH_.js';
import '../../chunks/bundle-DBk8133F.js';
import '../../chunks/bundle-BP0NKLAx.js';
import '../../chunks/bundle-Bj505YcV.js';
import '../../chunks/bundle-DCv5_AWJ.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-Ci84mwTW.js';
import '../../chunks/bundle-C-kkBK84.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-DLnSK8xp.js';
import '../../chunks/bundle-CLNqemIR.js';
import '../../chunks/bundle-DbPsZWNm.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-vKEHnwCU.js';
import '../../Message/context.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CfII9A10.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-Cg9ONuBG.js';
import '../../chunks/bundle-C160porH.js';
import '../../chunks/bundle-CfMartL1.js';
import '../../chunks/bundle-DRPtStXY.js';
import '../../chunks/bundle-TBQO6kEO.js';
import '../../chunks/bundle-mvJ9QD_D.js';
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
