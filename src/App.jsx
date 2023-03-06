import React, { useState } from 'react';
import { Footer, Header, Posts, Profile, Register, Signin, Signout } from "./components";
import { Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const SignedIn = () => {
		setIsSignedIn(true)
	  }
	  
	const [signedInName, setSignedInName] = useState(null);
	const UpdateSignedInName = (username) => {
		setSignedInName(username);
	  };

	const [token, setToken] = useState('');
	const getToken = (token) => {
		setToken(token);
	}

	return (
			<div className="container">
					<Header signedInName={signedInName} isSignedIn={isSignedIn} />
					<div className="contents">
						<main>
							<Routes>
								<Route path="/" element={<Posts signedInName={signedInName} isSignedIn={isSignedIn} token={token} />} />
								<Route path="/profile" element={<Profile isSignedIn={isSignedIn} signedInName={signedInName} getToken={getToken} token={token}/>} />
								<Route path="/register" element={<Register />} />
								<Route path="/signin" element={<Signin UpdateSignedInName={UpdateSignedInName} SignedIn={SignedIn} getToken={getToken} token={token}/>} />
								<Route path="/signout" element={<Signout />} />
							</Routes>
						</main>
					</div>
					<Footer isSignedIn={isSignedIn} setToken={setToken} setSignedInName={setSignedInName} />
			</div>
	);
};

export default App;