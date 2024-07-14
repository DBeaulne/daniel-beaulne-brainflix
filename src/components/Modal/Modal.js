/* Modal component */
import React, { useEffect, useState } from 'react';
import './Modal.scss';

// Modal component takes in two props, show and onClose
// the show prop is a piece of state 'const [isModalOpen, setIsModalOpen] = useState(false)'
// declared in from the UploadForm component
// the onClose prop is a function 'handleCloseModal' also declared in the UploadForm component

function Modal({ show, onClose }) {
	// when the show prop is set to true (see UploadForm comments for process) the modal component
	// becomes visible.
	const [countdown, setCountdown] = useState(3);

	useEffect(() => {
		if (!show) return;

		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev === 1) {
					clearInterval(timer);
					onClose();
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [show, onClose]);

	if (!show) return null;

	return (
		<div className="modal-backdrop">
			<div className="modal">
				<h2>Uploading...</h2>
				<p>Redirecting in {countdown}...</p>
			</div>
		</div>
	);
}
export default Modal;
