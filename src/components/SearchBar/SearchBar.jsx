/** Search Bar Component */
import "./SearchBar.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import icon from "../../assets/Icons/search.svg";

function SearchBar() {
	return (
		<>
			<div className="searchBar">
				<div className="searchBar__wrapper">
					<img className="searchBar__icon icon" src={icon} />
					<textarea
						className="searchBar__input-field"
						rows="1"
						name="searchField"
						id="search"
						placeholder="Search"></textarea>
				</div>
				<Avatar />
			</div>
		</>
	);
}
export default SearchBar;
