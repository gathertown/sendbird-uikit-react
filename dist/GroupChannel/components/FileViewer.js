import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-BpxXmFQC.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-PF08uncu.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-D7hWtRqW.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DIC0UBC5.js';
import '../../chunks/bundle-DjvfRFVm.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-ZpyLpKbV.js';
import '../../chunks/bundle-fFCkIdkP.js';
import '../../chunks/bundle-4cxEU_h1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-OZ70K6ig.js';
import '../../chunks/bundle-VRwQbdO6.js';
import '../../chunks/bundle-BIDYJkIe.js';
import '../../chunks/bundle-NTpQiCzz.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DLrfv-Hf.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DOX5a7sk.js';
import '../../chunks/bundle-GlkAQINh.js';
import '../../chunks/bundle-CmoRaDho.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CnPq00g2.js';
import '../../chunks/bundle-BKYZA3wN.js';
import '../../chunks/bundle-BzfhGr6P.js';
import '../../chunks/bundle-BFPIaXWl.js';
import '../../chunks/bundle-C0cag-Px.js';
import '../../chunks/bundle-CIf4rTGV.js';
import '../../chunks/bundle-CFNlvlB-.js';
import '../../chunks/bundle-D_-LQOFW.js';
import '../../chunks/bundle-oBEHM7Oi.js';
import '../../chunks/bundle-BOvQopMz.js';

var FileViewer = function (props) {
    var _a = useGroupChannelContext(), deleteMessage = _a.deleteMessage, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var config = useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.createElement(FileViewerView, __assign({}, props, { deleteMessage: deleteMessage, onDownloadClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!onBeforeDownloadFileMessage) {
                            return [2 /*return*/, null];
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: props.message })];
                    case 2:
                        allowDownload = _c.sent();
                        if (!allowDownload) {
                            e.preventDefault();
                            (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'FileViewer: Not allowed to download.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'FileViewer: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); } })));
};

export { FileViewer, FileViewer as default };
//# sourceMappingURL=FileViewer.js.map
