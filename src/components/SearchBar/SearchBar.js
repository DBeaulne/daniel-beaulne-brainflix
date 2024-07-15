/** Search Bar Component */
import './SearchBar.scss';
import React from 'react';

function SearchBar() {
	// inactive search bar -- looks nice but functionality is outside of the scope of this app
	return (
		<div className="searchBar">
			<input className="searchBar__input-field" name="searchField" id="search" placeholder="Search"></input>
		</div>
	);
}
export default SearchBar;
