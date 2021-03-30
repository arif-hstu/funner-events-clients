import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './Admin.css'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
function Admin() {
	return (
		<div className= 'Admin'>
			<Sidebar />
			<Router>
				<switch>
				<Route exact path='/admin/dashboard'>
					
					<Dashboard />
				</Route>
				</switch>
			</Router>
		</div>
	)
}

export default Admin