/** Search Bar Component */
import "./SearchBar.scss";
import React from "react";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

function SearchBar() {
	return (
		<>
			<div className="searchBar">
				<input className="searchBar__input-field" name="searchField" id="search" placeholder="Search"></input>
				<span class="searchBar__img-box">
					<img className="searchBar__avatar-img avatar-img" src={avatarImg} alt="" />
				</span>
			</div>
		</>
	);
}
export default SearchBar;
