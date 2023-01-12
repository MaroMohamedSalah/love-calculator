import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GoogleAds from "./components/Google-ads";
import Result from "./pages/Result";
import Records from "./pages/Records";
import Nav2 from "./components/Nav2";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Nav />} />
				<Route path="records" element={<Nav2 />} />
				<Route path="result" element={<Nav />} />
			</Routes>
			<div className="main">
				<div className="container h-100 d-flex justify-content-between align-items-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="result" element={<Result />} />
						<Route path="records" element={<Records />} />
					</Routes>
					<GoogleAds />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
