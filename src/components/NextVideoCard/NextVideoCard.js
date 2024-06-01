import "./NextVideoCard.scss";
import React from "react";

function NextVideoCard({ next }) {
	console.log(next);

	return (
		<>
			<div className="videoCard">
				<img className="videoCard__image" src={next.image} alt=""></img>
				<div className="videoCard__info">
					<p className="videoCard__title">{next.title}</p>
					<p className="videoCard__channel">{next.channel}</p>
				</div>
			</div>
		</>
	);
}
export default NextVideoCard;
