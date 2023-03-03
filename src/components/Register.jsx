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

            if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate("/signin"); 
                    }, 5000)
            } else {
                alert('try again with the correct accounts details')
            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
{success ? (
	<main>
		<div>
			<h1>You've successfully registered as: </h1>
			<h4>Username: {username}
				<br />
				Password: {password}
			</h4>
				<h4>You are now being redirected to the Signin page.
				<br />Loading...</h4>
		</div>
	</main>
) : (
    <main>
        <div>
            <form onSubmit={handleSubmit} className='register-container'>
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
							{/* put router link here */}
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