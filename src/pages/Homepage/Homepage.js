import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoData from "../../data/video-details.json";

function Homepage() {
	// Set initial states
	const [mainVideo, setMainVideo] = useState(VideoData[0]);
	const [video, setVideo] = useState([]);

	useEffect(() => {
		// Initiate axios method and initial video api call
		const fetchInitialVideo = async () => {
			const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
			const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";
			const response = await axios.get(`${BaseURL}videos?api_key=${api_key}`);
			console.log(response.data);
			console.log(response.data[0]);
			setVideo(response.data[0]);
		};
		fetchInitialVideo();
	}, []);

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
					<MainVideo video={mainVideo} other={video} />
					<article className="nextVideo-container">
						<NextVideos currVideoID={mainVideo.id} onVideoSelect={handleVideoSelect} />
					</article>
				</section>
			</main>
		</>
	);
}
export default Homepage;
