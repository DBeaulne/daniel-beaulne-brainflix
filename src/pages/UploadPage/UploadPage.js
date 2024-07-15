import React from "react";
import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
	return (
		<>
			<Header />
			<main className="upload-page">
				<UploadForm />
			</main>
		</>
	);
}
export default UploadPage;
