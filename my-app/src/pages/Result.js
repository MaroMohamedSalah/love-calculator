import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
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
							<div
								className={`facebook-share ${
									showRes === false ? "opacity-0" : "opacity-1"
								}`}
							>
								<i className="fa-brands fa-facebook-f"></i>
							</div>
							<div
								class="fb-share-button"
								data-href="https://developers.facebook.com/docs/plugins/"
								data-layout="button_count"
								data-size="small"
							>
								<a
									target="_blank"
									href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
									class="fb-xfbml-parse-ignore"
									rel="noreferrer"
								>
									Share
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
