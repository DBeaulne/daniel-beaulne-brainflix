import "./VideoStats.scss";
import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoStats(stats) {
	return (
		<>
			<div className="videoStats">
				<div className="videoStats__wrapper">
					<h3>By {stats.stats.channel}</h3>
					<p>{new Date(stats.stats.timestamp).toLocaleDateString()}</p>
				</div>
				<div className="videoStats__wrapper">
					<p>
						<img src={viewsIcon} /> {stats.stats.views}
					</p>
					<p>
						<img src={likesIcon} /> {stats.stats.likes}
					</p>
				</div>
			</div>
		</>
	);
}
export default VideoStats;
