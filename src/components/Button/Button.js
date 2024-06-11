/** Button component */
import "./Button.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text, icon, url }) {
	const navigate = useNavigate();
	function handleClick({ props }) {
		navigate(url);
	}

	return (
		<div className="button">
			<button className="button__btn" type="button" onClick={handleClick} style={{ backgroundImage: `url(${icon})` }}>
				{text}
			</button>
		</div>
	);
}
export default Button;
