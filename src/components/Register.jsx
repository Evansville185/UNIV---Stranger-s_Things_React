import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from '../config'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch(          
            `${config.apiLink}/${config.cohort}/users/register`, {
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

         if (username.length < 4) {
            alert("Username is too short '\n' Username must be at least 4 characters long" )
        } else if (password.length < 8){
            alert("Password is too short '\n' Password must be at least 8 characters long" )
        } else if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate("/signin"); 
                    }, 5000)
            } else {
                alert('Username already taken, please try registering with another username')
            } 
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
{success ? (
	<main className='registerContainer'>
		<div className='regform'>
			<h1>You've successfully registered as: </h1>
			<h4>Username: {username}
				<br />
				Password: {password}
                <br />
			</h4>
				<p>You are now being redirected to the Signin page.
				<br />Loading...</p>
		</div>
	</main>
) : (
    <main className='registerContainer'>
        <div className='regform'>
            <form onSubmit={handleSubmit} >
                <h1>Stranger's Things Registration</h1>
                    <input 
                        type='text' placeholder='username' className='login-input'
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    <input 
                        type='text' placeholder='password' className='password-input'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                <br />
                <button className='login-buttons' type='submit'>Submit</button>
            </form>
            <br />
                    <p>
						Already registered?
						<br />
						<span>
							<Link to='/signin'>Sign In</Link>
						</span>
					</p>
        </div>
    </main>
    )}
    </>
    )
}

export default Register