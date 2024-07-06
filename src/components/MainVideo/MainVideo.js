import "./MainVideo.scss";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CommentForm from "../CommentForm/CommentForm";
import VideoStats from "../VideoStats/VideoStats";
import VideoComment from "../VideoComment/VideoComment";
import { submitComment, getVideoDetails, deleteComment } from "../../api";

function MainVideo({ video, handleCommentUpdate }) {
	const [comments, setComments] = useState(video.comments || []);
	const [error, setError] = useState("");

	useEffect(() => {
		setComments(video?.comments || []);
	}, [video]);

	const addComment = async (comment) => {
		try {
			await submitComment(video.id, comment);
			const updatedVideo = await getVideoDetails(video.id); // Get updated video details
			setComments(updatedVideo.comments || []); // update comments with new comment data
			handleCommentUpdate(video.id); // Refresh video details
		} catch (err) {
			setError("Failed to submit comment");
			console.error("Error submitting comment: ", err);
		}
	};

	const delComment = async (commentId) => {
		try {
			await deleteComment(video.id, commentId);
			const updatedVideo = await getVideoDetails(video.id); // Get updated video details
			handleCommentUpdate(video.id); // Refresh video details
		} catch (err) {
			setError("Failed to delete comment");
			console.error("Error deleting comment: ", err);
		}
	};

	return (
		<>
			{video ? (
				<section className="mainVideo">
					<div className="mainVideo__content-box">
						<h2 className="mainVideo__video-title">{video?.title}</h2>
						{<VideoStats video={video} />}
						<p className="mainVideo__video-blurb">{video?.description}</p>
						{<CommentForm videoId={video.id} addComment={addComment} />}
						{<VideoComment videoComments={video?.comments} delComment={delComment} />}
					</div>
				</section>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}

export default MainVideo;
