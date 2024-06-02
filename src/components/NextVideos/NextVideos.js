import "./NextVideos.scss";
import React from "react";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideos({ videos, currVideoID, onVideoSelect }) {
	return (
		<>
			<div className="nextVideo">
				<h3 className="nextVideo__title">next videos</h3>
				{videos.map((next) =>
					currVideoID !== next.id ? <NextVideoCard next={next} key={next.id} select={onVideoSelect} /> : false
				)}
			</div>
		</>
	);
}
export default NextVideos;
