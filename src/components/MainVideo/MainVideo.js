import "./MainVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoStats from "../VideoStats/VideoStats";

function MainVideo(props) {
	const title = props.video.title;
	const videoPoster = props.video.image;
	const videoStats = props.video;

	return (
		<>
			<section className="mainVideo">
				{/* placeholder */}
				<VideoPlayer image={videoPoster} />
				<div className="mainVideo__content-box">
					<div className="mainVideo__video-title">
						<h2>{title}</h2>
					</div>
					<VideoStats stats={videoStats} />
					<div className="mainVideo__video-blurb">
						<p>{props.video.description}</p>
					</div>
					<CommentForm numComments={props.video.comments} />
					<div className="mainVideo__past-comments">
						<p>past comments go here</p>
						<p>ToDo: create component to populate comments and pass in array as a prop</p>
					</div>
				</div>
			</section>
		</>
	);
}
export default MainVideo;
