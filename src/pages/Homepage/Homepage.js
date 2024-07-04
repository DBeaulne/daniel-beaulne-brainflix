import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useParams } from "react-router-dom";
import { withRouter } from "../../components/WithRouter/WithRouter";
import { getVideos, getVideoDetails } from "../../api";

function Homepage() {
	// Set initial states
	const [selectedVideo, setSelectedVideo] = useState({}); // state to hold the details of the selected video
	const [videoArray, setVideoArray] = useState([]); // state to hold the entireity of the video list
	// const [submitComment, setSubmitComment] = useState(null); // comment form state
	const [isLoading, setIsLoading] = useState(false); // state to know if the page is loading
	const [error, setError] = useState(""); // error message state
	const { id } = useParams(); // params for the video id

	useEffect(() => {
		// On initial mounting of app
		// Initiate axios method and fetch video list

		// this async function lives in this useEffect because I do not
		// intend to use it anywhere else in the app
		// update the setVideoArray state with the data retrieved from the get function

		const fetchInitialVideos = async () => {
			try {
				setIsLoading(true);
				const videos = await getVideos();
				setVideoArray(videos);
			} catch (err) {
				setError("Failed to fetch videos");
				console.error("Error fetching videos:", err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchInitialVideos();
	}, []);

	useEffect(() => {
		// Once video list is retrieved from the first useEffect, the videoArray state changes
		// and triggers this useEffect to fetch the video details
		// for the first video in the array using the fetchVideoDetails async function

		if (videoArray[0]?.id && !id) {
			fetchVideoDetailsById(videoArray[0]?.id);
		}
	}, [videoArray, id]);

	useEffect(() => {
		// if the params "id" changes, like when a user clicks on a video to watch next,
		// then call the fetchVideoDetails async function, passing in the new id

		if (id) {
			fetchVideoDetailsById(id);
		}
	}, [id]);

	// function that is used in multiple locations
	// pass in the id of any video to fetch the details of that video
	// and update the setSelectedVideo state
	const fetchVideoDetailsById = async (videoId) => {
		try {
			const videoDetails = await getVideoDetails(videoId);
			setSelectedVideo(videoDetails);
		} catch (err) {
			setError("Failed to fetch video details");
			console.error(`Error fetching video details for ID ${videoId}`);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Header />
			<main className="mainContent">
				<VideoPlayer video={selectedVideo} />
				<section className="mainVideo-container">
					<MainVideo video={selectedVideo} handleCommentUpdate={fetchVideoDetailsById} />
					<article className="nextVideo-container">
						{<NextVideos currVideoID={selectedVideo?.id} videoArray={videoArray} />}
					</article>
				</section>
			</main>
		</>
	);
}
export default withRouter(Homepage);
