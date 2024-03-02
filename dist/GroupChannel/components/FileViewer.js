import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-D8IuvsaW.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-CpMVUlSc.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-CvlHmT5j.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0yILBaSQ.js';
import '../../chunks/bundle-ttSanjmp.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-BNNafMXS.js';
import '../../chunks/bundle-C9nxq4KD.js';
import '../../chunks/bundle-BnYBX14T.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BfCFd-dO.js';
import '../../chunks/bundle-CRmP70eG.js';
import '../../chunks/bundle-k7V2rNcW.js';
import '../../chunks/bundle-BBhSg6C_.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-DgRY6xy0.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CwSlabaO.js';
import '../../chunks/bundle-w0s865vS.js';
import '../../chunks/bundle-CNHxvPPg.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BxO5H6aF.js';
import '../../chunks/bundle-BNAtsapc.js';
import '../../chunks/bundle-CvlF6SbQ.js';
import '../../chunks/bundle-BEXtjKJK.js';
import '../../chunks/bundle-CbyShdHS.js';
import '../../chunks/bundle-se836s50.js';
import '../../chunks/bundle-DgYc_vhn.js';
import '../../chunks/bundle-BWic18XY.js';
import '../../chunks/bundle-Cf2xHdC2.js';
import '../../chunks/bundle-Dn-yaG7j.js';

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
