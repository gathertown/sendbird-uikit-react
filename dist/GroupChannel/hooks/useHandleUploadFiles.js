import { a as __awaiter, b as __generator } from '../../chunks/bundle-s7uQ7zAa.js';
import React__default, { useCallback } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { d as isImage } from '../../chunks/bundle-D-z4U1wX.js';
import { u as useGlobalModalContext, a as ModalFooter } from '../../chunks/bundle-Zq-75Hl4.js';
import '../../chunks/bundle-BOy_tVjz.js';
import { ButtonTypes } from '../../ui/Button.js';
import { u as useLocalization } from '../../chunks/bundle-BwcI3bWM.js';
import { c as compressImages } from '../../chunks/bundle-DqLkcURj.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BJmqupdN.js';
import 'react-dom';
import '../../chunks/bundle-Bs8Nuk02.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-Caf8F3YR.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CuXnBg6p.js';
import '../../chunks/bundle-BUsOkeT7.js';
import '../../chunks/bundle-BytW9Azl.js';
import '../../chunks/bundle-DqWrl4d1.js';
import '../../chunks/bundle-Dyt8DaMp.js';
import '../../chunks/bundle-BIF2bCQz.js';

var useHandleUploadFiles = function (_a, _b) {
    var sendFileMessage = _a.sendFileMessage, sendMultipleFilesMessage = _a.sendMultipleFilesMessage, quoteMessage = _a.quoteMessage;
    var logger = _b.logger;
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var imageCompression = config.imageCompression;
    var uikitUploadSizeLimit = config === null || config === void 0 ? void 0 : config.uikitUploadSizeLimit;
    var uikitMultipleFilesMessageLimit = config === null || config === void 0 ? void 0 : config.uikitMultipleFilesMessageLimit;
    var openModal = useGlobalModalContext().openModal;
    return useCallback(function (files) { return __awaiter(void 0, void 0, void 0, function () {
        var ONE_MiB, compressedFiles, sendingFiles, file, imageFiles_1, otherFiles_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (files.length === 0) {
                        logger.warning('Channel|useHandleUploadFiles: given file list is empty.', { files: files });
                        return [2 /*return*/];
                    }
                    if (files.length > uikitMultipleFilesMessageLimit) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload files more than ".concat(uikitMultipleFilesMessageLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__COUNT_LIMIT.replace('%d', "".concat(uikitUploadSizeLimit)),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    // Validate file sizes
                    if (files.some(function (file) { return file.size > uikitUploadSizeLimit; })) {
                        // The default value of uikitUploadSizeLimit is 26MB
                        logger.info("Channel|useHandleUploadFiles: Cannot upload file size exceeding ".concat(uikitUploadSizeLimit));
                        ONE_MiB = 1024 * 1024;
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
                        return [2 /*return*/, sendFileMessage({ file: file, parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId })];
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
                                    return sendFileMessage({ file: item, parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId });
                                });
                            }, (function () {
                                if (imageFiles_1.length === 0) {
                                    return Promise.resolve();
                                }
                                else if (imageFiles_1.length === 1) {
                                    return sendFileMessage({ file: imageFiles_1[0] });
                                }
                                else {
                                    return sendMultipleFilesMessage({
                                        fileInfoList: imageFiles_1.map(function (file) { return ({
                                            file: file,
                                            fileName: file.name,
                                            fileSize: file.size,
                                            mimeType: file.type,
                                        }); }),
                                        parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId,
                                    });
                                }
                            })())];
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [sendFileMessage, sendMultipleFilesMessage, quoteMessage]);
};

export { useHandleUploadFiles };
//# sourceMappingURL=useHandleUploadFiles.js.map
