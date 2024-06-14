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
	const [mainVideoTest, setMainVideoTest] = useState({});
	const [videoId, setVideoId] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
	const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";

	useEffect(() => {
		// Initiate axios method and initial video api call
		const fetchVideoID = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(`${BaseURL}videos?api_key=${api_key}`);
				console.log(response.data[0].id);
				setVideoId(response.data[0].id);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchVideoID();
	}, []);

	/* 	if (videoId !== undefined || videoId !== null) {
		useEffect(() => {
			const fetchVideoDetails = async (videoId) => {
				console.log(videoId);

				if (videoId !== undefined) {
					try {
						setIsLoading(true);
						const res = await axios.get(`${BaseURL}videos/${videoId}?api_key=${api_key}`);
						console.log(typeof setMainVideoTest);
						console.log(res);
						setMainVideoTest(res.data);
					} catch (err) {
						setError(err.message);
					} finally {
						setIsLoading(false);
					}
				}
			};
			fetchVideoDetails();
		}, [videoId]);
	} */

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
