import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import resultState from "../atoms/Result-atom";
import "./Result.css";
const Result = () => {
	const [show, setShow] = useState(false);
	const [res, setRes] = useRecoilState(resultState);
	console.log("hi", res);
	return (
		<div className="Home Result d-flex justify-content-center align-items-center">
			<div className="box">
				<div className="div">
					<div className="row">
						<div className="col-12 first">
							<div className="center">
								<i className="fa-regular fa-heart heart"></i>
								<h4 onClick={() => setShow(true)}>30%</h4>
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
								first name
							</span>
							<i
								className={`fa-solid fa-heart ${
									show === false ? "opacity-0" : "opacity-1"
								}`}
							></i>
							<span
								className={show === false ? "opacity-0" : "opacity-1"}
								style={
									show === false
										? { transform: "translateY(20px)" }
										: { transform: "translateY(0px)" }
								}
							>
								second name
							</span>
						</div>
						<div className="col-6 res-description">
							<p className="opacity-0">
								Lorem, ipsum dolor sit amet consectetur
							</p>
							<div className="facebook-share opacity-0">
								<i className="fa-brands fa-facebook-f "></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
