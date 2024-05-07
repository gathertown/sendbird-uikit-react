'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./chunks/bundle-BO5OZWjS.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var withSendbird = require('./withSendbird.js');
var cssVars = require('css-vars-ponyfill');
var index = require('./chunks/bundle-C6gATKTE.js');
var actionTypes = require('./chunks/bundle-D-g6JUod.js');
var useMarkAsDeliveredScheduler = require('./chunks/bundle-BMVVwEPv.js');
var SendbirdChat = require('@sendbird/chat');
var openChannel = require('@sendbird/chat/openChannel');
var groupChannel = require('@sendbird/chat/groupChannel');
var utils = require('./chunks/bundle-DgAALupQ.js');
var index$1 = require('./chunks/bundle-BoYSz_zM.js');
var VoicePlayer_context = require('./chunks/bundle-3bmKYTJ_.js');
var ui_Modal = require('./chunks/bundle-CBfBMqDz.js');
var LocalizationContext = require('./chunks/bundle-DKL8dMjq.js');
var MediaQueryContext = require('./chunks/bundle-BFgXaSuR.js');
var stringSet = require('./chunks/bundle-CNnH6vJ_.js');
var consts = require('./chunks/bundle-DI6hrkhw.js');
var resolvedReplyType = require('./chunks/bundle-D_b5XkOl.js');
var ui_ContextMenu = require('./ui/ContextMenu.js');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-BjldQ7ts.js');
require('react-dom');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CRRWhSHD.js');
require('./ui/Icon.js');
require('./chunks/bundle-BOaew5JK.js');
require('./chunks/bundle-B8rdv1pq.js');
require('./ui/SortByRow.js');

var isEmpty = function (obj) {
    if (obj === null || obj === undefined) {
        return true;
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};
var useTheme = function (overrides) {
    React.useLayoutEffect(function () {
        if (!isEmpty(overrides)) {
            cssVars({
                variables: _tslib.__assign({
                    '--sendbird-dark-primary-500': '#4d2aa6',
                    '--sendbird-dark-primary-400': '#6440C4',
                    '--sendbird-dark-primary-300': '#7B53EF',
                    '--sendbird-dark-primary-200': '#9E8CF5',
                    '--sendbird-dark-primary-100': '#E2DFFF',
                    '--sendbird-dark-secondary-500': '#007A7A',
                    '--sendbird-dark-secondary-400': '#189A8D',
                    '--sendbird-dark-secondary-300': '#2EBA9F',
                    '--sendbird-dark-secondary-200': '#6FD6BE',
                    '--sendbird-dark-secondary-100': '#AEF2DC',
                    '--sendbird-dark-information-100': '#b2d9ff',
                    '--sendbird-dark-error-500': '#A30E2D',
                    '--sendbird-dark-error-400': '#C11F41',
                    '--sendbird-dark-error-300': '#E53157',
                    '--sendbird-dark-error-200': '#FF6183',
                    '--sendbird-dark-error-100': '#FFABBD',
                    '--sendbird-dark-background-700': '#000000',
                    '--sendbird-dark-background-600': '#161616',
                    '--sendbird-dark-background-500': '#2C2C2C',
                    '--sendbird-dark-background-400': '#393939',
                    '--sendbird-dark-background-300': '#A8A8A8',
                    '--sendbird-dark-background-200': '#D9D9D9',
                    '--sendbird-dark-background-100': '#F0F0F0',
                    '--sendbird-dark-background-50': '#FFFFFF',
                    '--sendbird-dark-overlay': 'rgba(0, 0, 0, 0.32)',
                    '--sendbird-dark-onlight-01': 'rgba(0, 0, 0, 0.88)',
                    '--sendbird-dark-onlight-02': 'rgba(0, 0, 0, 0.50)',
                    '--sendbird-dark-onlight-03': 'rgba(0, 0, 0, 0.38)',
                    '--sendbird-dark-onlight-04': 'rgba(0, 0, 0, 0.12)',
                    '--sendbird-dark-ondark-01': 'rgba(255, 255, 255, 0.88)',
                    '--sendbird-dark-ondark-02': 'rgba(255, 255, 255, 0.50)',
                    '--sendbird-dark-ondark-03': 'rgba(255, 255, 255, 0.38)',
                    '--sendbird-dark-ondark-04': 'rgba(255, 255, 255, 0.12)',
                    '--sendbird-dark-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
                    '--sendbird-dark-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
                    '--sendbird-dark-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
                    '--sendbird-dark-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
                    '--sendbird-dark-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-primary-500': '#4d2aa6',
                    '--sendbird-light-primary-400': '#6440C4',
                    '--sendbird-light-primary-300': '#7B53EF',
                    '--sendbird-light-primary-200': '#9E8CF5',
                    '--sendbird-light-primary-100': '#E2DFFF',
                    '--sendbird-light-secondary-500': '#007A7A',
                    '--sendbird-light-secondary-400': '#189A8D',
                    '--sendbird-light-secondary-300': '#2EBA9F',
                    '--sendbird-light-secondary-200': '#6FD6BE',
                    '--sendbird-light-secondary-100': '#AEF2DC',
                    '--sendbird-light-information-100': '#b2d9ff',
                    '--sendbird-light-error-500': '#A30E2D',
                    '--sendbird-light-error-400': '#C11F41',
                    '--sendbird-light-error-300': '#E53157',
                    '--sendbird-light-error-200': '#FF6183',
                    '--sendbird-light-error-100': '#FFABBD',
                    '--sendbird-light-background-700': '#000000',
                    '--sendbird-light-background-600': '#161616',
                    '--sendbird-light-background-500': '#2C2C2C',
                    '--sendbird-light-background-400': '#393939',
                    '--sendbird-light-background-300': '#A8A8A8',
                    '--sendbird-light-background-200': '#D9D9D9',
                    '--sendbird-light-background-100': '#F0F0F0',
                    '--sendbird-light-background-50': ' #FFFFFF',
                    '--sendbird-light-overlay': 'rgba(0, 0, 0, 0.32)',
                    '--sendbird-light-onlight-01': 'rgba(0, 0, 0, 0.88)',
                    '--sendbird-light-onlight-02': 'rgba(0, 0, 0, 0.50)',
                    '--sendbird-light-onlight-03': 'rgba(0, 0, 0, 0.38)',
                    '--sendbird-light-onlight-04': 'rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-onlight-05': 'rgba(0, 0, 0, 0.44)',
                    '--sendbird-light-ondark-01': 'rgba(255, 255, 255, 0.88)',
                    '--sendbird-light-ondark-02': 'rgba(255, 255, 255, 0.50)',
                    '--sendbird-light-ondark-03': 'rgba(255, 255, 255, 0.38)',
                    '--sendbird-light-ondark-04': 'rgba(255, 255, 255, 0.12)',
                    '--sendbird-light-ondark-05': 'rgba(255, 255, 255, 0.44)',
                    '--sendbird-light-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
                    '--sendbird-light-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                }, overrides),
            });
        }
    }, [overrides]);
};

var SDK_ACTIONS = {
    INIT_SDK: 'INIT_SDK',
    SET_SDK_LOADING: 'SET_SDK_LOADING',
    RESET_SDK: 'RESET_SDK',
    SDK_ERROR: 'SDK_ERROR',
};

var initialState$2 = {
    initialized: false,
    loading: false,
    sdk: {},
    error: false,
};

function reducer$2(state, action) {
    return index.K(action)
        .with({ type: SDK_ACTIONS.SET_SDK_LOADING }, function (_a) {
        var payload = _a.payload;
        return _tslib.__assign(_tslib.__assign({}, state), { initialized: false, loading: payload });
    })
        .with({ type: SDK_ACTIONS.SDK_ERROR }, function () {
        return _tslib.__assign(_tslib.__assign({}, state), { initialized: false, loading: false, error: true });
    })
        .with({ type: SDK_ACTIONS.INIT_SDK }, function (_a) {
        var payload = _a.payload;
        return {
            sdk: payload,
            initialized: true,
            loading: false,
            error: false,
        };
    })
        .with({ type: SDK_ACTIONS.RESET_SDK }, function () {
        return initialState$2;
    })
        .otherwise(function () {
        return state;
    });
}

var initialState$1 = {
    initialized: false,
    loading: false,
    user: {},
};

function reducer$1(state, action) {
    return index.K(action)
        .with({ type: actionTypes.USER_ACTIONS.INIT_USER }, function (_a) {
        var payload = _a.payload;
        return {
            initialized: true,
            loading: false,
            user: payload,
        };
    })
        .with({ type: actionTypes.USER_ACTIONS.RESET_USER }, function () {
        return initialState$1;
    })
        .with({ type: actionTypes.USER_ACTIONS.UPDATE_USER_INFO }, function (_a) {
        var payload = _a.payload;
        return _tslib.__assign(_tslib.__assign({}, state), { user: payload });
    })
        .otherwise(function () {
        return state;
    });
}

var APP_INFO_ACTIONS = {
    INITIALIZE_MESSAGE_TEMPLATES_INFO: 'INITIALIZE_MESSAGE_TEMPLATES_INFO',
    UPSERT_MESSAGE_TEMPLATES: 'UPSERT_MESSAGE_TEMPLATES',
    UPSERT_WAITING_TEMPLATE_KEYS: 'UPSERT_WAITING_TEMPLATE_KEYS',
    MARK_ERROR_WAITING_TEMPLATE_KEYS: 'MARK_ERROR_WAITING_TEMPLATE_KEYS',
};

function reducer(state, action) {
    return index.K(action)
        .with({ type: APP_INFO_ACTIONS.INITIALIZE_MESSAGE_TEMPLATES_INFO }, function (_a) {
        var payload = _a.payload;
        return {
            messageTemplatesInfo: payload,
            waitingTemplateKeysMap: {},
        };
    })
        .with({ type: APP_INFO_ACTIONS.UPSERT_MESSAGE_TEMPLATES }, function (_a) {
        var payload = _a.payload;
        var templatesInfo = state.messageTemplatesInfo;
        if (!templatesInfo)
            return state; // Not initialized. Ignore.
        var waitingTemplateKeysMap = _tslib.__assign({}, state.waitingTemplateKeysMap);
        payload.forEach(function (templatesMapData) {
            var key = templatesMapData.key, template = templatesMapData.template;
            templatesInfo.templatesMap[key] = template;
            delete waitingTemplateKeysMap[key];
        });
        return _tslib.__assign(_tslib.__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap, messageTemplatesInfo: templatesInfo });
    })
        .with({ type: APP_INFO_ACTIONS.UPSERT_WAITING_TEMPLATE_KEYS }, function (_a) {
        var payload = _a.payload;
        var keys = payload.keys, requestedAt = payload.requestedAt;
        var waitingTemplateKeysMap = _tslib.__assign({}, state.waitingTemplateKeysMap);
        keys.forEach(function (key) {
            var _a, _b;
            waitingTemplateKeysMap[key] = {
                erroredMessageIds: (_b = (_a = waitingTemplateKeysMap[key]) === null || _a === void 0 ? void 0 : _a.erroredMessageIds) !== null && _b !== void 0 ? _b : [],
                requestedAt: requestedAt,
            };
        });
        return _tslib.__assign(_tslib.__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap });
    })
        .with({ type: APP_INFO_ACTIONS.MARK_ERROR_WAITING_TEMPLATE_KEYS }, function (_a) {
        var payload = _a.payload;
        var keys = payload.keys, messageId = payload.messageId;
        var waitingTemplateKeysMap = _tslib.__assign({}, state.waitingTemplateKeysMap);
        keys.forEach(function (key) {
            var waitingTemplateKeyData = waitingTemplateKeysMap[key];
            if (waitingTemplateKeyData && waitingTemplateKeyData.erroredMessageIds.indexOf(messageId) === -1) {
                waitingTemplateKeyData.erroredMessageIds.push(messageId);
            }
        });
        return _tslib.__assign(_tslib.__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap });
    })
        .otherwise(function () {
        return state;
    });
}

var initialState = {
    waitingTemplateKeysMap: {},
};

function disconnectSdk(_a) {
    return _tslib.__awaiter(this, arguments, void 0, function (_b) {
        var sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, sdk = _b.sdk;
        return _tslib.__generator(this, function (_c) {
            return [2 /*return*/, new Promise(function (resolve) {
                    sdkDispatcher({ type: SDK_ACTIONS.SET_SDK_LOADING, payload: true });
                    if (sdk === null || sdk === void 0 ? void 0 : sdk.disconnect) {
                        sdk.disconnect()
                            .then(function () {
                            sdkDispatcher({ type: SDK_ACTIONS.RESET_SDK });
                            userDispatcher({ type: actionTypes.USER_ACTIONS.RESET_USER });
                        })
                            .finally(function () {
                            resolve(true);
                        });
                    }
                    else {
                        resolve(true);
                    }
                })];
        });
    });
}

var APP_VERSION_STRING = '1.0.16';
var INIT_SDK = SDK_ACTIONS.INIT_SDK, SET_SDK_LOADING = SDK_ACTIONS.SET_SDK_LOADING, RESET_SDK = SDK_ACTIONS.RESET_SDK, SDK_ERROR = SDK_ACTIONS.SDK_ERROR;
var INIT_USER = actionTypes.USER_ACTIONS.INIT_USER, UPDATE_USER_INFO = actionTypes.USER_ACTIONS.UPDATE_USER_INFO, RESET_USER = actionTypes.USER_ACTIONS.RESET_USER;
function getMissingParamError(_a) {
    var userId = _a.userId, appId = _a.appId;
    return "SendbirdProvider | useConnect/setupConnection/Connection failed UserId: ".concat(userId, " or appId: ").concat(appId, " missing");
}
function getConnectSbError(error) {
    return "SendbirdProvider | useConnect/setupConnection/Connection failed. ".concat((error === null || error === void 0 ? void 0 : error.code) || '', " ").concat((error === null || error === void 0 ? void 0 : error.message) || '');
}
function setUpParams(_a) {
    var appId = _a.appId, _b = _a.isNewApp, isNewApp = _b === void 0 ? false : _b, customApiHost = _a.customApiHost, customWebSocketHost = _a.customWebSocketHost, _c = _a.sdkInitParams, sdkInitParams = _c === void 0 ? {} : _c;
    var params = Object.assign(sdkInitParams, {
        appId: appId,
        modules: [new groupChannel.GroupChannelModule(), new openChannel.OpenChannelModule()],
        newInstance: isNewApp,
        localCacheEnabled: true,
    });
    if (customApiHost)
        params.customApiHost = customApiHost;
    if (customWebSocketHost)
        params.customWebSocketHost = customWebSocketHost;
    return SendbirdChat.init(params);
}
// Steps
// 1. Check if minimum userID/appID is provided
//  1.a. If not, throw error > !reject
//  1.b. If yes, continue
// 2. Set up params with custom host if provided
// 3. Set up session handler if provided
// 4. Set up version
// 5. Connect to Sendbird -> either using user ID or (user ID + access token)
// 6. If connected, connectCbSucess
//  6.a check if nickname is to be updated -> no > !resolve immediately
//  6.b check if nickname is to be updated -> yes > update nickname > !resolve
// 7. If not connected, connectCbError > !reject
function setUpConnection(_a) {
    return _tslib.__awaiter(this, arguments, void 0, function (_b) {
        var _this = this;
        var logger = _b.logger, sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, initDashboardConfigs = _b.initDashboardConfigs, userId = _b.userId, appId = _b.appId, isNewApp = _b.isNewApp, customApiHost = _b.customApiHost, customWebSocketHost = _b.customWebSocketHost, configureSession = _b.configureSession, nickname = _b.nickname, profileUrl = _b.profileUrl, accessToken = _b.accessToken, isUserIdUsedForNickname = _b.isUserIdUsedForNickname, sdkInitParams = _b.sdkInitParams, customExtensionParams = _b.customExtensionParams, _c = _b.isMobile, isMobile = _c === void 0 ? false : _c, eventHandlers = _b.eventHandlers, initializeMessageTemplatesInfo = _b.initializeMessageTemplatesInfo;
        return _tslib.__generator(this, function (_d) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                    (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/init', { userId: userId, appId: appId });
                    var onConnectionFailed = (_b = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.connection) === null || _b === void 0 ? void 0 : _b.onFailed;
                    sdkDispatcher({ type: SET_SDK_LOADING, payload: true });
                    if (userId && appId) {
                        var newSdk_1 = setUpParams({
                            appId: appId,
                            customApiHost: customApiHost,
                            customWebSocketHost: customWebSocketHost,
                            isNewApp: isNewApp,
                            sdkInitParams: sdkInitParams,
                        });
                        if (configureSession && typeof configureSession === 'function') {
                            var sessionHandler = configureSession(newSdk_1);
                            (_c = logger === null || logger === void 0 ? void 0 : logger.info) === null || _c === void 0 ? void 0 : _c.call(logger, 'SendbirdProvider | useConnect/setupConnection/configureSession', sessionHandler);
                            newSdk_1.setSessionHandler(sessionHandler);
                        }
                        (_d = logger === null || logger === void 0 ? void 0 : logger.info) === null || _d === void 0 ? void 0 : _d.call(logger, 'SendbirdProvider | useConnect/setupConnection/setVersion', { version: APP_VERSION_STRING });
                        /**
                         * Keep optional chaining to the addSendbirdExtensions
                         * for supporting the ChatSDK v4.9.5 or less
                         */
                        (_e = newSdk_1 === null || newSdk_1 === void 0 ? void 0 : newSdk_1.addSendbirdExtensions) === null || _e === void 0 ? void 0 : _e.call(newSdk_1, [
                            {
                                product: (_f = SendbirdChat.SendbirdProduct === null || SendbirdChat.SendbirdProduct === void 0 ? void 0 : SendbirdChat.SendbirdProduct.UIKIT_CHAT) !== null && _f !== void 0 ? _f : 'uikit-chat',
                                version: APP_VERSION_STRING,
                                platform: (_g = SendbirdChat.SendbirdPlatform === null || SendbirdChat.SendbirdPlatform === void 0 ? void 0 : SendbirdChat.SendbirdPlatform.JS) !== null && _g !== void 0 ? _g : 'js',
                            },
                        ], {
                            platform: (isMobile
                                ? (_h = SendbirdChat.DeviceOsPlatform === null || SendbirdChat.DeviceOsPlatform === void 0 ? void 0 : SendbirdChat.DeviceOsPlatform.MOBILE_WEB) !== null && _h !== void 0 ? _h : 'mobile_web'
                                : (_j = SendbirdChat.DeviceOsPlatform === null || SendbirdChat.DeviceOsPlatform === void 0 ? void 0 : SendbirdChat.DeviceOsPlatform.WEB) !== null && _j !== void 0 ? _j : 'web'),
                        }, customExtensionParams);
                        newSdk_1.addExtension('sb_uikit', APP_VERSION_STRING);
                        var connectCbSuccess_1 = function (user) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                            var error_1;
                            var _a, _b, _c;
                            return _tslib.__generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/connectCbSuccess', user);
                                        sdkDispatcher({ type: INIT_SDK, payload: newSdk_1 });
                                        userDispatcher({ type: INIT_USER, payload: user });
                                        _d.label = 1;
                                    case 1:
                                        _d.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, initializeMessageTemplatesInfo(newSdk_1)];
                                    case 2:
                                        _d.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _d.sent();
                                        (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'SendbirdProvider | useConnect/setupConnection/upsertMessageTemplateListInLocalStorage failed', {
                                            error: error_1,
                                        });
                                        return [3 /*break*/, 4];
                                    case 4:
                                        initDashboardConfigs(newSdk_1)
                                            .then(function (config) {
                                            var _a;
                                            (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/getUIKitConfiguration success', {
                                                config: config,
                                            });
                                        })
                                            .catch(function (error) {
                                            var _a;
                                            (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/getUIKitConfiguration failed', {
                                                error: error,
                                            });
                                        });
                                        // use nickname/profileUrl if provided
                                        // or set userID as nickname
                                        if ((nickname !== user.nickname || profileUrl !== user.profileUrl)
                                            && !(index.isTextuallyNull(nickname) && index.isTextuallyNull(profileUrl))) {
                                            (_c = logger === null || logger === void 0 ? void 0 : logger.info) === null || _c === void 0 ? void 0 : _c.call(logger, 'SendbirdProvider | useConnect/setupConnection/updateCurrentUserInfo', {
                                                nickname: nickname,
                                                profileUrl: profileUrl,
                                            });
                                            newSdk_1.updateCurrentUserInfo({
                                                nickname: nickname || user.nickname || (isUserIdUsedForNickname ? user.userId : ''),
                                                profileUrl: profileUrl || user.profileUrl,
                                            }).then(function (namedUser) {
                                                var _a;
                                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/updateCurrentUserInfo success', {
                                                    nickname: nickname,
                                                    profileUrl: profileUrl,
                                                });
                                                userDispatcher({ type: UPDATE_USER_INFO, payload: namedUser });
                                            }).finally(function () {
                                                resolve();
                                            });
                                        }
                                        else {
                                            resolve();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        var connectCbError_1 = function (e) {
                            var _a;
                            var errorMessage = getConnectSbError(e);
                            (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, errorMessage, {
                                e: e,
                                appId: appId,
                                userId: userId,
                            });
                            sdkDispatcher({ type: RESET_SDK });
                            userDispatcher({ type: RESET_USER });
                            sdkDispatcher({ type: SDK_ERROR });
                            onConnectionFailed === null || onConnectionFailed === void 0 ? void 0 : onConnectionFailed(e);
                            // exit promise with error
                            reject(errorMessage);
                        };
                        (_k = logger === null || logger === void 0 ? void 0 : logger.info) === null || _k === void 0 ? void 0 : _k.call(logger, "SendbirdProvider | useConnect/setupConnection/connect connecting using ".concat(accessToken !== null && accessToken !== void 0 ? accessToken : userId));
                        newSdk_1.connect(userId, accessToken)
                            .then(function (res) { return connectCbSuccess_1(res); })
                            .catch(function (err) { return connectCbError_1(err); });
                    }
                    else {
                        var errorMessage = getMissingParamError({ userId: userId, appId: appId });
                        sdkDispatcher({ type: SDK_ERROR });
                        onConnectionFailed === null || onConnectionFailed === void 0 ? void 0 : onConnectionFailed({ message: errorMessage });
                        (_l = logger === null || logger === void 0 ? void 0 : logger.error) === null || _l === void 0 ? void 0 : _l.call(logger, errorMessage);
                        // exit promise with error
                        reject(errorMessage);
                    }
                })];
        });
    });
}

function connect(_a) {
    return _tslib.__awaiter(this, arguments, void 0, function (_b) {
        var logger = _b.logger, sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, appInfoDispatcher = _b.appInfoDispatcher, initDashboardConfigs = _b.initDashboardConfigs, userId = _b.userId, appId = _b.appId, _c = _b.isNewApp, isNewApp = _c === void 0 ? false : _c, customApiHost = _b.customApiHost, customWebSocketHost = _b.customWebSocketHost, configureSession = _b.configureSession, nickname = _b.nickname, profileUrl = _b.profileUrl, accessToken = _b.accessToken, sdk = _b.sdk, sdkInitParams = _b.sdkInitParams, customExtensionParams = _b.customExtensionParams, isMobile = _b.isMobile, eventHandlers = _b.eventHandlers, isUserIdUsedForNickname = _b.isUserIdUsedForNickname, initializeMessageTemplatesInfo = _b.initializeMessageTemplatesInfo;
        return _tslib.__generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, disconnectSdk({
                        logger: logger,
                        sdkDispatcher: sdkDispatcher,
                        userDispatcher: userDispatcher,
                        sdk: sdk,
                    })];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, setUpConnection({
                            logger: logger,
                            sdkDispatcher: sdkDispatcher,
                            userDispatcher: userDispatcher,
                            appInfoDispatcher: appInfoDispatcher,
                            initDashboardConfigs: initDashboardConfigs,
                            userId: userId,
                            appId: appId,
                            isNewApp: isNewApp,
                            customApiHost: customApiHost,
                            customWebSocketHost: customWebSocketHost,
                            configureSession: configureSession,
                            nickname: nickname,
                            profileUrl: profileUrl,
                            accessToken: accessToken,
                            sdkInitParams: sdkInitParams,
                            customExtensionParams: customExtensionParams,
                            isMobile: isMobile,
                            eventHandlers: eventHandlers,
                            isUserIdUsedForNickname: isUserIdUsedForNickname,
                            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
                        })];
                case 2:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function useConnect(triggerTypes, staticTypes) {
    var _this = this;
    var _a;
    var userId = triggerTypes.userId, appId = triggerTypes.appId, accessToken = triggerTypes.accessToken, isMobile = triggerTypes.isMobile, isUserIdUsedForNickname = triggerTypes.isUserIdUsedForNickname;
    var logger = staticTypes.logger, nickname = staticTypes.nickname, profileUrl = staticTypes.profileUrl, configureSession = staticTypes.configureSession, customApiHost = staticTypes.customApiHost, customWebSocketHost = staticTypes.customWebSocketHost, sdk = staticTypes.sdk, sdkDispatcher = staticTypes.sdkDispatcher, userDispatcher = staticTypes.userDispatcher, appInfoDispatcher = staticTypes.appInfoDispatcher, initDashboardConfigs = staticTypes.initDashboardConfigs, sdkInitParams = staticTypes.sdkInitParams, customExtensionParams = staticTypes.customExtensionParams, eventHandlers = staticTypes.eventHandlers, initializeMessageTemplatesInfo = staticTypes.initializeMessageTemplatesInfo;
    (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect', _tslib.__assign(_tslib.__assign({}, triggerTypes), staticTypes));
    // Note: This is a workaround to prevent the creation of multiple SDK instances when React strict mode is enabled.
    var connectDeps = React.useRef({
        appId: '',
        userId: '',
    });
    React.useEffect(function () {
        var _a;
        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/useEffect', { userId: userId, appId: appId, accessToken: accessToken });
        var isNewApp = connectDeps.current.appId !== appId;
        if (connectDeps.current.appId === appId && connectDeps.current.userId === userId) {
            return;
        }
        else {
            connectDeps.current = { appId: appId, userId: userId };
        }
        connect({
            userId: userId,
            appId: appId,
            isNewApp: isNewApp,
            accessToken: accessToken,
            logger: logger,
            nickname: nickname,
            profileUrl: profileUrl,
            configureSession: configureSession,
            customApiHost: customApiHost,
            customWebSocketHost: customWebSocketHost,
            sdk: sdk,
            sdkDispatcher: sdkDispatcher,
            userDispatcher: userDispatcher,
            appInfoDispatcher: appInfoDispatcher,
            initDashboardConfigs: initDashboardConfigs,
            isUserIdUsedForNickname: isUserIdUsedForNickname,
            sdkInitParams: sdkInitParams,
            customExtensionParams: customExtensionParams,
            isMobile: isMobile,
            eventHandlers: eventHandlers,
            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
        }).catch(function (error) {
            var _a;
            (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/useEffect', error);
        });
    }, [userId, appId]);
    var reconnect = React.useCallback(function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var error_1;
        var _a, _b;
        return _tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/reconnect/useCallback', { sdk: sdk });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connect({
                            userId: userId,
                            appId: appId,
                            accessToken: accessToken,
                            logger: logger,
                            nickname: nickname,
                            profileUrl: profileUrl,
                            configureSession: configureSession,
                            customApiHost: customApiHost,
                            customWebSocketHost: customWebSocketHost,
                            sdk: sdk,
                            sdkDispatcher: sdkDispatcher,
                            userDispatcher: userDispatcher,
                            appInfoDispatcher: appInfoDispatcher,
                            initDashboardConfigs: initDashboardConfigs,
                            isUserIdUsedForNickname: isUserIdUsedForNickname,
                            sdkInitParams: sdkInitParams,
                            customExtensionParams: customExtensionParams,
                            isMobile: isMobile,
                            eventHandlers: eventHandlers,
                            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
                        })];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'SendbirdProvider | useConnect/reconnect/useCallback', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [sdk]);
    return reconnect;
}

// Logger, pretty much explains it
// in SendbirdProvider
// const [logger, setLogger] = useState(LoggerFactory(logLevel));
var LOG_LEVELS = {
    DEBUG: 'debug',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
    ALL: 'all',
};
var colorLog = function (level) {
    switch (level) {
        case LOG_LEVELS.WARNING:
            return ('color: Orange');
        case LOG_LEVELS.ERROR:
            return ('color: Red');
        default:
            return ('color: Gray');
    }
};
var printLog = function (_a) {
    var level = _a.level, title = _a.title, _b = _a.description, description = _b === void 0 ? '' : _b, _c = _a.payload, payload = _c === void 0 ? [] : _c;
    // eslint-disable-next-line no-console
    console.log.apply(console, _tslib.__spreadArray(["%c SendbirdUIKit | ".concat(level, " | ").concat(new Date().toISOString(), " | ").concat(title, " ").concat(description && '|'), colorLog(level), description], payload, false));
};
var getDefaultLogger = function () { return ({
    info: utils.noop,
    error: utils.noop,
    warning: utils.noop,
}); };
var LoggerFactory = function (lvl, customInterface) {
    var logInterface = customInterface || printLog;
    var lvlArray = Array.isArray(lvl) ? lvl : [lvl];
    var applyLog = function (lgLvl) { return function (title, description) {
        var payload = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            payload[_i - 2] = arguments[_i];
        }
        return logInterface({
            level: lgLvl,
            title: title,
            description: description,
            payload: payload,
        });
    }; };
    return lvlArray.reduce(function (accumulator, currentLvl) {
        if (currentLvl === LOG_LEVELS.DEBUG || currentLvl === LOG_LEVELS.ALL) {
            return (_tslib.__assign(_tslib.__assign({}, accumulator), { info: applyLog(LOG_LEVELS.INFO), error: applyLog(LOG_LEVELS.ERROR), warning: applyLog(LOG_LEVELS.WARNING) }));
        }
        if (currentLvl === LOG_LEVELS.INFO) {
            return (_tslib.__assign(_tslib.__assign({}, accumulator), { info: applyLog(LOG_LEVELS.INFO) }));
        }
        if (currentLvl === LOG_LEVELS.ERROR) {
            return (_tslib.__assign(_tslib.__assign({}, accumulator), { error: applyLog(LOG_LEVELS.ERROR) }));
        }
        if (currentLvl === LOG_LEVELS.WARNING) {
            return (_tslib.__assign(_tslib.__assign({}, accumulator), { warning: applyLog(LOG_LEVELS.WARNING) }));
        }
        return _tslib.__assign({}, accumulator);
    }, getDefaultLogger());
};
// TODO: Make this to hook, useLogger

var VoiceMessageProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(VoicePlayer_context.VoicePlayerProvider, null,
        React.createElement(ui_Modal.VoiceRecorderProvider, null, children)));
};

function uikitConfigMapper(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
    var legacyConfig = _a.legacyConfig, _7 = _a.uikitOptions, uikitOptions = _7 === void 0 ? {} : _7;
    var replyType = legacyConfig.replyType, isMentionEnabled = legacyConfig.isMentionEnabled, isReactionEnabled = legacyConfig.isReactionEnabled, disableUserProfile = legacyConfig.disableUserProfile, isVoiceMessageEnabled = legacyConfig.isVoiceMessageEnabled, isTypingIndicatorEnabledOnChannelList = legacyConfig.isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList = legacyConfig.isMessageReceiptStatusEnabledOnChannelList, showSearchIcon = legacyConfig.showSearchIcon;
    return {
        common: {
            enableUsingDefaultUserProfile: (_c = (_b = uikitOptions.common) === null || _b === void 0 ? void 0 : _b.enableUsingDefaultUserProfile) !== null && _c !== void 0 ? _c : (typeof disableUserProfile === 'boolean' ? !disableUserProfile : undefined),
        },
        groupChannel: {
            enableOgtag: (_d = uikitOptions.groupChannel) === null || _d === void 0 ? void 0 : _d.enableOgtag,
            enableMention: (_f = (_e = uikitOptions.groupChannel) === null || _e === void 0 ? void 0 : _e.enableMention) !== null && _f !== void 0 ? _f : isMentionEnabled,
            enableReactions: (_h = (_g = uikitOptions.groupChannel) === null || _g === void 0 ? void 0 : _g.enableReactions) !== null && _h !== void 0 ? _h : isReactionEnabled,
            enableReactionsSupergroup: (_j = uikitOptions.groupChannel) === null || _j === void 0 ? void 0 : _j.enableReactionsSupergroup,
            enableTypingIndicator: (_k = uikitOptions.groupChannel) === null || _k === void 0 ? void 0 : _k.enableTypingIndicator,
            enableVoiceMessage: (_m = (_l = uikitOptions.groupChannel) === null || _l === void 0 ? void 0 : _l.enableVoiceMessage) !== null && _m !== void 0 ? _m : isVoiceMessageEnabled,
            replyType: (_p = (_o = uikitOptions.groupChannel) === null || _o === void 0 ? void 0 : _o.replyType) !== null && _p !== void 0 ? _p : (replyType != null ? resolvedReplyType.getCaseResolvedReplyType(replyType).lowerCase : undefined),
            threadReplySelectType: (_q = uikitOptions.groupChannel) === null || _q === void 0 ? void 0 : _q.threadReplySelectType,
            input: {
                enableDocument: (_s = (_r = uikitOptions.groupChannel) === null || _r === void 0 ? void 0 : _r.input) === null || _s === void 0 ? void 0 : _s.enableDocument,
            },
            typingIndicatorTypes: (_t = uikitOptions.groupChannel) === null || _t === void 0 ? void 0 : _t.typingIndicatorTypes,
            enableFeedback: (_u = uikitOptions.groupChannel) === null || _u === void 0 ? void 0 : _u.enableFeedback,
            enableSuggestedReplies: (_v = uikitOptions.groupChannel) === null || _v === void 0 ? void 0 : _v.enableSuggestedReplies,
            showSuggestedRepliesFor: (_w = uikitOptions.groupChannel) === null || _w === void 0 ? void 0 : _w.showSuggestedRepliesFor,
            suggestedRepliesDirection: (_x = uikitOptions.groupChannel) === null || _x === void 0 ? void 0 : _x.suggestedRepliesDirection,
        },
        groupChannelList: {
            enableTypingIndicator: (_z = (_y = uikitOptions.groupChannelList) === null || _y === void 0 ? void 0 : _y.enableTypingIndicator) !== null && _z !== void 0 ? _z : isTypingIndicatorEnabledOnChannelList,
            enableMessageReceiptStatus: (_1 = (_0 = uikitOptions.groupChannelList) === null || _0 === void 0 ? void 0 : _0.enableMessageReceiptStatus) !== null && _1 !== void 0 ? _1 : isMessageReceiptStatusEnabledOnChannelList,
        },
        groupChannelSettings: {
            enableMessageSearch: (_3 = (_2 = uikitOptions.groupChannelSettings) === null || _2 === void 0 ? void 0 : _2.enableMessageSearch) !== null && _3 !== void 0 ? _3 : showSearchIcon,
        },
        openChannel: {
            enableOgtag: (_4 = uikitOptions.openChannel) === null || _4 === void 0 ? void 0 : _4.enableOgtag,
            input: {
                enableDocument: (_6 = (_5 = uikitOptions.openChannel) === null || _5 === void 0 ? void 0 : _5.input) === null || _6 === void 0 ? void 0 : _6.enableDocument,
            },
        },
    };
}

function useMarkAsReadScheduler(_a, _b) {
    var isConnected = _a.isConnected;
    var logger = _b.logger;
    var markAsReadScheduler = React.useMemo(function () { return useMarkAsDeliveredScheduler.schedulerFactory({
        logger: logger,
        cb: function (channel) {
            try {
                channel.markAsRead();
            }
            catch (error) {
                logger.warning('Channel: Mark as delivered failed', { channel: channel, error: error });
            }
        },
    }); }, []);
    React.useEffect(function () {
        // for simplicity, we clear the queue when the connection is lost
        if (!isConnected) {
            markAsReadScheduler.clear();
        }
    }, [isConnected]);
    useMarkAsDeliveredScheduler.useUnmount(function () { markAsReadScheduler.clear(); });
    return markAsReadScheduler;
}

var uikitConfigStorage = {
    getItem: function (key) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var _a;
            return _tslib.__generator(this, function (_b) {
                return [2 /*return*/, (_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : null];
            });
        });
    },
    setItem: function (key, value) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, localStorage.setItem(key, value)];
            });
        });
    },
};

/**
 * Takes JSON parsed template and then returns processed message template for storing it in global state.
 */
var getProcessedTemplate = function (parsedTemplate) {
    return {
        version: Number(parsedTemplate.ui_template.version),
        uiTemplate: JSON.stringify(parsedTemplate.ui_template.body.items),
        colorVariables: parsedTemplate.color_variables,
    };
};
var getProcessedTemplatesMap = function (parsedTemplates) {
    var processedTemplates = {};
    parsedTemplates.forEach(function (template) {
        processedTemplates[template.key] = getProcessedTemplate(template);
    });
    return processedTemplates;
};

var MESSAGE_TEMPLATES_FETCH_LIMIT = 20;
var INITIALIZE_MESSAGE_TEMPLATES_INFO = APP_INFO_ACTIONS.INITIALIZE_MESSAGE_TEMPLATES_INFO, UPSERT_MESSAGE_TEMPLATES = APP_INFO_ACTIONS.UPSERT_MESSAGE_TEMPLATES, UPSERT_WAITING_TEMPLATE_KEYS = APP_INFO_ACTIONS.UPSERT_WAITING_TEMPLATE_KEYS, MARK_ERROR_WAITING_TEMPLATE_KEYS = APP_INFO_ACTIONS.MARK_ERROR_WAITING_TEMPLATE_KEYS;
function useMessageTemplateUtils(_a) {
    var _this = this;
    var sdk = _a.sdk, logger = _a.logger, appInfoStore = _a.appInfoStore, appInfoDispatcher = _a.appInfoDispatcher;
    var messageTemplatesInfo = appInfoStore === null || appInfoStore === void 0 ? void 0 : appInfoStore.messageTemplatesInfo;
    var getCachedTemplate = function (key) {
        var _a, _b;
        if (!messageTemplatesInfo)
            return null;
        var cachedTemplate = null;
        var cachedMessageTemplates = (_a = messageTemplatesInfo === null || messageTemplatesInfo === void 0 ? void 0 : messageTemplatesInfo.templatesMap) !== null && _a !== void 0 ? _a : null;
        if (cachedMessageTemplates) {
            cachedTemplate = (_b = cachedMessageTemplates[key]) !== null && _b !== void 0 ? _b : null;
        }
        return cachedTemplate;
    };
    /**
     * Fetches a single message template by given key and then
     * returns processed template for updating templates info in global state.
     * If no such templates exists (error) or any error occurs in response, return null.
     */
    var fetchAllMessageTemplates = function (readySdk) { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var hasMore, paginationToken, fetchedTemplates, res;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hasMore = true;
                    paginationToken = null;
                    fetchedTemplates = [];
                    _a.label = 1;
                case 1:
                    if (!hasMore) return [3 /*break*/, 3];
                    return [4 /*yield*/, readySdk.message.getMessageTemplatesByToken(paginationToken, { limit: MESSAGE_TEMPLATES_FETCH_LIMIT })];
                case 2:
                    res = _a.sent();
                    hasMore = res.hasMore;
                    paginationToken = res.token;
                    res.templates.forEach(function (messageTemplate) {
                        fetchedTemplates.push(JSON.parse(messageTemplate.template));
                    });
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, fetchedTemplates];
            }
        });
    }); };
    var initializeMessageTemplatesInfo = function (readySdk) { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var sdkMessageTemplateToken, cachedMessageTemplatesToken, cachedMessageTemplates, parsedTemplates, newMessageTemplatesInfo, parsedTemplates, newMessageTemplatesInfo;
        var _a;
        return _tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sdkMessageTemplateToken = (_a = readySdk.appInfo) === null || _a === void 0 ? void 0 : _a.messageTemplateInfo.token;
                    /**
                     * no sdkMessageTemplateToken => no templates => clear cached
                     */
                    if (!sdkMessageTemplateToken) {
                        localStorage.removeItem(consts.CACHED_MESSAGE_TEMPLATES_TOKEN_KEY);
                        localStorage.removeItem(consts.CACHED_MESSAGE_TEMPLATES_KEY);
                        return [2 /*return*/];
                    }
                    cachedMessageTemplatesToken = localStorage.getItem(consts.CACHED_MESSAGE_TEMPLATES_TOKEN_KEY);
                    cachedMessageTemplates = localStorage.getItem(consts.CACHED_MESSAGE_TEMPLATES_KEY);
                    if (!(!cachedMessageTemplatesToken
                        || cachedMessageTemplatesToken !== sdkMessageTemplateToken)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchAllMessageTemplates(readySdk)];
                case 1:
                    parsedTemplates = _b.sent();
                    newMessageTemplatesInfo = {
                        token: sdkMessageTemplateToken,
                        templatesMap: getProcessedTemplatesMap(parsedTemplates),
                    };
                    appInfoDispatcher({ type: INITIALIZE_MESSAGE_TEMPLATES_INFO, payload: newMessageTemplatesInfo });
                    localStorage.setItem(consts.CACHED_MESSAGE_TEMPLATES_TOKEN_KEY, sdkMessageTemplateToken);
                    localStorage.setItem(consts.CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify(parsedTemplates));
                    return [3 /*break*/, 3];
                case 2:
                    if (cachedMessageTemplatesToken
                        && cachedMessageTemplatesToken === sdkMessageTemplateToken
                        && cachedMessageTemplates) {
                        parsedTemplates = JSON.parse(cachedMessageTemplates);
                        newMessageTemplatesInfo = {
                            token: sdkMessageTemplateToken,
                            templatesMap: getProcessedTemplatesMap(parsedTemplates),
                        };
                        appInfoDispatcher({ type: INITIALIZE_MESSAGE_TEMPLATES_INFO, payload: newMessageTemplatesInfo });
                    }
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    /**
     * If given message is a template message with template key and if the key does not exist in the cache,
     * update the cache by fetching the template.
     */
    var updateMessageTemplatesInfo = function (templateKeys, messageId, requestedAt) { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var newParsedTemplates_1, hasMore, token, result, e_1, cachedMessageTemplates, parsedTemplates_1, existingKeys_1;
        var _a;
        return _tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!appInfoDispatcher) return [3 /*break*/, 7];
                    appInfoDispatcher({
                        type: UPSERT_WAITING_TEMPLATE_KEYS,
                        payload: {
                            keys: templateKeys,
                            requestedAt: requestedAt,
                        },
                    });
                    newParsedTemplates_1 = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    hasMore = true;
                    token = null;
                    _b.label = 2;
                case 2:
                    if (!hasMore) return [3 /*break*/, 4];
                    return [4 /*yield*/, sdk.message.getMessageTemplatesByToken(token, {
                            keys: templateKeys,
                        })];
                case 3:
                    result = _b.sent();
                    result.templates.forEach(function (newTemplate) {
                        newParsedTemplates_1.push(JSON.parse(newTemplate.template));
                    });
                    hasMore = result.hasMore;
                    token = result.token;
                    return [3 /*break*/, 2];
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'Sendbird | fetchProcessedMessageTemplates failed', e_1, templateKeys);
                    return [3 /*break*/, 6];
                case 6:
                    if (newParsedTemplates_1.length > 0) {
                        cachedMessageTemplates = localStorage.getItem(consts.CACHED_MESSAGE_TEMPLATES_KEY);
                        if (cachedMessageTemplates) {
                            parsedTemplates_1 = JSON.parse(cachedMessageTemplates);
                            existingKeys_1 = parsedTemplates_1.map(function (parsedTemplate) { return parsedTemplate.key; });
                            newParsedTemplates_1.forEach(function (newParsedTemplate) {
                                if (!existingKeys_1.includes(newParsedTemplate.key)) {
                                    parsedTemplates_1.push(newParsedTemplate);
                                }
                            });
                            localStorage.setItem(consts.CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify(parsedTemplates_1));
                        }
                        else {
                            localStorage.setItem(consts.CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify([newParsedTemplates_1]));
                        }
                        // Update memory
                        appInfoDispatcher({
                            type: UPSERT_MESSAGE_TEMPLATES,
                            payload: newParsedTemplates_1.map(function (newParsedTemplate) {
                                return {
                                    key: newParsedTemplate.key,
                                    template: getProcessedTemplate(newParsedTemplate),
                                };
                            }),
                        });
                    }
                    else {
                        appInfoDispatcher({
                            type: MARK_ERROR_WAITING_TEMPLATE_KEYS,
                            payload: {
                                keys: templateKeys,
                                messageId: messageId,
                            },
                        });
                    }
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return {
        getCachedTemplate: getCachedTemplate,
        updateMessageTemplatesInfo: updateMessageTemplatesInfo,
        initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
    };
}

function SendbirdProvider(props) {
    var localConfigs = uikitConfigMapper({
        legacyConfig: {
            replyType: props.replyType,
            isMentionEnabled: props.isMentionEnabled,
            isReactionEnabled: props.isReactionEnabled,
            disableUserProfile: props.disableUserProfile,
            isVoiceMessageEnabled: props.isVoiceMessageEnabled,
            isTypingIndicatorEnabledOnChannelList: props.isTypingIndicatorEnabledOnChannelList,
            isMessageReceiptStatusEnabledOnChannelList: props.isMessageReceiptStatusEnabledOnChannelList,
            showSearchIcon: props.showSearchIcon,
        },
        uikitOptions: props.uikitOptions,
    });
    return (React.createElement(uikitTools.UIKitConfigProvider, { storage: uikitConfigStorage, localConfigs: {
            common: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.common,
            groupChannel: {
                channel: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannel,
                channelList: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannelList,
                setting: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannelSettings,
            },
            openChannel: {
                channel: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.openChannel,
            },
        } },
        React.createElement(SendbirdSDK, _tslib.__assign({}, props))));
}
var SendbirdSDK = function (_a) {
    var _b, _c, _d;
    var appId = _a.appId, userId = _a.userId, children = _a.children, accessToken = _a.accessToken, customApiHost = _a.customApiHost, customWebSocketHost = _a.customWebSocketHost, _e = _a.configureSession, configureSession = _e === void 0 ? null : _e, _f = _a.theme, theme = _f === void 0 ? 'light' : _f, _g = _a.config, config = _g === void 0 ? {} : _g, _h = _a.nickname, nickname = _h === void 0 ? '' : _h, _j = _a.colorSet, colorSet = _j === void 0 ? null : _j, _k = _a.stringSet, stringSet$1 = _k === void 0 ? null : _k, _l = _a.dateLocale, dateLocale = _l === void 0 ? null : _l, _m = _a.profileUrl, profileUrl = _m === void 0 ? '' : _m, voiceRecord = _a.voiceRecord, _o = _a.userListQuery, userListQuery = _o === void 0 ? null : _o, _p = _a.imageCompression, imageCompression = _p === void 0 ? {} : _p, _q = _a.allowProfileEdit, allowProfileEdit = _q === void 0 ? false : _q, _r = _a.disableMarkAsDelivered, disableMarkAsDelivered = _r === void 0 ? false : _r, _s = _a.renderUserProfile, renderUserProfile = _s === void 0 ? null : _s, _t = _a.onUserProfileMessage, onUserProfileMessage = _t === void 0 ? null : _t, _u = _a.breakpoint, breakpoint = _u === void 0 ? false : _u, _v = _a.isUserIdUsedForNickname, isUserIdUsedForNickname = _v === void 0 ? true : _v, sdkInitParams = _a.sdkInitParams, customExtensionParams = _a.customExtensionParams, _w = _a.isMultipleFilesMessageEnabled, isMultipleFilesMessageEnabled = _w === void 0 ? false : _w, eventHandlers = _a.eventHandlers;
    var _x = config.logLevel, logLevel = _x === void 0 ? '' : _x, _y = config.userMention, userMention = _y === void 0 ? {} : _y, _z = config.isREMUnitEnabled, isREMUnitEnabled = _z === void 0 ? false : _z, customPubSub = config.pubSub;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var _0 = React.useState(LoggerFactory(logLevel)), logger = _0[0], setLogger = _0[1];
    var pubSub = React.useState(function () { return customPubSub !== null && customPubSub !== void 0 ? customPubSub : index$1.pubSubFactory(); })[0];
    var _1 = React.useReducer(reducer$2, initialState$2), sdkStore = _1[0], sdkDispatcher = _1[1];
    var _2 = React.useReducer(reducer$1, initialState$1), userStore = _2[0], userDispatcher = _2[1];
    var _3 = React.useReducer(reducer, initialState), appInfoStore = _3[0], appInfoDispatcher = _3[1];
    var _4 = uikitTools.useUIKitConfig(), configs = _4.configs, configsWithAppAttr = _4.configsWithAppAttr, initDashboardConfigs = _4.initDashboardConfigs;
    var sdkInitialized = sdkStore.initialized;
    var sdk = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.sdk;
    var _5 = (_b = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) !== null && _b !== void 0 ? _b : {}, uploadSizeLimit = _5.uploadSizeLimit, multipleFilesMessageFileCountLimit = _5.multipleFilesMessageFileCountLimit;
    useTheme(colorSet);
    var _6 = useMessageTemplateUtils({
        sdk: sdk,
        logger: logger,
        appInfoStore: appInfoStore,
        appInfoDispatcher: appInfoDispatcher,
    }), getCachedTemplate = _6.getCachedTemplate, updateMessageTemplatesInfo = _6.updateMessageTemplatesInfo, initializeMessageTemplatesInfo = _6.initializeMessageTemplatesInfo;
    var utils = {
        updateMessageTemplatesInfo: updateMessageTemplatesInfo,
        getCachedTemplate: getCachedTemplate,
    };
    var reconnect = useConnect({
        appId: appId,
        userId: userId,
        accessToken: accessToken,
        isUserIdUsedForNickname: isUserIdUsedForNickname,
        isMobile: isMobile,
    }, {
        logger: logger,
        nickname: nickname,
        profileUrl: profileUrl,
        configureSession: configureSession,
        customApiHost: customApiHost,
        customWebSocketHost: customWebSocketHost,
        sdkInitParams: sdkInitParams,
        customExtensionParams: customExtensionParams,
        sdk: sdk,
        sdkDispatcher: sdkDispatcher,
        userDispatcher: userDispatcher,
        appInfoDispatcher: appInfoDispatcher,
        initDashboardConfigs: initDashboardConfigs,
        eventHandlers: eventHandlers,
        initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
    });
    useMarkAsDeliveredScheduler.useUnmount(function () {
        if (typeof sdk.disconnect === 'function') {
            disconnectSdk({
                logger: logger,
                sdkDispatcher: sdkDispatcher,
                userDispatcher: userDispatcher,
                sdk: sdk,
            });
        }
    }, [sdk.disconnect]);
    // to create a pubsub to communicate between parent and child
    React.useEffect(function () {
        setLogger(LoggerFactory(logLevel));
    }, [logLevel]);
    // should move to reducer
    var _7 = React.useState(theme), currentTheme = _7[0], setCurrentTheme = _7[1];
    React.useEffect(function () {
        setCurrentTheme(theme);
    }, [theme]);
    React.useEffect(function () {
        var body = document.querySelector('body');
        body.classList.remove('sendbird-experimental__rem__units');
        if (isREMUnitEnabled) {
            body.classList.add('sendbird-experimental__rem__units');
        }
    }, [isREMUnitEnabled]);
    // add-remove theme from body
    React.useEffect(function () {
        logger.info('Setup theme', "Theme: ".concat(currentTheme));
        try {
            var body = document.querySelector('body');
            body.classList.remove('sendbird-theme--light');
            body.classList.remove('sendbird-theme--dark');
            body.classList.add("sendbird-theme--".concat(currentTheme || 'light'));
            logger.info('Finish setup theme');
            // eslint-disable-next-line no-empty
        }
        catch (e) {
            logger.warning('Setup theme failed', "".concat(e));
        }
        return function () {
            try {
                var body = document.querySelector('body');
                body.classList.remove('sendbird-theme--light');
                body.classList.remove('sendbird-theme--dark');
                // eslint-disable-next-line no-empty
            }
            catch (_a) { }
        };
    }, [currentTheme]);
    var isOnline = useMarkAsDeliveredScheduler.useOnlineStatus(sdkStore.sdk, logger);
    var markAsReadScheduler = useMarkAsReadScheduler({ isConnected: isOnline }, { logger: logger });
    var markAsDeliveredScheduler = useMarkAsDeliveredScheduler.useMarkAsDeliveredScheduler({ isConnected: isOnline }, { logger: logger });
    var localeStringSet = React.useMemo(function () {
        if (!stringSet$1) {
            return stringSet.getStringSet('en');
        }
        return _tslib.__assign(_tslib.__assign({}, stringSet.getStringSet('en')), stringSet$1);
    }, [stringSet$1]);
    /**
     * Feature Configuration - TODO
     * This will be moved into the UIKitConfigProvider, aftering Dashboard applies
     */
    var uikitMultipleFilesMessageLimit = React.useMemo(function () {
        return Math.min(consts.DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT, multipleFilesMessageFileCountLimit !== null && multipleFilesMessageFileCountLimit !== void 0 ? multipleFilesMessageFileCountLimit : Number.MAX_SAFE_INTEGER);
    }, [multipleFilesMessageFileCountLimit]);
    var uikitUploadSizeLimit = React.useMemo(function () {
        return uploadSizeLimit;
    }, [uploadSizeLimit]);
    // Emoji Manager
    var emojiManager = React.useMemo(function () {
        return new ui_Modal.EmojiManager({
            sdk: sdk,
            logger: logger,
        });
    }, [sdkStore.initialized]);
    return (React.createElement(withSendbird.SendbirdSdkContext.Provider, { value: {
            stores: {
                sdkStore: sdkStore,
                userStore: userStore,
                appInfoStore: appInfoStore,
            },
            dispatchers: {
                sdkDispatcher: sdkDispatcher,
                userDispatcher: userDispatcher,
                appInfoDispatcher: appInfoDispatcher,
                reconnect: reconnect,
            },
            config: {
                disableMarkAsDelivered: disableMarkAsDelivered,
                renderUserProfile: renderUserProfile,
                onUserProfileMessage: onUserProfileMessage,
                allowProfileEdit: allowProfileEdit,
                isOnline: isOnline,
                userId: userId,
                appId: appId,
                accessToken: accessToken,
                theme: currentTheme,
                setCurrentTheme: setCurrentTheme,
                setCurrenttheme: setCurrentTheme, // deprecated: typo
                isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
                uikitUploadSizeLimit: uikitUploadSizeLimit,
                uikitMultipleFilesMessageLimit: uikitMultipleFilesMessageLimit,
                userListQuery: userListQuery,
                logger: logger,
                pubSub: pubSub,
                imageCompression: _tslib.__assign({ compressionRate: 0.7, outputFormat: 'preserve' }, imageCompression),
                voiceRecord: {
                    maxRecordingTime: (_c = voiceRecord === null || voiceRecord === void 0 ? void 0 : voiceRecord.maxRecordingTime) !== null && _c !== void 0 ? _c : consts.VOICE_RECORDER_DEFAULT_MAX,
                    minRecordingTime: (_d = voiceRecord === null || voiceRecord === void 0 ? void 0 : voiceRecord.minRecordingTime) !== null && _d !== void 0 ? _d : consts.VOICE_RECORDER_DEFAULT_MIN,
                },
                userMention: {
                    maxMentionCount: (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10,
                    maxSuggestionCount: (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15,
                },
                markAsReadScheduler: markAsReadScheduler,
                markAsDeliveredScheduler: markAsDeliveredScheduler,
                // Remote configs set from dashboard by UIKit feature configuration
                common: configs.common,
                groupChannel: {
                    enableOgtag: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableOgtag,
                    enableTypingIndicator: configs.groupChannel.channel.enableTypingIndicator,
                    enableReactions: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactions,
                    enableReactionsSupergroup: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactionsSupergroup,
                    enableMention: configs.groupChannel.channel.enableMention,
                    replyType: configs.groupChannel.channel.replyType,
                    threadReplySelectType: configs.groupChannel.channel.threadReplySelectType,
                    enableVoiceMessage: configs.groupChannel.channel.enableVoiceMessage,
                    enableDocument: configs.groupChannel.channel.input.enableDocument,
                    typingIndicatorTypes: configs.groupChannel.channel.typingIndicatorTypes,
                    enableFeedback: configs.groupChannel.channel.enableFeedback,
                    enableSuggestedReplies: configs.groupChannel.channel.enableSuggestedReplies,
                    showSuggestedRepliesFor: configs.groupChannel.channel.showSuggestedRepliesFor,
                    suggestedRepliesDirection: configs.groupChannel.channel.suggestedRepliesDirection,
                },
                groupChannelList: {
                    enableTypingIndicator: configs.groupChannel.channelList.enableTypingIndicator,
                    enableMessageReceiptStatus: configs.groupChannel.channelList.enableMessageReceiptStatus,
                },
                groupChannelSettings: {
                    enableMessageSearch: sdkInitialized && configsWithAppAttr(sdk).groupChannel.setting.enableMessageSearch,
                },
                openChannel: {
                    enableOgtag: sdkInitialized && configsWithAppAttr(sdk).openChannel.channel.enableOgtag,
                    enableDocument: configs.openChannel.channel.input.enableDocument,
                },
                // deprecated configs
                disableUserProfile: !configs.common.enableUsingDefaultUserProfile,
                isReactionEnabled: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactions,
                isMentionEnabled: configs.groupChannel.channel.enableMention,
                isVoiceMessageEnabled: configs.groupChannel.channel.enableVoiceMessage,
                replyType: resolvedReplyType.getCaseResolvedReplyType(configs.groupChannel.channel.replyType).upperCase,
                isTypingIndicatorEnabledOnChannelList: configs.groupChannel.channelList.enableTypingIndicator,
                isMessageReceiptStatusEnabledOnChannelList: configs.groupChannel.channelList.enableMessageReceiptStatus,
                showSearchIcon: sdkInitialized && configsWithAppAttr(sdk).groupChannel.setting.enableMessageSearch,
            },
            eventHandlers: eventHandlers,
            emojiManager: emojiManager,
            utils: utils,
        } },
        React.createElement(MediaQueryContext.MediaQueryProvider, { logger: logger, breakpoint: breakpoint },
            React.createElement(LocalizationContext.LocalizationProvider, { stringSet: localeStringSet, dateLocale: dateLocale },
                React.createElement(VoiceMessageProvider, null,
                    React.createElement(ui_Modal.GlobalModalProvider, null, children)))),
        React.createElement(ui_ContextMenu.EmojiReactionListRoot, null),
        React.createElement(ui_Modal.ModalRoot, null),
        React.createElement(ui_ContextMenu.MenuRoot, null)));
};

exports.useSendbirdStateContext = useSendbirdStateContext.useSendbirdStateContext;
exports.SendbirdProvider = SendbirdProvider;
exports.default = SendbirdProvider;
//# sourceMappingURL=SendbirdProvider.js.map
