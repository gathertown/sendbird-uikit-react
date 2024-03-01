'use strict';

var React = require('react');
var ui_Icon = require('../../ui/Icon.js');
var LocalizationContext = require('../../chunks/bundle-BeJ7-X59.js');
var ui_Header = require('../../ui/Header.js');
require('../../chunks/bundle-DvNeoTBz.js');
require('../../chunks/bundle-DQfemABy.js');
require('../../chunks/bundle-BruYC2Km.js');
require('../../chunks/bundle-DUeKijBO.js');
require('../../chunks/bundle-CkvaXo1D.js');
require('../../chunks/bundle-BppUjcCZ.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-C79vYLB2.js');
require('../../ui/IconButton.js');

function ThreadHeader(_a) {
    var className = _a.className, channelName = _a.channelName, renderActionIcon = _a.renderActionIcon, onActionIconClick = _a.onActionIconClick, onChannelNameClick = _a.onChannelNameClick;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var MemoizedActionIcon = React.useMemo(function () {
        if (typeof renderActionIcon === 'function') {
            return renderActionIcon({ onActionIconClick: onActionIconClick });
        }
        return null;
    }, [renderActionIcon]);
    return (React.createElement(ui_Header.default, { className: "sendbird-thread-header ".concat(className), renderMiddle: function () { return (React.createElement(ui_Header.default.Title, { title: stringSet.THREAD__HEADER_TITLE, subtitle: channelName, onClickSubtitle: onChannelNameClick })); }, renderRight: function () { return (MemoizedActionIcon || (React.createElement("div", { className: "sendbird-thread-header__action" },
            React.createElement(ui_Header.default.IconButton, { onClick: function (e) { return onActionIconClick(e); }, type: ui_Icon.IconTypes.CLOSE, color: ui_Icon.IconColors.ON_BACKGROUND_1 })))); } }));
}

module.exports = ThreadHeader;
//# sourceMappingURL=ThreadHeader.js.map
