import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<div className='SearchBar'>
			<div className="searchContent">
				<h3>Searhc the Events you like to Join</h3>
				<div className="inputFields">
					<input type="text" placeholder='Search' />
					<input type="button" value='Search' />
				</div>
			</div>
		</div>
	)
}