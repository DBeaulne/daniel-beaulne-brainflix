/** Logo component */
import "./Logo.scss";
import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";

function Logo() {
	return (
		<div className='logo'>
			<img src={logo} alt='BrainFlix Logo' />
		</div>
	);
}
export default Logo;
