import React__default from 'react';
import { u as useLocalization } from '../../chunks/bundle-VRwQbdO6.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { IconTypes } from '../../ui/Icon.js';
import Header from '../../ui/Header.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/IconButton.js';

var ChannelSettingsHeader = function (_a) {
    var onCloseClick = _a.onCloseClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.createElement(Header, { className: "sendbird-channel-settings__header", renderLeft: renderLeft, renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React__default.createElement(Header.Title, { title: stringSet.CHANNEL_SETTING__HEADER__TITLE })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React__default.createElement("div", { className: "sendbird-channel-settings__header-icon" },
            React__default.createElement(Header.IconButton, { type: IconTypes.CLOSE, onClick: function (e) {
                    logger.info('ChannelSettings: Click close');
                    onCloseClick(e);
                } }))); }) }));
};

export { ChannelSettingsHeader };
//# sourceMappingURL=ChannelSettingsHeader.js.map