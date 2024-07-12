import './UploadForm.scss';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import React, { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import buttonIcon from '../../assets/Icons/publish.svg';
import { uploadVideo } from '../../api';
import { useNavigate } from 'react-router-dom';

function UploadForm() {
	const [title, setTitle] = useState(''); // state for upload vido title
	const [description, setDescription] = useState(''); // state for upload video description
	const [image, setImage] = useState('image9.jpg'); // state for upload video image. hard-coded image for now
	const [error, setErrot] = useState(''); // error state to capture any errors thrown in try...catch statement
	const [success, setSuccess] = useState(''); // success state. Future use state
	const [isModalOpen, setIsModalOpen] = useState(false); // modal state to control display of modal window
	const formRef = useRef();
	const navigate = useNavigate();

	const videoObject = function (title, description, image) {
		this.title = title;
		this.description = description;
		this.image = image;
	};

	const handleUploadClick = async (e) => {
		// logic to handle create the uploadForm data to be sent to server
		e.preventDefault();
		const uploadFormData = new videoObject(title, description, image);

		try {
			await uploadVideo(uploadFormData).then((res) => handleHouseKeeping());
		} catch (err) {
			setErrot('Failed to upload video');
			console.error('Error uploading video:', err);
		}
	};

	const handleHouseKeeping = () => {
		setSuccess('Video uploaded successfully');
		setTitle('');
		setDescription('');
		setImage(null);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		if (isModalOpen === true) setIsModalOpen(false);
		navigate('/');
	};

	// Function to handle the cancel click event
	const handleCancel = (e) => {
		e.preventDefault();
		setTitle('');
		setDescription('');
	};
	return (
		<section className="upload-form">
			<h2 className="upload-form__title">Upload Video</h2>
			<div className="upload-form__container">
				<div className="upload-form__img-container">
					<p className="upload-form__label">video thumbnail</p>
					<img className="upload-form__thumbnail" src={Thumbnail} alt="" />
				</div>
				<form className="upload-form__form" ref={formRef}>
					<div className="upload-form__form-container">
						<div className="upload-form__video-title">
							<label className="upload-form__label" htmlFor="title" name="videoTitle">
								title your video
							</label>
							<input
								type="text"
								className="upload-form__input-field"
								name="videoTitle"
								id="title"
								placeholder="Add a title to your video"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="upload-form__video-description">
							<label className="upload-form__label" htmlFor="description" name="videoDesctiption">
								add a video description
							</label>
							<textarea
								type="text"
								className="upload-form__input-field"
								name="videoDesctiption"
								id="description"
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
