import React from 'react';
import { Link } from 'react-router-dom'

const Footer = ({setIsSignedIn, setSignedInName, isSignedIn, setToken}) => {
	
	const handleSignout = () => {
		setIsSignedIn(false);
		setSignedInName('')
		setToken('')
	}
	
	return (
		<footer className="foot">
			{isSignedIn ?
			<ul id="footer">
				<li><Link to="/signout" onClick={handleSignout}>Sign-Out</Link></li>
			</ul>
				: ''
			}
		</footer>
	);
};

export default Footer;