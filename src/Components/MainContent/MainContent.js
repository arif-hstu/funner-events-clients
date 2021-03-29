import React from 'react'
import './MainContent.css'
import EventCard from '../EventCard/EventCard'

export default function MainContent(props) {
	const [events, setEvents] = props.events; //from Home component
	console.log(events)
	return (
		<div className='MainContent'>
		{
			events.map(ev => {<EventCard ev={ev}/>})
		}
		</div>
	)
}