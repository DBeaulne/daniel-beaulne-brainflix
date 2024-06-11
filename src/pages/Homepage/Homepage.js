import React, { useState } from "react";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoData from "../../data/video-details.json";

function Homepage() {
	// Set initial states
	const [mainVideo, setMainVideo] = useState(VideoData[0]);

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
			<main className="mainContent">
				<VideoPlayer image={mainVideo.image} />
				<section className="mainVideo-container">
					<MainVideo video={mainVideo} />
					<article className="nextVideo-container">
						<NextVideos currVideoID={mainVideo.id} onVideoSelect={handleVideoSelect} />
					</article>
				</section>
			</main>
		</>
	);
}
export default Homepage;
