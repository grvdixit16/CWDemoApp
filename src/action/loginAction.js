import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from "./ActionTypes";
  import { history } from '../shared/helper/history';
  import {AuthService} from "../services/AuthService";
  import {notify} from '../notification/notification';
  
  export const loginActions = {
   login,
   logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        AuthService.login(username, password)
        .then(
            user => { 
                dispatch(success());
                history.push('/');
            },
            error => {
                dispatch(failure(error));
                notify('ERROR','Incorrect username or password');
            }
        );




// const loginDetail = AuthService.login(username, password);
// if(loginDetail == null){
//     dispatch(failure('ERROR','OOPS error occured !!'));
//     notify('ERROR','Incorrect username or password');
// }else{
//     dispatch(success(loginDetail));
//     history.push('/home');
//    notify('SUCCESS','login successfully');
    
//}
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAIL, error } }
}

function logout() {
    AuthService.logout();
    return { type: LOGOUT };
}
