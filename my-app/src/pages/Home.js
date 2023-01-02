import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./Home.css";
const Home = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	let navigate = useNavigate();
	const getResult = (firstName, lastName) => {
		const options = {
			method: "GET",
			url: "https://love-calculator.p.rapidapi.com/getPercentage",
			params: { sname: fname, fname: lname },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					console.log(response);
					console.log(response.data);
					localStorage.setItem("loveResult", JSON.stringify(response.data));
					navigate("/result");
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer: '<a href="">Why do I have this issue?</a>',
					});
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		<div className="home">
			<div className="container h-100 d-flex justify-content-center align-items-center flex-column">
				<form
					className="w-100"
					onSubmit={(e) => {
						e.preventDefault();
						console.log(fname);
						console.log(lname);
						getResult(fname, lname);
					}}
				>
					<div className="row mt-5">
						<div className="col-6">
							<input
								required
								type="text"
								placeholder="First Person Name"
								className="form-control"
								id="firstName"
								aria-describedby="emailHelp"
								onChange={(e) => {
									setFname(e.target.value);
								}}
							></input>
						</div>
						<div className="col-6">
							<input
								required
								type="text"
								placeholder="Second Person Name"
								className="form-control"
								id="secondName"
								aria-describedby="emailHelp"
								onChange={(e) => {
									setLname(e.target.value);
								}}
							></input>
						</div>
					</div>
					<button type="submit" className="form-control btn btn-primary mt-5">
						Show
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
