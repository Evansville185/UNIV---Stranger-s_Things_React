import React, { Message } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = ({Message}) => {

        return (
        <Router>
            <div>
                <nav>
                    <Link to="/message" type="button" id="message">MESSAGES</Link>
                    <Link to="/login" type="button">LOGIN/REGISTER</Link>
                    <button type="button">LOGOUT</button>
                </nav>
                <Route pat="/message" component={Message} />
                <Route path="/login" component={LogReg} />
            </div>
        </Router>
        )
    }

    function LogReg() {
   
        return (
            <div className="container">
                <h3>Stranger's Things</h3>
    
                {/* <input type="text" name="username" id="logUsername" placeholder="input username" /> */}
                {/* <input type="text" name="password" id="logPassword" placeholder="input password" /> */}
                {/* <h3 className="navItems" id="LogoutButton">Logout</h3> */}
                {/* <h3 className="navItems" id="signup">Sign-Up</h3> */}
            </div>
            );
        }

export default Navbar;