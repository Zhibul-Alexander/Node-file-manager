import {createReadStream} from 'fs';
import {createHash} from "crypto";

import {getFileParameters} from "../utils/getFileParameters.js";
import {showError, showMessage} from '../utils/show/showMessages.js';

import {RESPONSES,REJECTS} from '../constants.js';

export const hash = async (path) => {
    const fileParameters = await getFileParameters(path);
    if (fileParameters.isNotExist || fileParameters.isFolder || !fileParameters.isExist) {
        showError(REJECTS.invalidInput)
    }

    const readStream = createReadStream(fileParameters.directory)
    const hash = createHash('sha1').setEncoding('hex');
    readStream.pipe(hash)

    hash.on('data',  (data) => {
        showMessage(`${RESPONSES.hash} ${data}`)
    })
    hash.on('error', () => {
        showError(REJECTS.operationFailed)
    })
    readStream.on('error', () => {
        showError(REJECTS.operationFailed)
    })
}