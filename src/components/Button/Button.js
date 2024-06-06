/** Button component */
import "./Button.scss";
import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
	return (
		<>
			<div className="button">
				<Link to="/Upload">
					<button className="button__btn" type="button" style={{ backgroundImage: `url(${props.icon})` }}>
						{props.text}
					</button>
				</Link>
			</div>
		</>
	);
}
export default Button;
