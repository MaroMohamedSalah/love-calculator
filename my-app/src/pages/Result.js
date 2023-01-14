import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import resultState from "../atoms/Result-atom";
import "./Result.css";
const Result = () => {
	const [show, setShow] = useState(false);
	const [showRes, setShowRes] = useState(false);
	const [res, setRes] = useRecoilState(resultState);
	setTimeout(() => {
		setShow(true);
		setShowRes(true);
	}, 500);
	return (
		<div className="Home Result d-flex justify-content-center align-items-center">
			<div className="box">
				<div className="div">
					<div className="row">
						<div className="col-12 first">
							<div className="center">
								<i className="fa-regular fa-heart heart"></i>
								<h4 onClick={() => setShow(true)}>{res.percentage}%</h4>
							</div>
						</div>
						<div className="col-6 names">
							<span
								className={show === false ? "opacity-0" : "opacity-1"}
								style={
									show === false
										? { transform: "translateY(20px)" }
										: { transform: "translateY(0px)" }
								}
							>
								{res.fname}
							</span>
							<i
								className={`fa-solid fa-heart ${
									show === false ? "opacity-0" : "opacity-1"
								}`}
								onClick={() => setShowRes(true)}
							></i>
							<span
								className={show === false ? "opacity-0" : "opacity-1"}
								style={
									show === false
										? { transform: "translateY(20px)" }
										: { transform: "translateY(0px)" }
								}
							>
								{res.sname}
							</span>
						</div>
						<div className="col-6 res-description">
							<p className={showRes === false ? "opacity-0" : "opacity-1"}>
								{res.result}
							</p>

							<Link to={"/"} className="btn back">
								Back
							</Link>
							<div className="social">
								<div
									className={`facebook ${
										showRes === false ? "opacity-0" : "opacity-1"
									}`}
									onClick={() =>
										(window.location.href =
											"https://www.facebook.com/profile.php?id=100009187233222")
									}
								>
									<i className="fa-brands fa-facebook-f"></i>
								</div>
								<div
									className={`instagram ${
										showRes === false ? "opacity-0" : "opacity-1"
									}`}
									onClick={() =>
										(window.location.href =
											"https://www.instagram.com/maro_salah1/")
									}
								>
									<i class="fa-brands fa-instagram"></i>
								</div>
								<div
									className={`whats ${
										showRes === false ? "opacity-0" : "opacity-1"
									}`}
									onClick={() =>
										(window.location.href = "https://wa.me/+201102654851")
									}
								>
									<i class="fa-brands fa-whatsapp"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
