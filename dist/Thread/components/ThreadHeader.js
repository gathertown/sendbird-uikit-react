import React__default, { useMemo } from 'react';
import { IconTypes, IconColors } from '../../ui/Icon.js';
import { u as useLocalization } from '../../chunks/bundle-CRmP70eG.js';
import Header from '../../ui/Header.js';
import '../../chunks/bundle-D8IuvsaW.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-nY4hBePV.js';
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
