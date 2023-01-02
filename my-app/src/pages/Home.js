import { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [fnameValue, setFnameValue] = useState("");
	const [lnameValue, setLnameValue] = useState("");
	const [res, setRes] = useState("");
	// let firstName = document.getElementById("firstName");
	// let secondName = document.getElementById("secondName");
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
			},
		};
		fetch(
			`https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${lname}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setRes(response))
			.catch((err) => console.error(err));
	}, [fname, lname]);
	return (
		<div className="home">
			<div className="container h-100 d-flex justify-content-center align-items-center flex-column">
				<form
					className="w-100"
					onSubmit={(e) => {
						e.preventDefault();
						setFname(fnameValue);
						setLname(lnameValue);
					}}
				>
					<div className="row mt-5">
						<div className="col-6">
							<input
								type="text"
								placeholder="First Person Name"
								className="form-control"
								id="firstName"
								aria-describedby="emailHelp"
								onChange={(e) => {
									setFnameValue(e.target.value);
								}}
							></input>
						</div>
						<div className="col-6">
							<input
								type="text"
								placeholder="Second Person Name"
								className="form-control"
								id="secondName"
								aria-describedby="emailHelp"
								onChange={(e) => {
									setLnameValue(e.target.value);
								}}
							></input>
						</div>
					</div>
					<button type="submit" className="form-control btn btn-primary mt-5">
						Show
					</button>
				</form>
			</div>
			<p>{res.result}</p>
		</div>
	);
};

export default Home;
