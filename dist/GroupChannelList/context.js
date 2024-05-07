import { _ as __assign } from '../chunks/bundle-D8IuvsaW.js';
import React__default, { useEffect, useState, useContext } from 'react';
import { GroupChannelFilter } from '@sendbird/chat/groupChannel';
import { useGroupChannelList, useGroupChannelHandler } from '@sendbird/uikit-tools';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { U as UserProfileProvider } from '../chunks/bundle-BxO5H6aF.js';
import { u as useOnlineStatus, a as useMarkAsDeliveredScheduler } from '../chunks/bundle-BOf_eEF-.js';
import { n as noop } from '../chunks/bundle-0yILBaSQ.js';
import '../withSendbird.js';
import '@sendbird/chat';
import '../chunks/bundle-DgRY6xy0.js';

var GroupChannelListContext = React__default.createContext(null);
var GroupChannelListProvider = function (props) {
    var _a, _b, _c;
    var children = props.children, _d = props.className, className = _d === void 0 ? '' : _d, selectedChannelUrl = props.selectedChannelUrl, _e = props.disableAutoSelect, disableAutoSelect = _e === void 0 ? false : _e, allowProfileEdit = props.allowProfileEdit, isTypingIndicatorEnabled = props.isTypingIndicatorEnabled, isMessageReceiptStatusEnabled = props.isMessageReceiptStatusEnabled, channelListQueryParams = props.channelListQueryParams, onThemeChange = props.onThemeChange, _f = props.onChannelSelect, onChannelSelect = _f === void 0 ? noop : _f, _g = props.onChannelCreated, onChannelCreated = _g === void 0 ? noop : _g, onCreateChannelClick = props.onCreateChannelClick, onBeforeCreateChannel = props.onBeforeCreateChannel, onUserProfileUpdated = props.onUserProfileUpdated, disableUserProfile = props.disableUserProfile, renderUserProfile = props.renderUserProfile, onUserProfileMessage = props.onUserProfileMessage;
    var globalStore = useSendbirdStateContext();
    var config = globalStore.config, stores = globalStore.stores;
    var sdkStore = stores.sdkStore;
    var sdk = sdkStore.sdk;
    var isConnected = useOnlineStatus(sdk, config.logger);
    var scheduler = useMarkAsDeliveredScheduler({ isConnected: isConnected }, config);
    var channelListDataSource = useGroupChannelList(sdk, {
        collectionCreator: getCollectionCreator(sdk, channelListQueryParams),
        markAsDelivered: function (channels) { return channels.forEach(scheduler.push); },
        onChannelsDeleted: function (channelUrls) {
            channelUrls.forEach(function (url) {
                if (url === selectedChannelUrl)
                    onChannelSelect(null);
            });
        },
    });
    var refreshing = channelListDataSource.refreshing, initialized = channelListDataSource.initialized, groupChannels = channelListDataSource.groupChannels, refresh = channelListDataSource.refresh, loadMore = channelListDataSource.loadMore;
    // SideEffect: Auto select channel
    useEffect(function () {
        var _a;
        if (!disableAutoSelect && stores.sdkStore.initialized && initialized) {
            if (!selectedChannelUrl)
                onChannelSelect((_a = groupChannels[0]) !== null && _a !== void 0 ? _a : null);
        }
    }, [disableAutoSelect, stores.sdkStore.initialized, initialized, selectedChannelUrl]);
    var _h = useState([]), typingChannelUrls = _h[0], setTypingChannelUrls = _h[1];
    useGroupChannelHandler(sdk, {
        onTypingStatusUpdated: function (channel) {
            var _a;
            var channelList = typingChannelUrls.filter(function (channelUrl) { return channelUrl !== channel.url; });
            if (((_a = channel.getTypingUsers()) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                setTypingChannelUrls(channelList.concat(channel.url));
            }
            else {
                setTypingChannelUrls(channelList);
            }
        },
    });
    return (React__default.createElement(GroupChannelListContext.Provider, { value: {
            className: className,
            selectedChannelUrl: selectedChannelUrl,
            disableAutoSelect: disableAutoSelect,
            allowProfileEdit: (_a = allowProfileEdit !== null && allowProfileEdit !== void 0 ? allowProfileEdit : config.allowProfileEdit) !== null && _a !== void 0 ? _a : true,
            isTypingIndicatorEnabled: (_b = isTypingIndicatorEnabled !== null && isTypingIndicatorEnabled !== void 0 ? isTypingIndicatorEnabled : config.groupChannelList.enableTypingIndicator) !== null && _b !== void 0 ? _b : false,
            isMessageReceiptStatusEnabled: (_c = isMessageReceiptStatusEnabled !== null && isMessageReceiptStatusEnabled !== void 0 ? isMessageReceiptStatusEnabled : config.groupChannelList.enableMessageReceiptStatus) !== null && _c !== void 0 ? _c : false,
            onChannelSelect: onChannelSelect,
            onChannelCreated: onChannelCreated,
            onThemeChange: onThemeChange,
            onCreateChannelClick: onCreateChannelClick,
            onBeforeCreateChannel: onBeforeCreateChannel,
            onUserProfileUpdated: onUserProfileUpdated,
            typingChannelUrls: typingChannelUrls,
            refreshing: refreshing,
            initialized: initialized,
            groupChannels: groupChannels,
            refresh: refresh,
            loadMore: loadMore,
        } },
        React__default.createElement(UserProfileProvider, { disableUserProfile: disableUserProfile !== null && disableUserProfile !== void 0 ? disableUserProfile : !config.common.enableUsingDefaultUserProfile, renderUserProfile: renderUserProfile !== null && renderUserProfile !== void 0 ? renderUserProfile : config === null || config === void 0 ? void 0 : config.renderUserProfile, onUserProfileMessage: onUserProfileMessage !== null && onUserProfileMessage !== void 0 ? onUserProfileMessage : config === null || config === void 0 ? void 0 : config.onUserProfileMessage },
            React__default.createElement("div", { className: "sendbird-channel-list ".concat(className) }, children))));
};
var useGroupChannelListContext = function () {
    var context = useContext(GroupChannelListContext);
    if (!context)
        throw new Error('GroupChannelListContext not found. Use within the GroupChannelList module.');
    return context;
};
function getCollectionCreator(sdk, channelListQueryParams) {
    return function (defaultParams) {
        var params = __assign(__assign({}, defaultParams), channelListQueryParams);
        return sdk.groupChannel.createGroupChannelCollection(__assign(__assign({}, params), { filter: new GroupChannelFilter(params) }));
    };
}

export { GroupChannelListContext, GroupChannelListProvider, useGroupChannelListContext };
//# sourceMappingURL=context.js.map
