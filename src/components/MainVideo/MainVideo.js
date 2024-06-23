import "./MainVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import VideoStats from "../VideoStats/VideoStats";
import VideoComment from "../VideoComment/VideoComment";

function MainVideo({ video }) {
	const stats = {
		likes: video.likes,
		views: video.views,
		channel: video.channel,
		timestamp: video.timestamp
	};

	return (
		<section className="mainVideo">
			<div className="mainVideo__content-box">
				<h2 className="mainVideo__video-title">{video.title}</h2>
				{<VideoStats stats={stats} />}
				<p className="mainVideo__video-blurb">{video.description}</p>
				{<CommentForm video={video} />}
				{<VideoComment videoComments={video?.comments} />}
			</div>
		</section>
	);
}
export default MainVideo;
