import "./NotFound.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
	const location = useLocation();
	// determine if the current location is already the upload page
	const isNotFoundPage = location.pathname === "/NotFound";

	return (
		<div>
			<Header />
			<div className="pageError">
				<p className="pageError__text">Oops! It's not you, it's us! </p>
				<p className="pageError__text">We seem to have misplaced the page you're looking for.</p>
				<div className="pageError__btn-container">{!isNotFoundPage && <Button text="home" icon={""} to="/" />}</div>
			</div>
		</div>
	);
}
export default NotFound;
