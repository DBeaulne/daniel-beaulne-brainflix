import "./VideoComment.scss";
import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { convertDate } from "../../utils/dateUtils";
import Icon from "../Icon/Icon";
import trashCan from "../../assets/Icons/icon-delete.svg";

function VideoComment({ videoComments, delComment }) {
	const [commentId, setCommentId] = useState(null);

	const handleDeleteComment = async (e) => {
		// function to handle deletion of comment when user clicks on the trashCan icon
		e.preventDefault();
		delComment(e.target.id);
	};

	return videoComments
		?.sort(function (a, b) {
			return b.timestamp - a.timestamp;
		})
		.map((comment) => (
			<div className="videoComment" key={comment.id}>
				<Avatar />
				<div className="videoComment__wrapper">
					<div className="videoComment__comment-info">
						<p className="videoComment__user-name">{comment.name}</p>
						<div className="videoComment__time-wrapper">
							<p className="videoComment__timestamp">{convertDate(comment.timestamp)}</p>
							<div className="videoComment__icon-container" onClick={handleDeleteComment}>
								<Icon icon={trashCan} id={comment.id} />
							</div>
						</div>
					</div>
					<p className="videoComment__comment">{comment.comment}</p>
				</div>
			</div>
		));
}

export default VideoComment;
