import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center">
			<div className="container">
				<h1 className="fs-3 text">
					Love Calculator <span className="icon">&#128158;</span>
				</h1>
				<Link className="text-decoration-none fs-4 text" to={"/records"}>
					My Records
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
