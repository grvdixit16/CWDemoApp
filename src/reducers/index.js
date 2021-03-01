import { combineReducers } from 'redux';
import { authentication  } from "./login";
import { registration } from "./register";
import  employeeReducer  from "./employee";
import { users  } from "./user";
import { alert  } from "./notify";

import   HomeReducer    from "../ContainerV2/HomeReducers";

const rootReducer =  combineReducers({
    HomeReducer
});


export default rootReducer;