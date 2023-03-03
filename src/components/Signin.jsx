import React, { useState } from 'react';
import { config } from '../config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signin = (props) => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        
        const navigate = useNavigate()
        
        const handleSubmit = async (e) => {
          e.preventDefault()
          try {
            const response = await fetch(          
                `${config.apiLink}/${config.cohort}/users/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                });
                const result = await response.json();
                console.log(result)
                if (result.success) {
                props.UpdateSignedInName(username)
                   props.SignedIn()
                   props.getToken(result.data.token)
                  navigate('/')
                } else {
                  alert('try again with the correct accounts details')
                }
            } catch (error) {
                console.error(error);
            }
        }

    return (
        <main>
            <div>
                <form onSubmit={handleSubmit} className='signin-container'>
                    <h1>Stranger's Things Sign-In</h1>
                        <input 
                            type='text' placeholder='username' className='signin-input'
                            onChange={event => setUsername(event.target.value)}
                            />
    
                        <input 
                            type='password' placeholder='password' className='password-input'
                            onChange={event => setPassword(event.target.value)}
                        />
                    <br />
                    <button className='signin-button' type='submit'>Submit</button>
                </form>
                <br />
                    <p>
						Not registered?
						<br />
						<span className="line">
							<Link to='/register'>Register here</Link>
						</span>
					</p>
            </div>
        </main>
        )
    }

export default Signin;