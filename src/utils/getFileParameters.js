import path from 'path';
import {lstat} from 'fs/promises';

import {isDirectoryExist} from '../commands/directory.js';

export const getFileParameters = async (directoryPath) => {
    let normalizePath = path.normalize(directoryPath);
    const isAbsolutePath = path.isAbsolute(normalizePath);
    const absolutePath = isAbsolutePath ? normalizePath : path.join(process.env.CURRENT_DIRECTORY, normalizePath);

    let statistic;
    const isExist = await isDirectoryExist(absolutePath);
    const isNotExist = !isExist

    if (isExist) {
        statistic = (await lstat(absolutePath)).isDirectory();
    }

    return {
        directory: absolutePath,
        isExist,
        isNotExist,
        isFolder: statistic ? statistic : undefined
    }
}