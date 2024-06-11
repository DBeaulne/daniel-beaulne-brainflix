import "./VideoPlayer.scss";
import React from "react";

function VideoPlayer(image) {
	return (
		<>
			<video className="videoPlayer" controls poster={image.image}></video>
		</>
	);
}
export default VideoPlayer;
