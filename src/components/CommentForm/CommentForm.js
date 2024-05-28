import "./CommentForm.scss";
import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function CommentForm(props) {
	return (
		<>
			<section class="comments" id="new-comments">
				<div class="comments__title">
					<h4>{props.numComments.length} Comments</h4>
				</div>
				<div class="comments__form-container">
					<form action="submit" class="comments__form" id="commentForm" noValidate>
						<div class="comments__avatar">
							<span class="comments__avatar--avatar-img">
								<img src={avatar} />
							</span>
						</div>
						<div class="comments__form-input">
							<label class="comments__form-label" htmlFor="comment-area">
								join the conversation
							</label>
							<textarea
								class="comments__form-input--comment"
								name="comment"
								rows="5"
								id="comment-area"
								placeholder="Add a new comment"></textarea>
							<div class="comments__btn-container">
								<button type="submit" class="comments__btn submit">
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
