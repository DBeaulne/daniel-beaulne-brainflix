import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<div>
				<Header />
				<p>Page not found</p>
				<Link to="/">
					<Button text="Home" />
				</Link>
			</div>
		</>
	);
}
export default NotFound;
