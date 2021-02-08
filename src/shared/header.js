import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class HeaderHolder extends React.Component {
    render(){
        return(

            <header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Router>
                        <nav className="main-nav">
                            <a href="#" className="logo">
                                <img  src="" style={{width: '35%'}} align="Connectwise Demo App"></img>
                            </a>
                            <ul className="nav">
                               <li className="scroll-to-section"> <Link to="/employee">Employee</Link></li> 
                            </ul>        
                        </nav>
                        </Router>
                    </div>
                </div>
            </div>
        </header>

        );
    }
}

export default HeaderHolder;
