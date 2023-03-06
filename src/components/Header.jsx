import React from "react";
import { Link } from "react-router-dom";

function Header ({ isSignedIn, signedInName }) {

    return (
        <header id="header">
			<nav className="navi">
				<ul>
					<li><Link to="/">Home</Link></li>
					{isSignedIn ? 
					<li><Link to="/profile" ssignedInName={signedInName}>Profile</Link></li>
					: ''
					}
					{isSignedIn ? <li className="init">Welcome, {signedInName}!</li> :
					<li><Link to="/register">Register</Link></li>
					}
					{isSignedIn ? '' :
					<li><Link to="/signin">Sign-In</Link></li>
					}
				</ul>
			</nav>
        </header>
    );
}

export default Header;