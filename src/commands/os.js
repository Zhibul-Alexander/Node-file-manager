import os from 'os'

import {showMessage} from "../utils/show/showMessages.js";

import {OS_COMMANDS, OS_TEXT, REJECTS} from '../constants.js';

export const osCommands = (command) => {
    switch (command) {
        case OS_COMMANDS.eol:
            showMessage(`${OS_TEXT.eol} ${JSON.stringify(os.EOL)}`);
            break;
        case OS_COMMANDS.cpus:
            os.cpus().map((item) => delete item.times)
            console.table(os.cpus())
            break;
        case OS_COMMANDS.homedir:
            showMessage(`${OS_TEXT.homedir} ${os.userInfo().homedir}`)
            break;
        case OS_COMMANDS.username:
            showMessage(`${OS_TEXT.username} ${os.userInfo().username}`)
            break;
        case OS_COMMANDS.architecture:
            showMessage(`${OS_TEXT.architecture} ${os.arch()}`);
            break;
        default:
            showMessage(REJECTS.invalidInput)
    }
}