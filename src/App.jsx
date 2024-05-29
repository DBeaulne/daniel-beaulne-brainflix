import "./App.scss";
import React, {cloneElement} from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoData from "./data/video-details.json";

function App() {
	/* 	function mainVideo(videoData) {
		const video = videoData[0];
		return video;
	}

	let mainVid = mainVideo(VideoData);
	console.log(VideoData); */

	return (
		<>
			<Header />
			<main>
				<MainVideo video={VideoData[0]} />
			</main>
		</>
	);
}

export default App;
