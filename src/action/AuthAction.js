import { useActionTypes } from "./UserActionTypes";
  import {AuthService} from "../services/AuthService";
import { alertActions } from './notifyAction';
import { history } from '../shared/helper/history';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        AuthService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: useActionTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: useActionTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: useActionTypes.LOGIN_FAILURE, error } }
}

function logout() {
    AuthService.logout();
    return { type: useActionTypes.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        AuthService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: useActionTypes.REGISTER_REQUEST, user } }
    function success(user) { return { type: useActionTypes.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: useActionTypes.REGISTER_FAIL, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        AuthService.getAllUser()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: useActionTypes.GETALL_REQUEST } }
    function success(users) { return { type: useActionTypes.GETALL_SUCCESS, users } }
    function failure(error) { return { type: useActionTypes.GETALL_FAILURE, error } }
}
 
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        AuthService.deleteUser(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: useActionTypes.DELETE_REQUEST, id } }
    function success(id) { return { type: useActionTypes.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: useActionTypes.DELETE_FAILURE, id, error } }
}