import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './chunks/bundle-x3Hh1WqI.js';
import './OpenChannel/components/OpenChannelInput.js';
import './chunks/bundle-msnuMA4R.js';
import './chunks/bundle-Tg3CrpQU.js';
import './chunks/bundle-CsWYoRVd.js';
import './ui/MessageInput.js';
import './chunks/bundle-KMsJXUN2.js';
import './chunks/bundle-NOh3ukH6.js';
import './chunks/bundle-hKmRj7Ck.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './chunks/bundle-kMMCn6GE.js';
import './chunks/bundle-1uBgZh_D.js';
import 'dompurify';
import './chunks/bundle-qauKidkr.js';
import './chunks/bundle-wf7f-9LT.js';
import './chunks/bundle-cMznkLt0.js';
import './ui/Icon.js';
import './chunks/bundle-7YRb7CRq.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './chunks/bundle-ZnLsMTHr.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-LZemF1A7.js';
import './chunks/bundle-pODFB39J.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './chunks/bundle-OJq071GK.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-DhS-f2ZT.js';
import './chunks/bundle-ZTmwWu_-.js';
import './ui/PlaceHolder.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './chunks/bundle-SpfAN5pr.js';
import './chunks/bundle-vbGNKQpe.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './chunks/bundle-4_6x-RiC.js';
import './ui/UserProfile.js';
import './chunks/bundle-x78eEPy7.js';
import './sendbirdSelectors.js';
import './chunks/bundle-THTV9S18.js';
import './chunks/bundle-gkw1uTO0.js';
import './chunks/bundle-o82HAP3p.js';
import './chunks/bundle-3iFqiLDd.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './chunks/bundle-AjBmMBJ5.js';
import './Message/context.js';
import './ui/MentionLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './chunks/bundle-nGuCRoDK.js';
import './ui/DateSeparator.js';
import './chunks/bundle-13MqUbIu.js';
import './hooks/useModal.js';
import './chunks/bundle-O8mkJ7az.js';
import './chunks/bundle-AFXr5NmI.js';
import './chunks/bundle-HUsfnqzD.js';
import '@sendbird/uikit-tools';
import './chunks/bundle-pZ049TQg.js';
import './chunks/bundle-zhxgqh8X.js';
import './chunks/bundle-JMVaVraV.js';
import './chunks/bundle-fO5XIU5Y.js';
import '@sendbird/chat/message';
import './Channel/utils/compareMessagesForGrouping.js';
import './chunks/bundle-xlx3bBW8.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './chunks/bundle-J4Twjc27.js';

var OpenChannel = function (props) {
    return (React__default.createElement(OpenChannelProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled, queries: props === null || props === void 0 ? void 0 : props.queries, messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit, onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage, onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage, onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile, onBackClick: props === null || props === void 0 ? void 0 : props.onBackClick },
        React__default.createElement(OpenChannelUI, { renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage, renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader, renderInput: props === null || props === void 0 ? void 0 : props.renderInput, renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList, renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError, renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading })));
};

export { OpenChannel as default };
//# sourceMappingURL=OpenChannel.js.map
