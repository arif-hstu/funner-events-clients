import React, { useState } from 'react'
import './Login.css'
import logo from '../../resources/images/logo.jpg'

function Login() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<>
			{
				!loggedIn &&
				<div className='Register'>
					<div className="logoHolder">
						<img src={logo} alt="" />
					</div>
					<div className='registerHolder'>
						<h4>Register as a Volununteer</h4>
						<input type="text" name="" placeholder='Full Name' id="" />
						<input type="text" name="" placeholder='Username or Email' id="" />
						<input type="text" name="" placeholder='Date' id="" />
						<input type="text" name="" placeholder='Description' id="" />
						<input type="text" name="" placeholder='Event Name' id="" />
						<button>Registration</button>
						<p>Already registered?<span onClick={() => setLoggedIn(true)}> Login </span>here</p>
					</div>
				</div>
			}

			{
				loggedIn &&
				<div className='Login'>
					<div className="logoHolder">
						<img src={logo} alt="" />
					</div>
					<div className='registerHolder'>
						<h4>Login as a Volununteer</h4>
						<input type="text" name="" placeholder='Username or Email' id="" />
						<button>Login</button>
						<p>Not registered?<span onClick={() => setLoggedIn(false)}> Registration </span>here</p>
					</div>
				</div>
			}
		</>
	)
}

export default Login