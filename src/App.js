import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoData from "./data/video-details.json";
import NextVideosData from "./data/videos.json";

function App() {
	// Set initial states
	const [mainVideo, setMainVideo] = useState(VideoData[0]);
	const [nextVideo, setNextVideo] = useState(NextVideosData);

	// function to handle the lifted state from NextVideo component
	// when user clicks on the next video, we use the id of that video to find the corresponding index
	// and then setMainVideo to that index #
	function handleVideoSelect(videoID) {
		const selectedVideoNum = VideoData.findIndex((arr) => arr.id === videoID);
		setMainVideo(VideoData[selectedVideoNum]);
	}

	return (
		<>
			<Header />
			<main>
				<MainVideo video={mainVideo} />
				<NextVideos videos={nextVideo} currVideoID={mainVideo.id} onVideoSelect={handleVideoSelect} />
			</main>
		</>
	);
}

export default App;
