import axios from "axios";

const BaseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const api_key = "c8f0f939-78b7-47d9-91ab-5e01f5d85ccd";

const api = axios.create({
	baseURL: BaseURL,
	headers: {
		"Content-Type": "application/json"
	}
});

export const getVideos = async () => {
	try {
		const response = await api.get(`/videos?api_key=${api_key}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching videos:", error);
		throw error;
	}
};

export const getVideoDetails = async (id) => {
	try {
		const response = await api.get(`/videos/${id}?api_key=${api_key}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching video details for ID ${id}:`, error);
		throw error;
	}
};

export const uploadVideo = async (videoData) => {
	try {
		const response = await api.post("/videos", videoData);
		return response.data;
	} catch (error) {
		console.error("Error uploading video:", error);
		throw error;
	}
};

export const submitComment = async (videoId, comment) => {
	try {
		const response = await api.post(`/videos/${videoId}/comments?api_key=${api_key}`, comment);
		return response.data;
	} catch (error) {
		console.error("Error submitting comment", error);
		throw error;
	}
};

export const deleteComment = async (videoId, commentId) => {
	try {
		const response = await api.delete(`/videos/${videoId}/comments/${commentId}?api_key=${api_key}`);
		return response.data;
	} catch (error) {
		console.error("Error deleting comment", error);
		throw error;
	}
};
