import React from 'react'
import logo from '../../resources/images/logo.jpg'
import './Header.css'
import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<div className='Header'>
			<div className="logoHolder">
				<img src={logo} alt="Funner Events" />
			</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/donation">Donation</Link>
				<Link to="/event">Event</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/login">Register</Link>
				<Link to="/admin/dashboard">Admin</Link>
			</nav>
		</div>
	)
}