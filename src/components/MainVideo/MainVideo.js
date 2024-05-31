import "./MainVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoStats from "../VideoStats/VideoStats";
import VideoComment from "../VideoComment/VideoComment";

function MainVideo({ video }) {
	const videoStats = video;

	return (
		<>
			<section className="mainVideo">
				<VideoPlayer image={video.image} />
				<div className="mainVideo__content-box">
					<div className="mainVideo__video-title">
						<h2>{video.title}</h2>
					</div>
					<VideoStats stats={videoStats} />
					<div className="mainVideo__video-blurb">
						<p>{video.description}</p>
					</div>
					<CommentForm comments={video.comments} />
					<VideoComment videoComments={video.comments} />
				</div>
			</section>
		</>
	);
}
export default MainVideo;
