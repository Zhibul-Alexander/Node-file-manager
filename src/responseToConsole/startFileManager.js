import { RESPONSES } from '../constants.js';

export const startFileManager = (username) => {
    return `${RESPONSES.startFileManager}, ${username}!`;
};