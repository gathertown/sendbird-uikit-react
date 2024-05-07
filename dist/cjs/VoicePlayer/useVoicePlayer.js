'use strict';

var React = require('react');
var VoicePlayer_context = require('../chunks/bundle-BPDG2Sth.js');
var consts = require('../chunks/bundle-tCz2WwyT.js');
var ui_Modal = require('../chunks/bundle-BPS3DFTX.js');
require('../chunks/bundle-2PlwnSzC.js');
require('../useSendbirdStateContext.js');
require('../withSendbird.js');
require('../chunks/bundle-Pv5sl1sx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DMrzJD8i.js');
require('react-dom');
require('../chunks/bundle-D2Bg8CLY.js');
require('../chunks/bundle-BlYafk3l.js');
require('../chunks/bundle-DzJC_TK7.js');
require('../chunks/bundle-Gh-C2yIM.js');
require('../ui/IconButton.js');
require('../ui/Button.js');
require('../chunks/bundle-BUH06mHS.js');
require('../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-aXbXs3dl.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-DLvdMF5T.js');

var generateGroupKey = function (channelUrl, key) {
    if (channelUrl === void 0) { channelUrl = ''; }
    if (key === void 0) { key = ''; }
    return ("".concat(channelUrl, "-").concat(key));
};

var useVoicePlayer = function (_a) {
    var _b;
    var _c = _a.key, key = _c === void 0 ? '' : _c, _d = _a.channelUrl, channelUrl = _d === void 0 ? '' : _d, _e = _a.audioFile, audioFile = _e === void 0 ? null : _e, _f = _a.audioFileUrl, audioFileUrl = _f === void 0 ? '' : _f;
    var groupKey = React.useState(generateGroupKey(channelUrl, key))[0];
    var _g = VoicePlayer_context.useVoicePlayerContext(), play = _g.play, pause = _g.pause, stop = _g.stop, voicePlayerStore = _g.voicePlayerStore;
    var isRecordable = ui_Modal.useVoiceRecorderContext().isRecordable;
    var currentAudioUnit = ((_b = voicePlayerStore === null || voicePlayerStore === void 0 ? void 0 : voicePlayerStore.audioStorage) === null || _b === void 0 ? void 0 : _b[groupKey]) || VoicePlayer_context.AudioUnitDefaultValue();
    var playVoicePlayer = function () {
        if (!isRecordable) {
            play === null || play === void 0 ? void 0 : play({
                groupKey: groupKey,
                audioFile: audioFile,
                audioFileUrl: audioFileUrl,
            });
        }
    };
    var pauseVoicePlayer = function () {
        pause === null || pause === void 0 ? void 0 : pause(groupKey);
    };
    var stopVoicePlayer = function (text) {
        if (text === void 0) { text = ''; }
        stop === null || stop === void 0 ? void 0 : stop(text);
    };
    React.useEffect(function () {
        return function () {
            var _a;
            if (audioFile || audioFileUrl) {
                // Can't get the current AudioPlayer through the React hooks(useReducer or useState) in this scope
                var voiceAudioPlayerElement = document.getElementById(consts.VOICE_PLAYER_AUDIO_ID);
                (_a = voiceAudioPlayerElement === null || voiceAudioPlayerElement === void 0 ? void 0 : voiceAudioPlayerElement.pause) === null || _a === void 0 ? void 0 : _a.call(voiceAudioPlayerElement);
            }
        };
    }, []);
    return ({
        play: playVoicePlayer,
        pause: pauseVoicePlayer,
        stop: stopVoicePlayer,
        /**
         * The reason why we multiply this by *1000 is,
         * The unit of playbackTime and duration should be millisecond
         */
        playbackTime: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.playbackTime) || 0) * 1000,
        duration: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.duration) || 0) * 1000,
        playingStatus: currentAudioUnit.playingStatus,
    });
};

exports.useVoicePlayer = useVoicePlayer;
//# sourceMappingURL=useVoicePlayer.js.map
