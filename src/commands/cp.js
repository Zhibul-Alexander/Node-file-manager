import {createReadStream, createWriteStream} from 'fs';
import {parse, join} from 'path'

import {getFileParameters} from '../utils/getFileParameters.js'
import {showError} from '../utils/show/showMessages.js';

import {rm} from './rm.js'

import {REJECTS} from '../constants.js';

export const cp = async (path, newFilePath, isFileDelete) => {
    const fileParameters = await getFileParameters(path);
    if (fileParameters.isNotExist) {
        showError(REJECTS.invalidInput)
    }

    const fullNewPath = join(newFilePath, parse(fileParameters.directory).base);
    const newFileParameters = await getFileParameters(fullNewPath);
    if (newFileParameters.isExist) {
        showError(REJECTS.invalidInput)
    }

    const readStream = createReadStream(fileParameters.directory);
    const writeStream = createWriteStream(newFileParameters.directory);
    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        if (isFileDelete) {
            rm(path);
        }
    });
    readStream.on('error', () => {
        showError(REJECTS.operationFailed)
    });
    writeStream.on('error', () => {
        showError(REJECTS.operationFailed)
    });
}