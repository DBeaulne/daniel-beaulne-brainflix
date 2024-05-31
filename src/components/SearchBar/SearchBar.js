/** Search Bar Component */
import "./SearchBar.scss";
import React from "react";

function SearchBar() {
	return (
		<>
			<div className="searchBar">
				<input className="searchBar__input-field" name="searchField" id="search" placeholder="Search"></input>
			</div>
		</>
	);
}
export default SearchBar;
