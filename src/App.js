import "./App.scss";
import React, { cloneElement } from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoData from "./data/video-details.json";
import { useState } from "react";

function App() {
	/* 	function mainVideo(videoData) {
		const video = videoData[0];
		return video;
	}

	let mainVid = mainVideo(VideoData);
	console.log(VideoData); */

	const [mainVideo, setMainVideo] = useState(VideoData[0]);

	return (
		<>
			<Header />
			<main>
				<MainVideo video={mainVideo} />
			</main>
		</>
	);
}

export default App;
