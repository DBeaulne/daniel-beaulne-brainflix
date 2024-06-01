import "./VideoPlayer.scss";
import React from "react";

function VideoPlayer(image) {
	return (
		<>
			<div className="videoPlayer">
				<video controls poster={image.image}></video>
			</div>
		</>
	);
}
export default VideoPlayer;
