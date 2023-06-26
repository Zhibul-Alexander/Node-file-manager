import process from "process";

import {showMessage, showError} from './utils/show/showMessages.js';
import {showCurrentDirectory} from './utils/show/showInformation.js';
import {changeDirectory} from './commands/directory.js';

import {ls} from './commands/ls.js';

import {COMMANDS, REJECTS, RESPONSES} from './constants.js';

export const runFileManager =  async (command, args) => {
    try {
        switch (command) {
            case COMMANDS.close:
                showMessage(`${RESPONSES.finishFileManagerFirstPart}, ${process.env.USERNAME}, ${RESPONSES.finishFileManagerSecondPart}!`);
                process.exit();
                break;
            case COMMANDS.cd:
                if (args.length === 1) {
                    await changeDirectory(args[0]);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.up:
                await changeDirectory('..');
                showCurrentDirectory();
                break;
            case COMMANDS.ls:
                await ls(process.env.CURRENT_DIRECTORY)
                showCurrentDirectory();
                break;
            default:
                showMessage(REJECTS.invalidInput)
        }
    } catch (err) {
        showError(err)
    }
};