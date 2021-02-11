import React from "react";
import {Router, Route, Switch,Redirect } from 'react-router-dom';
import {HomePage} from "./component/home";
import logo from "./assets/images/logo.png"; // with import
import { RegisterPage } from "./component/auth/Register";
import { LoginPage } from "./component/auth/Login/";
import {  PrivateRoute } from './component/route/SecureRoutes';
import { history } from './shared/helper/history';
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
        return (
    <div>
<header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                  
                        <nav className="main-nav">
                        <a className="logo"> <img  src={logo} style={{width: '35%'}} align="Connectwise Demo App"></img> </a>
                           
                            <ul className="nav">
                                <li className="scroll-to-section">
                                <a href="#" className="nav-link"> Home </a></li>
                                <li className="scroll-to-section">
                                <a href="#" className="nav-link">Employee</a>
                                    </li>
                            </ul>        
                        </nav>
                        <Router history={history}>
                        <Switch>
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginPage} />
                              <Route path="/register" component={RegisterPage} />
                              <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </header>
            </div>
        );
    }
}

const connectedAppPage = connect()(App);
export { connectedAppPage as App };