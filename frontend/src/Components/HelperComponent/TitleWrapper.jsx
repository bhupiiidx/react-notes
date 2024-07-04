import React from "react";
import { Container, Row } from "react-bootstrap";

function TitleWrapper({ title, children }) {
	return (
		<Container className="mt-4">
			<div className="page">
				{title && (
					<>
						<h1>{title}</h1>
						<hr />
					</>
				)}
				{children}
			</div>
		</Container>
	);
}

export default TitleWrapper;
