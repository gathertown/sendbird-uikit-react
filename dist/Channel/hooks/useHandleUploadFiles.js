import { a as __awaiter, b as __generator } from '../../chunks/bundle-BpxXmFQC.js';
import React__default, { useCallback } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { d as isImage } from '../../chunks/bundle-4cxEU_h1.js';
import { u as useGlobalModalContext, a as ModalFooter } from '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import { ButtonTypes } from '../../ui/Button.js';
import { u as useLocalization } from '../../chunks/bundle-VRwQbdO6.js';
import { c as compressImages } from '../../chunks/bundle-DKsuU1oI.js';
import { O as ONE_MiB } from '../../chunks/bundle-GlkAQINh.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DIC0UBC5.js';
import 'react-dom';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-CmoRaDho.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-DjvfRFVm.js';

var useHandleUploadFiles = function (_a, _b) {
    var sendFileMessage = _a.sendFileMessage, sendMultipleFilesMessage = _a.sendMultipleFilesMessage, quoteMessage = _a.quoteMessage;
    var logger = _b.logger;
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var imageCompression = config.imageCompression;
    var uikitUploadSizeLimit = config === null || config === void 0 ? void 0 : config.uikitUploadSizeLimit;
    var uikitMultipleFilesMessageLimit = config === null || config === void 0 ? void 0 : config.uikitMultipleFilesMessageLimit;
    var openModal = useGlobalModalContext().openModal;
    var handleUploadFiles = useCallback(function (files) { return __awaiter(void 0, void 0, void 0, function () {
        var compressedFiles, sendingFiles, file, imageFiles_1, otherFiles_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Validate Parameters
                    if (!sendFileMessage || !sendMultipleFilesMessage) {
                        logger.warning('Channel|useHandleUploadFiles: required functions are undefined', { sendFileMessage: sendFileMessage, sendMultipleFilesMessage: sendMultipleFilesMessage });
                        return [2 /*return*/];
                    }
                    if (files.length === 0) {
                        logger.warning('Channel|useHandleUploadFiles: given file list is empty.', { files: files });
                        return [2 /*return*/];
                    }
                    if (files.length > uikitMultipleFilesMessageLimit) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload files more than ".concat(uikitMultipleFilesMessageLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__COUNT_LIMIT.replace('%d', "".concat(uikitMultipleFilesMessageLimit)),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    /**
                     * Validate file sizes
                     * The default value of uikitUploadSizeLimit is 25MiB
                     */
                    if (files.some(function (file) { return file.size > uikitUploadSizeLimit; })) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload file size exceeding ".concat(uikitUploadSizeLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__SIZE_LIMIT.replace('%d', "".concat(Math.floor(uikitUploadSizeLimit / ONE_MiB))),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, compressImages({
                            files: files,
                            imageCompression: imageCompression,
                            logger: logger,
                        })];
                case 1:
                    compressedFiles = (_a.sent()).compressedFiles;
                    sendingFiles = compressedFiles;
                    // Send File Message
                    if (sendingFiles.length === 1) {
                        logger.info('Channel|useHandleUploadFiles: sending one file.');
                        file = sendingFiles[0];
                        sendFileMessage(file, quoteMessage);
                    }
                    else if (sendingFiles.length > 1) {
                        logger.info('Channel|useHandleUploadFiles: sending multiple files.');
                        imageFiles_1 = [];
                        otherFiles_1 = [];
                        sendingFiles.forEach(function (file) {
                            if (isImage(file.type)) {
                                imageFiles_1.push(file);
                            }
                            else {
                                otherFiles_1.push(file);
                            }
                        });
                        return [2 /*return*/, otherFiles_1.reduce(function (previousPromise, item) {
                                return previousPromise.then(function () {
                                    return sendFileMessage(item, quoteMessage);
                                });
                            }, (function () {
                                if (imageFiles_1.length === 0) {
                                    return Promise.resolve();
                                }
                                else if (imageFiles_1.length === 1) {
                                    return sendFileMessage(imageFiles_1[0], quoteMessage);
                                }
                                else {
                                    return sendMultipleFilesMessage(imageFiles_1, quoteMessage);
                                }
                            })())];
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [
        sendFileMessage,
        sendMultipleFilesMessage,
        quoteMessage,
    ]);
    return handleUploadFiles;
};

export { useHandleUploadFiles };
//# sourceMappingURL=useHandleUploadFiles.js.map
