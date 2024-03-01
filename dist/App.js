import React__default, { useState, useEffect } from 'react';
import { SendbirdProvider } from './SendbirdProvider.js';
import { u as useMediaQueryContext } from './chunks/bundle-NTpQiCzz.js';
import { _ as __assign } from './chunks/bundle-BpxXmFQC.js';
import { GroupChannel } from './GroupChannel.js';
import { GroupChannelList } from './GroupChannelList.js';
import Channel from './Channel.js';
import ChannelList from './ChannelList.js';
import ChannelSettings from './ChannelSettings.js';
import MessageSearchPannel from './MessageSearch.js';
import Thread from './Thread.js';
import { GroupChannelHandler } from '@sendbird/chat/groupChannel';
import { useSendbirdStateContext } from './useSendbirdStateContext.js';
import { u as uuidv4 } from './chunks/bundle-DLrfv-Hf.js';
import { u as useVoicePlayerContext, a as ALL } from './chunks/bundle-DOX5a7sk.js';
import { g as getCaseResolvedReplyType } from './chunks/bundle-BzfhGr6P.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import './chunks/bundle-4cxEU_h1.js';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-DHYQq-_e.js';
import './chunks/bundle-B5S1bYog.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DIC0UBC5.js';
import './chunks/bundle-D_-LQOFW.js';
import './chunks/bundle-OZ70K6ig.js';
import 'react-dom';
import './chunks/bundle-VRwQbdO6.js';
import './chunks/bundle-fFCkIdkP.js';
import './chunks/bundle-BIDYJkIe.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './chunks/bundle-ZpyLpKbV.js';
import './ui/Icon.js';
import './chunks/bundle-GlkAQINh.js';
import './chunks/bundle-CmoRaDho.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './GroupChannel/context.js';
import '@sendbird/chat/message';
import './chunks/bundle-CnPq00g2.js';
import './chunks/bundle-BKYZA3wN.js';
import './chunks/bundle-BFPIaXWl.js';
import './chunks/bundle-C0cag-Px.js';
import './chunks/bundle-CIf4rTGV.js';
import './chunks/bundle-CFNlvlB-.js';
import './chunks/bundle-oBEHM7Oi.js';
import './chunks/bundle-BOvQopMz.js';
import './GroupChannel/components/GroupChannelUI.js';
import './chunks/bundle-2y2QG-k8.js';
import './GroupChannel/components/TypingIndicator.js';
import './ui/ConnectionStatus.js';
import './ui/PlaceHolder.js';
import './ui/Loader.js';
import './GroupChannel/components/GroupChannelHeader.js';
import './chunks/bundle-DDaPfQqk.js';
import './ui/ChannelAvatar.js';
import './chunks/bundle-D7hWtRqW.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-DjvfRFVm.js';
import './chunks/bundle-DccoJxVN.js';
import './chunks/bundle-RhEG-6rt.js';
import './ui/Header.js';
import './ui/TextButton.js';
import './chunks/bundle-jY1v8xbA.js';
import './GroupChannel/components/MessageList.js';
import './GroupChannel/components/Message.js';
import './chunks/bundle-D_ilFXVx.js';
import './chunks/bundle-C4J9I_bG.js';
import './chunks/bundle-CLBxUFi0.js';
import './Message/hooks/useDirtyGetMentions.js';
import './ui/DateSeparator.js';
import './ui/MessageInput.js';
import './chunks/bundle-DdjSgEBI.js';
import './chunks/bundle-DWGf3MZ3.js';
import 'dompurify';
import './chunks/bundle-B-B5rbcY.js';
import './chunks/bundle-dp1lZZxR.js';
import './chunks/bundle-C4OSzTlA.js';
import './chunks/bundle-Z7nfE2Su.js';
import './ui/MessageContent.js';
import './chunks/bundle-D8nOQMZK.js';
import './chunks/bundle-BOFstL3F.js';
import './chunks/bundle-vUCKPp-d.js';
import './ui/MessageItemMenu.js';
import './chunks/bundle-CTZh68w8.js';
import './ui/MessageItemReactionMenu.js';
import './ui/ReactionButton.js';
import './chunks/bundle-7w1t0thc.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './ui/AdminMessage.js';
import './ui/QuoteMessage.js';
import './chunks/bundle-CO0PW_ND.js';
import './chunks/bundle-CrzldF0k.js';
import './ui/ThreadReplies.js';
import './ui/OGMessageItemBody.js';
import './chunks/bundle-CHFeqEtk.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './ui/TextMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './chunks/bundle-BtZTAJgc.js';
import './chunks/bundle-BKH-CUXx.js';
import './chunks/bundle-vKqXYEfp.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/ThumbnailMessageItemBody.js';
import './ui/UnknownMessageItemBody.js';
import './ui/TemplateMessageItemBody.js';
import './chunks/bundle-CH7pY17S.js';
import './ui/FallbackTemplateMessageItemBody.tsx.js';
import './ui/LoadingTemplateMessageItemBody.tsx.js';
import './ui/FeedbackIconButton.js';
import './ui/MobileFeedbackMenu.js';
import './ui/MessageFeedbackModal.js';
import './ui/Input.js';
import './ui/MessageFeedbackFailedModal.js';
import './GroupChannel/components/SuggestedReplies.js';
import './chunks/bundle-CHpLoyhB.js';
import './GroupChannel/components/FileViewer.js';
import './chunks/bundle-PF08uncu.js';
import './GroupChannel/components/RemoveMessageModal.js';
import './chunks/bundle-BknFMGO5.js';
import './chunks/bundle-BjdNFz7H.js';
import './Channel/utils/getMessagePartsInfo.js';
import './Channel/utils/compareMessagesForGrouping.js';
import './GroupChannel/components/UnreadCount.js';
import './GroupChannel/components/FrozenNotification.js';
import './ui/TypingIndicatorBubble.js';
import './GroupChannel/components/MessageInputWrapper.js';
import './chunks/bundle-CAg8fbpE.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-Cd6B0Zmh.js';
import './GroupChannel/hooks/useHandleUploadFiles.js';
import './chunks/bundle-DKsuU1oI.js';
import './GroupChannelList/context.js';
import './GroupChannelList/components/GroupChannelListUI.js';
import './chunks/bundle-DQy1Uqt3.js';
import './GroupChannelList/components/GroupChannelListHeader.js';
import './EditUserProfile.js';
import './EditUserProfile/context.js';
import './EditUserProfile/components/EditUserProfileUI.js';
import './GroupChannelList/components/GroupChannelPreviewAction.js';
import './GroupChannelList/components/GroupChannelListItem.js';
import './chunks/bundle-j8r_Qf5o.js';
import './ui/Badge.js';
import './ui/MentionUserLabel.js';
import './GroupChannelList/components/AddGroupChannel.js';
import './chunks/bundle-Dngqq5qI.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './chunks/bundle-qHiLgYYm.js';
import './CreateChannel/components/InviteUsers.js';
import './CreateChannel/components/SelectChannelType.js';
import './Channel/context.js';
import './chunks/bundle-B7dWJiLf.js';
import './chunks/bundle-CCH_gmPY.js';
import './chunks/bundle-DuFEev3g.js';
import './chunks/bundle-CgMvdzKN.js';
import './chunks/bundle-ChvmrzFX.js';
import './Channel/components/ChannelUI.js';
import './Channel/components/ChannelHeader.js';
import './Channel/components/MessageList.js';
import './Channel/components/Message.js';
import './Channel/components/FileViewer.js';
import './Channel/components/RemoveMessageModal.js';
import './chunks/bundle-3cQg389j.js';
import './Channel/components/MessageInput.js';
import './chunks/bundle-BWmeGOAy.js';
import './ChannelList/components/ChannelListUI.js';
import './ChannelList/components/ChannelPreview.js';
import './ChannelList/components/AddChannel.js';
import './ChannelSettings/components/ChannelSettingsUI.js';
import './ChannelSettings/context.js';
import './ChannelSettings/components/ChannelSettingsHeader.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ChannelSettings/components/ModerationPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './ui/Toggle.js';
import './ChannelSettings/components/UserListItem.js';
import './chunks/bundle-B-Gv7uWB.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';
import './MessageSearch/components/MessageSearchUI.js';
import './MessageSearch/context.js';
import './ui/MessageSearchItem.js';
import './ui/MessageSearchFileItem.js';
import './Thread/context.js';
import './Thread/context/types.js';
import './Thread/components/ThreadUI.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-C2bpORYe.js';
import './Thread/components/ParentMessageInfoItem.js';
import './chunks/bundle-CoNwTeeo.js';
import './Thread/components/ThreadHeader.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './Channel/hooks/useHandleUploadFiles.js';

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
    return (React__default.createElement("div", { className: "sendbird-app__wrap" },
        React__default.createElement("div", { className: "sendbird-app__channellist-wrap" }, enableLegacyChannelModules ? React__default.createElement(ChannelList, __assign({}, channelListProps)) : React__default.createElement(GroupChannelList, __assign({}, channelListProps))),
        React__default.createElement("div", { className: "\n          ".concat(showSettings ? 'sendbird-app__conversation--settings-open' : '', "\n          ").concat(showSearch ? 'sendbird-app__conversation--search-open' : '', "\n          sendbird-app__conversation-wrap\n        ") }, enableLegacyChannelModules ? React__default.createElement(Channel, __assign({}, channelProps)) : React__default.createElement(GroupChannel, __assign({}, channelProps))),
        showSettings && (React__default.createElement("div", { className: "sendbird-app__settingspanel-wrap" },
            React__default.createElement(ChannelSettings, { className: "sendbird-channel-settings", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setShowSettings(false);
                } }))),
        showSearch && (React__default.createElement("div", { className: "sendbird-app__searchpanel-wrap" },
            React__default.createElement(MessageSearchPannel, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onResultClick: function (message) {
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
        showThread && (React__default.createElement(Thread, { className: "sendbird-app__thread", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
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
    var _d = useState(PANELS.CHANNEL_LIST), panel = _d[0], setPanel = _d[1];
    var store = useSendbirdStateContext();
    var sdk = (_b = (_a = store === null || store === void 0 ? void 0 : store.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
    var userId = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId;
    var pause = useVoicePlayerContext().pause;
    var goToMessage = function (message, timeoutCb) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint((message === null || message === void 0 ? void 0 : message.createdAt) || null);
        setTimeout(function () {
            timeoutCb === null || timeoutCb === void 0 ? void 0 : timeoutCb((message === null || message === void 0 ? void 0 : message.messageId) || null);
        }, 500);
    };
    useEffect(function () {
        if (panel !== PANELS.CHANNEL) {
            goToMessage(null, function () { return setHighlightedMessage(null); });
        }
    }, [panel]);
    useEffect(function () {
        var _a, _b;
        var handlerId = uuidv4();
        if ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler) {
            var handler = new GroupChannelHandler({
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
    useEffect(function () {
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
            pause(ALL);
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
    return (React__default.createElement("div", { className: "sb_mobile" },
        panel === PANELS.CHANNEL_LIST && (React__default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.createElement(ChannelList, __assign({}, channelListProps)) : React__default.createElement(GroupChannelList, __assign({}, channelListProps)))),
        panel === PANELS.CHANNEL && (React__default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.createElement(Channel, __assign({}, channelProps)) : React__default.createElement(GroupChannel, __assign({}, channelProps)))),
        panel === PANELS.CHANNEL_SETTINGS && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(ChannelSettings, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onLeaveChannel: function () {
                    setPanel(PANELS.CHANNEL_LIST);
                } }))),
        panel === PANELS.MESSAGE_SEARCH && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(MessageSearchPannel, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onResultClick: function (message) {
                    setPanel(PANELS.CHANNEL);
                    goToMessage(message, function (messageId) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(messageId);
                    });
                } }))),
        panel === PANELS.THREAD && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(Thread, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                    setPanel(PANELS.CHANNEL);
                    pause(ALL);
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
    var globalStore = useSendbirdStateContext();
    var globalConfigs = globalStore.config;
    var _d = useState(false), showThread = _d[0], setShowThread = _d[1];
    var _e = useState(null), threadTargetMessage = _e[0], setThreadTargetMessage = _e[1];
    var _f = useState(false), showSettings = _f[0], setShowSettings = _f[1];
    var _g = useState(false), showSearch = _g[0], setShowSearch = _g[1];
    var _h = useState(null), highlightedMessage = _h[0], setHighlightedMessage = _h[1];
    var _j = useState(null), startingPoint = _j[0], setStartingPoint = _j[1];
    var isMobile = useMediaQueryContext().isMobile;
    /**
     * Below configs can be set via Dashboard UIKit config setting but as a lower priority than App props.
     * So need to be have fallback value \w global configs even though each prop values are undefined
     */
    var replyType = (_a = props.replyType) !== null && _a !== void 0 ? _a : getCaseResolvedReplyType(globalConfigs.groupChannel.replyType).upperCase;
    var isReactionEnabled = (_b = props.isReactionEnabled) !== null && _b !== void 0 ? _b : globalConfigs.groupChannel.enableReactions;
    var showSearchIcon = (_c = props.showSearchIcon) !== null && _c !== void 0 ? _c : globalConfigs.groupChannelSettings.enableMessageSearch;
    return (React__default.createElement(React__default.Fragment, null, isMobile
        ? (React__default.createElement(MobileLayout, { replyType: replyType, showSearchIcon: showSearchIcon, isReactionEnabled: isReactionEnabled, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, enableLegacyChannelModules: enableLegacyChannelModules }))
        : (React__default.createElement(DesktopLayout, { replyType: replyType, isReactionEnabled: isReactionEnabled, showSearchIcon: showSearchIcon, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, showThread: showThread, setShowThread: setShowThread, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, showSettings: showSettings, setShowSettings: setShowSettings, showSearch: showSearch, setShowSearch: setShowSearch, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, enableLegacyChannelModules: enableLegacyChannelModules }))));
};

/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
function App(props) {
    var appId = props.appId, userId = props.userId, _a = props.accessToken, accessToken = _a === void 0 ? '' : _a, _b = props.customApiHost, customApiHost = _b === void 0 ? '' : _b, _c = props.customWebSocketHost, customWebSocketHost = _c === void 0 ? '' : _c, _d = props.breakpoint, breakpoint = _d === void 0 ? null : _d, _e = props.theme, theme = _e === void 0 ? 'light' : _e, _f = props.userListQuery, userListQuery = _f === void 0 ? null : _f, _g = props.nickname, nickname = _g === void 0 ? '' : _g, _h = props.profileUrl, profileUrl = _h === void 0 ? '' : _h, _j = props.dateLocale, dateLocale = _j === void 0 ? null : _j, _k = props.config, config = _k === void 0 ? {} : _k, voiceRecord = props.voiceRecord, _l = props.isMessageGroupingEnabled, isMessageGroupingEnabled = _l === void 0 ? true : _l, _m = props.colorSet, colorSet = _m === void 0 ? null : _m, _o = props.stringSet, stringSet = _o === void 0 ? null : _o, _p = props.allowProfileEdit, allowProfileEdit = _p === void 0 ? false : _p, _q = props.disableMarkAsDelivered, disableMarkAsDelivered = _q === void 0 ? false : _q, _r = props.renderUserProfile, renderUserProfile = _r === void 0 ? null : _r, _s = props.onProfileEditSuccess, onProfileEditSuccess = _s === void 0 ? null : _s, _t = props.imageCompression, imageCompression = _t === void 0 ? {} : _t, _u = props.disableAutoSelect, disableAutoSelect = _u === void 0 ? false : _u, sdkInitParams = props.sdkInitParams, customExtensionParams = props.customExtensionParams, eventHandlers = props.eventHandlers, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, _v = props.isUserIdUsedForNickname, isUserIdUsedForNickname = _v === void 0 ? true : _v, _w = props.enableLegacyChannelModules, enableLegacyChannelModules = _w === void 0 ? false : _w, uikitOptions = props.uikitOptions, 
    // The below configs are duplicates of the Dashboard UIKit Configs.
    // Since their default values will be set in the Sendbird component,
    // we don't need to set them here.
    showSearchIcon = props.showSearchIcon, isMentionEnabled = props.isMentionEnabled, isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, disableUserProfile = props.disableUserProfile, isVoiceMessageEnabled = props.isVoiceMessageEnabled, isTypingIndicatorEnabledOnChannelList = props.isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList = props.isMessageReceiptStatusEnabledOnChannelList;
    var _x = useState(null), currentChannel = _x[0], setCurrentChannel = _x[1];
    return (React__default.createElement(SendbirdProvider, { stringSet: stringSet, appId: appId, userId: userId, accessToken: accessToken, customApiHost: customApiHost, customWebSocketHost: customWebSocketHost, breakpoint: breakpoint, theme: theme, nickname: nickname, profileUrl: profileUrl, dateLocale: dateLocale, userListQuery: userListQuery, config: config, colorSet: colorSet, disableMarkAsDelivered: disableMarkAsDelivered, renderUserProfile: renderUserProfile, imageCompression: imageCompression, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled, voiceRecord: voiceRecord, onUserProfileMessage: function (channel) {
            setCurrentChannel(channel);
        }, uikitOptions: uikitOptions, isUserIdUsedForNickname: isUserIdUsedForNickname, sdkInitParams: sdkInitParams, customExtensionParams: customExtensionParams, eventHandlers: eventHandlers, isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList, replyType: replyType, showSearchIcon: showSearchIcon, disableUserProfile: disableUserProfile, isReactionEnabled: isReactionEnabled, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled },
        React__default.createElement(AppLayout, { isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, enableLegacyChannelModules: enableLegacyChannelModules, isReactionEnabled: isReactionEnabled, replyType: replyType, showSearchIcon: showSearchIcon })));
}

export { App as default };
//# sourceMappingURL=App.js.map
