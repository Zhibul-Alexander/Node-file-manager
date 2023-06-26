import {createReadStream, createWriteStream} from 'fs';
import zlib from 'zlib';

import {getFileParameters} from "../utils/getFileParameters.js";
import { showMessage} from '../utils/show/showMessages.js';

import {REJECTS, RESPONSES} from '../constants.js';

export const compress = async (file, destination, isCompressCommand ) => {
    const fileParameters = await getFileParameters(file);
    const destinationParameters = await getFileParameters(destination);
    if (fileParameters.isNotExist || destinationParameters.isExist) {
        showMessage(REJECTS.invalidInput)
    }

    const readStream = createReadStream(fileParameters.directory);
    const writeStream = createWriteStream(destinationParameters.directory);
    const brotliCompress = isCompressCommand ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();
    const stream = readStream.pipe(brotliCompress).pipe(writeStream);

    readStream.on('error', () => {
        showMessage(REJECTS.operationFailed)
    })
    writeStream.on('error', () => {
        showMessage(REJECTS.operationFailed)
    })
    brotliCompress.on('error', () => {
        showMessage(REJECTS.operationFailed)
    })

    stream.on('finish', () => {
        showMessage(isCompressCommand ? RESPONSES.successCompress : RESPONSES.successDecompress)
    })

}