import {createReadStream} from 'fs';

import {getFileParameters} from '../utils/getFileParameters.js'
import {showError} from '../utils/show/showMessages.js'

import {REJECTS} from '../constants.js'

export const cat = async (directoryPath) => {
    const fileParameters = await getFileParameters(directoryPath);
    if (!fileParameters.isExist) {
        showError(REJECTS.invalidInput)
    }

    const readStream = createReadStream(fileParameters.directory);
    readStream.pipe(process.stdout);

    readStream.on('error', (err) => {
        showError(`${REJECTS.errorReadingFile} ${err.message}`)
    })
}