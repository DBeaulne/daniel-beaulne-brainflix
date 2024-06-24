import "./UploadForm.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/publish.svg";

function UploadForm() {
	const [showModal, setShowModal] = useState(false);
	const [videoTitle, setVideoTitle] = useState("");
	const [videoDescription, setVideoDescription] = useState("");

	const handleUploadClick = () => {
		// future logic to handle the upload for sprint 3
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	// Function to handle the cancel click event
	// a function that in the future will clear all of the upload form fields
	function handleCancel(e) {
		e.preventDefault();
		setVideoTitle("");
		setVideoDescription("");
	}
	return (
		<section className="upload-form">
			<h2 className="upload-form__title">Upload Video</h2>
			<div className="upload-form__container">
				<div className="upload-form__img-container">
					<p className="upload-form__label">video thumbnail</p>
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
								value={videoTitle}
								onChange={(e) => setVideoTitle(e.target.value)}
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
								value={videoDescription}
								onChange={(e) => setVideoDescription(e.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>
			<div className="upload-form__btn-container">
				<div className="upload-form__publish-btn" onClick={handleUploadClick}>
					{<Button text="publish" icon={buttonIcon} to="" />}
				</div>
				<div className="upload-form__cancel">
					<button className="upload-form__cancel-btn" type="button" onClick={handleCancel}>
						Cancel
					</button>
					<Modal show={showModal} onClose={handleCloseModal} />
				</div>
			</div>
		</section>
	);
}
export default UploadForm;
