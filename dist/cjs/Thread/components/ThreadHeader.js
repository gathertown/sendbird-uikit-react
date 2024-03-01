'use strict';

var React = require('react');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Label = require('../../chunks/bundle-26QzFMMl.js');
var ui_TextButton = require('../../ui/TextButton.js');
var LocalizationContext = require('../../chunks/bundle-60kIt9Rq.js');
require('../../chunks/bundle-2dG9SU7T.js');
require('../../chunks/bundle-QStqvuCY.js');
require('../../chunks/bundle-eH49AisR.js');
require('../../chunks/bundle-KNt569rP.js');
require('../../chunks/bundle-gDA5XZ0C.js');

function ThreadHeader(_a) {
    var className = _a.className, channelName = _a.channelName, renderActionIcon = _a.renderActionIcon, onActionIconClick = _a.onActionIconClick, onChannelNameClick = _a.onChannelNameClick;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var MemoizedActionIcon = React.useMemo(function () {
        if (typeof renderActionIcon === 'function') {
            return renderActionIcon({ onActionIconClick: onActionIconClick });
        }
        return null;
    }, [renderActionIcon]);
    return (React.createElement("div", { className: "sendbird-thread-header ".concat(className) },
        React.createElement(ui_Label.Label, { className: "sendbird-thread-header__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.THREAD__HEADER_TITLE),
        React.createElement(ui_TextButton, { onClick: function (e) { return onChannelNameClick === null || onChannelNameClick === void 0 ? void 0 : onChannelNameClick(e); }, disableUnderline: true },
            React.createElement(ui_Label.Label, { className: "sendbird-thread-header__channel-name", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, channelName)),
        MemoizedActionIcon || (React.createElement("div", { className: "sendbird-thread-header__action" },
            React.createElement(ui_IconButton, { width: "32px", height: "32px", onClick: function (e) { return onActionIconClick(e); } },
                React.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, width: "22px", height: "22px" }))))));
}

module.exports = ThreadHeader;
//# sourceMappingURL=ThreadHeader.js.map
