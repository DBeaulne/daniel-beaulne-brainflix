import './NextVideoCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function NextVideoCard({ next }) {
	return (
		<>
			<Link to={`/videos/${next.id}`}>
				<div className="videoCard">
					<img
						className="videoCard__image"
						src={`${process.env.REACT_APP_BACKEND_URL}/images/${next.image}`}
						alt={`thumbnail of ${next.title}`}></img>
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
