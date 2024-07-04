import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function NavSearch({ className }) {
	return (
		<Nav className={className}>
			<Form className="d-flex w-100 justify-content-center">
				<Form.Control id="navbarSearchItem" type="search" placeholder="Search" className="me-2 w-50" aria-label="Search" />
			</Form>
		</Nav>
	);
}

export default NavSearch;
