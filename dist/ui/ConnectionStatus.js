import React__default, { useContext } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-BNNafMXS.js';
import { L as LocalizationContext } from '../chunks/bundle-CRmP70eG.js';
import '../chunks/bundle-D8IuvsaW.js';
import '../chunks/bundle-0yILBaSQ.js';
import '../chunks/bundle-C9nxq4KD.js';
import '../chunks/bundle-k7V2rNcW.js';

function ConnectionStatus() {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-connection-status" },
        React__default.createElement(Label, { type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React__default.createElement(Icon, { type: IconTypes.DISCONNECTED, fillColor: IconColors.SENT, width: "14px", height: "14px" })));
}

export { ConnectionStatus as default };
//# sourceMappingURL=ConnectionStatus.js.map
