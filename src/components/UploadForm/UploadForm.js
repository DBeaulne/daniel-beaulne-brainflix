import "./UploadForm.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React from "react";
import Button from "../../components/Button/Button";
import buttonIcon from "../../assets/Icons/publish.svg";

function UploadForm() {
	// Function to handle the cancel click event
	// a function that in the future will clear all of the upload form fields
	function handleCancel(e) {
		e.preventDefault();
		console.log(e);
	}
	return (
		<section className="upload-form">
			<h2 className="upload-form__title">Upload Video</h2>
			<div className="upload-form__container">
				<div className="upload-form__img-container">
					<label className="upload-form__label">video thumbnail</label>
					<img className="upload-form__thumbnail" src={Thumbnail} alt="" />
				</div>
				<form className="upload-form__form">
					<div className="upload-form__form-container">
						<div className="upload-form__video-title">
							<label className="upload-form__label" htmlFor="video-title" name="videoTitle">
								title your video
							</label>
							<input
								className="upload-form__input-field"
								name="videoTitle"
								id="video-title"
								placeholder="Add a title to your video"
							/>
						</div>
						<div className="upload-form__video-description">
							<label className="upload-form__label" htmlFor="video-description" name="videoDesctiption">
								add a video description
							</label>
							<textarea
								className="upload-form__input-field"
								name="videoDesctiption"
								id="video-description"
								rows="4"
								placeholder="Add a description to your video"
							/>
						</div>
					</div>
				</form>
			</div>
			<div className="upload-form__btn-container">
				<div className="upload-form__publish-btn">
					<Button text="publish" icon={buttonIcon} url="/" />
				</div>
				<div className="upload-form__cancel">
					<button className="upload-form__cancel-btn" type="button" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</div>
		</section>
	);
}
export default UploadForm;
