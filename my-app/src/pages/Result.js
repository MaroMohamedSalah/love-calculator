import { useState } from "react";
import "./result.css";
const res = JSON.parse(localStorage.getItem("loveResult"));
const Result = () => {
	let [count, setCount] = useState(0);
	return (
		<div className="result">
			<div className="container">
				<div className="row">
					<h1 className="text-center col-md-4">{res.fname}</h1>
					<div className="text-center icon col-md-4">{count} %</div>
					<h1 className="text-center col-md-4">{res.sname}</h1>
				</div>
			</div>
		</div>
	);
};
export default Result;
