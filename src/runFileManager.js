import process from "process";

import {showMessage, showError} from './utils/show.js'

import {COMMANDS, REJECTS, RESPONSES} from './constants.js';

export const runFileManager =  async (command, args) => {
    try {
        switch (command) {
            case COMMANDS.close:
                showMessage(`${RESPONSES.finishFileManagerFirstPart}, ${process.env.USERNAME}, ${RESPONSES.finishFileManagerSecondPart}!`);
                process.exit();
                break;
            default:
                showMessage(REJECTS.invalidInput)
        }
    } catch (err) {
        showError(err)
    }
};