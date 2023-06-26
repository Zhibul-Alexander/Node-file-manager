import {homedir} from 'os';
import {RESPONSES} from '../../constants.js';
import {showMessage} from './showMessages.js';

export const showCurrentDirectory = () => {
    if (!process.env.CURRENT_DIRECTORY) {
        process.env.CURRENT_DIRECTORY = homedir();
    }
    showMessage(`${RESPONSES.currentPath} ${process.env.CURRENT_DIRECTORY}`);
}