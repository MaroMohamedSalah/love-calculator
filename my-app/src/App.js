import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="container">
			<Nav />
		</div>
	);
}

export default App;
