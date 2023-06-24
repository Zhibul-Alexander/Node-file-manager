import * as readline from "readline";
import process from "process";

import {getUsername} from "../utils/getUsername.js";
import {finishFileManager} from "../responseToConsole/finishFileManager.js";

import {COMMANDS, REJECTS} from '../constants.js'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

export const runFileManager = () => {
    try {
        rl.on("line", (line) => {
            const operation = line.toString().trim().split(" ");
            switch (operation[0]) {
                case COMMANDS.close:
                    process.stdout.write(finishFileManager(getUsername()));
                    process.exit();
                    break;
                default:
                    console.log(REJECTS.invalidInput);
            }
        })
        .on("close", () => {
            process.stdout.write(finishFileManager(getUsername()));
        })
        .on("error", () => {
            console.log(REJECTS.operationFailed);
        })
    } catch {
        console.log(REJECTS.operationFailed);
    }
};