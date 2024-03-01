var pxToNumber = function (px) {
    if (typeof px === 'number') {
        return px;
    }
    if (typeof px === 'string') {
        var parsed = Number.parseFloat(px);
        if (!Number.isNaN(parsed)) {
            return parsed;
        }
    }
    return NaN;
};

export { pxToNumber as p };
//# sourceMappingURL=bundle-Dzc4np9L.js.map
