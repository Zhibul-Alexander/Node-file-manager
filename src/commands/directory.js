import path from 'path';
import {homedir} from 'os';
import {access} from "fs/promises";

import {showMessage, showError} from "../utils/show/showMessages.js";

import {REJECTS} from "../constants.js";

export const changeDirectory = async (directoryPath) => {
    const normalizePath = path.normalize(directoryPath);
    const isAbsolutePath = path.isAbsolute(normalizePath);

    try {
        if (isAbsolutePath) {
            if (await isDirectoryExist(normalizePath)) {
                process.env.CURRENT_DIRECTORY = normalizePath;
            } else {
                showMessage(REJECTS.directoryDoesNotExist);
            }
        } else {
            const currentDirectory = process.env.CURRENT_DIRECTORY;
            const absoluteDirectory = path.join(currentDirectory, normalizePath);

            if (await isDirectoryExist(absoluteDirectory)) {
                process.env.CURRENT_DIRECTORY = absoluteDirectory;
            } else {
                showMessage(REJECTS.directoryDoesNotExist);
            }

            if (!absoluteDirectory.includes(homedir())) {
                process.env.CURRENT_DIRECTORY = homedir();
            }
        }
    } catch (err) {
        showError(err ? err : REJECTS.invalidDirectory);
    }
};

export const isDirectoryExist = async (directory) => {
    try {
        await access(directory);
        return true;
    } catch {
        return false;
    }
};