import './VideoPlayer.scss';
import React from 'react';

function VideoPlayer({ video }) {
	console.log(video.image);

	return (
		<>
			{video ? (
				<video className="videoPlayer" controls poster={`http://localhost:8080/public/images/${video.image}`}></video>
			) : (
				<p>Loading video...</p>
			)}
		</>
	);
}
export default VideoPlayer;
