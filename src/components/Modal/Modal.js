import React, { useEffect, useState } from 'react';
import './Modal.scss';

function Modal({ show, onClose }) {
	const [countdown, setCountdown] = useState(3);
	const [modal, setModal] = useState(true);

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
