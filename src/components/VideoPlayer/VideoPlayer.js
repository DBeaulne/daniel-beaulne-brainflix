import "./VideoPlayer.scss";
import React from "react";

function VideoPlayer({ video }) {
	return (
		<>
			<video className="videoPlayer" controls poster={video.image}></video>
		</>
	);
}
export default VideoPlayer;
