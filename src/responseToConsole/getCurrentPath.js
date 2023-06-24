import { RESPONSES } from '../constants.js';

export const getCurrentPath = (path) => {
    return `${RESPONSES.currentPath} ${path}`;
}
