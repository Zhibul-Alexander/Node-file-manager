import { RESPONSES } from '../constants.js';

export const finishFileManager = (username) => {
    return `${RESPONSES.finishFileManagerFirstPart}, ${username}, ${RESPONSES.finishFileManagerSecondPart}!`;
};