import "./Portfolio.scss";

function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				<li className="active">Featured</li>
				<li>Web App</li>
				<li>Mobile App</li>
				<li>Design</li>
				<li>Branding</li>
			</ul>
			<div className="container">
				<div className="item">
					<img src="assets/project-1.png" alt="" style={{ width: "85%" }} />
					<h3>Budgeting App</h3>
				</div>
				<div className="item">
					<img src="assets/project-1.png" alt="" style={{ width: "85%" }} />
					<h3>Budgeting App</h3>
				</div>
				<div className="item">
					<img src="assets/project-1.png" alt="" style={{ width: "85%" }} />
					<h3>Budgeting App</h3>
				</div>
				<div className="item">
					<img src="assets/project-1.png" alt="" style={{ width: "85%" }} />
					<h3>Budgeting App</h3>
				</div>
				<div className="item">
					<img src="assets/project-1.png" alt="" style={{ width: "85%" }} />
					<h3>Budgeting App</h3>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
