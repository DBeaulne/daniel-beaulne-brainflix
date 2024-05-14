/** Button component */
import "./Button.scss";
import React from "react";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

function Button() {
	return (
		<>
			<div className="button">
				<button className="button__btn" type="button">
					Upload
				</button>
				<span class="button__img-box">
					<img className="button__avatar-img avatar-img" src={avatarImg} alt="" />
				</span>
			</div>
		</>
	);
}
export default Button;
