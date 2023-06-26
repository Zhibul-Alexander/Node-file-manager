import process from "process";

import {showMessage, showError} from './utils/show/showMessages.js';
import {showCurrentDirectory} from './utils/show/showInformation.js';
import {changeDirectory} from './commands/directory.js';

import {ls} from './commands/ls.js';
import {cat} from './commands/cat.js';
import {add} from './commands/add.js';
import {rn} from './commands/rn.js';
import {cp} from './commands/cp.js';
import {rm} from './commands/rm.js';
import {osCommands} from './commands/os.js'
import {hash} from './commands/hash.js';

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
            case COMMANDS.cat:
                if (args.length === 1) {
                    await cat(args[0]);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.add:
                if (args.length === 1) {
                    await add(args[0]);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.rn:
                if (args.length === 2) {
                    await rn(args[0], args[1]);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.cp:
                if (args.length === 2) {
                    await cp(args[0], args[1], false);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.mv:
                if (args.length === 2) {
                    await cp(args[0], args[1], true);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.rm:
                if (args.length === 1) {
                    await rm(args[0]);
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.os:
                if (args.length === 1) {
                    osCommands(args[0])
                    showCurrentDirectory();
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            case COMMANDS.hash:
                if (args.length === 1) {
                    await hash(args[0]);
                } else {
                    showMessage(REJECTS.invalidInput)
                }
                break;
            default:
                showMessage(REJECTS.invalidInput)
        }
    } catch (err) {
        showError(err)
    }
};