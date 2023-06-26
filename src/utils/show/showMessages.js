import {REJECTS} from '../../constants.js'

export const showMessage = (text) => {
    process.stdout.write(text + '\n');
}

export const showError = (error) => {
    showMessage(error ? error : REJECTS.operationFailed  + '\n' )
}

