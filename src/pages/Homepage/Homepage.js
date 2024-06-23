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
	const [selectedVideo, setSelectedVideo] = useState({}); // state to hold the details of the selected video
	const [videoArray, setVideoArray] = useState([]); // state to hold the entireity of the video list
	const [isLoading, setIsLoading] = useState(false); // state to know if the page is loading
	const [error, setError] = useState(""); // error message state
	const { id } = useParams(); // params for the video id

	// API consts
	const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
	const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";

	useEffect(() => {
		// On initial mounting of app
		// Initiate axios method and fetch video list

		// this async function lives in this useEffect because I do not
		// intend to use it anywhere else in the app
		// update the setVideoArray state with the data retrieved from the get function

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
		// Once video list is retrieved from the first useEffect, the videoArray state changes
		// and triggers this useEffect to fetch the video details
		// for the first video in the array using the fetchVideoDetails async function

		if (videoArray[0]?.id && !id) {
			fetchVideoDetails(videoArray[0]?.id);
		}
	}, [videoArray]);

	useEffect(() => {
		// if the params "id" changes, like when a user clicks on a video to watch next,
		// then call the fetchVideoDetails async function, passing in the new id

		if (id) {
			fetchVideoDetails(id);
		}
	}, [id]);

	// function that is used in multiple locations
	// pass in the id of any video to fetch the details of that video
	// and update the setSelectedVideo state
	async function fetchVideoDetails(id) {
		try {
			const res = await axios.get(`${BaseURL}videos/${id}/?api_key=${api_key}`);
			// console.log(res?.data);
			setSelectedVideo(res?.data);
		} catch (err) {
			setError(err.message);
		}
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
