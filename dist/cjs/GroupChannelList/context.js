'use strict';

var _tslib = require('../chunks/bundle-DHh3VdoS.js');
var React = require('react');
var groupChannel = require('@sendbird/chat/groupChannel');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../chunks/bundle-BKwrdy8Y.js');
var useMarkAsDeliveredScheduler = require('../chunks/bundle-C23eSC6c.js');
var utils = require('../chunks/bundle-BvJOj_Nb.js');
require('../withSendbird.js');
require('@sendbird/chat');
require('../chunks/bundle-DtHyD1hB.js');

var GroupChannelListContext = React.createContext(null);
var GroupChannelListProvider = function (props) {
    var _a, _b, _c;
    var children = props.children, _d = props.className, className = _d === void 0 ? '' : _d, selectedChannelUrl = props.selectedChannelUrl, _e = props.disableAutoSelect, disableAutoSelect = _e === void 0 ? false : _e, allowProfileEdit = props.allowProfileEdit, isTypingIndicatorEnabled = props.isTypingIndicatorEnabled, isMessageReceiptStatusEnabled = props.isMessageReceiptStatusEnabled, channelListQueryParams = props.channelListQueryParams, onThemeChange = props.onThemeChange, _f = props.onChannelSelect, onChannelSelect = _f === void 0 ? utils.noop : _f, _g = props.onChannelCreated, onChannelCreated = _g === void 0 ? utils.noop : _g, onCreateChannelClick = props.onCreateChannelClick, onBeforeCreateChannel = props.onBeforeCreateChannel, onUserProfileUpdated = props.onUserProfileUpdated, disableUserProfile = props.disableUserProfile, renderUserProfile = props.renderUserProfile, onUserProfileMessage = props.onUserProfileMessage;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var config = globalStore.config, stores = globalStore.stores;
    var sdkStore = stores.sdkStore;
    var sdk = sdkStore.sdk;
    var isConnected = useMarkAsDeliveredScheduler.useOnlineStatus(sdk, config.logger);
    var scheduler = useMarkAsDeliveredScheduler.useMarkAsDeliveredScheduler({ isConnected: isConnected }, config);
    var channelListDataSource = uikitTools.useGroupChannelList(sdk, {
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
    React.useEffect(function () {
        var _a;
        if (!disableAutoSelect && stores.sdkStore.initialized && initialized) {
            if (!selectedChannelUrl)
                onChannelSelect((_a = groupChannels[0]) !== null && _a !== void 0 ? _a : null);
        }
    }, [disableAutoSelect, stores.sdkStore.initialized, initialized, selectedChannelUrl]);
    var _h = React.useState([]), typingChannelUrls = _h[0], setTypingChannelUrls = _h[1];
    uikitTools.useGroupChannelHandler(sdk, {
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
    return (React.createElement(GroupChannelListContext.Provider, { value: {
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
        React.createElement(UserProfileContext.UserProfileProvider, { disableUserProfile: disableUserProfile !== null && disableUserProfile !== void 0 ? disableUserProfile : !config.common.enableUsingDefaultUserProfile, renderUserProfile: renderUserProfile !== null && renderUserProfile !== void 0 ? renderUserProfile : config === null || config === void 0 ? void 0 : config.renderUserProfile, onUserProfileMessage: onUserProfileMessage !== null && onUserProfileMessage !== void 0 ? onUserProfileMessage : config === null || config === void 0 ? void 0 : config.onUserProfileMessage },
            React.createElement("div", { className: "sendbird-channel-list ".concat(className) }, children))));
};
var useGroupChannelListContext = function () {
    var context = React.useContext(GroupChannelListContext);
    if (!context)
        throw new Error('GroupChannelListContext not found. Use within the GroupChannelList module.');
    return context;
};
function getCollectionCreator(sdk, channelListQueryParams) {
    return function (defaultParams) {
        var params = _tslib.__assign(_tslib.__assign({}, defaultParams), channelListQueryParams);
        return sdk.groupChannel.createGroupChannelCollection(_tslib.__assign(_tslib.__assign({}, params), { filter: new groupChannel.GroupChannelFilter(params) }));
    };
}

exports.GroupChannelListContext = GroupChannelListContext;
exports.GroupChannelListProvider = GroupChannelListProvider;
exports.useGroupChannelListContext = useGroupChannelListContext;
//# sourceMappingURL=context.js.map
