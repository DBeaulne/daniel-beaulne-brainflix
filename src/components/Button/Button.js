/** Button component */
import "./Button.scss";
import React from "react";

function Button(props) {
	return (
		<>
			<div className="button">
				<button className="button__btn" type="button" style={{ backgroundImage: `url(${props.icon})` }}>
					{props.text}
				</button>
			</div>
		</>
	);
}
export default Button;
