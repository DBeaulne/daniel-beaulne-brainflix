/** Logo component */
import "./Logo.scss";
import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Logo({ to }) {
	return (
		<div className="logo">
			<Link to={to}>
				<img src={logo} alt="BrainFlix Logo" />
			</Link>
		</div>
	);
}
export default Logo;
