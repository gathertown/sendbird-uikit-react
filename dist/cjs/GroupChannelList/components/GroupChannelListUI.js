'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var GroupChannelList_context = require('../context.js');
var GroupChannelListUIView = require('../../chunks/bundle-BqV1l90Z.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('./GroupChannelPreviewAction.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelList_components_GroupChannelListItem = require('./GroupChannelListItem.js');
var GroupChannelList_components_AddGroupChannel = require('./AddGroupChannel.js');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-C23eSC6c.js');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('./GroupChannelListHeader.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Header.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-DTKihS4S.js');
require('../../ui/IconButton.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-x4-U6h1l.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/Button.js');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DQY0kimN.js');
require('../../chunks/bundle-etwgXqw-.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-9xv4YoP5.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CXIbPam9.js');
require('../../chunks/bundle-DqGwmW4S.js');
require('../../chunks/bundle-D09pvvgs.js');
require('../../chunks/bundle-uiV3qgX6.js');
require('../../chunks/bundle-CJws8hP3.js');
require('../../chunks/bundle-BkazCoxG.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-COa5Ssfy.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-QohGAzPZ.js');
require('../../chunks/bundle-DERf-mCH.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-DfJDiLF1.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');

var GroupChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = GroupChannelList_context.useGroupChannelListContext(), onChannelSelect = _a.onChannelSelect, onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, typingChannelUrls = _a.typingChannelUrls, groupChannels = _a.groupChannels, initialized = _a.initialized, selectedChannelUrl = _a.selectedChannelUrl, loadMore = _a.loadMore, onUserProfileUpdated = _a.onUserProfileUpdated;
    var sortedGroupChannels = React.useMemo(function () {
        var _a, _b;
        return (_b = (_a = props.sortChannelList) === null || _a === void 0 ? void 0 : _a.call(props, groupChannels)) !== null && _b !== void 0 ? _b : groupChannels;
    }, [groupChannels, props.sortChannelList]);
    var _b = useSendbirdStateContext.useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, isOnline = config.isOnline;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (renderProps) {
        var channel = renderProps.item, index = renderProps.index;
        var itemProps = {
            channel: channel,
            tabIndex: index,
            isSelected: channel.url === selectedChannelUrl,
            isTyping: typingChannelUrls.includes(channel.url),
            renderChannelAction: function (props) { return React.createElement(GroupChannelList_components_GroupChannelPreviewAction.GroupChannelPreviewAction, _tslib.__assign({}, props)); },
            onClick: function () {
                if (isOnline || (sdk === null || sdk === void 0 ? void 0 : sdk.isCacheEnabled)) {
                    logger.info('ChannelList: Clicked on channel:', channel);
                    onChannelSelect(channel);
                }
                else {
                    logger.warning('ChannelList: Inactivated clicking channel item during offline.');
                }
            },
            onLeaveChannel: function () {
                return _tslib.__awaiter(this, void 0, void 0, function () {
                    return _tslib.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.info('ChannelList: Leaving channel', channel);
                                return [4 /*yield*/, channel.leave()];
                            case 1:
                                _a.sent();
                                logger.info('ChannelList: Leaving channel success');
                                return [2 /*return*/];
                        }
                    });
                });
            },
        };
        if (renderChannelPreview) {
            return (React.createElement("div", { key: channel.url, onClick: itemProps.onClick }, renderChannelPreview(itemProps)));
        }
        return React.createElement(GroupChannelList_components_GroupChannelListItem.GroupChannelListItem, _tslib.__assign({ key: channel.url }, itemProps));
    };
    return (React.createElement(GroupChannelListUIView.GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onUserProfileUpdated, channels: sortedGroupChannels, onLoadMore: loadMore, initialized: initialized, renderAddChannel: function () { return React.createElement(GroupChannelList_components_AddGroupChannel.AddGroupChannel, null); } }));
};

exports.GroupChannelListUI = GroupChannelListUI;
exports.default = GroupChannelListUI;
//# sourceMappingURL=GroupChannelListUI.js.map
