import "./App.scss";
import React, { cloneElement } from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoData from "./data/video-details.json";
import NextVideosData from "./data/videos.json";
import { useState } from "react";

function App() {
	const [mainVideo, setMainVideo] = useState(VideoData[0]);
	const [nextVideo, setNextVideo] = useState(NextVideosData);
	const [currentVideo, setCurrentVideo] = useState();

	return (
		<>
			<Header />
			<main>
				<MainVideo video={mainVideo} />
				<NextVideos videos={nextVideo} />
			</main>
		</>
	);
}

export default App;
