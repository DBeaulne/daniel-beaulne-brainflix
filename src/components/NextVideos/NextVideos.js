import "./NextVideos.scss";
import { useState } from "react";
import NextVideosData from "../../data/videos.json";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideos({ currVideoID, onVideoSelect }) {
	const [nextVideo, setNextVideo] = useState(NextVideosData);

	return (
		<div className="nextVideo">
			<h3 className="nextVideo__title">next videos</h3>
			{nextVideo.map((next) => (currVideoID !== next.id ? <NextVideoCard next={next} key={next.id} /> : false))}
		</div>
	);
}
export default NextVideos;
