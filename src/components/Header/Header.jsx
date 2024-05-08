/** Header component */
import "./Header.scss";
import React from "react";
import Logo from "../Components/Logo";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../Components/SearchBar";

function Header() {
	return (
		<div className='header'>
			<Logo />
			<SearchBar />
			<Avatar />
			<div className='header__upload-btn'></div>
		</div>
	);
}

export default Header;
