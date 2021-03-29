import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MainContent from '../MainContent/MainContent';
import axios from 'axios';

export default function Home() {

	/*
	* handle api data
	*************************/
	// let loaded = false;
	// useState to hold the fetched data
	const [events, setEvents] = useState([]);
	// useEffect to fetch api data
	useEffect(() => {
		fetch('http://localhost:5000/events')
			.then(res => res.json())
			.then(data => setEvents(data));
		// axios
		// 	.get('http://localhost:5000/events')
		// 	.then(res => {
		// 		// console.log(res.data)
		// 		setEvents(res.data)
		// 		// loaded = true;
		// 		// console.log(loaded)
		// 	})

	}, []);
	console.log(events);

	return (
		<div className='Home'>
			<Header />
			{
					events.length !== 0 && <MainContent events={[events, setEvents]} />
			}
		</div>
	)
}