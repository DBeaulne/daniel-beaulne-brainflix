/* Avatar component */
import "./Avatar.scss";
import React from "react";

function Avatar(props) {
	return (
		<div className="avatar" id={props.id}>
			<img className="avatar__img avatar-img" src={props.image} alt="" />
		</div>
	);
}
export default Avatar;
