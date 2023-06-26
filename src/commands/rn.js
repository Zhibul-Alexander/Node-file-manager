import {rename} from 'fs/promises'

import {getFileParameters} from '../utils/getFileParameters.js'
import {showError} from '../utils/show/showMessages.js';

import {REJECTS} from '../constants.js';

export const rn = async (currentFilePath, newFilePath) => {
    const currentFilePathParameters = await getFileParameters(currentFilePath);
    const newFilePathParameters = await getFileParameters(newFilePath);

    if (currentFilePath.isNotExist) {
        showError(REJECTS.notAlreadyExists)
    }
    if (newFilePathParameters.isExist) {
        showError(REJECTS.alreadyExists)
    }

    await rename(currentFilePathParameters.directory, newFilePathParameters.directory)
}
