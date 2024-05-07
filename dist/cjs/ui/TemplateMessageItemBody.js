'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-B67weJWw.js');
var React = require('react');
var index = require('../chunks/bundle-sSPmDeMC.js');
var ui_MessageTemplate = require('../chunks/bundle-DshTea70.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var ui_FallbackTemplateMessageItemBody_tsx = require('./FallbackTemplateMessageItemBody.tsx.js');
var ui_LoadingTemplateMessageItemBody_tsx = require('./LoadingTemplateMessageItemBody.tsx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../withSendbird.js');
require('../chunks/bundle-BplSuW2v.js');
require('../chunks/bundle-z7hq7hFO.js');
require('../chunks/bundle-DEDYKTrW.js');
require('../chunks/bundle-X-ZtnRCT.js');
require('./Loader.js');
require('./Icon.js');
require('../chunks/bundle-CrJkvCS4.js');

var MessageTemplateWrapper = function (_a) {
    var message = _a.message, templateVersion = _a.templateVersion, templateItems = _a.templateItems;
    return React.createElement(ui_MessageTemplate.MessageProvider, { message: message },
        React.createElement(ui_MessageTemplate.MessageTemplate, { templateVersion: templateVersion, templateItems: templateItems }));
};

var NumberValueKeys = [
    'version',
    'size',
    'top',
    'left',
    'right',
    'bottom',
    'maxTextLines',
    'value',
    'pixelWidth',
    'pixelHeight',
    'radius',
];
function restoreNumbersFromMessageTemplateObject(value, key) {
    if (Array.isArray(value)) {
        return value.map(function (item) { return restoreNumbersFromMessageTemplateObject(item); });
    }
    if (typeof value === 'object') {
        return Object.keys(value).reduce(function (acc, key) {
            acc[key] = restoreNumbersFromMessageTemplateObject(value[key], key);
            return acc;
        }, {});
    }
    if (key != null && NumberValueKeys.includes(key)) {
        var numberValue = Number(value);
        return Number.isNaN(numberValue) ? value : numberValue;
    }
    return value;
}

var flattenObjectHelper = function (currentObject, flattenObject, parentKeyPath) {
    if (parentKeyPath === void 0) { parentKeyPath = ''; }
    for (var _i = 0, _a = Object.entries(currentObject); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var currentKeyPath = parentKeyPath ? "".concat(parentKeyPath, ".").concat(key) : key;
        if (value && typeof value === 'object') {
            flattenObjectHelper(value, flattenObject, currentKeyPath);
        }
        else {
            flattenObject[currentKeyPath] = value;
        }
    }
};
/**
 * Returns flattened object.
 * ex.
 * given { key-1: { key-1.1: 'value-1.1' }, key-2: 'value-2' }
 * returns { key-1.key-1.1: 'value-1.1', key-2: 'value-2' }
 */
function flattenObject(object) {
    var result = {};
    flattenObjectHelper(object, result);
    return result;
}

function convertArgbToRgba(string) {
    if (!string.startsWith('#')) {
        return string;
    }
    if (string.length === 9) {
        return "#".concat(string.slice(3)).concat(string[1]).concat(string[2]);
    }
    if (string.length === 5) {
        return "#".concat(string.slice(2)).concat(string[1]);
    }
    return string;
}
var splitColorVariables = function (colorVariables) {
    var light = {};
    var dark = {};
    for (var key in colorVariables) {
        if (Object.prototype.hasOwnProperty.call(colorVariables, key)) {
            var value = colorVariables[key];
            if (typeof value === 'object' && value !== null) {
                var _a = splitColorVariables(value), nestedLight = _a[0], nestedDark = _a[1];
                light[key] = nestedLight;
                dark[key] = nestedDark;
            }
            else if (typeof value === 'string') {
                var _b = value.split(','), lightColor = _b[0], darkColor = _b[1];
                light[key] = lightColor;
                dark[key] = darkColor || lightColor; // when dark color is not provided, use light color
            }
            else {
                light[key] = value;
                dark[key] = value;
            }
        }
    }
    return [light, dark];
};
function selectColorVariablesByTheme(_a) {
    var colorVariables = _a.colorVariables, theme = _a.theme;
    var _b = splitColorVariables(colorVariables), light = _b[0], dark = _b[1];
    return theme === 'light' ? light : dark;
}

var COLOR_KEYS = {
    color: true,
    tintColor: true,
    backgroundColor: true,
    borderColor: true,
};
function mapData(_a) {
    var template = _a.template, source = _a.source;
    if (!['object', 'string'].includes(typeof template) || !template)
        return template;
    var regex = /\{([^}]+)\}/g;
    var flattenedSource = flattenObject(source);
    function replaceVariablePlaceholder(value) {
        return typeof value === 'string'
            ? value.replace(regex, function (_, placeholder) {
                var value = flattenedSource[placeholder];
                return value || "{".concat(placeholder, "}");
            })
            : mapData({ template: value, source: source });
    }
    if (typeof template === 'string') {
        return replaceVariablePlaceholder(template);
    }
    if (Array.isArray(template)) {
        return template.map(replaceVariablePlaceholder);
    }
    var result = {};
    for (var key in template) {
        if (Object.prototype.hasOwnProperty.call(template, key)) {
            var value = template[key];
            var replacedVal = replaceVariablePlaceholder(value);
            if (COLOR_KEYS[key] && typeof replacedVal === 'string') {
                replacedVal = convertArgbToRgba(replacedVal);
            }
            result[key] = replacedVal;
        }
    }
    return result;
}

var MessageTemplateErrorBoundary = /** @class */ (function (_super) {
    _tslib.__extends(MessageTemplateErrorBoundary, _super);
    function MessageTemplateErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MessageTemplateErrorBoundary.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MessageTemplateErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        var _a;
        (_a = this.props.logger) === null || _a === void 0 ? void 0 : _a.error('Error caught by ErrorBoundary:', error, errorInfo);
    };
    MessageTemplateErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            this.props.onTemplateMessageRenderedCallback('failed');
            return this.props.fallbackMessage;
        }
        this.props.onTemplateMessageRenderedCallback(this.props.isComposite ? 'composite' : 'simple');
        return this.props.children;
    };
    return MessageTemplateErrorBoundary;
}(React.Component));

var TEMPLATE_FETCH_RETRY_BUFFER_TIME_IN_MILLIES = 500; // It takes about 450ms for isError update
/**
 * Returns copied message template object filled with given template data and color variables.
 */
var getFilledMessageTemplateWithData = function (_a) {
    var template = _a.template, _b = _a.templateData, templateData = _b === void 0 ? {} : _b, colorVariables = _a.colorVariables, theme = _a.theme;
    var selectedThemeColorVariables = {};
    if (colorVariables && theme) {
        selectedThemeColorVariables = selectColorVariablesByTheme({
            colorVariables: colorVariables,
            theme: theme,
        });
    }
    var source = _tslib.__assign(_tslib.__assign({}, templateData), selectedThemeColorVariables);
    var parsedTemplate = mapData({
        template: restoreNumbersFromMessageTemplateObject(template),
        source: source,
    });
    return parsedTemplate;
};
function TemplateMessageItemBody(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message, _d = _a.isByMe, isByMe = _d === void 0 ? false : _d, _e = _a.theme, theme = _e === void 0 ? 'light' : _e, _f = _a.onTemplateMessageRenderedCallback, onTemplateMessageRenderedCallback = _f === void 0 ? function () { } : _f;
    var templateData = (_b = message.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b['template'];
    var getFailedBody = function () {
        onTemplateMessageRenderedCallback('failed');
        return React.createElement(ui_FallbackTemplateMessageItemBody_tsx.FallbackTemplateMessageItemBody, { className: className, message: message, isByMe: isByMe });
    };
    if (!(templateData === null || templateData === void 0 ? void 0 : templateData.key)) {
        return getFailedBody();
    }
    var templateKey = templateData.key;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    if (!globalState) {
        return getFailedBody();
    }
    var _g = globalState.utils, getCachedTemplate = _g.getCachedTemplate, updateMessageTemplatesInfo = _g.updateMessageTemplatesInfo;
    var logger = globalState.config.logger;
    var waitingTemplateKeysMap = globalState.stores.appInfoStore.waitingTemplateKeysMap;
    var waitingTemplateKeysMapString = Object.entries(waitingTemplateKeysMap)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, value.requestedAt, value.erroredMessageIds.join(',')].join('-');
    }).join('_');
    var _h = React.useState(getFilledMessageTemplateItems()), renderData = _h[0], setRenderData = _h[1];
    function getFilledMessageTemplateItemsForCarouselTemplateByMessagePayload(simpleTemplateDataList) {
        var cachedSimpleTemplates = [];
        var simpleTemplatesVariables = [];
        var maxVersion = 0;
        simpleTemplateDataList.forEach(function (simpleTemplateData) {
            var simpleTemplateKey = simpleTemplateData.key;
            if (!simpleTemplateKey) {
                logger.error('TemplateMessageItemBody | simple template keys are not found in view_variables: ', simpleTemplateDataList);
                throw new Error('TemplateMessageItemBody | simple template keys are not found in view_variables.');
            }
            var simpleCachedTemplate = getCachedTemplate(simpleTemplateKey);
            cachedSimpleTemplates.push(simpleCachedTemplate);
            simpleTemplatesVariables.push(simpleTemplateData.variables);
            maxVersion = Math.max(maxVersion, simpleCachedTemplate.version);
        });
        var filledMessageTemplateItemsList = cachedSimpleTemplates
            .map(function (cachedSimpleTemplate, index) {
            var templateItems = JSON.parse(cachedSimpleTemplate.uiTemplate);
            var filledMessageTemplateItems = getFilledMessageTemplateWithData({
                template: templateItems,
                templateData: simpleTemplatesVariables[index],
                colorVariables: cachedSimpleTemplate.colorVariables,
                theme: theme,
            });
            return filledMessageTemplateItems;
        });
        return {
            maxVersion: maxVersion,
            filledTemplates: filledMessageTemplateItemsList,
        };
    }
    function getFilledMessageTemplateItemsForCarouselTemplate(uiTemplates) {
        var maxVersion = 0;
        var filledTemplates = [];
        uiTemplates.forEach(function (uiTemplate) {
            maxVersion = Math.max(maxVersion, uiTemplate.version);
            var filledMessageTemplateItems = getFilledMessageTemplateWithData({
                template: uiTemplate.body.items,
            });
            filledTemplates.push(filledMessageTemplateItems);
        });
        return {
            maxVersion: maxVersion,
            filledTemplates: filledTemplates,
        };
    }
    function getFilledMessageTemplateItemsForSimpleTemplate(templateItems, colorVariables) {
        var _a;
        var filledMessageTemplateItems = getFilledMessageTemplateWithData({
            template: templateItems,
            templateData: (_a = templateData === null || templateData === void 0 ? void 0 : templateData.variables) !== null && _a !== void 0 ? _a : {},
            colorVariables: colorVariables,
            theme: theme,
        });
        return filledMessageTemplateItems;
    }
    function getFilledMessageTemplateItems() {
        var result = {
            filledMessageTemplateItemsList: [],
            isErrored: false,
        };
        var nonCachedTemplateKeys = [];
        var cachedTemplate = getCachedTemplate(templateKey);
        if (!cachedTemplate) {
            nonCachedTemplateKeys.push(templateKey);
        }
        if (templateData.view_variables) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(templateData.view_variables).forEach(function (_a) {
                    var _ = _a[0], simpleTemplateDataList = _a[1];
                    simpleTemplateDataList.forEach(function (simpleTemplateData) {
                        var simpleTemplateKey = simpleTemplateData === null || simpleTemplateData === void 0 ? void 0 : simpleTemplateData.key;
                        if (simpleTemplateKey
                            && !getCachedTemplate(simpleTemplateKey)
                            && !nonCachedTemplateKeys.includes(simpleTemplateKey)) {
                            nonCachedTemplateKeys.push(simpleTemplateKey);
                        }
                    });
                });
            }
            catch (e) {
                logger.error('TemplateMessageItemBody | received view_variables is malformed: ', templateData);
                result.isErrored = true;
                return result;
            }
        }
        try {
            if (nonCachedTemplateKeys.length > 0) {
                tryFetchTemplateByKey(nonCachedTemplateKeys);
            }
            else {
                var parsedUiTemplate = JSON.parse(cachedTemplate.uiTemplate);
                if (!Array.isArray(parsedUiTemplate) || parsedUiTemplate.length === 0) {
                    logger.error('TemplateMessageItemBody | parsed template is missing ui_template: ', parsedUiTemplate);
                    throw new Error('TemplateMessageItemBody | parsed template is missing ui_template. See error log in console for details');
                }
                /**
                 * Composite template validation
                 */
                if (parsedUiTemplate[0].type === ui_MessageTemplate.CompositeComponentType.Carousel) {
                    var carouselItem = parsedUiTemplate[0];
                    if (parsedUiTemplate.length > 1) { // TODO: in future, support multiple templates
                        logger.error('TemplateMessageItemBody | composite template currently does not support multiple items: ', parsedUiTemplate);
                        throw new Error('TemplateMessageItemBody | composite template currently does not support multiple items. See error log in console for details');
                    }
                    if (typeof carouselItem.items === 'string') {
                        if (!index.startsWithAtAndEndsWithBraces(carouselItem.items)) {
                            logger.error('TemplateMessageItemBody | composite template with reservation key must follow the following string format "{@your-reservation-key}": ', templateKey, carouselItem);
                            throw new Error('TemplateMessageItemBody | composite template with reservation key must follow the following string format "{@your-reservation-key}". See error log in console for details');
                        }
                        if (!templateData.view_variables) {
                            logger.error('TemplateMessageItemBody | template key suggests composite template but template data is missing view_variables: ', templateKey, templateData);
                            throw new Error('TemplateMessageItemBody | template key suggests composite template but template data is missing view_variables. See error log in console for details');
                        }
                        var reservationKey = index.removeAtAndBraces(carouselItem.items);
                        var simpleTemplateDataList = templateData.view_variables[reservationKey];
                        if (!simpleTemplateDataList) {
                            logger.error('TemplateMessageItemBody | no reservation key found in view_variables: ', reservationKey, templateData.view_variables);
                            throw new Error('TemplateMessageItemBody | no reservation key found in view_variables. See error log in console for details');
                        }
                        if (simpleTemplateDataList.length > 10) {
                            logger.warning('TemplateMessageItemBody | composite template with more than 10 simple templates will only render the first 10 items: ', reservationKey, templateData.view_variables);
                            simpleTemplateDataList = simpleTemplateDataList.slice(0, 10);
                        }
                        var _a = getFilledMessageTemplateItemsForCarouselTemplateByMessagePayload(simpleTemplateDataList), maxVersion = _a.maxVersion, filledTemplates = _a.filledTemplates;
                        result.isComposite = true;
                        result.templateVersion = Math.max(cachedTemplate.version, maxVersion);
                        result.filledMessageTemplateItemsList = [{
                                type: carouselItem.type,
                                spacing: carouselItem.spacing,
                                items: filledTemplates,
                            }];
                    }
                    else if (Array.isArray(carouselItem.items)) {
                        var simpleTemplates = carouselItem.items;
                        if (carouselItem.items.length > 10) {
                            logger.warning('TemplateMessageItemBody | composite template with more than 10 simple templates will only render the first 10 items: ', carouselItem);
                            simpleTemplates = carouselItem.items.slice(0, 10);
                        }
                        var _b = getFilledMessageTemplateItemsForCarouselTemplate(simpleTemplates), maxVersion = _b.maxVersion, filledTemplates = _b.filledTemplates;
                        result.isComposite = true;
                        result.templateVersion = Math.max(cachedTemplate.version, maxVersion);
                        result.filledMessageTemplateItemsList = [{
                                type: carouselItem.type,
                                spacing: carouselItem.spacing,
                                items: filledTemplates,
                            }];
                    }
                    else {
                        logger.error('TemplateMessageItemBody | composite template is malformed: ', templateKey, carouselItem);
                        throw new Error('TemplateMessageItemBody | composite template is malformed. See error log in console for details');
                    }
                }
                else {
                    result.templateVersion = cachedTemplate.version;
                    result.filledMessageTemplateItemsList = getFilledMessageTemplateItemsForSimpleTemplate(parsedUiTemplate, cachedTemplate.colorVariables);
                }
            }
        }
        catch (e) {
            result.isErrored = true;
        }
        return result;
    }
    React.useEffect(function () {
        if (!renderData.isErrored && renderData.filledMessageTemplateItemsList.length === 0) {
            var newRenderData = getFilledMessageTemplateItems();
            setRenderData(newRenderData);
        }
    }, [templateData.key, waitingTemplateKeysMapString]);
    /**
     * Attempt GET template by key IFF one of below cases is met:
     * 1. This is the first GET call for the template key.
     * 2. Minimum buffer time has passed since the previous GET error.
     */
    function tryFetchTemplateByKey(templateKeys) {
        if (templateKeys.length > 0) {
            var waitingTemplateKeyDataList_1 = [];
            templateKeys.forEach(function (templateKey) {
                var waitingTemplateKeyData = waitingTemplateKeysMap[templateKey];
                waitingTemplateKeyDataList_1.push([templateKey, waitingTemplateKeyData]);
            });
            var requestedAt_1 = Date.now();
            var keysToUpdate_1 = [];
            waitingTemplateKeyDataList_1.forEach(function (_a) {
                var templateKey = _a[0], waitingTemplateKeyData = _a[1];
                if (!waitingTemplateKeyData
                    || (waitingTemplateKeyData.erroredMessageIds.indexOf(message.messageId) === -1
                        && requestedAt_1 > waitingTemplateKeyData.requestedAt + TEMPLATE_FETCH_RETRY_BUFFER_TIME_IN_MILLIES)) {
                    keysToUpdate_1.push(templateKey);
                }
                else if (waitingTemplateKeyData.erroredMessageIds.indexOf(message.messageId) > -1) {
                    throw new Error("TemplateMessageItemBody | fetching template key ".concat(templateKey, " for messageId: ").concat(message.messageId, " has failed."));
                }
            });
            if (keysToUpdate_1.length > 0) {
                updateMessageTemplatesInfo(keysToUpdate_1, message.messageId, requestedAt_1);
            }
        }
    }
    if (renderData.isErrored) {
        return getFailedBody();
    }
    if (renderData.filledMessageTemplateItemsList.length === 0) {
        return React.createElement(ui_LoadingTemplateMessageItemBody_tsx.LoadingTemplateMessageItemBody, { className: className, isByMe: isByMe });
    }
    return (React.createElement("div", { className: index.getClassName([
            className,
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body',
        ]) },
        React.createElement(MessageTemplateErrorBoundary, { fallbackMessage: React.createElement(ui_FallbackTemplateMessageItemBody_tsx.FallbackTemplateMessageItemBody, { className: className, message: message, isByMe: isByMe }), onTemplateMessageRenderedCallback: onTemplateMessageRenderedCallback, isComposite: renderData.isComposite, logger: logger },
            React.createElement(MessageTemplateWrapper, { message: message, templateVersion: renderData.templateVersion, templateItems: renderData.filledMessageTemplateItemsList }))));
}

exports.TemplateMessageItemBody = TemplateMessageItemBody;
exports.default = TemplateMessageItemBody;
//# sourceMappingURL=TemplateMessageItemBody.js.map
