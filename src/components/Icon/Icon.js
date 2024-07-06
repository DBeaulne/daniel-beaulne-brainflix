import "./Icon.scss";
import React from "react";

function Icon({ icon, id }) {
	return (
		<div className="icon">
			<img className="icon__image" id={id} src={icon} />
		</div>
	);
}
export default Icon;
