'use strict';

var _tslib = require('../chunks/bundle-B67weJWw.js');
var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../chunks/bundle-LbGezufX.js');
var uuid = require('../chunks/bundle-c87q7xEA.js');
require('../withSendbird.js');

function useAsyncRequest(request, options) {
    var _this = this;
    var _a;
    var _b = React.useState({ loading: true, response: undefined, error: undefined }), state = _b[0], setState = _b[1];
    var updateWithRequest = function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var response_1, error_1;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setState(function (prev) { return ({ loading: true, error: undefined, response: (options === null || options === void 0 ? void 0 : options.resetResponseOnRefresh) ? undefined : prev.response }); });
                    return [4 /*yield*/, request()];
                case 1:
                    response_1 = _a.sent();
                    if (response_1) {
                        setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { response: response_1, loading: false })); });
                    }
                    else {
                        setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { loading: Boolean(options === null || options === void 0 ? void 0 : options.persistLoadingIfNoResponse) })); });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { error: error_1, loading: false })); });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        updateWithRequest();
        return function () {
            if (request.cancel && typeof request.cancel === 'function') {
                request.cancel();
            }
        };
    }, (_a = options === null || options === void 0 ? void 0 : options.deps) !== null && _a !== void 0 ? _a : []);
    return _tslib.__assign(_tslib.__assign({}, state), { refresh: updateWithRequest });
}

var ChannelSettingsContext = React.createContext(null);
var ChannelSettingsProvider = function (_a) {
    var children = _a.children, className = _a.className, channelUrl = _a.channelUrl, onCloseClick = _a.onCloseClick, onLeaveChannel = _a.onLeaveChannel, onChannelModified = _a.onChannelModified, overrideInviteUser = _a.overrideInviteUser, onBeforeUpdateChannel = _a.onBeforeUpdateChannel, queries = _a.queries, renderUserProfile = _a.renderUserProfile, disableUserProfile = _a.disableUserProfile;
    var _b = useSendbirdStateContext.useSendbirdStateContext(), config = _b.config, stores = _b.stores;
    var sdkStore = stores.sdkStore;
    var logger = config.logger, onUserProfileMessage = config.onUserProfileMessage;
    // hack to keep track of channel updates by triggering useEffect
    var _c = React.useState(function () { return uuid.uuidv4(); }), channelUpdateId = _c[0], setChannelUpdateId = _c[1];
    var forceUpdateUI = function () { return setChannelUpdateId(uuid.uuidv4()); };
    var _d = useAsyncRequest(function () { return _tslib.__awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger.info('ChannelSettings: fetching channel');
                    if (!channelUrl) {
                        logger.warning('ChannelSettings: channel url is required');
                        return [2 /*return*/];
                    }
                    else if (!sdkStore.initialized || !sdkStore.sdk) {
                        logger.warning('ChannelSettings: SDK is not initialized');
                        return [2 /*return*/];
                    }
                    else if (!sdkStore.sdk.groupChannel) {
                        logger.warning('ChannelSettings: GroupChannelModule is not specified in the SDK');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sdkStore.sdk.groupChannel.getChannel(channelUrl)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    logger.error('ChannelSettings: fetching channel error:', error_1.message);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); }, {
        resetResponseOnRefresh: true,
        persistLoadingIfNoResponse: true,
        deps: [sdkStore.initialized, sdkStore.sdk.groupChannel],
    }), _e = _d.response, response = _e === void 0 ? null : _e, loading = _d.loading, error = _d.error, refresh = _d.refresh;
    React.useEffect(function () {
        refresh();
    }, [channelUrl, channelUpdateId]);
    return (React.createElement(ChannelSettingsContext.Provider, { value: {
            channelUrl: channelUrl,
            onCloseClick: onCloseClick,
            onLeaveChannel: onLeaveChannel,
            onChannelModified: onChannelModified,
            onBeforeUpdateChannel: onBeforeUpdateChannel,
            queries: queries,
            overrideInviteUser: overrideInviteUser,
            setChannelUpdateId: setChannelUpdateId,
            forceUpdateUI: forceUpdateUI,
            channel: response,
            loading: loading,
            invalidChannel: Boolean(error),
        } },
        React.createElement(UserProfileContext.UserProfileProvider, { renderUserProfile: renderUserProfile, disableUserProfile: disableUserProfile !== null && disableUserProfile !== void 0 ? disableUserProfile : !config.common.enableUsingDefaultUserProfile, onUserProfileMessage: onUserProfileMessage },
            React.createElement("div", { className: "sendbird-channel-settings ".concat(className) }, children))));
};
var useChannelSettingsContext = function () { return React.useContext(ChannelSettingsContext); };

exports.ChannelSettingsProvider = ChannelSettingsProvider;
exports.useChannelSettingsContext = useChannelSettingsContext;
//# sourceMappingURL=context.js.map
