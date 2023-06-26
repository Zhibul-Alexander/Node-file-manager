import {start} from './start/start.js';
import {showCurrentDirectory, showMessage} from './utils/show.js';
import {runFileManager} from './runFileManager.js';

import {RESPONSES} from './constants.js';

const App = async () => {
    start()
    showCurrentDirectory()

    process.stdin.on('data', async (data) => {
        showCurrentDirectory();
        const [command, ...args] = data.toString().trim().split(' ');
        await runFileManager(command, args);
    })

    process.on('SIGINT', () => {
        showMessage(`${RESPONSES.finishFileManagerFirstPart}, ${process.env.USERNAME}, ${RESPONSES.finishFileManagerSecondPart}!`);
        process.exit();
    })
};

await App();