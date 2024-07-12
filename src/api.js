import axios from 'axios';

const BaseURL = 'http://localhost:8080/';

const api = axios.create({
	baseURL: BaseURL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const getVideos = async () => {
	try {
		const response = await api.get(`/videos`);
		return response.data;
	} catch (error) {
		console.error('Error fetching videos:', error);
		throw error;
	}
};

export const getVideoDetails = async (id) => {
	try {
		const response = await api.get(`/videos/${id}`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(`Error fetching video details for ID ${id}:`, error);
		throw error;
	}
};

export const uploadVideo = async (videoData) => {
	try {
		const response = await api.post('/videos', videoData);
		return response.data;
	} catch (error) {
		console.error('Error uploading video:', error);
		throw error;
	}
};

export const submitComment = async (videoId, comment) => {
	try {
		const response = await api.post(`/videos/${videoId}/comments`, comment);
		return response.data;
	} catch (error) {
		console.error('Error submitting comment', error);
		throw error;
	}
};

export const deleteComment = async (videoId, commentId) => {
	try {
		const response = await api.delete(`/videos/${videoId}/comments/${commentId}`);
		return response.data;
	} catch (error) {
		console.error('Error deleting comment', error);
		throw error;
	}
};
