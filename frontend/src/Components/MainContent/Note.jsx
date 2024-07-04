import React, { useState } from "react";
import { Card, Button, Badge, Stack } from "react-bootstrap";

function Note({ note }) {
	const { title, id, userName, body } = note;
	const [show, setShow] = useState(false);
	return (
		<Card className="w-100 mb-2">
			<Card.Header className="d-flex justify-content-between">
				<div className="w-75" style={{ cursor: "pointer" }} onClick={() => setShow((prev) => !prev)}>
					{title}
				</div>
				<Stack direction="horizontal" gap={2}>
					<Button>Edit</Button>
					<Button className="ml-2" variant="danger">
						Delete
					</Button>
				</Stack>
			</Card.Header>
			{show && (
				<Card.Body>
					<Badge pill bg="success">
						FGH
					</Badge>
					<blockquote className="blockquote mb-0">
						<p> {body} </p>
						<footer className="blockquote-footer">
							<cite title="Source Title">{userName}</cite>
						</footer>
					</blockquote>
				</Card.Body>
			)}
		</Card>
	);
}

export default Note;
