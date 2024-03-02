'use strict';

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var ChannelList_components_ChannelPreview = require('./ChannelPreview.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('../../GroupChannelList/components/GroupChannelPreviewAction.js');
var ChannelList_context = require('../../chunks/bundle-B17JC9rv.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelListUIView = require('../../chunks/bundle-BqV1l90Z.js');
var ChannelList_components_AddChannel = require('./AddChannel.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-CXIbPam9.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../chunks/bundle-CJws8hP3.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-CG5E97k8.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-uwsvYO4l.js');
require('../../GroupChannelList/components/GroupChannelListHeader.js');
require('../../ui/Header.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-x4-U6h1l.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../chunks/bundle-DERf-mCH.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-DfJDiLF1.js');
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
