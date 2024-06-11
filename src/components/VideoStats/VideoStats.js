import "./VideoStats.scss";
import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoStats(stats) {
	return (
		<div className="videoStats">
			<div className="videoStats__wrapper videoStats__wrapper--left">
				<h3>By {stats.stats.channel}</h3>
				<p>{new Date(stats.stats.timestamp).toLocaleDateString()}</p>
			</div>
			<div className="videoStats__wrapper videoStats__wrapper--right">
				<p>
					<img src={viewsIcon} alt="" /> {stats.stats.views}
				</p>
				<p>
					<img src={likesIcon} alt="" /> {stats.stats.likes}
				</p>
			</div>
		</div>
	);
}
export default VideoStats;
