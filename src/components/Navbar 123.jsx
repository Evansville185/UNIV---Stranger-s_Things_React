import React from 'react';

// import Message from './components'

    const Navbar = () => {

        return (
            <nav>
                <button type="button" id="message">MESSAGES</button>
                <button to="/login" type="button" id="loginReg">LOGIN/REGISTER</button>
                <button type="button" id="message">LOGOUT</button>
            </nav>
        )
    }

export default Navbar;