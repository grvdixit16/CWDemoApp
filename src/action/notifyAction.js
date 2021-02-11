import { alertNotification } from './ActionTypes';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertNotification.SUCCESS, message };
}

function error(message) {
    return { type: alertNotification.ERROR, message };
}

function clear() {
    return { type: alertNotification.CLEAR };
}