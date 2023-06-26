import {rm as remove} from 'fs/promises'

import {getFileParameters} from '../utils/getFileParameters.js'
import {showError} from '../utils/show/showMessages.js';

import {REJECTS} from '../constants.js';

export const rm = async (directoryPath) => {
    const fileParameters = await getFileParameters(directoryPath);
    if (fileParameters.isNotExist) {
        showError(REJECTS.invalidInput)
    }

    await remove(fileParameters.directory);
}
