import { K, c as isMultipleFilesMessage } from './bundle-4cxEU_h1.js';

function getModalDeleteMessageTitle(stringSet, message) {
    return K(message)
        .when(isMultipleFilesMessage, function () {
        var filesCount = message.fileInfoList.length;
        return "Do you want to delete all ".concat(filesCount, " photos?");
    })
        .otherwise(function () {
        return stringSet.MODAL__DELETE_MESSAGE__TITLE;
    });
}

export { getModalDeleteMessageTitle as g };
//# sourceMappingURL=bundle-BjdNFz7H.js.map