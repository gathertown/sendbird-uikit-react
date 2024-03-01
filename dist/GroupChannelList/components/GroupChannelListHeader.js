import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-BBVJixDe.js';
import { A as Avatar } from '../../chunks/bundle-BJEESw7S.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-DBtyGp-i.js';
import Header from '../../ui/Header.js';
import '../../withSendbird.js';
import '../../chunks/bundle-h5nSe8RU.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CeRxCnOB.js';
import '../../ui/IconButton.js';

var GroupChannelListHeader = function (_a) {
    var renderTitle = _a.renderTitle, renderIconButton = _a.renderIconButton, onEdit = _a.onEdit, allowProfileEdit = _a.allowProfileEdit, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stores = useSendbirdStateContext().stores;
    var user = stores.userStore.user;
    var stringSet = useLocalization().stringSet;
    var renderProfile = renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : renderTitle;
    return (React__default.createElement(Header, { className: "sendbird-channel-header ".concat(allowProfileEdit ? 'sendbird-channel-header--allow-edit' : ''), renderLeft: renderLeft, renderMiddle: function () {
            var _a;
            return ((_a = renderProfile === null || renderProfile === void 0 ? void 0 : renderProfile()) !== null && _a !== void 0 ? _a : (React__default.createElement("div", { className: "sendbird-channel-header__title", role: "button", onClick: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, onKeyDown: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, tabIndex: 0 },
                React__default.createElement("div", { className: "sendbird-channel-header__title__left" },
                    React__default.createElement(Avatar, { width: "32px", height: "32px", src: user.profileUrl, alt: user.nickname })),
                React__default.createElement("div", { className: "sendbird-channel-header__title__right" },
                    React__default.createElement(Label, { className: "sendbird-channel-header__title__right__name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, user.nickname || stringSet.NO_NAME),
                    React__default.createElement(Label, { className: "sendbird-channel-header__title__right__user-id", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_2 }, user.userId)))));
        }, renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : renderIconButton }));
};

export { GroupChannelListHeader, GroupChannelListHeader as default };
//# sourceMappingURL=GroupChannelListHeader.js.map
