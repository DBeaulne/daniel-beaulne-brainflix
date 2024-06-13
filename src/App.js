import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="uploadpage" element={<UploadPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
