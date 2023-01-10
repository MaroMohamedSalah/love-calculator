import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="Home d-flex justify-content-center align-items-center">
			<div className="box">
				<form action="">
					<div className="row">
						<div className="icon">&#128158;</div>
						<div className="input-box col-6">
							<input type="text" id="userName" required />
							<span>YOUR NAME</span>
							<i></i>
						</div>
						<div className="input-box col-6">
							<input type="text" id="userName" required />
							<span>PARTNER'S NAME</span>
							<i></i>
						</div>
					</div>
					<div className="p-3 calc d-flex justify-content-center align-items-center">
						<input
							type="submit"
							value={"CALCULATE LOVE"}
							className="btn btn-block"
							onClick={(e) => {
								e.preventDefault();
								navigate("/result");
							}}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Home;
