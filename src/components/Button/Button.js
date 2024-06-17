/** Button component */
import "./Button.scss";
import React from "react";

function Button({ text, icon }) {
	return (
		<div className="button">
			<button className="button__btn" type="button" style={{ backgroundImage: `url(${icon})` }}>
				{text}
			</button>
		</div>
	);
}
export default Button;
