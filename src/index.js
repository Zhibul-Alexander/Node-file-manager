import {startFileManager} from './responseToConsole/startFileManager.js';
import {getUsername} from './utils/getUsername.js';
import {runFileManager} from './commands/runFileManager.js';

import {REJECTS} from './constants.js';

const App = () => {
    try {
        console.log(startFileManager(getUsername()));
        runFileManager();
    } catch {
        console.log(REJECTS.operationFailed);
    }
};

App();