import React, { Component } from "react";
import {Route, Switch,Link } from 'react-router-dom';
import  EmployePage  from "./component/employee/EmployeePage";
import HomePage from "./component/home/HomePage";
import logo from "./assets/images/logo.png"; // with import

class App extends Component {
    render() {
        return (
          
    <div>
<header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        <Link to={'/'} className="logo"> <img  src={logo} style={{width: '35%'}} align="Connectwise Demo App"></img> </Link>
                           
                            <ul className="nav">
                                <li className="scroll-to-section">
                                <Link to={'/'} className="nav-link"> Home </Link></li>
                                <li className="scroll-to-section">
                                <Link to={'/employee'} className="nav-link">Employee</Link>
                                    </li>
                            </ul>        
                        </nav>
                        <Switch>
                               <Route exact path="/" component={HomePage} />
                               <Route path="/employee" component={EmployePage} />
                            </Switch>
                    </div>
                </div>
            </div>
        </header>
            </div>
        );
    }
}

export default App;