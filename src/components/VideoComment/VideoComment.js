import "./VideoComment.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";

function VideoComment({ videoComments }) {
	const comments = videoComments;
	return comments.map((comment) => (
		<span key={comment.id}>
			<div className="videoComment">
				<Avatar id="comment-avatar" />
				<div className="videoComment__wrapper">
					<div className="videoComment__comment-info">
						<p className="videoComment__user-name">{comment.name}</p>
						<p className="videoComment__timestamp">{new Date(comment.timestamp).toLocaleDateString()}</p>
					</div>
					<p className="videoComment__comment">{comment.comment}</p>
				</div>
			</div>
		</span>
	));
}
export default VideoComment;
