import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import logo from '../../resources/images/logo.jpg'
function Sidebar() {
	return (
		<div className='Sidebar'>
			<img src={logo} alt="" />
			<div className="menu">
				<Link to='/admin/uselist'>User List</Link>
				<Link to='/admin/addEvent'>Add Event</Link>
			</div>
 		</div>
	)
}

export default Sidebar; //to Admin