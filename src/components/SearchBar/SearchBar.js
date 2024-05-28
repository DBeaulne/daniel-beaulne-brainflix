/** Search Bar Component */
import "./SearchBar.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

function SearchBar() {
	return (
		<>
			<div className="searchBar">
				<input className="searchBar__input-field" name="searchField" id="search" placeholder="Search"></input>
				<Avatar image={avatarImg} id="searchBar__avatar" />
			</div>
		</>
	);
}
export default SearchBar;
