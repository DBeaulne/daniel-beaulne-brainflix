import "./CommentForm.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/add_comment.svg";

function CommentForm({ comments }) {
	return (
		<>
			<section className="commentForm" id="commentForm">
				<div className="commentForm__title">
					<h3>{comments.length} Comments</h3>
				</div>
				<div className="commentForm__form-container">
					<form action="submit" className="commentForm__form" id="commentForm" noValidate>
						<div className="commentForm__avatar-container">
							<Avatar image={avatarImg} id="commentForm-avatar" />
						</div>
						<div className="commentForm__textarea">
							<label className="commentForm__form-label" htmlFor="comment-area">
								join the conversation
							</label>
							<textarea
								className="commentForm__form-input"
								name="comment"
								rows="5"
								id="comment-area"
								placeholder="Add a new comment"></textarea>
							<Button text="comment" icon={buttonIcon} />
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export default CommentForm;
