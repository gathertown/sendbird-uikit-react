import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-h5nSe8RU.js';
import React__default from 'react';
import ChannelPreview from './ChannelPreview.js';
import { GroupChannelPreviewAction } from '../../GroupChannelList/components/GroupChannelPreviewAction.js';
import { u as useChannelListContext, S as SET_CURRENT_CHANNEL, L as LEAVE_CHANNEL_SUCCESS } from '../../chunks/bundle-DdS0qDV5.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { G as GroupChannelListUIView } from '../../chunks/bundle-C34gPOHY.js';
import { AddChannel } from './AddChannel.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-_orI-r2C.js';
import '../../chunks/bundle-g-7qyWG4.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CLbk4-g8.js';
import '../../chunks/bundle-BlILx8DA.js';
import '../../chunks/bundle-BKd2irNF.js';
import '../../chunks/bundle-TmVTNucb.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../chunks/bundle-1rHkiOvv.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../chunks/bundle-BdvKKcJL.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-D0BqMFi-.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-DZuFrRTP.js';
import '../../GroupChannelList/components/GroupChannelListHeader.js';
import '../../ui/Header.js';
import '../../EditUserProfile.js';
import '../../EditUserProfile/context.js';
import '../../EditUserProfile/components/EditUserProfileUI.js';
import '../../chunks/bundle-CYLrpNRK.js';
import '../../ui/Input.js';
import '../../ui/PlaceHolder.js';
import '../../chunks/bundle-D2TKgUHv.js';
import '../../chunks/bundle-TVGnyGwG.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DE6jjGXF.js';
import '../../chunks/bundle-C3oPtU0d.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-CL5Tdu95.js';
import '../../sendbirdSelectors.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../CreateChannel/components/SelectChannelType.js';

var ChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = useChannelListContext(), onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, allChannels = _a.allChannels, currentChannel = _a.currentChannel, channelListDispatcher = _a.channelListDispatcher, typingChannels = _a.typingChannels, initialized = _a.initialized, fetchChannelList = _a.fetchChannelList, onProfileEditSuccess = _a.onProfileEditSuccess;
    var _b = useSendbirdStateContext(), stores = _b.stores, config = _b.config;
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
            renderChannelAction: function (props) { return React__default.createElement(GroupChannelPreviewAction, __assign({}, props)); },
            onClick: function () {
                if (!isOnline && !(sdk === null || sdk === void 0 ? void 0 : sdk.isCacheEnabled)) {
                    logger.warning('ChannelList: Inactivated clicking channel item during offline.');
                    return;
                }
                logger.info('ChannelList: Clicked on channel:', channel);
                channelListDispatcher({
                    type: SET_CURRENT_CHANNEL,
                    payload: channel,
                });
            },
            onLeaveChannel: function (channel, cb) {
                return __awaiter(this, void 0, void 0, function () {
                    var response, err_1;
                    return __generator(this, function (_a) {
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
                                    type: LEAVE_CHANNEL_SUCCESS,
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
            return (React__default.createElement("div", { key: channel === null || channel === void 0 ? void 0 : channel.url, onClick: previewProps.onClick }, renderChannelPreview(previewProps)));
        }
        return React__default.createElement(ChannelPreview, __assign({ key: channel === null || channel === void 0 ? void 0 : channel.url }, previewProps));
    };
    return (React__default.createElement(GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onProfileEditSuccess, channels: allChannels, onLoadMore: fetchChannelList, initialized: initialized, renderAddChannel: function () { return React__default.createElement(AddChannel, null); } }));
};

export { ChannelListUI as default };
//# sourceMappingURL=ChannelListUI.js.map
