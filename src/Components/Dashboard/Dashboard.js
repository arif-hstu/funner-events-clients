import React from 'react'
import './Dashboard.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import DashboardPanel from '../DashboardPanel/DashboardPanel'


function Dashboard() {
	return (
		<div className='Dashboard'>
			<DashboardHeader />
			<DashboardPanel />
		</div>
	)
}

export default Dashboard