import "./Topbar.scss";
import Person from "@mui/icons-material/Person";
import Mail from "@mui/icons-material/Mail";

function Topbar() {
	return (
		<div className="topbar" id="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						genius.
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+1 914 234 4567</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>keshialeemartin@gmail.com</span>
					</div>
				</div>
				<div className="right"></div>
			</div>
		</div>
	);
}

export default Topbar;
