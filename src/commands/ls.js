import {readdir} from 'fs/promises'

import {getFileParameters} from "../utils/getFileParameters.js";
import {showMessage} from "../utils/show/showMessages.js";

import {REJECTS} from '../constants.js'

export const ls = async (directoryPath) => {
    const options = await getFileParameters(directoryPath);
    if (options.isNotExist) {
        showMessage(REJECTS.invalidInput);
    }

    const files = await readdir(directoryPath);
    showMessage(files.join(', '));
};