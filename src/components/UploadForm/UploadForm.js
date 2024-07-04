import "./UploadForm.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import buttonIcon from "../../assets/Icons/publish.svg";
import { uploadVideo } from "../../api";

function UploadForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [error, setErrot] = useState("");
	const [success, setSuccess] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleUploadClick = async (e) => {
		// future logic to handle the upload for sprint 3
		e.preventDefault();
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("file", file);
		try {
			await uploadVideo(formData);
			setSuccess("Video uploaded successfully");
			setTitle("");
			setDescription("");
			setFile(null);
			setIsModalOpen(true);
		} catch (err) {
			setErrot("Failed to upload video");
			console.error("Error uploading video:", err);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	// Function to handle the cancel click event
	function handleCancel(e) {
		e.preventDefault();
		setTitle("");
		setDescription("");
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
								value={title}
								onChange={(e) => setTitle(e.target.value)}
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
								value={description}
								onChange={(e) => setDescription(e.target.value)}
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
					<Modal show={isModalOpen} onClose={handleCloseModal} />
				</div>
			</div>
		</section>
	);
}
export default UploadForm;
