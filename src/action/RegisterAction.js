import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST
  } from "./ActionTypes";
  import { history } from '../shared/helper/history';
  import {AuthService} from "../services/AuthService";
  import {notify} from '../notification/notification';
  export const registerActions = {
    register
};
function register(user) {
    return dispatch => {
      dispatch(request(user));
      AuthService.register(user)
      .then(
          user => { 
              dispatch(success(user));
              history.push('/login');
              notify('SUCCESS','Registration successful');
          },
          error => {
              dispatch(failure(error));
              notify('ERROR','OOPS error occured !!');
          }
      );

// const registerDetail = AuthService.register(user);


// if(registerDetail == null){
//     dispatch(failure('ERROR','username already exist'));
//     notify('ERROR','username already exist');
// }else{
//     dispatch(success(registerDetail));
//     history.push('/');
//    notify('SUCCESS','login successfully');
    
// }

        //this will work when we connect live API, so for now I am direct passing it.
        // AuthService.register(user)
        //     .then(
        //         user => { 
        //             dispatch(success());
        //             history.push('/login');
        //             notify('SUCCESS','register successfully');
        //         },
        //         error => {
        //             dispatch(failure(error));
        //             notify('ERROR','OOPS error occured !!');
        //         }
        //     );
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAIL, error } }
}