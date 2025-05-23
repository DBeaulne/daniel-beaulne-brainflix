import './VideoStats.scss';
import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

function VideoStats({ video }) {
	// display the stats of the video currently displayed
	return (
		<div className="videoStats">
			{video ? (
				<>
					<div className="videoStats__wrapper videoStats__wrapper--left">
						{<h3>By {video.channel} </h3>}
						<p>{new Date(video.timestamp).toLocaleDateString()}</p>
					</div>
					<div className="videoStats__wrapper videoStats__wrapper--right">
						<p>
							<img src={viewsIcon} alt="eyeball icon" /> {video.views}
						</p>
						<p>
							<img src={likesIcon} alt="heart icon" /> {video.likes}
						</p>
					</div>
				</>
			) : (
				<p>Loading stats...</p>
			)}
		</div>
	);
}
export default VideoStats;
