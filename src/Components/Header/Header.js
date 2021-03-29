import React from 'react'
import logo from '../../resources/images/logo.jpg'
import './Header.css'

export default function Header() {
	return (
		<div className='Header'>
			<div className="logoHolder">
				<img src={logo} alt="Funner Events" />
			</div>
			<nav>
				<a href="">Home</a>
				<a href="">Donation</a>
				<a href="">Event</a>
				<a href="">Blog</a>
				<a href="">Register</a>
				<a href="">Admin</a>
			</nav>
		</div>
	)
}