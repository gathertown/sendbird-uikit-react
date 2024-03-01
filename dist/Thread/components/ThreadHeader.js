import React__default, { useMemo } from 'react';
import { IconTypes, IconColors } from '../../ui/Icon.js';
import { u as useLocalization } from '../../chunks/bundle-VRwQbdO6.js';
import Header from '../../ui/Header.js';
import '../../chunks/bundle-BpxXmFQC.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-jY1v8xbA.js';
import '../../ui/IconButton.js';

function ThreadHeader(_a) {
    var className = _a.className, channelName = _a.channelName, renderActionIcon = _a.renderActionIcon, onActionIconClick = _a.onActionIconClick, onChannelNameClick = _a.onChannelNameClick;
    var stringSet = useLocalization().stringSet;
    var MemoizedActionIcon = useMemo(function () {
        if (typeof renderActionIcon === 'function') {
            return renderActionIcon({ onActionIconClick: onActionIconClick });
        }
        return null;
    }, [renderActionIcon]);
    return (React__default.createElement(Header, { className: "sendbird-thread-header ".concat(className), renderMiddle: function () { return (React__default.createElement(Header.Title, { title: stringSet.THREAD__HEADER_TITLE, subtitle: channelName, onClickSubtitle: onChannelNameClick })); }, renderRight: function () { return (MemoizedActionIcon || (React__default.createElement("div", { className: "sendbird-thread-header__action" },
            React__default.createElement(Header.IconButton, { onClick: function (e) { return onActionIconClick(e); }, type: IconTypes.CLOSE, color: IconColors.ON_BACKGROUND_1 })))); } }));
}

export { ThreadHeader as default };
//# sourceMappingURL=ThreadHeader.js.map