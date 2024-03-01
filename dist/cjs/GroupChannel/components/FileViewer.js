'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-B67weJWw.js');
var React = require('react');
var FileViewerView = require('../../chunks/bundle-C-imsFfv.js');
var GroupChannel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('react-dom');
require('../../chunks/bundle-5IKAPUOJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-CrJkvCS4.js');
require('../../chunks/bundle-CR__rOP0.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-X-ZtnRCT.js');
require('../../chunks/bundle-z7hq7hFO.js');
require('../../chunks/bundle-sSPmDeMC.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D0ePEYoI.js');
require('../../chunks/bundle-BplSuW2v.js');
require('../../chunks/bundle-DEDYKTrW.js');
require('../../chunks/bundle-DPOXwvBX.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-c87q7xEA.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CeqSSVZ9.js');
require('../../chunks/bundle-DiHFDa7q.js');
require('../../chunks/bundle-BCNmULWo.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-LbGezufX.js');
require('../../chunks/bundle-DYph6CG_.js');
require('../../chunks/bundle-BE6ALQMq.js');
require('../../chunks/bundle-D5I_z4K9.js');
require('../../chunks/bundle-CM_7-rFo.js');
require('../../chunks/bundle-B8bLSHlY.js');
require('../../chunks/bundle-qJQUtN55.js');
require('../../chunks/bundle-s42eXH2a.js');
require('../../chunks/bundle-BSU5Fq75.js');
require('../../chunks/bundle-Dibky18B.js');

var FileViewer = function (props) {
    var _a = GroupChannel_context.useGroupChannelContext(), deleteMessage = _a.deleteMessage, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger;
    return (React.createElement(FileViewerView.FileViewerView, _tslib.__assign({}, props, { deleteMessage: deleteMessage, onDownloadClick: function (e) { return _tslib.__awaiter(void 0, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return _tslib.__generator(this, function (_c) {
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

exports.FileViewer = FileViewer;
exports.default = FileViewer;
//# sourceMappingURL=FileViewer.js.map
