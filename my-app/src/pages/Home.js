import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import "./Home.css";
import { useState } from "react";
import resultState from "../atoms/Result-atom";
const Home = () => {
	const navigate = useNavigate();
	const [res, setRes] = useRecoilState(resultState);
	const [fname, setFname] = useState("");
	const [sname, setSname] = useState("");
	const handelSubmit = () => {
		const options = {
			method: "GET",
			url: "https://love-calculator.p.rapidapi.com/getPercentage",
			params: { sname: sname, fname: fname },
			headers: {
				"X-RapidAPI-Key": "0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
				"X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				if (response.status === 200) {
					setRes(response.data);
					navigate("/result");
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		<div className="Home d-flex justify-content-center align-items-center">
			<div className="box">
				<form
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						handelSubmit();
					}}
				>
					<div className="row">
						<div className="icon">&#128158;</div>
						<div className="input-box col-6">
							<input
								id="firtsName"
								name="firstName"
								type="text"
								required
								onChange={(e) => setFname(e.target.value)}
							/>
							<span>YOUR NAME</span>
							<i></i>
						</div>
						<div className="input-box col-6">
							<input
								id="secondName"
								name="secondName"
								type="text"
								required
								onChange={(e) => setSname(e.target.value)}
							/>
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
		</div>
	);
};
export default Home;
