'use strict';

var _tslib = require('../../chunks/bundle-2PlwnSzC.js');
var React = require('react');
var ChannelList_components_ChannelPreview = require('./ChannelPreview.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('../../GroupChannelList/components/GroupChannelPreviewAction.js');
var ChannelList_context = require('../../chunks/bundle-lggWQMID.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelListUIView = require('../../chunks/bundle-PsRV86Ux.js');
var ChannelList_components_AddChannel = require('./AddChannel.js');
require('../../chunks/bundle-D2Bg8CLY.js');
require('../../chunks/bundle-BlYafk3l.js');
require('../../chunks/bundle-DzJC_TK7.js');
require('../../chunks/bundle-BQHlCNa7.js');
require('../../chunks/bundle-5izjntYE.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DMrzJD8i.js');
require('../../chunks/bundle-BUH06mHS.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-1yGs9Nzf.js');
require('../../chunks/bundle-CoFmIxJK.js');
require('../../chunks/bundle-BByabw2E.js');
require('../../chunks/bundle-BewU7zpu.js');
require('../../chunks/bundle-Gh-C2yIM.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../chunks/bundle-aXbXs3dl.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Bh7J_SsW.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-DgzUMNGp.js');
require('../../chunks/bundle-BQNX69rh.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-DFlw8iK3.js');
require('../../chunks/bundle-BPS3DFTX.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BPDG2Sth.js');
require('../../chunks/bundle-tCz2WwyT.js');
require('../../chunks/bundle-DLvdMF5T.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-Cxw_pnFf.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-BeszEZzp.js');
require('../../chunks/bundle-k7WGsMsr.js');
require('../../chunks/bundle-CY2ZZQEc.js');
require('../../GroupChannelList/components/GroupChannelListHeader.js');
require('../../ui/Header.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-DDZSvAgP.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../chunks/bundle-DHZxYemr.js');
require('../../chunks/bundle-meW-rxvL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-ROgXTJCJ.js');
require('../../chunks/bundle-c6R1tdbY.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-COwOuaYd.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');

var ChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = ChannelList_context.useChannelListContext(), onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, allChannels = _a.allChannels, currentChannel = _a.currentChannel, channelListDispatcher = _a.channelListDispatcher, typingChannels = _a.typingChannels, initialized = _a.initialized, fetchChannelList = _a.fetchChannelList, onProfileEditSuccess = _a.onProfileEditSuccess;
    var _b = useSendbirdStateContext.useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, _c = config.isOnline, isOnline = _c === void 0 ? false : _c;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (props) {
        var channel = props.item, index = props.index;
        var previewProps = {
            channel: channel,
            tabIndex: index,
            isSelected: (channel === null || channel === void 0 ? void 0 : channel.url) === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url),
            isTyping: typingChannels === null || typingChannels === void 0 ? void 0 : typingChannels.some(function (_a) {
                var url = _a.url;
                return url === (channel === null || channel === void 0 ? void 0 : channel.url);
            }),
            renderChannelAction: function (props) { return React.createElement(GroupChannelList_components_GroupChannelPreviewAction.GroupChannelPreviewAction, _tslib.__assign({}, props)); },
            onClick: function () {
                if (!isOnline && !(sdk === null || sdk === void 0 ? void 0 : sdk.isCacheEnabled)) {
                    logger.warning('ChannelList: Inactivated clicking channel item during offline.');
                    return;
                }
                logger.info('ChannelList: Clicked on channel:', channel);
                channelListDispatcher({
                    type: ChannelList_context.SET_CURRENT_CHANNEL,
                    payload: channel,
                });
            },
            onLeaveChannel: function (channel, cb) {
                return _tslib.__awaiter(this, void 0, void 0, function () {
                    var response, err_1;
                    return _tslib.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.info('ChannelList: Leaving channel', channel);
                                if (!channel) return [3 /*break*/, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, channel.leave()];
                            case 2:
                                response = _a.sent();
                                logger.info('ChannelList: Leaving channel success', response);
                                if (cb && typeof cb === 'function')
                                    cb(channel, null);
                                channelListDispatcher({
                                    type: ChannelList_context.LEAVE_CHANNEL_SUCCESS,
                                    payload: channel.url,
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                logger.error('ChannelList: Leaving channel failed', err_1);
                                if (cb && typeof cb === 'function')
                                    cb(channel, err_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            },
        };
        if (renderChannelPreview) {
            return (React.createElement("div", { key: channel === null || channel === void 0 ? void 0 : channel.url, onClick: previewProps.onClick }, renderChannelPreview(previewProps)));
        }
        return React.createElement(ChannelList_components_ChannelPreview, _tslib.__assign({ key: channel === null || channel === void 0 ? void 0 : channel.url }, previewProps));
    };
    return (React.createElement(GroupChannelListUIView.GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onProfileEditSuccess, channels: allChannels, onLoadMore: fetchChannelList, initialized: initialized, renderAddChannel: function () { return React.createElement(ChannelList_components_AddChannel.AddChannel, null); } }));
};

module.exports = ChannelListUI;
//# sourceMappingURL=ChannelListUI.js.map