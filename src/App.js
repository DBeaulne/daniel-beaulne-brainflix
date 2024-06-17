import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFound from "./pages/NotFound/NorFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/UploadPage" element={<UploadPage />} />
				<Route path="/:id" element={<Homepage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
