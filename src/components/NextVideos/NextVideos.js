import './NextVideos.scss';
import NextVideoCard from '../NextVideoCard/NextVideoCard';

function NextVideos({ currVideoID, videoArray }) {
	const nextVideo = videoArray;

	// iterate through the videoArray prop and build the NextVideoCard component
	return (
		<div className="nextVideo">
			<h3 className="nextVideo__title">next videos</h3>
			{nextVideo.map((next) => (currVideoID !== next.id ? <NextVideoCard next={next} key={next.id} /> : false))}
		</div>
	);
}
export default NextVideos;
