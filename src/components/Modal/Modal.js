/* Modal component */
import React, { useEffect, useState } from 'react';
import './Modal.scss';

// Modal component takes in two props, show and onClose
// the show prop is a piece of state 'const [isModalOpen, setIsModalOpen] = useState(false)'
// declared in from the UploadForm component
// the onClose prop is a function 'handleCloseModal' also declared in the UploadForm component

function Modal({ isOpen, onClose }) {
	// when the show prop is set to true (see UploadForm comments for process) the modal component
	// becomes visible.
	const [countdown, setCountdown] = useState(3);

	// this use effect contains a timer to countdown a simulated upload time
	useEffect(() => {
		if (!isOpen) return;

		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev === 1) {
					clearInterval(timer);
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="modal-backdrop">
			<div className="modal" onClick={onClose}>
				<>{countdown !== 0 ? <h2>Uploading complete in {countdown}</h2> : <p>click here to continute</p>} </>
			</div>
		</div>
	);
}
export default Modal;
