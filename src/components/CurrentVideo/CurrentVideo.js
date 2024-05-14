import "./CurrentVideo.scss";
import React from "react";
import VideoData from "../../data/video-details.json";

const videoImg = (data) => {
	const image = data[0].image;
	console.log(image);
	return image;
};

let vImage = videoImg(VideoData);
console.log(vImage);

function CurrentVideo() {
	return (
		<>
			<div className="currentVideo">
				{/* placeholder */}
				<div className="currentVideo__img-box">
					<img className="currentVideo__video-img" alt="still frame from current video" src={vImage} />
				</div>
				<div className="currentVideo__content-box">
					<div className="currentVideo__video-title">
						<p>video title</p>
					</div>
					<div className="currentVideo__video-stats">
						<p>video stats</p>
					</div>
					<div className="currentVideo__video-blurb">
						<p>video blurb</p>
					</div>
					<div className="currentVideo__comment-form">
						<p>comment form</p>
					</div>
					<div className="currentVideo__past-comments">
						<p>all past comments</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default CurrentVideo;
