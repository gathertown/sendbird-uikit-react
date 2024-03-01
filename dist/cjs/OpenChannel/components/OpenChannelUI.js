'use strict';

var React = require('react');
var OpenChannel_context = require('../../chunks/bundle-Cgs5uR4Y.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-2PlwnSzC.js');
require('../../chunks/bundle-Djq4xnZO.js');
require('../../chunks/bundle-BeszEZzp.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../chunks/bundle-BtA6MlUR.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-Jzj8VRgZ.js');
require('../../chunks/bundle-BVHqwRlD.js');
require('../../chunks/bundle-B1G67D6x.js');
require('dompurify');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-B3TtDetM.js');
require('../../chunks/bundle-_dPY3ICW.js');
require('../../chunks/bundle-Bkbq7HMf.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-CoFmIxJK.js');
require('../../chunks/bundle-5izjntYE.js');
require('./OpenChannelMessage.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-2mSBMc7H.js');
require('../../chunks/bundle-D433BJTy.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-Bwn93cY-.js');
require('../../Message/context.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-JQgZk-Pu.js');
require('../../chunks/bundle-C3yNDl4J.js');
require('../../chunks/bundle-Dab6jGiJ.js');
require('../../chunks/bundle-Doe5ECTj.js');
require('../../chunks/bundle-ROgXTJCJ.js');
require('../../chunks/bundle-meW-rxvL.js');
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
