import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="records" element={<h1>Hi</h1>} />
			</Routes>
		</>
	);
}

export default App;
