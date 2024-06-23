/** Button component */
import "./Button.scss";
import React from "react";
import { Link } from "react-router-dom";

function Button({ text, icon, to }) {
	return (
		<Link to={to} className="button">
			<button className="button__btn" type="button" style={{ backgroundImage: `url(${icon})` }}>
				{text}
			</button>
		</Link>
	);
}
export default Button;
