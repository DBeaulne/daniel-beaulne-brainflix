import "./NextVideoCard.scss";
import React from "react";

function NextVideoCard({ next, select }) {
	function handleClick(e) {
		e.preventDefault();
		select(next.id);
	}

	return (
		<div className="videoCard" onClick={handleClick}>
			<img className="videoCard__image" src={next.image} alt=""></img>
			<div className="videoCard__info">
				<p className="videoCard__title">{next.title}</p>
				<p className="videoCard__channel">{next.channel}</p>
			</div>
		</div>
	);
}
export default NextVideoCard;
