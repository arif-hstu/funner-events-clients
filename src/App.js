import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Admin from './Components/Admin/Admin'

import { useEffect } from 'react';

function App() {

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/admin/dashboard'>
						<Admin />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
