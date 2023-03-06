import React from 'react';
import { Link } from 'react-router-dom'

const Signout = () => {
    return (
    <main className='out'>
      <div className='signoutform'>
		    <h1>You've successfully signed out!</h1>
        <span>
          <Link to='/signin'>Sign In</Link>
        </span>
      </div>
    </main>
    )
}

export default Signout;