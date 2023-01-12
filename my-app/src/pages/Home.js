import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import resultState from "../atoms/Result-atom";
import Swal from "sweetalert2";
const Home = () => {
	const navigate = useNavigate();
	const [res, setRes] = useRecoilState(resultState);
	const [fname, setFname] = useState("");
	const [sname, setSname] = useState("");
	const [isInput1Valid, setIsInput1Valid] = useState(false);
	const [isInput2Valid, setIsInput2Valid] = useState(false);
	const handelSubmit = () => {
		if (isInput1Valid === true && isInput2Valid === true) {
			const options = {
				method: "GET",
				url: "https://love-calculator.p.rapidapi.com/getPercentage",
				params: { sname: sname, fname: fname },
				headers: {
					"X-RapidAPI-Key":
						"0359bd5187msh1d9d91398b35961p168041jsn1ba3b053ae5b",
					"X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
				},
			};

			axios
				.request(options)
				.then(function (response) {
					if (response.status === 200) {
						setRes(response.data);
						axios
							.post("http://192.168.1.11:3000/records", {
								firstn: response.data.fname,
								secondn: response.data.sname,
								percentage: response.data.percentage,
							})
							.then((res) => res)
							.then((error) => error);
						navigate("/result");
					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Something went wrong!",
							footer:
								'<a href="https://wa.me/1102654851" target="_blank">Contact with the owner?</a>',
						});
					}
				})
				.catch(function (error) {
					console.error(error);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer:
							'<a href="https://wa.me/1102654851" target="_blank">Contact with the owner?</a>',
					});
				});
		} else {
			Swal.fire({
				title: "Please Enter a valid names!",
				width: 600,
				padding: "3em",
				color: "var(--red)",
				background: "#fff url(/images/trees.png)",
				backdrop: `
				rgb(149 28 58 / 20%)
				url("../imgs/error.gif")
				left top
				no-repeat
				`,
			});
		}
	};
	return (
		<div className="Home d-flex justify-content-center align-items-center">
			<div className="box w-sm-100">
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
								onChange={(e) => {
									if (
										e.target.value.match(
											/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
										)
									) {
										document.getElementById("valid1").style.opacity = 1;
										document.getElementById("invalid1").style.opacity = 0;
										setIsInput1Valid(true);
										setFname(e.target.value);
									} else {
										document.getElementById("valid1").style.opacity = 0;
										document.getElementById("invalid1").style.opacity = 1;
										setIsInput1Valid(false);
									}
								}}
							/>
							<span className="label">
								YOUR NAME
								<h4 className="valid" id="valid1">
									<span>valid</span>
									<i className="fa-regular fa-hand-peace"></i>
								</h4>
								<h4 className="invalid" id="invalid1">
									<span>Invalid</span>
									<i className="fa-solid fa-xmark"></i>
								</h4>
							</span>
							<i className="under-line"></i>
						</div>
						<div className="input-box col-6">
							<input
								id="secondName"
								name="secondName"
								type="text"
								required
								onChange={(e) => {
									if (
										e.target.value.match(
											/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
										)
									) {
										document.getElementById("valid2").style.opacity = 1;
										document.getElementById("invalid2").style.opacity = 0;
										setIsInput2Valid(true);
										setSname(e.target.value);
									} else {
										document.getElementById("valid2").style.opacity = 0;
										document.getElementById("invalid2").style.opacity = 1;
										setIsInput2Valid(false);
									}
								}}
							/>
							<span className="label">
								PARTNER'S NAME
								<h4 className="valid" id="valid2">
									<span>valid</span>
									<i className="fa-regular fa-hand-peace"></i>
								</h4>
								<h4 className="invalid" id="invalid2">
									<span>Invalid</span>
									<i className="fa-solid fa-xmark"></i>
								</h4>
							</span>
							<i className="under-line"></i>
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
