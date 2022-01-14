import "./Intro.scss";

function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/avatar-standing.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2> Hey, I'm</h2>
					<h1>Keshia-Lee</h1>
					<h3>
						Fullstack Developer<span></span>
					</h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
}

export default Intro;
