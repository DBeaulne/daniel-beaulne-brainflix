import './VideoPlayer.scss';
import React from 'react';

function VideoPlayer({ video }) {
	return (
		<>
			{video ? (
				<video
					className="videoPlayer"
					controls
					poster={`${process.env.REACT_APP_BACKEND_URL}/images/${video.image}`}></video>
			) : (
				<p>Loading video...</p>
			)}
		</>
	);
}
export default VideoPlayer;
