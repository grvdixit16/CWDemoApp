import { combineReducers } from 'redux';
import { authentication  } from "./login";
import { registration } from "./register";

import { users  } from "./user";
import { alert  } from "./notify";
const rootReducer =  combineReducers({
    authentication,
    registration,
    users,
    alert
});


export default rootReducer;