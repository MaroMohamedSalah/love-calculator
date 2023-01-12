import "./GoogleAds.css";
const GoogleAds = () => {
	return (
		<div className="google-ads d-none d-md-block d-flex justify-content-center align-items-center">
			<h1 className="text-center fs-6 text-black-50">Advertisement</h1>
			<button
				type="button"
				aria-label="Close"
				onClick={() => {
					document.getElementById("ads").style.backgroundImage = "none";
				}}
			>
				<i className="fa-solid fa-xmark"></i>
			</button>
			<div
				id="ads"
				onClick={() => {
					window.location.href = "https://maromohamedsalah.github.io/ehsebly/";
				}}
			></div>
		</div>
	);
};
export default GoogleAds;
