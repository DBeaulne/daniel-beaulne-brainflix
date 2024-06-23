import "./VideoComment.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";

function VideoComment({ videoComments }) {
	const comments = videoComments;

	const currentDate = new Date();
	const millisecondMinutes = 60000;
	const millisecondHours = 60 * millisecondMinutes;
	const millisecondDays = 24 * millisecondHours;
	const millisecondMonths = 30 * millisecondDays;
	const millisecondYears = 12 * millisecondMonths;

	function ConvertDate(date) {
		const timeDateDifferential = currentDate - date;
		if (timeDateDifferential < millisecondMinutes) {
			return "Less than a minute ago";
		} else if (timeDateDifferential < millisecondHours) {
			const minutes = Math.floor(timeDateDifferential / millisecondMinutes);
			return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
		} else if (timeDateDifferential < millisecondDays) {
			const hours = Math.floor(timeDateDifferential / millisecondHours);
			return `${hours} hour${hours > 1 ? "s" : ""} ago`;
		} else if (timeDateDifferential < millisecondMonths) {
			const days = Math.floor(timeDateDifferential / millisecondDays);
			return `${days} day${days > 1 ? "s" : ""} ago`;
		} else if (timeDateDifferential < millisecondYears) {
			const months = Math.floor(timeDateDifferential / millisecondMonths);
			return `${months} month${months > 1 ? "s" : ""} ago`;
		} else {
			const years = Math.floor(timeDateDifferential / millisecondYears);
			return `${years} year${years > 1 ? "s" : ""} ago`;
		}
	}

	return comments?.map((comment) => (
		<div className="videoComment" key={comment.id}>
			<Avatar id="comment-avatar" />
			<div className="videoComment__wrapper">
				<div className="videoComment__comment-info">
					<p className="videoComment__user-name">{comment.name}</p>
					<p className="videoComment__timestamp">{ConvertDate(comment.timestamp)}</p>
				</div>
				<p className="videoComment__comment">{comment.comment}</p>
			</div>
		</div>
	));
}
export default VideoComment;
