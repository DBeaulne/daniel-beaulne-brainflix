import "./NextVideos.scss";
import React from "react";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideos({ videos }) {
	console.log(videos);
	const nextVids = videos;

	return (
		<>
			<div className="nextVideo">
				<h3 className="nextVideo__title">next videos</h3>
				{nextVids.map((next) => (
					<NextVideoCard next={next} key={next.id} />
				))}
			</div>
		</>
	);
}
export default NextVideos;
