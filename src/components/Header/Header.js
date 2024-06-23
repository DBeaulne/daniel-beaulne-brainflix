/** Header component */
import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/upload.svg";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";
import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

	return (
		<div className="header">
			{<Logo to="/" />}
			<div className="header__searchBar-container">
				<SearchBar />
				<Avatar image={avatarImg} id="searchBar-avatar" />
			</div>
			<div className="header__button-container">
				{<Button text="upload" icon={buttonIcon} to="/UploadPage" />}
				<Avatar image={avatarImg} id="button-avatar" />
			</div>
		</div>
	);
}

export default Header;
