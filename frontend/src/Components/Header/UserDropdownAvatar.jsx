import React from "react";
import Navbar from "react-bootstrap/Navbar";
import UserIcon from "../../Icons/User";

function UserDropdownAvatar() {
	return (
		<Navbar.Brand href="#" className="text-secondary ">
			<UserIcon height="40" width="40" />
		</Navbar.Brand>
	);
}

export default UserDropdownAvatar;
