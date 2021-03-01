import { connect } from "react-redux";
import HomePageList from './HomePageList'
import { userActions } from './HomeAction';


const mapStateToProps = state => ({
    employees: state.HomeReducer.employees
});

const mapDispatchToProps =  {
    AddEmployee: (data) => userActions.AddEmployee(data),
    UpdateEmployee: (data) => userActions.UpdateEmployee(data),
    DeleteEmployee:(employeeId) => userActions.DeleteEmployee(employeeId),
    GetEmployees:() => userActions.GetEmployees()
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageList)