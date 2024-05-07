import React__default, { useState } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BNNafMXS.js';
import '../chunks/bundle-D8IuvsaW.js';
import '../chunks/bundle-C9nxq4KD.js';

var InputLabel = function (_a) {
    var children = _a.children;
    return (React__default.createElement(Label, { className: "sendbird-input-label", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_1 }, children));
};
var Input = React__default.forwardRef(function (props, ref) {
    var name = props.name, required = props.required, disabled = props.disabled, value = props.value, placeHolder = props.placeHolder, _a = props.autoFocus, autoFocus = _a === void 0 ? false : _a;
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    return (React__default.createElement("div", { className: "sendbird-input" },
        React__default.createElement("input", { className: "sendbird-input__input", ref: ref, name: name, required: required, disabled: disabled, value: inputValue, onChange: function (e) {
                setInputValue(e.target.value);
            }, autoFocus: autoFocus }),
        (placeHolder && !inputValue) && (React__default.createElement(Label, { className: "sendbird-input__placeholder", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, placeHolder))));
});

export { InputLabel, Input as default };
//# sourceMappingURL=Input.js.map
