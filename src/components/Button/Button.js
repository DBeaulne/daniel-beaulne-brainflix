/** Button component */
import "./Button.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

function Button(props) {
	return (
		<>
			<div className="button">
				<button className="button__btn" type="button" style={{backgroundImage: `url(${props.icon})`}}>
					{props.text}
				</button>
				<Avatar image={avatarImg} id="button__avatar" />
			</div>
		</>
	);
}
export default Button;
