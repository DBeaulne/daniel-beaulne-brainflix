import "./App.scss";
import React, {cloneElement} from "react";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoData from "./data/video-details.json";

function App() {
	function currentVideo(videoData) {
		const video = videoData[0];
		return video;
	}

	let currentVid = currentVideo(VideoData);

	return (
		<>
			<Header />
			<main>
				<CurrentVideo video={currentVid} />
			</main>
		</>
	);
}

export default App;
