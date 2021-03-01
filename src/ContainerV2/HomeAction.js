import {EmployeeService} from "./EmployeeService";
import { useActionTypes } from "../action/UserActionTypes";


export const userActions = {
    GetEmployees,
    UpdateEmployee,
    DeleteEmployee,
    AddEmployee
};
function GetEmployees() {
    return dispatch => {
        return dispatch({
            type: 'GET_EMPLOYEE'
        });
    }
};

function AddEmployee(data) {
    return dispatch => {
        return dispatch({
            type: 'ADD_EMPLOYEE',
            payload: data
        });
    }
};

function UpdateEmployee(data) {
    return dispatch => {
        return dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: data
        });
    }
};

function DeleteEmployee(employeeId) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: employeeId
        });
    }
};