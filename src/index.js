import {start} from './utils/start.js';
import {runFileManager} from './runFileManager.js';
import {showMessage} from './utils/show/showMessages.js';
import {showCurrentDirectory} from './utils/show/showInformation.js';

import {RESPONSES} from './constants.js';

const App = async () => {
    start()
    showCurrentDirectory()

    process.stdin.on('data', async (data) => {
        const [command, ...args] = data.toString().trim().split(' ');
        await runFileManager(command, args);
    })

    process.on('SIGINT', () => {
        showMessage(`${RESPONSES.finishFileManagerFirstPart}, ${process.env.USERNAME}, ${RESPONSES.finishFileManagerSecondPart}!`);
        process.exit();
    })
};

await App();