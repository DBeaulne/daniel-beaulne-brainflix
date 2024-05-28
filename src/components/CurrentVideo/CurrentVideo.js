import "./CurrentVideo.scss";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";

function CurrentVideo(props) {
	console.log(props);

	return (
		<>
			<div className="currentVideo">
				{/* placeholder */}
				<div className="currentVideo__img-box">
					<img className="currentVideo__video-img" alt="still frame from current video" src={props.video.image} />
				</div>
				<div className="currentVideo__content-box">
					<div className="currentVideo__video-title">
						<h2>{props.video.title}</h2>
					</div>
					<div className="currentVideo__video-stats">
						<h3>By {props.video.channel}</h3>
						<p>{props.video.views}</p>
						<p>{new Date(props.video.timestamp).toLocaleDateString()}</p>
						<p>{props.video.likes}</p>
					</div>
					<div className="currentVideo__video-blurb">
						<p>{props.video.description}</p>
					</div>
					<div className="currentVideo__comment-form">
						<CommentForm numComments={props.video.comments} />
					</div>
					<div className="currentVideo__past-comments">
						<p>past comments go here</p>
						<p>ToDo: create component to populate comments and pass in array as a prop</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default CurrentVideo;
