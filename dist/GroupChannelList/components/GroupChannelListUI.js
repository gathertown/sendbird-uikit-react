import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-BpxXmFQC.js';
import React__default, { useMemo } from 'react';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListUIView } from '../../chunks/bundle-DQy1Uqt3.js';
import { GroupChannelPreviewAction } from './GroupChannelPreviewAction.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { GroupChannelListItem } from './GroupChannelListItem.js';
import { AddGroupChannel } from './AddGroupChannel.js';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-B5S1bYog.js';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '../../chunks/bundle-DIC0UBC5.js';
import './GroupChannelListHeader.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../ui/Header.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/IconButton.js';
import '../../EditUserProfile.js';
import '../../EditUserProfile/context.js';
import '../../EditUserProfile/components/EditUserProfileUI.js';
import '../../chunks/bundle-DHYQq-_e.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '../../utils/message/getOutgoingMessageState.js';
import 'react-dom';
import '../../ui/Button.js';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../ui/Input.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-D8nOQMZK.js';
import '../../chunks/bundle-C4J9I_bG.js';
import '../../chunks/bundle-BOFstL3F.js';
import '../../chunks/bundle-vUCKPp-d.js';
import '../../chunks/bundle-j8r_Qf5o.js';
import '../../chunks/bundle-7w1t0thc.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-DccoJxVN.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-B-B5rbcY.js';
import '../../chunks/bundle-Dngqq5qI.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-qHiLgYYm.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-oBEHM7Oi.js';
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
