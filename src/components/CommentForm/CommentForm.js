import "./CommentForm.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/add_comment.svg";

function CommentForm({ video }) {
	// states for the form
	const [comment, setComment] = useState("");
	const [submitComment, setSubmitComment] = useState({});
	const [error, setError] = useState(""); // error message state

	// Comment class declaration
	const Comment = function (username, comment) {
		this.name = username;
		this.comment = comment;
	};

	// API consts
	const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
	const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";

	const handleCommentSubmit = (e) => {
		// on comment submit
		// preventDefault re-render
		// setSubmitComment to the value in the comment state
		// clear the comment state with setComment("")
		e.preventDefault();
		if (!comment) return;
		const newComment = new Comment("Daniel Beaulne", comment);
		console.log(newComment);
		setSubmitComment(newComment);

		useEffect(() => {
			// api call to post the comment
			// if comment is empty or if comment is identical then do not post

			async function postComment() {
				try {
					console.log(`${BaseURL}videos/${video.id}?api_key=${api_key}`, submitComment);
					// const res = await axios.post(`${BaseURL}videos/${video.id}/comments?api_key=${api_key}`, submitComment);
				} catch (err) {
					setError(err.message);
				}
			}
			postComment();
		}, []);

		setComment("");
	};

	return (
		<section className="commentForm" id="commentForm">
			{<h3 className="commentForm__title">{video?.comments?.length} Comments</h3>}
			<div className="commentForm__form-container">
				<div className="commentForm__avatar-container">
					<Avatar image={avatarImg} id="commentForm-avatar" />
				</div>
				<div className="commentForm__input-container">
					<form action="submit" className="commentForm__form" id="commentForm" noValidate>
						<div className="commentForm__textarea">
							<label className="commentForm__form-label" htmlFor="comment-area">
								join the conversation
							</label>
							<textarea
								className="commentForm__form-input"
								name="comment"
								id="comment-area"
								rows="1"
								placeholder="Add a new comment"
								value={comment}
								onChange={(e) => setComment(e.target.value)}></textarea>
						</div>
					</form>
					<div className="commentForm__btn-container" onClick={handleCommentSubmit}>
						<Button text="comment" icon={buttonIcon} to="" />
					</div>
				</div>
			</div>
		</section>
	);
}
export default CommentForm;
