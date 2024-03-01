import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-h5nSe8RU.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-CBaYIseh.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-BJEESw7S.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CbUL9vb-.js';
import '../../chunks/bundle-RDd4rAzg.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-DBtyGp-i.js';
import '../../chunks/bundle-Bh_HZf7x.js';
import '../../chunks/bundle-CmPJV5ar.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BpF0Qo8A.js';
import '../../chunks/bundle-BBVJixDe.js';
import '../../chunks/bundle-DTkxB28y.js';
import '../../chunks/bundle-BfXjuJZP.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-1rHkiOvv.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-Blox0Tl9.js';
import '../../chunks/bundle-DuvSpEUl.js';
import '../../chunks/bundle-BsPw6HPN.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-D4SykqtT.js';
import '../../chunks/bundle-DZNsjEo9.js';
import '../../chunks/bundle-Bu9i9TgZ.js';
import '../../chunks/bundle-BpISf_VF.js';
import '../../chunks/bundle-D2TKgUHv.js';
import '../../chunks/bundle-TVGnyGwG.js';
import '../../chunks/bundle-DE6jjGXF.js';
import '../../chunks/bundle-BZNaK1IM.js';
import '../../chunks/bundle-ixYJ-kgW.js';
import '../../chunks/bundle-Dc3tamRJ.js';

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
