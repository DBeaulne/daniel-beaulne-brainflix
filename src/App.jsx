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

	/* 	function nextVideos(videoData) {
		const nextVids = videoData.toSpliced(0, 1).map((video) => ({
			title: video.title,
			image: video.image,
			creator: video.channel
		}));
		return nextVids;
	}
 */
	let currentVid = currentVideo(VideoData);

	return (
		<>
			<Header />
			<CurrentVideo video={currentVid} />
		</>
	);
}

export default App;
