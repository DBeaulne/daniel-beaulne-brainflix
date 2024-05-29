import "./CommentForm.scss";
import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

function CommentForm(props) {
	return (
		<>
			<section className="commentForm" id="commentForm">
				<div className="commentForm__title">
					<h3>{props.numComments.length} Comments</h3>
				</div>
				<div className="commentForm__form-container">
					<form action="submit" className="commentForm__form" id="commentForm" noValidate>
						<div className="commentForm__avatar-container">
							<Avatar image={avatarImg} id="commentForm__avatar" />
						</div>
						<div className="commentForm__form-input">
							<label className="commentForm__form-label" htmlFor="comment-area">
								join the conversation
							</label>
							<textarea
								className="commentForm__form-input--comment"
								name="comment"
								rows="5"
								id="comment-area"
								placeholder="Add a new comment"></textarea>
							<div className="commentForm__btn-container">
								<button type="submit" className="commentForm__btn submit">
									Comment
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export default CommentForm;
