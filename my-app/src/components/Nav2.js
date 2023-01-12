import { Link } from "react-router-dom";
import "./Nav.css";
const Nav2 = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
			<div className="container">
				<h1 className="fs-3 text">
					Love Calculator <span className="icon">&#128158;</span>
				</h1>
				<Link className="text-decoration-none fs-4 text" to={"/"}>
					<div className="records">Home</div>
				</Link>
			</div>
		</nav>
	);
};

export default Nav2;
