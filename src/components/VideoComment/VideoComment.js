import "./VideoComment.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import { convertDate } from "../../utils/dateUtils";

function VideoComment({ videoComments }) {
	return (
		videoComments?.map((comment) => (
			<div className="videoComment" key={comment.id}>
				<Avatar id="comment-avatar" />
				<div className="videoComment__wrapper">
					<div className="videoComment__comment-info">
						<p className="videoComment__user-name">{comment.name}</p>
						<p className="videoComment__timestamp">{convertDate(comment.timestamp)}</p>
					</div>
					<p className="videoComment__comment">{comment.comment}</p>
				</div>
			</div>
		)) || null
	);
}

export default VideoComment;
