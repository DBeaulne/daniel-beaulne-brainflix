/** Header component */
import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/upload.svg";

function Header() {
	return (
		<div className="header">
			<Logo />
			<SearchBar />
			<Button text="upload" icon={buttonIcon} />
		</div>
	);
}

export default Header;
