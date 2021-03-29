import React from 'react'

export default function EventCard(props) {
	const [ev] = props.ev;
	console.log('arif', props.event)
	return (
		<div className='EventCard'>
		{
			<h3>{ev.eventName}</h3>
		}
		</div>
	)
}