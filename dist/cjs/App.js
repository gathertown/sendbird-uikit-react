'use strict';

var React = require('react');
var SendbirdProvider = require('./SendbirdProvider.js');
var MediaQueryContext = require('./chunks/bundle-4WvE40Un.js');
var _tslib = require('./chunks/bundle-xbdnJE9-.js');
var GroupChannel = require('./GroupChannel.js');
var GroupChannelList = require('./GroupChannelList.js');
var Channel = require('./Channel.js');
var ChannelList = require('./ChannelList.js');
var ChannelSettings = require('./ChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var Thread = require('./Thread.js');
var groupChannel = require('@sendbird/chat/groupChannel');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
var uuid = require('./chunks/bundle-SOIkTCep.js');
var VoicePlayer_context = require('./chunks/bundle-jXnX-7jH.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('./chunks/bundle-tNuJSOqI.js');
require('./chunks/bundle-BWsz2Xk-.js');
require('./chunks/bundle-Fj06oDBD.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-Uw6P-cM9.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-jCTpndN0.js');
require('./chunks/bundle-2xXFQXmk.js');
require('./VoiceRecorder/context.js');
require('./chunks/bundle-WKa05h0_.js');
require('./chunks/bundle-Yzhiyr0t.js');
require('./chunks/bundle-HY8cubCp.js');
require('./chunks/bundle-6hGNMML2.js');
require('react-dom');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-KkCwxjVN.js');
require('./ui/Icon.js');
require('./chunks/bundle-Atn5EZwu.js');
require('./chunks/bundle-MK0CJsqZ.js');
require('./hooks/useModal.js');
require('./GroupChannel/context.js');
require('@sendbird/chat/message');
require('./chunks/bundle-uzKywAVp.js');
require('./chunks/bundle-H29alxvs.js');
require('./chunks/bundle-U2YYVRfT.js');
require('./chunks/bundle-48AiK3oz.js');
require('./chunks/bundle-6xWNZugu.js');
require('./chunks/bundle-Zw2P8RwZ.js');
require('./chunks/bundle-VqRllkVd.js');
require('./GroupChannel/components/GroupChannelUI.js');
require('./chunks/bundle-OSMOOULc.js');
require('./GroupChannel/components/TypingIndicator.js');
require('./chunks/bundle-gZD5lzcX.js');
require('./ui/ConnectionStatus.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./GroupChannel/components/GroupChannelHeader.js');
require('./chunks/bundle-7NDZV1cp.js');
require('./ui/ChannelAvatar.js');
require('./chunks/bundle--jUKLwRX.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-kftX5Dbs.js');
require('./chunks/bundle-aadmp473.js');
require('./chunks/bundle-ZXiz-rp_.js');
require('./GroupChannel/components/MessageList.js');
require('./GroupChannel/components/Message.js');
require('./chunks/bundle-Q3LgnX7F.js');
require('./chunks/bundle-KOig1nUx.js');
require('./chunks/bundle-pi-jk3re.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./ui/DateSeparator.js');
require('./chunks/bundle-0uk8Bfy0.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-ZK5PhDxY.js');
require('./chunks/bundle-d6SaHkg0.js');
require('dompurify');
require('./chunks/bundle-h9YDQxpQ.js');
require('./chunks/bundle-fqNhuMna.js');
require('./chunks/bundle-yk__vyz_.js');
require('./chunks/bundle-2_j4r1Cc.js');
require('./ui/MessageContent.js');
require('./chunks/bundle-VehpyAT7.js');
require('./chunks/bundle-_wF3sJvp.js');
require('./chunks/bundle-iPt3h7ba.js');
require('./ui/MessageItemMenu.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-K3wEmKTu.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-pOf7PZ4G.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./ui/AdminMessage.js');
require('./ui/QuoteMessage.js');
require('./chunks/bundle--4Ob_RGQ.js');
require('./chunks/bundle-m5pFb_tZ.js');
require('./ui/ThreadReplies.js');
require('./ui/OGMessageItemBody.js');
require('./chunks/bundle-DqKLlsGU.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./ui/TextMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./ui/TextButton.js');
require('./chunks/bundle-wezC76id.js');
require('./chunks/bundle-s5WIvT8N.js');
require('./chunks/bundle-noP7JXqE.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/FeedbackIconButton.js');
require('./ui/MobileFeedbackMenu.js');
require('./Channel/components/MessageFeedbackModal.js');
require('./ui/Input.js');
require('./GroupChannel/components/SuggestedReplies.js');
require('./chunks/bundle-rYFzQpzQ.js');
require('./GroupChannel/components/FileViewer.js');
require('./chunks/bundle-JARyNexc.js');
require('./GroupChannel/components/RemoveMessageModal.js');
require('./chunks/bundle-L8T4CdY4.js');
require('./chunks/bundle-gOYUXAiI.js');
require('./Channel/utils/getMessagePartsInfo.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./GroupChannel/components/UnreadCount.js');
require('./GroupChannel/components/FrozenNotification.js');
require('./ui/TypingIndicatorBubble.js');
require('./GroupChannel/components/MessageInputWrapper.js');
require('./chunks/bundle-Xa3hXyhu.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-pKCe2hVu.js');
require('./GroupChannel/hooks/useHandleUploadFiles.js');
require('./chunks/bundle-a5LHhP6m.js');
require('./GroupChannelList/context.js');
require('./GroupChannelList/components/GroupChannelListUI.js');
require('./chunks/bundle-dV4ZEGW6.js');
require('./GroupChannelList/components/GroupChannelListHeader.js');
require('./EditUserProfile.js');
require('./EditUserProfile/context.js');
require('./EditUserProfile/components/EditUserProfileUI.js');
require('./GroupChannelList/components/GroupChannelPreviewAction.js');
require('./GroupChannelList/components/GroupChannelListItem.js');
require('./chunks/bundle-blsUz0A6.js');
require('./ui/Badge.js');
require('./ui/MentionUserLabel.js');
require('./GroupChannelList/components/AddGroupChannel.js');
require('./chunks/bundle-pO3WtufJ.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./chunks/bundle-chizstU7.js');
require('./CreateChannel/components/InviteUsers.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./Channel/context.js');
require('./chunks/bundle-JLP3WF2h.js');
require('./chunks/bundle-a7LVpeCR.js');
require('./chunks/bundle-kLoWlyQs.js');
require('./chunks/bundle-40zdhNFy.js');
require('./chunks/bundle-W24S10k5.js');
require('./chunks/bundle-Q5GNNUqM.js');
require('./Channel/components/ChannelUI.js');
require('./Channel/components/ChannelHeader.js');
require('./Channel/components/MessageList.js');
require('./Channel/components/Message.js');
require('./Channel/components/FileViewer.js');
require('./Channel/components/RemoveMessageModal.js');
require('./chunks/bundle-zlfJ0EDR.js');
require('./Channel/components/MessageInput.js');
require('./chunks/bundle-0sfo9lj4.js');
require('./ChannelList/components/ChannelListUI.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ChannelList/components/AddChannel.js');
require('./ChannelSettings/components/ChannelSettingsUI.js');
require('./ChannelSettings/context.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ChannelSettings/components/ModerationPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./chunks/bundle-Oq4We4Jl.js');
require('./ui/Toggle.js');
require('./ChannelSettings/components/UserListItem.js');
require('./chunks/bundle-H2dGaKZQ.js');
require('./ChannelSettings/components/LeaveChannel.js');
require('./ChannelSettings/components/UserPanel.js');
require('./MessageSearch/components/MessageSearchUI.js');
require('./MessageSearch/context.js');
require('./ui/MessageSearchItem.js');
require('./ui/MessageSearchFileItem.js');
require('./Thread/context.js');
require('./Thread/context/types.js');
require('./Thread/components/ThreadUI.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-Wt6H25kL.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./chunks/bundle-vs1IDbbN.js');
require('./Thread/components/ThreadHeader.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./Channel/hooks/useHandleUploadFiles.js');

var DesktopLayout = function (props) {
    var isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, isMessageGroupingEnabled = props.isMessageGroupingEnabled, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, allowProfileEdit = props.allowProfileEdit, showSearchIcon = props.showSearchIcon, onProfileEditSuccess = props.onProfileEditSuccess, disableAutoSelect = props.disableAutoSelect, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, showSettings = props.showSettings, setShowSettings = props.setShowSettings, showSearch = props.showSearch, setShowSearch = props.setShowSearch, highlightedMessage = props.highlightedMessage, setHighlightedMessage = props.setHighlightedMessage, startingPoint = props.startingPoint, setStartingPoint = props.setStartingPoint, showThread = props.showThread, setShowThread = props.setShowThread, threadTargetMessage = props.threadTargetMessage, setThreadTargetMessage = props.setThreadTargetMessage, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var updateFocusedChannel = function (channel) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(null);
        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null);
        if (channel) {
            setCurrentChannel(channel);
        }
        else {
            setCurrentChannel(null);
        }
    };
    var onClickThreadReply = function (_a) {
        var message = _a.message;
        // parent message
        setShowSettings(false);
        setShowSearch(false);
        if (replyType === 'THREAD') {
            setThreadTargetMessage(message);
            setShowThread(true);
        }
    };
    var channelListProps = {
        allowProfileEdit: allowProfileEdit,
        activeChannelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url,
        onProfileEditSuccess: onProfileEditSuccess,
        disableAutoSelect: disableAutoSelect,
        onChannelSelect: updateFocusedChannel,
        // for GroupChannelList
        selectedChannelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url,
        onChannelCreated: updateFocusedChannel,
        onUserProfileUpdated: onProfileEditSuccess,
    };
    var channelProps = {
        channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '',
        onChatHeaderActionClick: function () {
            setShowSearch(false);
            setShowThread(false);
            setShowSettings(!showSettings);
        },
        onSearchClick: function () {
            setShowSettings(false);
            setShowThread(false);
            setShowSearch(!showSearch);
        },
        onReplyInThread: onClickThreadReply,
        onQuoteMessageClick: function (_a) {
            var message = _a.message;
            // thread message
            setShowSettings(false);
            setShowSearch(false);
            if (replyType === 'THREAD') {
                setThreadTargetMessage(message);
                setShowThread(true);
            }
        },
        animatedMessage: highlightedMessage,
        onMessageAnimated: function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); },
        showSearchIcon: showSearchIcon,
        startingPoint: startingPoint,
        isReactionEnabled: isReactionEnabled,
        replyType: replyType,
        isMessageGroupingEnabled: isMessageGroupingEnabled,
        isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
        // for GroupChannel
        animatedMessageId: highlightedMessage,
        onReplyInThreadClick: onClickThreadReply,
    };
    return (React.createElement("div", { className: "sendbird-app__wrap" },
        React.createElement("div", { className: "sendbird-app__channellist-wrap" }, enableLegacyChannelModules ? React.createElement(ChannelList, _tslib.__assign({}, channelListProps)) : React.createElement(GroupChannelList.GroupChannelList, _tslib.__assign({}, channelListProps))),
        React.createElement("div", { className: "\n          ".concat(showSettings ? 'sendbird-app__conversation--settings-open' : '', "\n          ").concat(showSearch ? 'sendbird-app__conversation--search-open' : '', "\n          sendbird-app__conversation-wrap\n        ") }, enableLegacyChannelModules ? React.createElement(Channel, _tslib.__assign({}, channelProps)) : React.createElement(GroupChannel.GroupChannel, _tslib.__assign({}, channelProps))),
        showSettings && (React.createElement("div", { className: "sendbird-app__settingspanel-wrap" },
            React.createElement(ChannelSettings, { className: "sendbird-channel-settings", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setShowSettings(false);
                } }))),
        showSearch && (React.createElement("div", { className: "sendbird-app__searchpanel-wrap" },
            React.createElement(MessageSearch, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onResultClick: function (message) {
                    if (message.messageId === highlightedMessage) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null);
                        setTimeout(function () {
                            setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message.messageId);
                        });
                    }
                    else {
                        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(message.createdAt);
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message.messageId);
                    }
                }, onCloseClick: function () {
                    setShowSearch(false);
                } }))),
        showThread && (React.createElement(Thread, { className: "sendbird-app__thread", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                setShowThread(false);
            }, onMoveToParentMessage: function (_a) {
                var message = _a.message, channel = _a.channel;
                if ((channel === null || channel === void 0 ? void 0 : channel.url) !== (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url)) {
                    setCurrentChannel(channel);
                }
                if ((message === null || message === void 0 ? void 0 : message.messageId) !== highlightedMessage) {
                    setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(message === null || message === void 0 ? void 0 : message.createdAt);
                }
                setTimeout(function () {
                    setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(null);
                    setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message === null || message === void 0 ? void 0 : message.messageId);
                }, 500);
            } }))));
};

var PANELS;
(function (PANELS) {
    PANELS["CHANNEL_LIST"] = "CHANNEL_LIST";
    PANELS["CHANNEL"] = "CHANNEL";
    PANELS["CHANNEL_SETTINGS"] = "CHANNEL_SETTINGS";
    PANELS["MESSAGE_SEARCH"] = "MESSAGE_SEARCH";
    PANELS["THREAD"] = "THREAD";
})(PANELS || (PANELS = {}));
var MobileLayout = function (props) {
    var _a, _b, _c;
    var replyType = props.replyType, isMessageGroupingEnabled = props.isMessageGroupingEnabled, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, allowProfileEdit = props.allowProfileEdit, isReactionEnabled = props.isReactionEnabled, showSearchIcon = props.showSearchIcon, onProfileEditSuccess = props.onProfileEditSuccess, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, startingPoint = props.startingPoint, setStartingPoint = props.setStartingPoint, threadTargetMessage = props.threadTargetMessage, setThreadTargetMessage = props.setThreadTargetMessage, highlightedMessage = props.highlightedMessage, setHighlightedMessage = props.setHighlightedMessage, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var _d = React.useState(PANELS.CHANNEL_LIST), panel = _d[0], setPanel = _d[1];
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var sdk = (_b = (_a = store === null || store === void 0 ? void 0 : store.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
    var userId = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId;
    var pause = VoicePlayer_context.useVoicePlayerContext().pause;
    var goToMessage = function (message, timeoutCb) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint((message === null || message === void 0 ? void 0 : message.createdAt) || null);
        setTimeout(function () {
            timeoutCb === null || timeoutCb === void 0 ? void 0 : timeoutCb((message === null || message === void 0 ? void 0 : message.messageId) || null);
        }, 500);
    };
    React.useEffect(function () {
        if (panel !== PANELS.CHANNEL) {
            goToMessage(null, function () { return setHighlightedMessage(null); });
        }
    }, [panel]);
    React.useEffect(function () {
        var _a, _b;
        var handlerId = uuid.uuidv4();
        if ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler) {
            var handler = new groupChannel.GroupChannelHandler({
                onUserBanned: function (groupChannel, user) {
                    if (groupChannel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) && (user === null || user === void 0 ? void 0 : user.userId) === userId) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
                onChannelDeleted: function (channelUrl) {
                    if (channelUrl === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url)) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
                onUserLeft: function (groupChannel, user) {
                    if (groupChannel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) && (user === null || user === void 0 ? void 0 : user.userId) === userId) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
            });
            (_b = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _b === void 0 ? void 0 : _b.addGroupChannelHandler(handlerId, handler);
        }
        return function () {
            var _a, _b;
            (_b = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.removeGroupChannelHandler) === null || _b === void 0 ? void 0 : _b.call(_a, handlerId);
        };
    }, [sdk, currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    // if currentChannel is changed while on Thread
    // then change panel type to CHANNEL
    React.useEffect(function () {
        if (panel === PANELS.THREAD) {
            setPanel(PANELS.CHANNEL);
        }
    }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    var channelListProps = {
        allowProfileEdit: allowProfileEdit,
        onProfileEditSuccess: onProfileEditSuccess,
        disableAutoSelect: true,
        onChannelSelect: function (channel) {
            setCurrentChannel(channel);
            if (channel) {
                setPanel(PANELS.CHANNEL);
            }
            else {
                setPanel(PANELS.CHANNEL_LIST);
            }
        },
        // for GroupChannelList
        onChannelCreated: function (channel) {
            setCurrentChannel(channel);
            setPanel(PANELS.CHANNEL);
        },
        onUserProfileUpdated: onProfileEditSuccess,
    };
    var channelProps = {
        channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '',
        onChatHeaderActionClick: function () {
            setPanel(PANELS.CHANNEL_SETTINGS);
        },
        onBackClick: function () {
            setPanel(PANELS.CHANNEL_LIST);
            pause(VoicePlayer_context.ALL);
        },
        onSearchClick: function () {
            setPanel(PANELS.MESSAGE_SEARCH);
        },
        onReplyInThread: function (_a) {
            var message = _a.message;
            if (replyType === 'THREAD') {
                setPanel(PANELS.THREAD);
                setThreadTargetMessage(message);
            }
        },
        onQuoteMessageClick: function (_a) {
            var message = _a.message;
            // thread message
            if (replyType === 'THREAD') {
                setThreadTargetMessage(message);
                setPanel(PANELS.THREAD);
            }
        },
        animatedMessage: highlightedMessage,
        onMessageAnimated: function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); },
        showSearchIcon: showSearchIcon,
        startingPoint: startingPoint,
        isReactionEnabled: isReactionEnabled,
        replyType: replyType,
        isMessageGroupingEnabled: isMessageGroupingEnabled,
        isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
        // for GroupChannel
        animatedMessageId: highlightedMessage,
        onReplyInThreadClick: function (_a) {
            var message = _a.message;
            if (replyType === 'THREAD') {
                setPanel(PANELS.THREAD);
                setThreadTargetMessage(message);
            }
        },
    };
    return (React.createElement("div", { className: "sb_mobile" },
        panel === PANELS.CHANNEL_LIST && (React.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React.createElement(ChannelList, _tslib.__assign({}, channelListProps)) : React.createElement(GroupChannelList.GroupChannelList, _tslib.__assign({}, channelListProps)))),
        panel === PANELS.CHANNEL && (React.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React.createElement(Channel, _tslib.__assign({}, channelProps)) : React.createElement(GroupChannel.GroupChannel, _tslib.__assign({}, channelProps)))),
        panel === PANELS.CHANNEL_SETTINGS && (React.createElement("div", { className: "sb_mobile__panelwrap" },
            React.createElement(ChannelSettings, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onLeaveChannel: function () {
                    setPanel(PANELS.CHANNEL_LIST);
                } }))),
        panel === PANELS.MESSAGE_SEARCH && (React.createElement("div", { className: "sb_mobile__panelwrap" },
            React.createElement(MessageSearch, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onResultClick: function (message) {
                    setPanel(PANELS.CHANNEL);
                    goToMessage(message, function (messageId) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(messageId);
                    });
                } }))),
        panel === PANELS.THREAD && (React.createElement("div", { className: "sb_mobile__panelwrap" },
            React.createElement(Thread, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                    setPanel(PANELS.CHANNEL);
                    pause(VoicePlayer_context.ALL);
                }, onMoveToParentMessage: function (_a) {
                    var message = _a.message, channel = _a.channel;
                    setCurrentChannel(channel);
                    goToMessage(message, function (messageId) {
                        setPanel(PANELS.CHANNEL);
                        setHighlightedMessage(messageId);
                    });
                } })))));
};

var AppLayout = function (props) {
    var _a, _b, _c;
    var isMessageGroupingEnabled = props.isMessageGroupingEnabled, allowProfileEdit = props.allowProfileEdit, onProfileEditSuccess = props.onProfileEditSuccess, disableAutoSelect = props.disableAutoSelect, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var globalConfigs = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config;
    var _d = React.useState(false), showThread = _d[0], setShowThread = _d[1];
    var _e = React.useState(null), threadTargetMessage = _e[0], setThreadTargetMessage = _e[1];
    var _f = React.useState(false), showSettings = _f[0], setShowSettings = _f[1];
    var _g = React.useState(false), showSearch = _g[0], setShowSearch = _g[1];
    var _h = React.useState(null), highlightedMessage = _h[0], setHighlightedMessage = _h[1];
    var _j = React.useState(null), startingPoint = _j[0], setStartingPoint = _j[1];
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    /**
     * Below configs can be set via Dashboard UIKit config setting but as a lower priority than App props.
     * So need to be have fallback value \w global configs even though each prop values are undefined
     */
    var replyType = (_a = props.replyType) !== null && _a !== void 0 ? _a : globalConfigs === null || globalConfigs === void 0 ? void 0 : globalConfigs.replyType;
    var isReactionEnabled = (_b = props.isReactionEnabled) !== null && _b !== void 0 ? _b : globalConfigs === null || globalConfigs === void 0 ? void 0 : globalConfigs.isReactionEnabled;
    var showSearchIcon = (_c = props.showSearchIcon) !== null && _c !== void 0 ? _c : globalConfigs === null || globalConfigs === void 0 ? void 0 : globalConfigs.showSearchIcon;
    return (React.createElement(React.Fragment, null, isMobile
        ? (React.createElement(MobileLayout, { replyType: replyType, showSearchIcon: showSearchIcon, isReactionEnabled: isReactionEnabled, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, enableLegacyChannelModules: enableLegacyChannelModules }))
        : (React.createElement(DesktopLayout, { replyType: replyType, isReactionEnabled: isReactionEnabled, showSearchIcon: showSearchIcon, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, showThread: showThread, setShowThread: setShowThread, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, showSettings: showSettings, setShowSettings: setShowSettings, showSearch: showSearch, setShowSearch: setShowSearch, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, enableLegacyChannelModules: enableLegacyChannelModules }))));
};

/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
function App(props) {
    var appId = props.appId, userId = props.userId, _a = props.accessToken, accessToken = _a === void 0 ? '' : _a, _b = props.customApiHost, customApiHost = _b === void 0 ? '' : _b, _c = props.customWebSocketHost, customWebSocketHost = _c === void 0 ? '' : _c, _d = props.breakpoint, breakpoint = _d === void 0 ? null : _d, _e = props.theme, theme = _e === void 0 ? 'light' : _e, _f = props.userListQuery, userListQuery = _f === void 0 ? null : _f, _g = props.nickname, nickname = _g === void 0 ? '' : _g, _h = props.profileUrl, profileUrl = _h === void 0 ? '' : _h, _j = props.dateLocale, dateLocale = _j === void 0 ? null : _j, _k = props.config, config = _k === void 0 ? {} : _k, voiceRecord = props.voiceRecord, _l = props.isMessageGroupingEnabled, isMessageGroupingEnabled = _l === void 0 ? true : _l, _m = props.colorSet, colorSet = _m === void 0 ? null : _m, _o = props.stringSet, stringSet = _o === void 0 ? null : _o, _p = props.allowProfileEdit, allowProfileEdit = _p === void 0 ? false : _p, _q = props.disableMarkAsDelivered, disableMarkAsDelivered = _q === void 0 ? false : _q, _r = props.renderUserProfile, renderUserProfile = _r === void 0 ? null : _r, _s = props.onProfileEditSuccess, onProfileEditSuccess = _s === void 0 ? null : _s, _t = props.imageCompression, imageCompression = _t === void 0 ? {} : _t, _u = props.disableAutoSelect, disableAutoSelect = _u === void 0 ? false : _u, sdkInitParams = props.sdkInitParams, customExtensionParams = props.customExtensionParams, eventHandlers = props.eventHandlers, uikitOptions = props.uikitOptions, 
    // The below configs are duplicates of the Dashboard UIKit Configs.
    // Since their default values will be set in the Sendbird component,
    // we don't need to set them here.
    showSearchIcon = props.showSearchIcon, isMentionEnabled = props.isMentionEnabled, isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, disableUserProfile = props.disableUserProfile, isVoiceMessageEnabled = props.isVoiceMessageEnabled, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, isTypingIndicatorEnabledOnChannelList = props.isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList = props.isMessageReceiptStatusEnabledOnChannelList, _v = props.isUserIdUsedForNickname, isUserIdUsedForNickname = _v === void 0 ? true : _v, _w = props.enableLegacyChannelModules, enableLegacyChannelModules = _w === void 0 ? false : _w;
    var _x = React.useState(null), currentChannel = _x[0], setCurrentChannel = _x[1];
    return (React.createElement(SendbirdProvider.SendbirdProvider, { stringSet: stringSet, appId: appId, userId: userId, accessToken: accessToken, customApiHost: customApiHost, customWebSocketHost: customWebSocketHost, breakpoint: breakpoint, theme: theme, nickname: nickname, profileUrl: profileUrl, dateLocale: dateLocale, userListQuery: userListQuery, config: config, colorSet: colorSet, disableUserProfile: disableUserProfile, disableMarkAsDelivered: disableMarkAsDelivered, renderUserProfile: renderUserProfile, imageCompression: imageCompression, isReactionEnabled: isReactionEnabled, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled, voiceRecord: voiceRecord, onUserProfileMessage: function (channel) {
            setCurrentChannel(channel);
        }, isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList, replyType: replyType, showSearchIcon: showSearchIcon, uikitOptions: uikitOptions, isUserIdUsedForNickname: isUserIdUsedForNickname, sdkInitParams: sdkInitParams, customExtensionParams: customExtensionParams, eventHandlers: eventHandlers },
        React.createElement(AppLayout, { isReactionEnabled: isReactionEnabled, replyType: replyType, showSearchIcon: showSearchIcon, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, enableLegacyChannelModules: enableLegacyChannelModules })));
}

module.exports = App;
//# sourceMappingURL=App.js.map
