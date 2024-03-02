'use strict';

var React = require('react');
var OpenChannel_context = require('../../chunks/bundle-B_CLxaA8.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-CruSSYSP.js');
require('../../chunks/bundle-CYjw4691.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-4lJ887l6.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('react-dom');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-BlK0Q1jH.js');
require('../../chunks/bundle-BF3GXMyf.js');
require('../../chunks/bundle-ZoZvScBH.js');
require('dompurify');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DS6HeXaS.js');
require('../../chunks/bundle-B98KPr4A.js');
require('../../chunks/bundle-C9xbaXbn.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('./OpenChannelMessage.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BL3NDt72.js');
require('../../chunks/bundle-CR1j53bM.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-B4c5-CEo.js');
require('../../Message/context.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-DQKTGusP.js');
require('../../chunks/bundle-DoLTlc_l.js');
require('../../chunks/bundle-DWcNmk2G.js');
require('../../chunks/bundle-BXBfcBnf.js');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../Channel/utils/compareMessagesForGrouping.js');

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React.createElement("div", { className: COMPONENT_CLASS_NAME },
                React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React.createElement("div", { className: COMPONENT_CLASS_NAME },
                React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React.createElement("div", { className: COMPONENT_CLASS_NAME },
                React.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React.createElement(OpenChannel_components_OpenChannelHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React.createElement(OpenChannel_components_FrozenChannelNotification, null),
        React.createElement(OpenChannel_components_OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React.createElement(OpenChannel_components_OpenChannelInput, { ref: messageInputRef })));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelUI.js.map
