import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	return (
		<footer className="bg-dark text-white mt-5 p-4 text-center">
			<Container>
				<Row>
					<Col>&copy; {new Date().getFullYear()} ToDo App. All Rights Reserved. by Bhupiidx</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
