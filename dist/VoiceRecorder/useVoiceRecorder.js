import { useState, useEffect, useCallback } from 'react';
import { c as useVoiceRecorderContext } from '../chunks/bundle-OZ70K6ig.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-BpxXmFQC.js';
import '../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../chunks/bundle-VRwQbdO6.js';
import '../chunks/bundle-fFCkIdkP.js';
import '../chunks/bundle-BIDYJkIe.js';
import '../chunks/bundle-NTpQiCzz.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-ZpyLpKbV.js';
import '../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-DOX5a7sk.js';
import '../chunks/bundle-GlkAQINh.js';
import '../chunks/bundle-CmoRaDho.js';

// export interface UseVoiceRecorderProps extends VoiceRecorderEventHandler {
//   /**
//    * onRecordingStarted
//    * onRecordingEnded
//    */
// }
/* eslint-disable no-redeclare */
var VoiceRecorderStatus = {
    PREPARING: 'PREPARING',
    READY_TO_RECORD: 'READY_TO_RECORD',
    RECORDING: 'RECORDING',
    COMPLETED: 'COMPLETED',
};
var noop = function () { };
var useVoiceRecorder = function (_a) {
    var _b = _a.onRecordingStarted, onRecordingStarted = _b === void 0 ? noop : _b, _c = _a.onRecordingEnded, onRecordingEnded = _c === void 0 ? noop : _c;
    var config = useSendbirdStateContext().config;
    var voiceRecord = config.voiceRecord;
    var maxRecordingTime = voiceRecord.maxRecordingTime;
    var voiceRecorder = useVoiceRecorderContext();
    var isRecordable = voiceRecorder.isRecordable;
    var _d = useState(null), recordedFile = _d[0], setRecordedFile = _d[1];
    var _e = useState(VoiceRecorderStatus.PREPARING), recordingStatus = _e[0], setRecordingStatus = _e[1];
    useEffect(function () {
        if (isRecordable && recordingStatus === VoiceRecorderStatus.PREPARING) {
            setRecordingStatus(VoiceRecorderStatus.READY_TO_RECORD);
        }
    }, [isRecordable]);
    var start = useCallback(function () {
        voiceRecorder === null || voiceRecorder === void 0 ? void 0 : voiceRecorder.start({
            onRecordingStarted: function () {
                setRecordingStatus(VoiceRecorderStatus.RECORDING);
                onRecordingStarted();
                startTimer();
            },
            onRecordingEnded: function (audioFile) {
                setRecordingStatus(VoiceRecorderStatus.COMPLETED);
                onRecordingEnded(audioFile);
                setRecordedFile(audioFile);
                stopTimer();
            },
        });
    }, [onRecordingStarted, onRecordingEnded]);
    var stop = useCallback(function () {
        voiceRecorder === null || voiceRecorder === void 0 ? void 0 : voiceRecorder.stop();
        stopTimer();
    }, [voiceRecorder]);
    var cancel = useCallback(function () {
        stop();
        setRecordedFile(null);
    }, [voiceRecorder]);
    // Timer
    var _f = useState(0), recordingTime = _f[0], setRecordingTime = _f[1];
    var timer = null;
    function startTimer() {
        stopTimer();
        setRecordingTime(0);
        var interval = setInterval(function () {
            setRecordingTime(function (prevTime) {
                var newTime = prevTime + 100;
                if (newTime > maxRecordingTime) {
                    stopTimer();
                }
                return newTime;
            });
        }, 100);
        timer = interval;
    }
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }
    useEffect(function () {
        if (recordingTime > maxRecordingTime) {
            stop();
        }
    }, [recordingTime, maxRecordingTime, stop]);
    return ({
        start: start,
        stop: stop,
        cancel: cancel,
        recordingStatus: recordingStatus,
        recordingTime: recordingTime,
        recordedFile: recordedFile,
        recordingLimit: maxRecordingTime,
    });
};

export { VoiceRecorderStatus, useVoiceRecorder };
//# sourceMappingURL=useVoiceRecorder.js.map