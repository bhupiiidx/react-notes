import { Navbar } from "react-bootstrap";
import NavSearch from "./NavSearch";
import UserDropdownAvatar from "./UserDropdownAvatar";
import { Link } from "react-router-dom";

function NavScrollExample() {
	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary px-3 bg-light">
				<Navbar.Brand href="" className="text-danger">
					<h3>
						<Link to="/">NoteApp</Link>
					</h3>
				</Navbar.Brand>
				<NavSearch className="m-auto w-100 d-none d-md-flex  justify-content-center" />
				<UserDropdownAvatar />
			</Navbar>
		</>
	);
}

export default NavScrollExample;
