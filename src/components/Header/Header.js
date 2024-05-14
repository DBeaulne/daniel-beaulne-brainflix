/** Header component */
import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

function Header() {
	return (
		<div className="header">
			<Logo />
			<SearchBar />
			<Button />
		</div>
	);
}

export default Header;
