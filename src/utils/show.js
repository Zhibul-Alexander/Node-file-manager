import {homedir} from 'os';

import {RESPONSES, REJECTS} from '../constants.js'

export const showMessage = (text) => {
    process.stdout.write(text + '\n');
}

export const showCurrentDirectory = () => {
    if (!process.env.CURRENT_DIRECTORY) {
        process.env.CURRENT_DIRECTORY = homedir();
    }
    showMessage(`${RESPONSES.currentPath} ${process.env.CURRENT_DIRECTORY}`);
}

export const showError = (error) => {
    showMessage(error ? error : REJECTS.operationFailed  + '\n' )
}

