import "./CommentForm.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/add_comment.svg";

function CommentForm({ video }) {
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
								placeholder="Add a new comment"></textarea>
						</div>
					</form>
					<div className="commentForm__btn-container">
						<Button text="comment" icon={buttonIcon} />
					</div>
				</div>
			</div>
		</section>
	);
}
export default CommentForm;
