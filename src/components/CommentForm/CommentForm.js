import './CommentForm.scss';
import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import avatarImg from '../../assets/Images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import buttonIcon from '../../assets/Icons/add_comment.svg';

// CommentForm component to handle the layout and functionality of the comment form
// takes in props videoId, addComment()
// the videoId is the id of the video currently displayed, which is passed down from the
// selectedVideo state in Homepage.js
// addComment prop passed in from MainVideo.js as is an async function used to submit a comment

function CommentForm({ videoId, addComment }) {
	// states for the form
	const [comment, setComment] = useState('');

	// Comment class declaration
	class Comment {
		constructor(username, comment) {
			this.name = username;
			this.comment = comment;
		}
	}

	const handleCommentSubmit = async (e) => {
		// on comment submit
		// preventDefault re-render
		// setSubmitComment to the value in the comment state
		// clear the comment state with setComment("")
		e.preventDefault();
		const newComment = new Comment('Daniel Beaulne', comment);
		addComment(newComment);
		setComment('');
	};

	return (
		<section className="commentForm" id="commentForm">
			{<h3 className="commentForm__title">{videoId?.comments?.length} Comments</h3>}
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
								onChange={(e) => setComment(e.target.value)}
								required
							/>
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
