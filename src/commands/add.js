import {createWriteStream} from 'fs'

import {getFileParameters} from '../utils/getFileParameters.js'
import {showError} from '../utils/show/showMessages.js';

import {REJECTS} from '../constants.js';

export const add = async (directoryPath) => {
    const fileParameters = await getFileParameters(directoryPath);
    if (fileParameters.isExist) {
        showError(REJECTS.invalidInput)
    }

    const writeStream = createWriteStream(fileParameters.directory);

    writeStream.on('error', (err) => {
        showError(`${REJECTS.errorWritingFile} ${err.message}`)
    });
}
