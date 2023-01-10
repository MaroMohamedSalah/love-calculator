import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GoogleAds from "./components/Google-ads";
import Result from "./pages/Result";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="main">
				<div className="container h-100 d-flex justify-content-between align-items-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="result" element={<Result />} />
					</Routes>
					<GoogleAds />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
