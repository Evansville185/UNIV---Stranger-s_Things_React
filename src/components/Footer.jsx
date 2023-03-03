import React from 'react';
import { Link } from 'react-router-dom'

const Footer = ({signedInName, setIsSignedIn, setSignedInName, isSignedIn}) => {

	const signout = (setToken) => {
		setIsSignedIn(false);
		setSignedInName('')
		console.log(signedInName);
		console.log(signedInName);
		setToken(null)
	};
	
	const handleSignout = () => {
		signout();
	}
	return (
		
		<footer className="foot">
			{isSignedIn ?
			<li id="footer">
				<Link onClick={handleSignout} to="/signout">Sign Out</Link>
			</li>
				: ''
			}
		</footer>
	);
};

export default Footer;