'use strict';

var React = require('react');
var CreateChannel_context = require('../../chunks/bundle-DfJDiLF1.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CYjw4691.js');
require('../../chunks/bundle-BvJOj_Nb.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DHh3VdoS.js');
require('../../chunks/bundle-BD2bIoH6.js');
require('../../chunks/bundle-DoHigaWY.js');
require('../../chunks/bundle-C8yEdUBb.js');
require('../../chunks/bundle-DGx3xKBn.js');
require('../../chunks/bundle-CG5E97k8.js');
require('../../chunks/bundle-CiDSKL46.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-24sG-BP_.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-DtHyD1hB.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DDY1xx_n.js');
require('../../chunks/bundle-BPGreBtw.js');
require('../../chunks/bundle-e1P14sMX.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-BKwrdy8Y.js');
require('../../chunks/bundle-JS-CtPko.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Xx0kBn7q.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');

var CreateChannel = function (props) {
    var onCancel = props.onCancel, renderStepOne = props.renderStepOne;
    var _a = CreateChannel_context.useCreateChannelContext(), step = _a.step, setStep = _a.setStep, userListQuery = _a.userListQuery;
    return (React.createElement(React.Fragment, null,
        step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || (React.createElement(CreateChannel_components_SelectChannelType, { onCancel: onCancel }))),
        step === 1 && (React.createElement(CreateChannel_components_InviteUsers, { userListQuery: userListQuery, onCancel: function () {
                setStep(0);
                onCancel();
            } }))));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map
