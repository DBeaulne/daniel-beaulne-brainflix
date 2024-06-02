import "./MainVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import VideoStats from "../VideoStats/VideoStats";
import VideoComment from "../VideoComment/VideoComment";

function MainVideo({ video }) {
	const videoStats = video;

	return (
		<>
			<section className="mainVideo">
				<div className="mainVideo__content-box">
					<h2 className="mainVideo__video-title">{video.title}</h2>
					<VideoStats stats={videoStats} />
					<p className="mainVideo__video-blurb">{video.description}</p>
					<CommentForm comments={video.comments} />
					<VideoComment videoComments={video.comments} />
				</div>
			</section>
		</>
	);
}
export default MainVideo;
