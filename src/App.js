import React from "react";
import HomePageContainer from "./ContainerV2/HomePageContainer";
import logo from "./assets/images/logo.png"; // with import
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
                        <HomePageContainer></HomePageContainer>
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