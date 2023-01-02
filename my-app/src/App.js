import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="records"
					element={<h1 className="text-center">i'm still working in it.</h1>}
				/>
				<Route path="result" element={<Result />} />
			</Routes>
		</>
	);
}

export default App;
