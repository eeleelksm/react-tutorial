import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
	const textRef = useRef();

	useEffect(() => {
		// from the ityped documentation
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Fullstack Developer", "Creative", "Game Programmer"],
		});
	}, []);

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
						{/* the typing effect */}
						I'm a <span ref={textRef}></span>
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
