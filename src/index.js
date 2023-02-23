import React from "react";
import ReactDOM from "react-dom";
import { Footer, Header, Navbar, PostForm, Posts, Search } from "./components";
import "./App.css";

function App() {

	return (
		<div className="container">
			<body>
				<Header />
				<div className="contents">
					<Posts />
					<PostForm />
				</div>
				{/* <div className="body">
					<main className="content">
						<Search />
						<Posts />
					</main>
					<aside className="content"><PostForm /></aside>
				</div>*/}
				<Footer />
			</body>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
