/** Header component */
import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
	return (
		<div className="header">
			<Logo />
			<SearchBar />
			<div className="header__upload-btn"></div>
		</div>
	);
}

export default Header;
