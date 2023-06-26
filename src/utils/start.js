import { RESPONSES } from '../constants.js';

export const getUsername = () => {
    const username = process.argv.slice(2)[0]
    if (username.startsWith('--username')) {
        const currentUsername = username.split('=')[1]
        return currentUsername.charAt(0).toUpperCase() + currentUsername.slice(1);
    } else return 'Username';
}

export const setUsername = () => {
    process.env.USERNAME = getUsername();
}

export const start = () => {
    setUsername();
    console.log(`${RESPONSES.startFileManager}, ${process.env.USERNAME}!`)
    return `${RESPONSES.startFileManager}, ${process.env.USERNAME}!`;
};