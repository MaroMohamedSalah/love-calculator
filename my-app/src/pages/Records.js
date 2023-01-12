import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./records.css";
const Records = () => {
	// const [records, setRecords] = useState([]);
	// useEffect(() => {
	// 	fetch("http://192.168.1.11:3000/records")
	// 		.then((res) => res.json())
	// 		.then((data) => setRecords(data));
	// }, []);
	// const record = records.map((re) => {
	// 	return (
	// 		<>
	// 			<tr
	// 				key={re.id}
	// 				className={re.percentage <= 50 ? "table-danger" : "table-primary"}
	// 			>
	// 				<th scope="row">{re.id}</th>
	// 				<td>{re.firstn}</td>
	// 				<td>{re.secondn}</td>
	// 				<td>{re.percentage}%</td>
	// 				<td>
	// 					<button className="btn btn-danger">Delete</button>
	// 				</td>
	// 			</tr>
	// 		</>
	// 	);
	// });
	return (
		<div className="Home d-flex justify-content-center align-items-center">
			<div className="box records-box w-sm-100">
				<div className="Records">
					<img
						src="https://media.giphy.com/media/LK2DwwVWAG5vmswb7U/giphy.gif"
						alt="this slowpoke moves"
						width="100%"
						height={"100%"}
					/>

					{/* <table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First-name</th>
								<th scope="col">Second-name</th>
								<th scope="col">Percentage</th>
								<th scope="col">
									<button className="btn btn-danger">Delete all</button>
								</th>
							</tr>
						</thead>
						<tbody>
							{records.length === 0 ? (
								<tr>
									<td colspan="4">
										<h1 className="text-center">
											{" "}
											You don't have any records to show{" "}
										</h1>
									</td>
								</tr>
							) : (
								record
							)}
						</tbody>
					</table> */}
				</div>
			</div>
		</div>
	);
};

export default Records;
