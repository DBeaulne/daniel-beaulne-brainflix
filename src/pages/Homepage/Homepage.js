import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useParams } from "react-router-dom";
import { withRouter } from "../../components/WithRouter/WithRouter";

function Homepage() {
	// Set initial states
	const [selectedVideo, setSelectedVideo] = useState({});
	const [videoArray, setVideoArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { id } = useParams;
	const [videoId, setVideoId] = useState(id);
	const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
	const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";

	useEffect(() => {
		// Initiate axios method and fetch initial video ID
		async function fetchInitialVideos() {
			try {
				setIsLoading(true);
				const response = await axios.get(`${BaseURL}videos?api_key=${api_key}`);
				setVideoArray(response?.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchInitialVideos();
	}, []);

	useEffect(() => {
		// fetch video details
		if (videoArray[0]?.id && !id) {
			fetchVideoDetails(videoArray[0]?.id);
		}
	}, [videoArray]);

	useEffect(() => {
		if (id) {
			fetchVideoDetails(id);
		}
	}, [id]);

	async function fetchVideoDetails(id) {
		try {
			const res = await axios.get(`${BaseURL}videos/${id}/?api_key=${api_key}`);
			console.log(res?.data);
			setSelectedVideo(res?.data);
		} catch (err) {
			setError(err.message);
		}
	}

	// function to handle the lifted state from NextVideo component
	// when user clicks on the next video, we use the id of that video to find the corresponding index
	// and then setVideo to that index #
	function handleVideoSelect(videoID) {
		/* 		const selectedVideoNum = VideoData.findIndex((arr) => arr.id === videoID);
		setVideo(VideoData[selectedVideoNum]); */
	}
	return (
		<>
			<Header />
			<main className="mainContent">
				<VideoPlayer video={selectedVideo} />
				<section className="mainVideo-container">
					<MainVideo video={selectedVideo} />
					<article className="nextVideo-container">
						{<NextVideos currVideoID={selectedVideo.id} videoArray={setVideoArray} />}
					</article>
				</section>
			</main>
		</>
	);
}
export default withRouter(Homepage);
