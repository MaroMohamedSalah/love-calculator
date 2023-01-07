import "./Home.css";
const Home = () => {
	return (
		<div className="Home">
			<div className="container h-100 d-flex justify-content-between align-items-center">
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
							/>
						</div>
					</form>
				</div>
				<div className="google-ads d-none d-md-block">
					<h1 className="text-center fs-6 text">Google ads</h1>
				</div>
			</div>
		</div>
	);
};
export default Home;
