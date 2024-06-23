import "./NextVideoCard.scss";
import React from "react";
import { Link } from "react-router-dom";

function NextVideoCard({ next }) {
	return (
		<>
			<Link to={`/videos/${next.id}`}>
				<div className="videoCard">
					<img className="videoCard__image" src={next.image} alt=""></img>
					<div className="videoCard__info">
						<p className="videoCard__title">{next.title}</p>
						<p className="videoCard__channel">{next.channel}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
export default NextVideoCard;
