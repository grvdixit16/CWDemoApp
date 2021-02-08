 import { applyMiddleware, createStore } from 'redux';
 import employeeReducer from '../reducers/employee';
 import thunk from "redux-thunk";

 export const store = createStore(
     employeeReducer, applyMiddleware(thunk));