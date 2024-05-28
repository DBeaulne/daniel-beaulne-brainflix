import "./MainVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function MainVideo(props) {
	const title = props.video.title;
	const videoPoster = props.video.image;

	return (
		<>
			<section className="mainVideo">
				{/* placeholder */}
				<VideoPlayer image={videoPoster} />
				<div className="mainVideo__content-box">
					<div className="mainVideo__video-title">
						<h2>{title}</h2>
					</div>
					<div className="mainVideo__video-stats">
						<h3>By {props.video.channel}</h3>
						<p>{props.video.views}</p>
						<p>{new Date(props.video.timestamp).toLocaleDateString()}</p>
						<p>{props.video.likes}</p>
					</div>
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
