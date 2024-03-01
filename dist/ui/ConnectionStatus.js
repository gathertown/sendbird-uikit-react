import React__default, { useContext } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ZpyLpKbV.js';
import { L as LocalizationContext } from '../chunks/bundle-VRwQbdO6.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-DIC0UBC5.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-BIDYJkIe.js';

function ConnectionStatus() {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-connection-status" },
        React__default.createElement(Label, { type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React__default.createElement(Icon, { type: IconTypes.DISCONNECTED, fillColor: IconColors.SENT, width: "14px", height: "14px" })));
}

export { ConnectionStatus as default };
//# sourceMappingURL=ConnectionStatus.js.map
