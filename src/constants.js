export const COMMANDS = {
    close: '.exit',
    up: 'up',
    cd: 'cd',
    ls: 'ls',
    cat: 'cat',
    add: 'add',
    rn: 'rn',
    cp: 'cp',
    mv: 'mv',
    rm: 'rm',
    os: 'os',
    hash: 'hash',
    zip: 'compress',
    unzip: 'decompress',
}

export const OS_COMMANDS = {
    eol: '--EOL',
    cpus: '--cpus',
    homedir: '--homedir',
    username: '--username',
    architecture: '--architecture',
}

export const OS_TEXT = {
    eol: 'End-of-line:',
    homedir: 'Home directory:',
    username: 'System username:',
    architecture: 'Architecture:',
}

export const RESPONSES = {
    startFileManager: 'Welcome to the File Manager',
    finishFileManagerFirstPart: 'Thank you for using File Manager',
    finishFileManagerSecondPart: 'goodbye',
    currentPath: 'You are currently in',
}

export const REJECTS = {
    invalidInput: 'Invalid input',
    operationFailed: 'Operation failed',
    directoryDoesNotExist: 'Directory does not exist',
    invalidDirectory: 'An error occurred while changing the directory',
    errorReadingFile: 'Error reading file:',
    errorWritingFile: 'Error writing file:',
    alreadyExists: 'File with this name already exists',
    notAlreadyExists: 'File with this name does not exist',
}