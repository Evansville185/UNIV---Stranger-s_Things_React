import React from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header, Navbar, PostForm, Posts, Search } from './components'
import './App.css';

function App() {

  return (
    <div className="container">
      <body>
      <header className ="header">
        <Header />
          <nav>
            {/* <Navbar /> */}
          </nav>
      </header>
        <div className="body">
          <main className="content">
            {/* <Search /> */}
            {/* <Posts /> */}
          </main>
          <aside className="content">
            {/* <PostForm /> */}
          </aside>
        </div>
      <footer className ="footer">
        {/* <Footer /> */}
      </footer>
      </body>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));