
import {EmployeeService } from  './EmployeeService'

const initialstate = {
  employees: [
      { id: 1, employeeName: "Gaurav", employeeTeam: "ABC",employeeEmail:"emp@gmail.com",employeeMobile:"9818667542",employeeCode:"CW-1" },
      { id: 2, employeeName: "Rahul", employeeTeam: "Testing Team",employeeEmail:"test@gmail.com",employeeMobile:"7895625632",employeeCode:"CW-2"  },
      { id: 3, employeeName: "Vivek", employeeTeam: "XYZ Team",employeeEmail:"abcv@gmail.com",employeeMobile:"7458852632",employeeCode:"CW-3"  }
  ]
};

function  GetInitialEmployeeDetails(params) {
    const employeeData = EmployeeService.GetAllUsers();
    if(employeeData){
        return employeeData;
    }
    return initialstate;
}
// We can user Employee service Here but due to only react project I am dealing with constant employee json data
const HomeReducer = (state = initialstate, action) => {
  switch (action.type) {
      case 'GET_EMPLOYEE':
          return {
              ...state
          };
      case 'ADD_EMPLOYEE':
          return {
              ...state,
              employees: state.employees.concat(action.payload)
          };
      case 'EDIT_EMPLOYEE':
          return {
              ...state,
              employees: state.employees.map(
                  (content, i) => content.id === action.payload.id ? {...content, employeeName : action.payload.employeeName ,  employeeTeam : action.payload.employeeTeam, employeeMobile : action.payload.employeeMobile, employeeCode:action.payload.employeeCode, employeeEmail:action.payload.employeeEmail }
                                          : content)
          };
      case 'DELETE_EMPLOYEE':
          return {
              ...state,
              employees: state.employees.filter(item => item.id !== action.payload)
          };
      default:
          return state;
  }
};

export default HomeReducer;
