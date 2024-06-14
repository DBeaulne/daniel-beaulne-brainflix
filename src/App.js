import "./App.scss";
import React, { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
	return (
		<>
			<Homepage />
			<UploadPage />
		</>
	);
}

export default App;
