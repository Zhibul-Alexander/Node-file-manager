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

export const RESPONSES = {
    startFileManager: 'Welcome to the File Manager',
    finishFileManagerFirstPart: 'Thank you for using File Manager',
    finishFileManagerSecondPart: 'goodbye',
    currentPath: 'You are currently in',
}

export const REJECTS = {
    invalidInput: 'Invalid input',
    operationFailed: 'Operation failed',
}