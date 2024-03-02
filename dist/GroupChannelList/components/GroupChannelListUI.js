import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-D8IuvsaW.js';
import React__default, { useMemo } from 'react';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListUIView } from '../../chunks/bundle-B2Lds07U.js';
import { GroupChannelPreviewAction } from './GroupChannelPreviewAction.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { GroupChannelListItem } from './GroupChannelListItem.js';
import { AddGroupChannel } from './AddGroupChannel.js';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BOf_eEF-.js';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '../../chunks/bundle-0yILBaSQ.js';
import './GroupChannelListHeader.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../ui/Header.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
import '../../ui/IconButton.js';
import '../../EditUserProfile.js';
import '../../EditUserProfile/context.js';
import '../../EditUserProfile/components/EditUserProfileUI.js';
import '../../chunks/bundle-B1OOyz2J.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-BnYBX14T.js';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '../../ui/Input.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-se836s50.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-B9Guj1rz.js';
import '../../chunks/bundle-BlLFOUrw.js';
import '../../chunks/bundle-CCxOcaGS.js';
import '../../chunks/bundle-Ch8Obp48.js';
import '../../chunks/bundle-Cbh-C1NV.js';
import '../../chunks/bundle-BaiQZ39W.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-DD5Dgrc3.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-DqsDxEmW.js';
import '../../chunks/bundle-a9wGnJBx.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-DaGkz7O6.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../CreateChannel/components/SelectChannelType.js';

var GroupChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = useGroupChannelListContext(), onChannelSelect = _a.onChannelSelect, onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, typingChannelUrls = _a.typingChannelUrls, groupChannels = _a.groupChannels, initialized = _a.initialized, selectedChannelUrl = _a.selectedChannelUrl, loadMore = _a.loadMore, onUserProfileUpdated = _a.onUserProfileUpdated;
    var sortedGroupChannels = useMemo(function () {
        var _a, _b;
        return (_b = (_a = props.sortChannelList) === null || _a === void 0 ? void 0 : _a.call(props, groupChannels)) !== null && _b !== void 0 ? _b : groupChannels;
    }, [groupChannels, props.sortChannelList]);
    var _b = useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, isOnline = config.isOnline;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (renderProps) {
        var channel = renderProps.item, index = renderProps.index;
        var itemProps = {
            channel: channel,
            tabIndex: index,
            isSelected: channel.url === selectedChannelUrl,
            isTyping: typingChannelUrls.includes(channel.url),
            renderChannelAction: function (props) { return React__default.createElement(GroupChannelPreviewAction, __assign({}, props)); },
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
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
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
            return (React__default.createElement("div", { key: channel.url, onClick: itemProps.onClick }, renderChannelPreview(itemProps)));
        }
        return React__default.createElement(GroupChannelListItem, __assign({ key: channel.url }, itemProps));
    };
    return (React__default.createElement(GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onUserProfileUpdated, channels: sortedGroupChannels, onLoadMore: loadMore, initialized: initialized, renderAddChannel: function () { return React__default.createElement(AddGroupChannel, null); } }));
};

export { GroupChannelListUI, GroupChannelListUI as default };
//# sourceMappingURL=GroupChannelListUI.js.map
