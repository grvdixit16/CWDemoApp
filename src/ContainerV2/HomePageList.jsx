import React, { Component } from 'react'
import { validEmailRegex } from '../validation/regex';
import { notify } from '../notification/notification';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};


export default class HomePageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: "",
      employeeTeam: "",
      employeeEmail: "",
      employeeMobile: "",
      employeeCode: "",
      errors: {
        employeeName: '',
        employeeEmail: ''
      }
    };
  }
  submitData = () => {
    if (validateForm(this.state.errors)) {
      if (this.state.employeeName && this.state.employeeEmail && !this.state.id) {
        const newEmployee = {
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          employeeName: this.state.employeeName,
          employeeTeam: this.state.employeeTeam,
          employeeEmail: this.state.employeeEmail,
          employeeMobile: this.state.employeeMobile,
          employeeCode: this.state.employeeCode,
        };
        this.props.AddEmployee(newEmployee);
        notify('SUCCESS', 'Employee saved successfully');
      } else if (this.state.employeeName && this.state.employeeEmail && this.state.id) {
        const updatedDetails = {
          id: this.state.id,
          employeeName: this.state.employeeName,
          employeeTeam: this.state.employeeTeam,
          employeeEmail: this.state.employeeEmail,
          employeeMobile: this.state.employeeMobile,
          employeeCode: this.state.employeeCode
        };

        this.props.UpdateEmployee(updatedDetails);
        notify('SUCCESS', 'Employee updated successfully');
      } else {
        notify('ERROR', 'Employee name and email is required.');
      }
      this.clearData();
    }
  }

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeTeam: "",
      employeeEmail: "",
      employeeMobile: "",
      employeeCode: "",
    });
  }
  inputChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'employeeName':
        errors.employeeName =
          value.length < 5
            ? 'Employee Name must be at least 5 characters long!'
            : '';
        break;
      case 'employeeEmail':
        errors.employeeEmail =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  
  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeTeam: data.employeeTeam,
      employeeEmail: data.employeeEmail,
      employeeMobile: data.employeeMobile,
      employeeCode: data.employeeCode
    })
  }

  
  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.DeleteEmployee(id);
      notify('SUCCESS','Employee deleted successfully');
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="left-text-content">
                  <div className="section-heading">
                    <h6>Connectwise demo app</h6>
                    <h2>Employee Module</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="contact-form">

                  <h4> Employee Name </h4>
                  <input name="employeeName" onChange={this.inputChangeHandler} value={this.state.employeeName} type="text" placeholder="Employee Name" />
                  {errors.employeeName.length > 0 &&
                    <span className='span-error'>{errors.employeeName}</span>}
                  <br />
                  <h4> Employee Email</h4> <input name="employeeEmail" onChange={this.inputChangeHandler} value={this.state.employeeEmail} type="text" placeholder="Employee Email" />
                  {errors.employeeEmail.length > 0 &&
                    <span className='error'>{errors.employeeEmail}</span>}
                  <br />
                  <h4> Employee Mobile</h4><input name="employeeMobile" onChange={this.inputChangeHandler} value={this.state.employeeMobile} type="text" placeholder="Employee Mobile" /><br />
                  <h4> Employee Code</h4> <input name="employeeCode" onChange={this.inputChangeHandler} value={this.state.employeeCode} type="text" placeholder="Employee Code" /><br />
                  <h4> Employee Team</h4> <input name="employeeTeam" onChange={this.inputChangeHandler} value={this.state.employeeTeam} type="text" placeholder="Employee Team" /><br />
                  <ul className="actions small">
                    {this.state.id ?

                      <li><button onClick={this.submitData}>UPDATE</button></li> : <li><button onClick={this.submitData}>ADD</button></li>} &nbsp;&nbsp;<li><button onClick={this.clearData}>CLEAR</button></li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <table className="table-wrapper">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Code</th>
                      <th> Team</th>
                      <th>Action(s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.employees && this.props.employees.map((data, index) => {
                      return <tr key={(index + 1)}>
                        <td>{(index + 1)}</td>
                        <td>{data.employeeName}</td>
                        <td>{data.employeeEmail}</td>
                        <td>{data.employeeMobile}</td>
                        <td>{data.employeeCode}</td>
                        <td>{data.employeeTeam}</td>
                        <td>
                          <button type="button" onClick={() => this.editDetails(data)} className="btn btn-outline-primary">Edit</button>
                          <button type="button" onClick={() => this.deleteEmployee(data.id)} className="btn btn-outline-danger">Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>


              </div>
            </div>

          </div>

        </section>

      </div>
    )

  }
}