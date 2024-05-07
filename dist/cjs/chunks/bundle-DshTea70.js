'use strict';

var React = require('react');

var ComponentType;
(function (ComponentType) {
    ComponentType["Box"] = "box";
    ComponentType["Text"] = "text";
    ComponentType["Image"] = "image";
    ComponentType["TextButton"] = "textButton";
    ComponentType["ImageButton"] = "imageButton";
})(ComponentType || (ComponentType = {}));
exports.CompositeComponentType = void 0;
(function (CompositeComponentType) {
    CompositeComponentType["Carousel"] = "carouselView";
})(exports.CompositeComponentType || (exports.CompositeComponentType = {}));

// -------- Set property mapper
const MAPPER = () => undefined;
const createParser = (params) => {
    const defaultMapper = (params === null || params === void 0 ? void 0 : params.defaultMapper) || MAPPER;
    const mapper = {
        defaultMapper,
        mapBoxProps: (params === null || params === void 0 ? void 0 : params.mapBoxProps) || defaultMapper,
        mapTextProps: (params === null || params === void 0 ? void 0 : params.mapTextProps) || defaultMapper,
        mapImageProps: (params === null || params === void 0 ? void 0 : params.mapImageProps) || defaultMapper,
        mapTextButtonProps: (params === null || params === void 0 ? void 0 : params.mapTextButtonProps) || defaultMapper,
        mapImageButtonProps: (params === null || params === void 0 ? void 0 : params.mapImageButtonProps) || defaultMapper,
        mapCarouselProps: (params === null || params === void 0 ? void 0 : params.mapCarouselProps) || defaultMapper,
    };
    return {
        parse(item, options) {
            switch (item.type) {
                case ComponentType.Box: {
                    return { properties: mapper.mapBoxProps(item, options) };
                }
                case ComponentType.Text: {
                    return { properties: mapper.mapTextProps(item, options) };
                }
                case ComponentType.Image: {
                    return { properties: mapper.mapImageProps(item, options) };
                }
                case ComponentType.TextButton: {
                    return { properties: mapper.mapTextButtonProps(item, options) };
                }
                case ComponentType.ImageButton: {
                    return { properties: mapper.mapImageButtonProps(item, options) };
                }
                case exports.CompositeComponentType.Carousel: {
                    return { properties: mapper.mapCarouselProps(item, options) };
                }
                default:
                    return { properties: undefined };
            }
        },
    };
};

const FRAGMENT = ({ children }) => React.createElement(React.Fragment, null, children);
function createRenderer(params) {
    var _a, _b, _c, _d, _e, _f;
    return {
        box: ((_a = params === null || params === void 0 ? void 0 : params.views) === null || _a === void 0 ? void 0 : _a.box) || FRAGMENT,
        text: ((_b = params === null || params === void 0 ? void 0 : params.views) === null || _b === void 0 ? void 0 : _b.text) || FRAGMENT,
        image: ((_c = params === null || params === void 0 ? void 0 : params.views) === null || _c === void 0 ? void 0 : _c.image) || FRAGMENT,
        imageButton: ((_d = params === null || params === void 0 ? void 0 : params.views) === null || _d === void 0 ? void 0 : _d.imageButton) || FRAGMENT,
        textButton: ((_e = params === null || params === void 0 ? void 0 : params.views) === null || _e === void 0 ? void 0 : _e.textButton) || FRAGMENT,
        carouselView: ((_f = params === null || params === void 0 ? void 0 : params.views) === null || _f === void 0 ? void 0 : _f.carouselView) || FRAGMENT,
    };
}

var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SizeContext = React.createContext({
    sizes: {},
    updateSize: () => { },
});
const SizeContextProvider = ({ children }) => {
    const [sizes, setSizes] = React.useState({});
    const updateSize = React.useCallback((_a) => {
        var { id } = _a, rest = __rest$4(_a, ["id"]);
        if (id) {
            setSizes((prevSizes) => (Object.assign(Object.assign({}, prevSizes), { [id]: rest })));
        }
    }, []);
    return React.createElement(SizeContext.Provider, { value: { sizes, updateSize } }, children);
};
const useSizeContext = () => React.useContext(SizeContext);

var Layout;
(function (Layout) {
    Layout["Row"] = "row";
    Layout["Column"] = "column";
})(Layout || (Layout = {}));
var AlignValue;
(function (AlignValue) {
    AlignValue["Center"] = "center";
    AlignValue["Left"] = "left";
    AlignValue["Right"] = "right";
    AlignValue["Top"] = "top";
    AlignValue["Bottom"] = "bottom";
})(AlignValue || (AlignValue = {}));
/**
 * @description
 * Caution: Numbers are passed as string types in the message template builder.
 * Use `==` comparison instead of `===` comparison when using a regular enum instead of a string enum.
 */
var FlexSizeSpecValue;
(function (FlexSizeSpecValue) {
    FlexSizeSpecValue[FlexSizeSpecValue["FillParent"] = 0] = "FillParent";
    FlexSizeSpecValue[FlexSizeSpecValue["WrapContent"] = 1] = "WrapContent";
})(FlexSizeSpecValue || (FlexSizeSpecValue = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight["Normal"] = "normal";
    FontWeight["Bold"] = "bold";
})(FontWeight || (FontWeight = {}));
var MediaContentMode;
(function (MediaContentMode) {
    MediaContentMode["AspectFit"] = "aspectFit";
    MediaContentMode["AspectFill"] = "aspectFill";
    MediaContentMode["ScalesToFill"] = "scalesToFill";
})(MediaContentMode || (MediaContentMode = {}));

const SUPPORTED_TEMPLATE_VERSIONS = [
    1,
    2, // Composite templates: Carousel
];
const alignInFlex = (align) => {
    switch (align) {
        case AlignValue.Right:
        case AlignValue.Bottom:
            return 'flex-end';
        case AlignValue.Center:
            return 'center';
        case AlignValue.Left:
        case AlignValue.Top:
        default:
            return 'flex-start';
    }
};
const isTemplateVersionSupported = (templateVersion) => {
    if (!templateVersion)
        return true;
    return SUPPORTED_TEMPLATE_VERSIONS.includes(templateVersion);
};

const memoize = (fn) => {
    const cache = new Map();
    const cached = function (val) {
        return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
};
/**
 * Generate each item's id by each item's array depth
 */
const setTemplateItemId = memoize((data) => {
    const addIdRecursively = (item, id) => {
        if ('items' in item && (item === null || item === void 0 ? void 0 : item.items) != null) {
            item.items.forEach((subItem, subIdx) => {
                const subId = `${id}-${subIdx}`;
                subItem.id = subId;
                addIdRecursively(subItem, subId);
            });
        }
    };
    data.forEach((item, idx) => {
        const id = `${idx}`;
        item.id = id;
        addIdRecursively(item, id);
    });
    return data;
});

const defaultProperties = {
    rootLayout: Layout.Column,
    view: {
        size: {
            width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
            height: { type: 'flex', value: FlexSizeSpecValue.WrapContent },
        },
    },
    box: {
        layout: Layout.Row,
        align: { vertical: AlignValue.Top, horizontal: AlignValue.Left },
    },
};

const createMessageTemplate = (opts) => {
    const Container = opts.Container || React.Fragment;
    const UnknownMessage = opts.UnknownMessage || (() => null);
    const parser = opts.parser || createParser();
    const renderer = opts.renderer || createRenderer();
    const MessageTemplateBase = ({ templateItems, parentLayout = defaultProperties.box.layout, isRoot = false, }) => {
        const renderItems = templateItems;
        return (React.createElement(React.Fragment, null, renderItems.map((item, index, siblings) => {
            const { properties } = parser.parse(item, { parentLayout, elemIdx: index, siblings });
            const props = {
                key: index,
                parentLayout,
                parsedProperties: properties,
                siblings,
            };
            switch (item.type) {
                // CompositeComponent should be top level component
                case exports.CompositeComponentType.Carousel: {
                    if (!isRoot) {
                        throw new Error('Cannot parse template item as Carousel if the template item is not the root.');
                    }
                    if (!item.items || !Array.isArray(item.items) || item.items.length === 0) {
                        throw new Error('Cannot parse template item as Carousel if carousel has no items.');
                    }
                    return (React.createElement(renderer.carouselView, Object.assign({}, item, props), item.items.map((items, index) => (React.createElement(MessageTemplateBase, { key: index, templateItems: items || [], parentLayout: parentLayout })))));
                }
                case ComponentType.Box: {
                    return (React.createElement(renderer.box, Object.assign({}, item, props),
                        React.createElement(MessageTemplateBase, { templateItems: item.items || [], parentLayout: item.layout })));
                }
                case ComponentType.Text: {
                    return React.createElement(renderer.text, Object.assign({}, item, props));
                }
                case ComponentType.Image: {
                    return React.createElement(renderer.image, Object.assign({}, item, props));
                }
                case ComponentType.TextButton: {
                    return React.createElement(renderer.textButton, Object.assign({}, item, props));
                }
                case ComponentType.ImageButton: {
                    return React.createElement(renderer.imageButton, Object.assign({}, item, props));
                }
                default: {
                    // or throw new Error('Cannot parse template item')
                    return React.createElement(UnknownMessage, { item: item });
                }
            }
        })));
    };
    return {
        MessageTemplate: ({ parentLayout = defaultProperties.rootLayout, templateVersion, templateItems, }) => {
            const items = setTemplateItemId(templateItems);
            if (!isTemplateVersionSupported(templateVersion)) {
                /**
                 * I choose to throw instead of returning UnknownMessage because UnknownMessage syntax (required prop: item) is not what UIKit wants.
                 */
                throw new Error(`Cannot parse template item due to unsupported template version: ${templateVersion}, ${SUPPORTED_TEMPLATE_VERSIONS}`);
            }
            let isCarousel = false;
            if (Array.isArray(items) && items.length > 0) {
                isCarousel = items[0].type === exports.CompositeComponentType.Carousel;
            }
            return (React.createElement(SizeContextProvider, null,
                React.createElement(Container, { className: isCarousel ? 'sb-message-template__parent_for_carousel' : '' },
                    React.createElement(MessageTemplateBase, { parentLayout: parentLayout, templateItems: items, isRoot: true }))));
        },
        MessageTemplateBase,
    };
};

var ActionType;
(function (ActionType) {
    ActionType["Web"] = "web";
    ActionType["Custom"] = "custom";
    ActionType["UIKit"] = "uikit";
})(ActionType || (ActionType = {}));

({
    version: 1,
    body: {
        items: [
            {
                type: ComponentType.Image,
                action: { type: ActionType.Web, data: 'https://docs.sendbird.com' },
                height: { type: 'fixed', value: 236 },
                viewStyle: {
                    padding: {
                        left: 4,
                        right: 4,
                        top: 4,
                        bottom: 4,
                    },
                },
                imageUrl: 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                imageStyle: { contentMode: MediaContentMode.AspectFill },
            },
            {
                type: ComponentType.Box,
                layout: Layout.Column,
                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                height: { type: 'fixed', value: 200 },
                items: [
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        viewStyle: { backgroundColor: '#fa6464' },
                    },
                    {
                        type: ComponentType.Box,
                        layout: Layout.Column,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.WrapContent },
                        viewStyle: { backgroundColor: '#ffaf5c' },
                        items: [
                            {
                                type: ComponentType.Text,
                                text: 'Message',
                                align: { horizontal: AlignValue.Center, vertical: AlignValue.Center },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                            },
                            {
                                type: ComponentType.Image,
                                action: { type: ActionType.Web, data: 'https://docs.sendbird.com' },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                                imageUrl: 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                                imageStyle: { contentMode: MediaContentMode.AspectFill },
                            },
                        ],
                    },
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'fixed', value: 20 },
                        viewStyle: { backgroundColor: '#ffe450' },
                    },
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        viewStyle: { backgroundColor: '#329a1b' },
                    },
                ],
            },
            {
                type: ComponentType.Box,
                viewStyle: { padding: { top: 12, bottom: 12, left: 12, right: 12 } },
                layout: Layout.Column,
                items: [
                    {
                        type: ComponentType.Box,
                        align: { horizontal: AlignValue.Left, vertical: AlignValue.Center },
                        layout: Layout.Row,
                        viewStyle: {
                            borderWidth: 1,
                            borderColor: '#72723f',
                        },
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'fixed', value: 150 },
                        items: [
                            {
                                type: ComponentType.Text,
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                                text: 'Sample1 text',
                                maxTextLines: 1,
                                align: { vertical: AlignValue.Center, horizontal: AlignValue.Left },
                                viewStyle: {
                                    backgroundColor: '#cc4400',
                                },
                                textStyle: {
                                    size: 16,
                                    color: '#f8f8f8',
                                    weight: FontWeight.Bold,
                                },
                            },
                            {
                                type: ComponentType.ImageButton,
                                action: { type: ActionType.UIKit, data: 'uikit://delete' },
                                width: { type: 'fixed', value: 20 },
                                height: { type: 'fixed', value: 20 },
                                imageUrl: 'https://file-ap-1.sendbird.com/5b5379aa73fd460da22ffaf9a61d0d7f.png',
                                imageStyle: { contentMode: MediaContentMode.AspectFit },
                            },
                        ],
                    },
                    {
                        type: ComponentType.Text,
                        viewStyle: { padding: { top: 6, bottom: 12, left: 0, right: 0 } },
                        text: 'Esse eu esse duis ipsum et dolor eu ut sit amet consectetur cillum velit officia. Ex adipisicing elit quis ea sit. Occaecat in eu aliqua nulla magna id ut excepteur minim.',
                        maxTextLines: 2,
                        textStyle: { size: 14, color: '#e10000' },
                        width: { type: 'fixed', value: 200 },
                        height: { type: 'fixed', value: 50 },
                    },
                    {
                        type: ComponentType.TextButton,
                        action: { type: ActionType.Web, data: 'https://www.daum.net' },
                        text: 'Button 3',
                        textStyle: { size: 14, color: '#742ddd', weight: FontWeight.Bold },
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Image,
                'action': { 'type': ActionType.Web, 'data': 'https://www.naver.com/' },
                'height': { 'type': 'fixed', 'value': 136 },
                'imageUrl': 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
            },
            {
                'type': ComponentType.Box,
                'viewStyle': { 'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 }, backgroundColor: '#cccccc' },
                'layout': Layout.Column,
                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                'items': [
                    {
                        'type': ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        'layout': Layout.Row,
                        'items': [
                            {
                                'type': ComponentType.TextButton,
                                'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                width: { type: 'fixed', value: 150 },
                                'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 0, 'right': 4 } },
                                'text': 'Button 2',
                                'textStyle': { 'size': 14, 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.TextButton,
                                'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 4, 'right': 0 } },
                                'text': 'Button 3',
                                'textStyle': { 'size': 14, 'weight': FontWeight.Bold },
                            },
                        ],
                    },
                    {
                        'type': ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        'layout': Layout.Row,
                        'items': [
                            {
                                'type': ComponentType.Text,
                                'text': 'Sample2 text',
                                'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                                'maxTextLines': 1,
                                'textStyle': { 'size': 16, 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.ImageButton,
                                'action': { 'type': ActionType.UIKit, 'data': 'uikit://delete' },
                                'width': { 'type': 'fixed', 'value': 20 },
                                'height': { 'type': 'fixed', 'value': 20 },
                                'imageUrl': 'https://file-ap-1.sendbird.com/5b5379aa73fd460da22ffaf9a61d0d7f.png',
                                'imageStyle': { 'contentMode': MediaContentMode.AspectFit },
                            },
                        ],
                    },
                    {
                        'type': ComponentType.Text,
                        'viewStyle': { 'padding': { 'top': 6, 'bottom': 12, 'left': 0, 'right': 0 } },
                        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aui',
                        'textStyle': { 'size': 14 },
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Box,
                'viewStyle': { 'backgroundColor': '#ffffff', 'borderWidth': 1, 'borderColor': '#eeeeee', 'radius': 16 },
                'layout': Layout.Column,
                'items': [
                    {
                        'type': ComponentType.Image,
                        'height': { 'type': 'fixed', 'value': 200 },
                        'imageUrl': 'https://img.freepik.com/free-vector/cartoon-happy-hours-background_52683-81243.jpg?w=2000&t=st=1666689198~exp=1666689798~hmac=23109d44ba03deee7aee069cbeebfcb48fa27f85e53c1cafc5d5d7345f1a2041',
                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                    },
                    {
                        'type': ComponentType.Box,
                        'viewStyle': { 'padding': { 'top': 15, 'bottom': 15, 'left': 15, 'right': 15 } },
                        'layout': Layout.Column,
                        'items': [
                            {
                                'type': ComponentType.Text,
                                'text': "Don't miss these deals today",
                                'maxTextLines': 1,
                                'textStyle': { 'size': 20, 'color': '#e10000', 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.Text,
                                'viewStyle': { 'margin': { 'top': 5, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'text': 'Pay with Maya and get cashback!',
                                'maxTextLines': 1,
                                'textStyle': { 'size': 14, 'color': '#e10000' },
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://yt3.ggpht.com/ytc/AMLnZu8Kg89ymE7qt5bsS9vMqi9h2aHiN6m9ID-IgxR6-Q=s900-c-k-c0x00ffffff-no-rj',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Meralco',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://1000logos.net/wp-content/uploads/2021/12/Globe-Telecom-logo.png',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill, tintColor: '#a49a9a' },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Globe',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cignal.svg/640px-Cignal.svg.png',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Cignal',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.TextButton,
                                        'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                        'viewStyle': {
                                            'backgroundColor': '#e0e0e0',
                                            'radius': 16,
                                            'margin': { 'top': 0, 'bottom': 0, 'left': 0, 'right': 4 },
                                            'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 },
                                        },
                                        'text': 'Learn more',
                                        'textStyle': { 'size': 15, 'color': '#e10000', 'weight': FontWeight.Bold },
                                    },
                                    {
                                        'type': ComponentType.TextButton,
                                        'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                        'viewStyle': {
                                            'backgroundColor': '#e10000',
                                            'radius': 16,
                                            'margin': { 'top': 0, 'bottom': 0, 'left': 4, 'right': 0 },
                                            'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 },
                                        },
                                        'text': 'Pay now',
                                        'textStyle': { 'size': 15, 'color': '#ffffff', 'weight': FontWeight.Bold },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Box,
                'layout': Layout.Column,
                'items': [
                    {
                        'type': ComponentType.Image,
                        'imageUrl': 'https://static.sendbird.com/sample/profiles/profile_40_512px.png',
                        'metaData': {
                            'pixelWidth': 512,
                            'pixelHeight': 512,
                        },
                        'imageStyle': {
                            'tintColor': '#44ff1188',
                        },
                        viewStyle: {
                            'padding': {
                                'top': 12,
                                'right': 12,
                                'bottom': 12,
                                'left': 12,
                            },
                        },
                    },
                    {
                        'type': ComponentType.Box,
                        'viewStyle': {
                            'padding': {
                                'top': 12,
                                'right': 12,
                                'bottom': 12,
                                'left': 12,
                            },
                        },
                        'layout': Layout.Column,
                        'items': [
                            {
                                'type': ComponentType.Box,
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Box,
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'hi',
                                                'maxTextLines': 3,
                                                'viewStyle': {
                                                    'padding': {
                                                        'top': 0,
                                                        'bottom': 6,
                                                        'left': 0,
                                                        'right': 0,
                                                    },
                                                },
                                                'textStyle': {
                                                    'size': 16,
                                                    'weight': FontWeight.Bold,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'bye',
                                                'maxTextLines': 10,
                                                'textStyle': {
                                                    'size': 14,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        'type': ComponentType.ImageButton,
                                        'action': {
                                            'type': ActionType.UIKit,
                                            'data': 'sendbirduikit://delete',
                                        },
                                        'width': {
                                            'type': 'fixed',
                                            'value': 20,
                                        },
                                        'height': {
                                            'type': 'fixed',
                                            'value': 20,
                                        },
                                        'metaData': {
                                            'pixelWidth': 60,
                                            'pixelHeight': 60,
                                        },
                                        'imageUrl': 'https://dxstmhyqfqr1o.cloudfront.net/sendbird-message-builder/icon-more.png',
                                        'imageStyle': {
                                            'tintColor': '#ff8d5a',
                                        },
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'layout': Layout.Column,
                                'items': [
                                    {
                                        'type': ComponentType.Box,
                                        'viewStyle': {
                                            'margin': {
                                                'top': 16,
                                                'bottom': 0,
                                                'left': 0,
                                                'right': 0,
                                            },
                                        },
                                        'align': {
                                            'horizontal': AlignValue.Left,
                                            'vertical': AlignValue.Center,
                                        },
                                        'layout': Layout.Row,
                                        'items': [
                                            {
                                                'type': ComponentType.Image,
                                                'imageUrl': 'https://ca.slack-edge.com/T0ADCTNEL-ULE240VNV-83fd5776e78e-512',
                                                'width': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'height': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'metaData': {
                                                    'pixelWidth': 512,
                                                    'pixelHeight': 512,
                                                },
                                                'viewStyle': {
                                                    'backgroundColor': '#BDBDBD',
                                                    'radius': 20,
                                                },
                                                'imageStyle': {
                                                    'contentMode': MediaContentMode.AspectFill,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Box,
                                                'viewStyle': {
                                                    'margin': {
                                                        'top': 0,
                                                        'bottom': 0,
                                                        'left': 12,
                                                        'right': 0,
                                                    },
                                                },
                                                'layout': Layout.Column,
                                                'items': [
                                                    {
                                                        'type': ComponentType.Text,
                                                        'text': 'Chongbu',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 16,
                                                            'weight': FontWeight.Bold,
                                                        },
                                                    },
                                                    {
                                                        'type': ComponentType.Text,
                                                        'viewStyle': {
                                                            'margin': {
                                                                'top': 4,
                                                                'bottom': 0,
                                                                'left': 0,
                                                                'right': 0,
                                                            },
                                                        },
                                                        'text': ' ',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 14,
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'viewStyle': {
                                            'margin': {
                                                'top': 16,
                                                'bottom': 0,
                                                'left': 0,
                                                'right': 0,
                                            },
                                        },
                                        'align': {
                                            'horizontal': AlignValue.Left,
                                            'vertical': AlignValue.Center,
                                        },
                                        'layout': Layout.Row,
                                        'items': [
                                            {
                                                'type': ComponentType.Image,
                                                'imageUrl': 'https://ca.slack-edge.com/T0ADCTNEL-U02LA25KY8J-d41a3e8c7554-512',
                                                'width': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'height': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'metaData': {
                                                    'pixelWidth': 512,
                                                    'pixelHeight': 512,
                                                },
                                                'viewStyle': {
                                                    'backgroundColor': '#BDBDBD',
                                                    'radius': 20,
                                                },
                                                'imageStyle': {
                                                    'contentMode': MediaContentMode.AspectFill,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Box,
                                                'viewStyle': {
                                                    'margin': {
                                                        'top': 0,
                                                        'bottom': 0,
                                                        'left': 12,
                                                        'right': 0,
                                                    },
                                                },
                                                'layout': Layout.Column,
                                                'items': [
                                                    {
                                                        'type': ComponentType.Text,
                                                        'text': 'Amanda',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 16,
                                                            'weight': FontWeight.Bold,
                                                        },
                                                    },
                                                    {
                                                        'type': ComponentType.Text,
                                                        'viewStyle': {
                                                            'margin': {
                                                                'top': 4,
                                                                'bottom': 0,
                                                                'left': 0,
                                                                'right': 0,
                                                            },
                                                        },
                                                        'text': 'This is title message',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 14,
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
({
    'version': '1',
    'body': {
        'items': [
            {
                'type': 'box',
                'layout': 'column',
                height: { type: 'fixed', value: 600 },
                'items': [
                    {
                        'type': 'box',
                        'layout': 'column',
                        'viewStyle': { 'radius': '8', 'padding': { 'top': '12', 'bottom': '12', 'left': '12', 'right': '12' } },
                        'items': [
                            {
                                'type': 'text',
                                'text': 'Title text',
                                'textStyle': { 'color': '#E0000000', 'size': '16', 'weight': 'bold' },
                                'maxTextLines': '5',
                                'viewStyle': {},
                                'action': { 'data': 'www.naver.com' },
                            },
                            {
                                'type': 'text',
                                'viewStyle': { 'margin': { 'top': '8', 'right': '0', 'bottom': '0', 'left': '0' } },
                                'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aui',
                                'textStyle': { 'color': '#E0000000', 'size': '14', 'weight': 'normal' },
                                'maxTextLines': '5',
                                'action': { 'data': 'https://www.naver.com' },
                            },
                            {
                                'type': 'box',
                                'layout': 'row',
                                'viewStyle': { 'margin': { 'top': '12', 'right': '0', 'bottom': '0', 'left': '0' } },
                                'items': [
                                    {
                                        'type': 'textButton',
                                        'viewStyle': {
                                            'backgroundColor': '#E0E0E0',
                                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                                        },
                                        'text': 'Button 1',
                                        'textStyle': { 'color': '#742DDD', 'size': '14', 'weight': 'bold' },
                                        'maxTextLines': '5',
                                        'action': { 'data': 'www.naver.com' },
                                    },
                                    {
                                        'type': 'textButton',
                                        'viewStyle': {
                                            'backgroundColor': '#E0E0E0',
                                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                                            'margin': { 'left': '8', 'right': '0', 'top': '0', 'bottom': '0' },
                                        },
                                        'text': 'Button 2',
                                        'textStyle': { 'color': '#742DDD', 'size': '14', 'weight': 'bold' },
                                        'maxTextLines': '5',
                                        'action': { 'data': 'https://www.naver.com' },
                                    },
                                ],
                            },
                        ],
                        'action': { 'data': 'https://www.naver.com' },
                    },
                    {
                        'type': 'image',
                        'viewStyle': {},
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'imageUrl': 'https://file-preprod.sendbird.com/d03c08bb3f9041a88c1207b6bbf15ab8.png',
                        'metaData': { 'pixelWidth': '1062', 'pixelHeight': '1070' },
                    },
                    {
                        'type': 'textButton',
                        'viewStyle': {
                            'backgroundColor': '#E0E0E0',
                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                        },
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'text': 'Button',
                        'textStyle': { 'color': '#742DDD', 'size': '16', 'weight': 'normal' },
                        'maxTextLines': '5',
                        'action': { 'data': 'www.naver.com' },
                    },
                    {
                        'type': 'imageButton',
                        'viewStyle': {},
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'imageUrl': 'https://file-preprod.sendbird.com/38fdf5c1056f42b89a44b38155cc4b49.jpg',
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'metaData': { 'pixelWidth': '1080', 'pixelHeight': '2640' },
                        'action': { 'data': 'www.naver.com' },
                    },
                ],
                'viewStyle': {},
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'elementId': 'root',
                'type': 'box',
                'layout': 'column',
                'width': {
                    'type': 'flex',
                    'value': FlexSizeSpecValue.FillParent,
                },
                'height': {
                    'type': 'flex',
                    'value': FlexSizeSpecValue.WrapContent,
                },
                'items': [
                    {
                        'type': 'text',
                        'viewStyle': {
                            'backgroundColor': '#a0c0ffff',
                            'margin': {
                                'top': 16,
                                'bottom': 16,
                                'left': 16,
                                'right': 16,
                            },
                            'padding': {
                                'top': 16,
                                'bottom': 16,
                                'left': 16,
                                'right': 16,
                            },
                        },
                        'text': 'Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap ',
                        'textStyle': {
                            'size': 14,
                            'color': '#222121e0',
                            'weight': 'normal',
                        },
                        'maxTextLines': 5,
                        'width': {
                            'type': 'flex',
                            'value': FlexSizeSpecValue.FillParent,
                        },
                        'height': {
                            'type': 'flex',
                            'value': 1,
                        },
                        'align': {
                            'horizontal': 'left',
                            'vertical': 'top',
                        },
                        'elementId': 'c0e15878-4984-408d-abaa-4b495c2e3872',
                    },
                    {
                        'type': 'imageButton',
                        'viewStyle': {
                            margin: {
                                left: 24,
                                right: 12,
                            },
                        },
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'fixed', 'value': 250 },
                        'imageUrl': 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'metaData': { 'pixelWidth': '1080', 'pixelHeight': '2640' },
                        'action': { 'data': 'www.naver.com' },
                    },
                ],
            },
        ],
    },
});

const PADDING_WIDTH = 24;
const CONTENT_LEFT_WIDTH = 40;
const SWIPE_THRESHOLD = 15;
const GAP_DEFAULT = 8;
/**
 * fixed sized template items should use its child width.
 * Whereas flex sized template items should use its parent's width.
 * @param item
 */
function shouldRenderAsFixed(item) {
    var _a;
    return ((_a = item.props.templateItems[0].width) === null || _a === void 0 ? void 0 : _a.type) === 'fixed';
}
function CarouselItem({ item, defaultWidth, marginRight }) {
    const style = shouldRenderAsFixed(item)
        ? { width: 'fit-content' }
        : { minWidth: defaultWidth, width: '100%' };
    if (marginRight) {
        style['marginRight'] = marginRight;
    }
    return React.createElement("div", { style: style }, item);
}
const Carousel = React.memo(({ children, gap = GAP_DEFAULT }) => {
    var _a, _b;
    const carouselRef = React.useRef(null);
    const screenWidth = window.innerWidth;
    const defaultItemWidth = (_b = (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
    const itemWidths = children.map((item) => {
        var _a;
        if (shouldRenderAsFixed(item)) {
            return Number((_a = item.props.templateItems[0].width) === null || _a === void 0 ? void 0 : _a.value);
        }
        return defaultItemWidth;
    });
    const itemPositions = getEachItemPositions();
    const [draggingInfo, setDraggingInfo] = React.useState({
        scrolling: false,
        dragging: false,
        startPos: null,
        offset: 0,
        translateX: 0,
        currentIndex: 0,
    });
    const handleMouseDown = (event) => {
        setDraggingInfo((props) => (Object.assign(Object.assign({}, props), { scrolling: false, dragging: true, startPos: {
                x: event.clientX,
                y: event.clientY,
            }, offset: 0 })));
    };
    const handleMouseMove = (event) => {
        if (!draggingInfo.dragging || !draggingInfo.startPos)
            return;
        const currentX = event.clientX;
        const newOffset = currentX - draggingInfo.startPos.x;
        setDraggingInfo(Object.assign(Object.assign({}, draggingInfo), { offset: newOffset }));
    };
    const handleMouseUp = () => {
        if (!draggingInfo.dragging)
            return;
        handleDragEnd();
        unblockScroll();
    };
    const blockScroll = () => {
        if (carouselRef.current) {
            carouselRef.current.style.touchAction = 'pan-x';
        }
    };
    const unblockScroll = () => {
        if (carouselRef.current) {
            carouselRef.current.style.touchAction = 'pan-y';
        }
    };
    const handleTouchStart = (event) => {
        setDraggingInfo((props) => (Object.assign(Object.assign({}, props), { scrolling: false, dragging: false, startPos: {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
            }, offset: 0 })));
    };
    const handleTouchMove = (event) => {
        if (!draggingInfo.startPos || draggingInfo.scrolling)
            return;
        const startPos = draggingInfo.startPos;
        const [touchMoveX, touchMoveY] = [event.touches[0].clientX, event.touches[0].clientY];
        const [deltaX, deltaY] = [Math.abs(touchMoveX - startPos.x), Math.abs(touchMoveY - startPos.y)];
        const newOffset = touchMoveX - startPos.x;
        if (draggingInfo.dragging) {
            if (newOffset === draggingInfo.offset)
                return;
            setDraggingInfo((props) => (Object.assign(Object.assign({}, props), { offset: newOffset })));
            return;
        }
        if (deltaY > deltaX) {
            setDraggingInfo((props) => (Object.assign(Object.assign({}, props), { scrolling: true })));
        }
        else {
            blockScroll();
            setDraggingInfo((props) => (Object.assign(Object.assign({}, props), { dragging: true, offset: newOffset })));
        }
    };
    const handleTouchEnd = () => {
        if (!draggingInfo.dragging)
            return;
        handleDragEnd();
        unblockScroll();
    };
    const getNewDraggingInfo = ({ translateX, currentIndex, newTranslateX, nextIndex, }) => {
        return {
            scrolling: false,
            dragging: false,
            startPos: null,
            offset: 0,
            translateX: newTranslateX !== null && newTranslateX !== void 0 ? newTranslateX : translateX,
            currentIndex: nextIndex !== null && nextIndex !== void 0 ? nextIndex : currentIndex,
        };
    };
    const handleDragEnd = () => {
        const { offset, currentIndex } = draggingInfo;
        const absOffset = Math.abs(offset);
        if (absOffset < SWIPE_THRESHOLD) {
            setDraggingInfo((props) => getNewDraggingInfo(props));
            return;
        }
        // If dragged to left, next index should be to the right
        if (offset < 0 && currentIndex < children.length - 1) {
            if (isLastItemFitsScreen(currentIndex)) {
                setDraggingInfo((props) => getNewDraggingInfo(props));
                return;
            }
            const nextIndex = currentIndex + 1;
            /**
             * This is special logic for "더 보기" button for Socar use-case.
             * The button will have a small width (less than 50px).
             * We want to include this button in the view and snap to right padding wall IFF !isLastTwoItemsFitScreen.
             */
            if (nextIndex === children.length - 1 || isLastItemFitsScreen(nextIndex)) {
                setDraggingInfo((props) => getNewDraggingInfo(Object.assign(Object.assign({}, props), { newTranslateX: itemPositions[children.length - 1].end - PADDING_WIDTH - CONTENT_LEFT_WIDTH + screenWidth, nextIndex: children.length - 1 })));
            }
            else {
                setDraggingInfo((props) => getNewDraggingInfo(Object.assign(Object.assign({}, props), { newTranslateX: itemPositions[nextIndex].start, nextIndex })));
            }
            // If dragged to right, next index should be to the left
        }
        else if (offset > 0 && currentIndex > 0) {
            let nextIndex = currentIndex - 1;
            while (draggingInfo.translateX >= itemPositions[nextIndex].start) {
                nextIndex--;
            }
            setDraggingInfo((props) => getNewDraggingInfo(Object.assign(Object.assign({}, props), { newTranslateX: itemPositions[nextIndex].start, nextIndex })));
        }
        else {
            setDraggingInfo((props) => getNewDraggingInfo(props));
        }
    };
    function getCurrentTranslateX() {
        return draggingInfo.translateX + draggingInfo.offset;
    }
    function isLastItemFitsScreen(nextIndex) {
        const restItemsWidth = itemWidths.slice(nextIndex).reduce((prev, curr) => prev + gap + curr);
        const restTotalWidth = PADDING_WIDTH + CONTENT_LEFT_WIDTH + restItemsWidth;
        return restTotalWidth <= screenWidth;
    }
    function getEachItemPositions() {
        let accumulator = 0;
        return itemWidths.map((itemWidth, i) => {
            if (i > 0) {
                accumulator -= gap;
            }
            const itemPosition = {
                start: accumulator,
                end: accumulator - itemWidth,
            };
            accumulator -= itemWidth;
            return itemPosition;
        });
    }
    return (React.createElement("div", { ref: carouselRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, className: "sb-message-template__carousel", style: {
            cursor: draggingInfo.dragging ? 'grabbing' : 'grab',
            transition: draggingInfo.dragging ? 'none' : 'transform 0.5s ease',
            transform: `translateX(${getCurrentTranslateX()}px)`,
        } }, children.map((item, index) => (React.createElement(CarouselItem, { key: index + '', item: item, defaultWidth: defaultItemWidth + 'px', marginRight: index < children.length - 1 ? gap : undefined })))));
});

function isWrappedText(view) {
    var _a;
    return view.type === ComponentType.Text && ((_a = view.width) === null || _a === void 0 ? void 0 : _a.value) == FlexSizeSpecValue.WrapContent;
}
// Compares the size spec to the option and returns whether they are equal or not.
const isSizeCompatibleWithOption = ({ size, option, }) => {
    if (option === 'wrap') {
        return size.type === 'flex' && size.value == FlexSizeSpecValue.WrapContent;
    }
    if (option === 'fill') {
        return size.type === 'flex' && size.value == FlexSizeSpecValue.FillParent;
    }
    return size.type === 'fixed';
};
const isGif = (url) => {
    var _a;
    if (typeof url !== 'string')
        return false;
    const extension = (_a = url.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return extension === 'gif';
};

var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CanvasReactMessageTemplateImage = (props) => {
    const { imageSize, canvasRef, canvasProps } = useCanvasMessageTemplateImage(props);
    return (React.createElement("canvas", Object.assign({}, canvasProps, { ref: canvasRef, width: imageSize === null || imageSize === void 0 ? void 0 : imageSize.width, height: imageSize === null || imageSize === void 0 ? void 0 : imageSize.height, onError: props.onError })));
};
const useCanvasMessageTemplateImage = (_a) => {
    var { metaData, tintColor } = _a, props = __rest$3(_a, ["metaData", "tintColor"]);
    const canvasRef = React.useRef(null);
    const [fallbackImageSize, setFallbackImageSize] = React.useState();
    const imageSize = React.useMemo(() => {
        if ((metaData === null || metaData === void 0 ? void 0 : metaData.pixelHeight) && (metaData === null || metaData === void 0 ? void 0 : metaData.pixelWidth)) {
            return { width: metaData.pixelWidth, height: metaData.pixelHeight };
        }
        return fallbackImageSize;
    }, [fallbackImageSize, metaData === null || metaData === void 0 ? void 0 : metaData.pixelHeight, metaData === null || metaData === void 0 ? void 0 : metaData.pixelWidth]);
    React.useEffect(() => {
        if (imageSize == null) {
            console.log('Canvas_ReactMessageTemplateImage: no metaData, render fit to container');
            if (canvasRef.current) {
                canvasRef.current.style.width = '100%';
                canvasRef.current.style.height = '100%';
                const containerSize = canvasRef.current.getBoundingClientRect();
                setFallbackImageSize(containerSize);
            }
        }
    }, [imageSize]);
    React.useEffect(() => {
        if (props.src) {
            const img = new Image();
            const onImageLoad = () => {
                if (canvasRef.current && tintColor && imageSize) {
                    const ctx = canvasRef.current.getContext('2d');
                    if (ctx) {
                        const { width: imageWidth, height: imageHeight } = imageSize;
                        // reset context before draw, consider `.save()` and `.restore()` api
                        ctx.clearRect(0, 0, imageWidth, imageHeight);
                        ctx.beginPath();
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.fillStyle = '#000';
                        // draw
                        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
                        ctx.globalCompositeOperation = 'source-atop';
                        ctx.fillStyle = tintColor;
                        ctx.fillRect(0, 0, imageWidth, imageHeight);
                    }
                }
            };
            const onImageError = (event) => {
                var _a;
                // @ts-ignore
                (_a = props.onError) === null || _a === void 0 ? void 0 : _a.call(props, event);
            };
            img.addEventListener('load', onImageLoad);
            img.addEventListener('error', onImageError);
            img.src = props.src;
            return () => {
                img.removeEventListener('load', onImageLoad);
                img.removeEventListener('error', onImageError);
            };
        }
        return;
    }, [props.src, imageSize, tintColor]);
    return {
        canvasRef,
        canvasProps: props,
        imageSize,
    };
};

const ImgReactMessageTemplateImage = (props) => {
    return React.createElement("img", Object.assign({}, props, { onError: props.onError, referrerPolicy: "no-referrer" }));
};

const PlaceholderReactMessageTemplateImage = (props) => {
    return React.createElement("div", { style: Object.assign(Object.assign({}, props.style), { backgroundColor: 'transparent' }) });
};

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ReactMessageTemplateImage = (_a) => {
    var { tintColor, metaData } = _a, props = __rest$2(_a, ["tintColor", "metaData"]);
    const { hasError, onError } = useImageLoadError(props.src);
    if (props.onError)
        console.warn('`onError` is intercepted and not executed in the ReactMessageTemplateImage.');
    if (hasError) {
        return React.createElement(PlaceholderReactMessageTemplateImage, Object.assign({}, props));
    }
    else if (tintColor && !isGif(props.src)) {
        return React.createElement(CanvasReactMessageTemplateImage, Object.assign({}, props, { onError: onError, tintColor: tintColor, metaData: metaData }));
    }
    else {
        return React.createElement(ImgReactMessageTemplateImage, Object.assign({}, props, { onError: onError }));
    }
};
const useImageLoadError = (source) => {
    const [hasError, setHasError] = React.useState(false);
    React.useEffect(() => setHasError(false), [source]);
    return {
        hasError,
        onError: React.useCallback(() => setHasError(true), []),
    };
};

// create a context provider for MessageComponent
//  - this is a wrapper for MessageComponent
const MessageContext = React.createContext(null);
const MessageProvider = (props) => {
    const { message, handleWebAction, handleCustomAction, handlePredefinedAction, children } = props;
    const value = React.useMemo(() => ({
        message,
        handleWebAction,
        handleCustomAction,
        handlePredefinedAction,
    }), [message === null || message === void 0 ? void 0 : message.updatedAt]);
    return React.createElement(MessageContext.Provider, { value: value }, children);
};
const useMessageContext = () => React.useContext(MessageContext);

/**
 * Preserves a reference to the given callback function as an argument while the component is mounted.
 * Wraps the given callback in React's Ref to preserve the reference.
 * @param callback want to be preserved
 */
function usePreservedCallback(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    return React.useCallback((...args) => {
        return callbackRef.current(...args);
    }, [callbackRef]);
}

/**
 * This hook can be used when you want to safely effect the value stored in useRef
 * Got this idea from https://github.com/facebook/react/issues/15176
 * @param callback
 * @param deps
 * @returns effect callback
 */
function useRefEffect(callback, deps) {
    const preservedCallback = usePreservedCallback(callback);
    const disposeRef = React.useRef(noop);
    const effect = React.useCallback((element) => {
        disposeRef.current();
        disposeRef.current = noop;
        if (element != null) {
            const cleanup = callback(element);
            if (typeof cleanup === 'function') {
                disposeRef.current = cleanup;
            }
        }
    }, [preservedCallback, ...deps]);
    return effect;
}
function noop() { }

/**
 * Subscribes to ResizeObserver on the component exposing the Ref,
 * to detect changes in the size of DOM elements.
 * The ResizeObserver API is required.
 * If you are targeting browsers that do not support that API, probably need to add appropriate polyfill too.
 * @param onResize
 * @returns ref
 */
function useResizeObserver(onResize) {
    const resizeCallback = usePreservedCallback(onResize);
    const ref = useRefEffect((elem) => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0] != null) {
                resizeCallback(entries[0]);
            }
        });
        observer.observe(elem);
        return () => {
            observer.unobserve(elem);
        };
    }, [resizeCallback]);
    return ref;
}

/**
 * @returns an element's width / height observed by IntersectionObserver,
 * and ref to detect its resize event
 */
function useElementSize() {
    const [width, setWidth] = React.useState(-1);
    const [height, setHeight] = React.useState(-1);
    const [contentWidth, setContentWidth] = React.useState(-1);
    const [contentHeight, setContentHeight] = React.useState(-1);
    const [paddingWidth, setPaddingWidth] = React.useState(-1);
    const [paddingHeight, setPaddingHeight] = React.useState(-1);
    const ref = useResizeObserver((entry) => {
        // contentRect: content size only
        const { width: contentWidth, height: contentHeight } = entry.contentRect;
        // target: content + padding + border size
        const target = entry.target;
        const { width, height } = target.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
        setContentWidth(contentWidth);
        setContentHeight(contentHeight);
        setPaddingWidth(width - contentWidth);
        setPaddingHeight(height - contentHeight);
    });
    return { ref, width, height, contentWidth, contentHeight, paddingWidth, paddingHeight };
}

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function isViewCompatibleWithSizeOption({ width = defaultProperties.view.size.width, height = defaultProperties.view.size.height, parentLayout = defaultProperties.box.layout, option, }) {
    if (parentLayout === Layout.Row) {
        return isSizeCompatibleWithOption({
            size: width,
            option,
        });
    }
    return isSizeCompatibleWithOption({
        size: height,
        option,
    });
}
function useRecalculateWidth(params) {
    const { style, props } = params;
    const _a = useElementSize(), { ref: elemRef } = _a, size = __rest$1(_a, ["ref"]);
    const { updateSize, sizes } = useSizeContext();
    const { id, siblings, parentLayout } = props;
    const { width, height, paddingWidth, paddingHeight, contentWidth, contentHeight } = size;
    React.useEffect(() => {
        updateSize({
            id: props.id,
            width,
            height,
            paddingWidth,
            paddingHeight,
            contentWidth,
            contentHeight,
        });
    }, [props.id, width, height, paddingWidth, paddingHeight, contentWidth, contentHeight, updateSize]);
    const currentStyle = React.useMemo(() => {
        const sumViewSize = (acc = 0, view) => {
            var _a, _b, _c, _d;
            if (parentLayout === Layout.Row) {
                return acc + ((_b = (_a = sizes[view.id]) === null || _a === void 0 ? void 0 : _a.contentWidth) !== null && _b !== void 0 ? _b : 0);
            }
            return acc + ((_d = (_c = sizes[view.id]) === null || _c === void 0 ? void 0 : _c.contentHeight) !== null && _d !== void 0 ? _d : 0);
        };
        const hasFillOption = isViewCompatibleWithSizeOption({
            width: props.width,
            height: props.height,
            parentLayout,
            option: 'fill',
        });
        if (hasFillOption) {
            const wrapSiblingsSize = siblings
                .filter(({ width, height }) => !isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'fill',
            }))
                .reduce(sumViewSize, 0);
            const fillSiblingCount = siblings.filter(({ width, height }) => isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'fill',
            })).length;
            const maxSizeOption = (() => {
                if (parentLayout === Layout.Row) {
                    return {
                        maxWidth: `calc((100% - ${wrapSiblingsSize}px) / ${fillSiblingCount})`,
                    };
                }
                return {
                    maxHeight: `calc((100% - ${wrapSiblingsSize}px) / ${fillSiblingCount})`,
                };
            })();
            return Object.assign(Object.assign(Object.assign({}, style), maxSizeOption), (width == 0 && { height: 0 }));
        }
        else {
            const currentElemIdx = siblings.findIndex((sibling) => sibling.id === id);
            const forwardSiblingsSize = siblings
                .slice(0, currentElemIdx)
                .filter(({ width, height }) => isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'wrap',
            }))
                .reduce(sumViewSize, 0);
            return Object.assign(Object.assign(Object.assign({}, style), (width === 0 && { height: 0 })), (parentLayout === Layout.Row
                ? {
                    maxWidth: `calc(100% - ${forwardSiblingsSize}px)`,
                }
                : {
                    maxHeight: `calc(100% - ${forwardSiblingsSize}px)`,
                }));
        }
    }, [props.width, props.height, parentLayout, sizes, siblings, style, width, id]);
    return { recalculatedStyle: currentStyle, elemRef };
}

function getDefaultStyles(overrides) {
    return Object.assign({ display: 'flex', overflow: 'hidden', boxSizing: 'border-box' }, overrides);
}
function setViewProps(styles, props, options) {
    setViewSize(styles, props, options);
    setViewStyle(styles, props);
}
function setBorderStyle(styles, borderWidth, borderColor, radius) {
    if (borderWidth) {
        styles['--border-width'] = `${borderWidth}px`;
        styles['--border-color'] = borderColor || 'transparent';
    }
    if (radius) {
        styles['borderRadius'] = Number(radius);
        styles['--border-radius'] = `${radius}px`;
    }
}
function setViewStyle(styles, props) {
    var _a, _b, _c, _d, _e, _f;
    const { viewStyle } = props;
    if ((_a = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _a === void 0 ? void 0 : _a.top)
        styles['marginTop'] = Number(viewStyle.margin.top);
    if ((_b = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _b === void 0 ? void 0 : _b.bottom)
        styles['marginBottom'] = Number(viewStyle.margin.bottom);
    if ((_c = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _c === void 0 ? void 0 : _c.left)
        styles['marginLeft'] = Number(viewStyle.margin.left);
    if ((_d = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _d === void 0 ? void 0 : _d.right)
        styles['marginRight'] = Number(viewStyle.margin.right);
    const marginHorizontal = Number((_e = styles.marginLeft) !== null && _e !== void 0 ? _e : '0') + Number((_f = styles.marginRight) !== null && _f !== void 0 ? _f : '0');
    if (marginHorizontal > 0 && styles.width === '100%')
        styles.width = `calc(100% - ${marginHorizontal}px)`;
    if (viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.backgroundColor)
        styles['backgroundColor'] = viewStyle.backgroundColor;
    // use JSON.stringify to escape special characters in image URL
    if (viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.backgroundImageUrl)
        styles['backgroundImage'] = `url(${JSON.stringify(viewStyle.backgroundImageUrl)})`;
    setBorderStyle(styles, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.borderWidth, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.borderColor, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.radius);
}
function getViewSizeStyle(width, height, parentLayout) {
    const style = {};
    if (width.type === 'flex' && width.value == FlexSizeSpecValue.FillParent) {
        style['width'] = '100%';
        if (parentLayout === Layout.Row) {
            style['flex'] = 1;
        }
    }
    else if (width.type === 'fixed' && width.value >= 0) {
        style['width'] = Number(width.value);
    }
    if (height.type === 'flex' && height.value == FlexSizeSpecValue.FillParent) {
        style['height'] = '100%';
        if (parentLayout === Layout.Column) {
            style['flex'] = 1;
        }
    }
    else if (height.type === 'fixed' && height.value >= 0) {
        style['height'] = Number(height.value);
    }
    return style;
}
function setViewSize(styles, props, options) {
    var _a, _b;
    const { width: defaultWidth, height: defaultHeight } = defaultProperties.view.size;
    const { parentLayout } = options;
    const sizeStyle = getViewSizeStyle((_a = props.width) !== null && _a !== void 0 ? _a : defaultWidth, (_b = props.height) !== null && _b !== void 0 ? _b : defaultHeight, parentLayout);
    Object.assign(styles, sizeStyle);
}
function setAlign(styles, layout = defaultProperties.box.layout, align = defaultProperties.box.align) {
    if (layout === Layout.Row) {
        styles['flexDirection'] = 'row';
        styles['alignItems'] = alignInFlex(align.vertical);
        styles['justifyContent'] = alignInFlex(align.horizontal);
    }
    if (layout === Layout.Column) {
        styles['flexDirection'] = 'column';
        styles['alignItems'] = alignInFlex(align.horizontal);
        styles['justifyContent'] = alignInFlex(align.vertical);
    }
}
function setTextAlign(styles, align = defaultProperties.box.align.horizontal) {
    styles.textAlign = align;
}
function setImageStyle(styles, imageStyle) {
    const { contentMode = MediaContentMode.AspectFit } = imageStyle || {};
    if (contentMode) {
        switch (contentMode) {
            case MediaContentMode.AspectFill:
                styles['objectFit'] = 'cover';
                break;
            case MediaContentMode.AspectFit:
                styles['objectFit'] = 'contain';
                break;
            case MediaContentMode.ScalesToFill:
                styles['objectFit'] = 'fill';
                break;
        }
    }
}
// uses image meta-data to render images that doesn't break the UI
// https://sendbird.atlassian.net/wiki/spaces/UK/pages/2008220608/Message+template+-+Image+policy
function setImageAspectRatio(styles, props) {
    var _a, _b, _c, _d;
    const imageMetaData = props === null || props === void 0 ? void 0 : props.metaData;
    if (!(imageMetaData === null || imageMetaData === void 0 ? void 0 : imageMetaData.pixelHeight) || !(imageMetaData === null || imageMetaData === void 0 ? void 0 : imageMetaData.pixelWidth)) {
        return;
    }
    if (((_a = props === null || props === void 0 ? void 0 : props.width) === null || _a === void 0 ? void 0 : _a.type) === 'fixed' || ((_b = props === null || props === void 0 ? void 0 : props.height) === null || _b === void 0 ? void 0 : _b.type) === 'fixed') {
        return;
    }
    styles['aspectRatio'] = `${(_c = props === null || props === void 0 ? void 0 : props.metaData) === null || _c === void 0 ? void 0 : _c.pixelWidth} / ${(_d = props === null || props === void 0 ? void 0 : props.metaData) === null || _d === void 0 ? void 0 : _d.pixelHeight}`;
}
function webkitLineClampStyles(numberOfLines) {
    return {
        WebkitLineClamp: numberOfLines,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        overflow: 'hidden',
        overflowWrap: 'anywhere',
        flex: 1,
    };
}
function setTextStyle(styles, props, options) {
    const { textStyle, width } = props;
    // TODO: Change default as design
    const { size, color, weight = 'normal' } = textStyle || {};
    if (size)
        styles['fontSize'] = Number(size);
    if (color)
        styles['color'] = color;
    if (weight)
        styles['fontWeight'] = weight;
    if ((width === null || width === void 0 ? void 0 : width.value) == FlexSizeSpecValue.WrapContent) {
        styles['maxWidth'] = '100%';
    }
    if (props.type === ComponentType.Text) {
        const { siblings, elemIdx } = options;
        // To push out any subsequent components from the container,
        // if a prior one is long enough to occupy an entire line
        // @link https://sendbird.atlassian.net/browse/NOTI-709
        if (siblings != null && siblings.length >= 2 && siblings.every(isWrappedText)) {
            styles.flexShrink = siblings.length - 1 === elemIdx ? 1 : 0;
        }
    }
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const hasValidUrlProtocol = (url = '') => ['http://', 'https://', 'ftp://'].some((protocol) => url.startsWith(protocol));
/**
 * @param url - url to be checked
 * @returns url with http:// protocol if it doesn't have any protocol
 * @example
 * returnUrl('www.sendbird.com') // returns 'http://www.sendbird.com'
 * returnUrl('https://www.sendbird.com') // returns 'https://www.sendbird.com'
 * returnUrl('ftp://www.sendbird.com') // returns 'ftp://www.sendbird.com'
 * returnUrl('sendbird.com') // returns 'https://sendbird.com'
 **/
const returnUrl = (url = '') => {
    if (hasValidUrlProtocol(url)) {
        return url;
    }
    return `https://${url}`;
};
// todo: semantic html here is not perfect, need to revisit. Same for Button
const ActionHandler = ({ className = '', style, children, props }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const { recalculatedStyle, elemRef } = useRecalculateWidth({ style, props });
    const { message, handleWebAction, handleCustomAction, handlePredefinedAction } = useMessageContext();
    const onClick = (e) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_a = props === null || props === void 0 ? void 0 : props.action) === null || _a === void 0 ? void 0 : _a.type) === 'web') {
            if (handleWebAction) {
                handleWebAction(e, props.action, message);
            }
            else {
                (_c = window === null || window === void 0 ? void 0 : window.open(returnUrl((_b = props === null || props === void 0 ? void 0 : props.action) === null || _b === void 0 ? void 0 : _b.data), '_blank', 'noopener noreferrer')) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
        if (((_d = props === null || props === void 0 ? void 0 : props.action) === null || _d === void 0 ? void 0 : _d.type) === 'custom') {
            if (handleCustomAction) {
                handleCustomAction(e, props.action, message);
            }
            else {
                (_f = window === null || window === void 0 ? void 0 : window.open(returnUrl((_e = props === null || props === void 0 ? void 0 : props.action) === null || _e === void 0 ? void 0 : _e.data), '_blank', 'noopener noreferrer')) === null || _f === void 0 ? void 0 : _f.focus();
            }
        }
        if (((_g = props === null || props === void 0 ? void 0 : props.action) === null || _g === void 0 ? void 0 : _g.type) === 'uikit') {
            handlePredefinedAction === null || handlePredefinedAction === void 0 ? void 0 : handlePredefinedAction(e, props.action, message);
        }
    };
    const borderClass = ((_a = props.viewStyle) === null || _a === void 0 ? void 0 : _a.borderWidth) ? ' sb-message-template__border' : '';
    if (className === 'sb-message-template__text-button') {
        return (React.createElement("button", { className: `${className}${borderClass}`, "data-sb-template-id": props.elementId, style: Object.assign(Object.assign({}, style), { paddingTop: (_c = (_b = props.viewStyle) === null || _b === void 0 ? void 0 : _b.padding) === null || _c === void 0 ? void 0 : _c.top, paddingRight: (_e = (_d = props.viewStyle) === null || _d === void 0 ? void 0 : _d.padding) === null || _e === void 0 ? void 0 : _e.right, paddingBottom: (_g = (_f = props.viewStyle) === null || _f === void 0 ? void 0 : _f.padding) === null || _g === void 0 ? void 0 : _g.bottom, paddingLeft: (_j = (_h = props.viewStyle) === null || _h === void 0 ? void 0 : _h.padding) === null || _j === void 0 ? void 0 : _j.left }), onClick: onClick }, children));
    }
    const { display, flexDirection, justifyContent, alignItems, objectFit } = recalculatedStyle, wrapperStyles = __rest(recalculatedStyle, ["display", "flexDirection", "justifyContent", "alignItems", "objectFit"]);
    return (React.createElement("div", { ref: elemRef, className: `${className}${borderClass} ${(props === null || props === void 0 ? void 0 : props.action) ? 'sb-message-template__action' : ''}`, "data-sb-template-id": props.elementId, style: wrapperStyles, onClick: onClick },
        React.createElement("div", { style: {
                display,
                flexDirection,
                justifyContent,
                alignItems,
                objectFit,
                width: '100%',
                height: '100%',
                paddingTop: (_l = (_k = props.viewStyle) === null || _k === void 0 ? void 0 : _k.padding) === null || _l === void 0 ? void 0 : _l.top,
                paddingRight: (_o = (_m = props.viewStyle) === null || _m === void 0 ? void 0 : _m.padding) === null || _o === void 0 ? void 0 : _o.right,
                paddingBottom: (_q = (_p = props.viewStyle) === null || _p === void 0 ? void 0 : _p.padding) === null || _q === void 0 ? void 0 : _q.bottom,
                paddingLeft: (_s = (_r = props.viewStyle) === null || _r === void 0 ? void 0 : _r.padding) === null || _s === void 0 ? void 0 : _s.left,
            } }, children)));
};
/**
 * Text that is fixed or fill parent should be wrapped in a div with max-width: 100% and max-height: 100%
 * This is to prevent text from overflowing the padding of the container
 */
function isFixedOrFill(view) {
    var _a, _b, _c, _d;
    const heightType = (_a = view === null || view === void 0 ? void 0 : view.height) === null || _a === void 0 ? void 0 : _a.type;
    const widthType = (_b = view === null || view === void 0 ? void 0 : view.width) === null || _b === void 0 ? void 0 : _b.type;
    const isFixedDiamension = heightType === 'fixed' || widthType === 'fixed';
    const isFill = (heightType === 'flex' && ((_c = view === null || view === void 0 ? void 0 : view.height) === null || _c === void 0 ? void 0 : _c.value) === FlexSizeSpecValue.FillParent) ||
        (widthType === 'flex' && ((_d = view === null || view === void 0 ? void 0 : view.width) === null || _d === void 0 ? void 0 : _d.value) === FlexSizeSpecValue.FillParent);
    return isFixedDiamension || isFill;
}
function convertNewlinesToBr(text) {
    return text.split('\n').map((line, index) => (React.createElement(React.Fragment, { key: index },
        line,
        React.createElement("br", null))));
}
function renderText(view) {
    const { text, maxTextLines } = view;
    const isToBeWrapped = isFixedOrFill(view);
    const isMultiLine = maxTextLines != null && maxTextLines > 0;
    const convertedText = convertNewlinesToBr(text);
    if (isMultiLine || isToBeWrapped) {
        const wrapperStyling = Object.assign(Object.assign({}, ((isMultiLine || isToBeWrapped) && { maxWidth: '100%' })), (isToBeWrapped && { maxHeight: '100%', overflow: 'hidden' }));
        return (React.createElement("div", { style: wrapperStyling }, isMultiLine ? React.createElement("div", { style: webkitLineClampStyles(maxTextLines) }, convertedText) : convertedText));
    }
    return isMultiLine ? React.createElement("div", { style: webkitLineClampStyles(maxTextLines) }, convertedText) : convertedText;
}
const renderer = createRenderer({
    views: {
        box(props) {
            return (React.createElement(ActionHandler, { className: "sb-message-template__box", elementId: props.elementId, style: props.parsedProperties, props: props }, props.children));
        },
        text(props) {
            return (React.createElement(ActionHandler, { className: "sb-message-template__text", elementId: props.elementId, style: props.parsedProperties, props: props }, renderText(props)));
        },
        image(props) {
            var _a;
            // todo: add image backup
            return (React.createElement(ActionHandler, { className: "sb-message-template__image-container", elementId: props.elementId, style: props.parsedProperties, props: props },
                React.createElement(ReactMessageTemplateImage, { className: "sb-message-template__image", alt: "image", src: props.imageUrl, style: { width: '100%', height: '100%', aspectRatio: 'inherit', objectFit: 'inherit' }, tintColor: (_a = props.imageStyle) === null || _a === void 0 ? void 0 : _a.tintColor, metaData: props.metaData })));
        },
        textButton(props) {
            return (React.createElement(ActionHandler, { className: "sb-message-template__text-button", elementId: props.elementId, style: props.parsedProperties, props: props }, renderText(Object.assign({ maxTextLines: 1 }, props))));
        },
        imageButton(props) {
            var _a;
            return (React.createElement(ActionHandler, { className: "sb-message-template__image-container sb-message-template__image-button", elementId: props.elementId, style: props.parsedProperties, props: props },
                React.createElement(ReactMessageTemplateImage, { className: "sb-message-template__image", alt: "image-button", src: props.imageUrl, style: { width: '100%', height: '100%', aspectRatio: 'inherit', objectFit: 'inherit' }, tintColor: (_a = props.imageStyle) === null || _a === void 0 ? void 0 : _a.tintColor, metaData: props.metaData })));
        },
        carouselView(props) {
            return React.createElement(Carousel, { gap: props.spacing }, props.children);
        },
    },
});
const parser = createParser({
    mapBoxProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setAlign(styles, props.layout, props.align);
        return styles;
    },
    mapTextProps(props, options) {
        var _a;
        const styles = getDefaultStyles({ whiteSpace: 'pre-line' });
        // Better not set flex 1 to text
        setViewProps(styles, props, options);
        setTextStyle(styles, props, options);
        setAlign(styles, Layout.Row, props.align);
        setTextAlign(styles, (_a = props.align) === null || _a === void 0 ? void 0 : _a.horizontal);
        return styles;
    },
    mapImageProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setImageStyle(styles, props.imageStyle);
        setImageAspectRatio(styles, props);
        return styles;
    },
    mapTextButtonProps(props, options) {
        const styles = getDefaultStyles({ whiteSpace: 'pre-line', alignItems: 'center', justifyContent: 'center' });
        setViewProps(styles, props, options);
        setTextStyle(styles, Object.assign(Object.assign({}, props), { textStyle: Object.assign({ weight: 500 }, props.textStyle) }), options);
        return styles;
    },
    mapImageButtonProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setImageStyle(styles, props.imageStyle);
        setImageAspectRatio(styles, props);
        return styles;
    },
    mapCarouselProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        return styles;
    },
});
createMessageTemplate({
    renderer,
    parser,
    Container: ({ children, className }) => {
        return (React.createElement("div", { className: `sb-message-template__parent ${className}`, style: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
                marginBottom: 24,
            } }, children));
    },
});

var CustomTemplate = createMessageTemplate({
    parser: parser,
    renderer: renderer,
    Container: function (_a) {
        var children = _a.children, className = _a.className;
        return (React.createElement("div", { className: [
                "sb-message-template__parent ".concat(className),
                'sendbird-message-template__root',
            ].join(' ') }, children));
    },
}).MessageTemplate;
function MessageTemplate(_a) {
    var templateItems = _a.templateItems, templateVersion = _a.templateVersion;
    return React.createElement(CustomTemplate, { templateItems: templateItems, templateVersion: templateVersion });
}

exports.MessageProvider = MessageProvider;
exports.MessageTemplate = MessageTemplate;
//# sourceMappingURL=bundle-DshTea70.js.map
