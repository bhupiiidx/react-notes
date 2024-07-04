// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		navigate("/my-notes");
		// e.preventDefault();
		// try {
		// 	await signInWithEmailAndPassword(auth, email, password);
		// 	navigate("/todos");
		// } catch (error) {
		// 	console.error("Error signing in:", error);
		// }
	};

	return (
		<Container fluid className="bg-secondary">
			<Container className="vh-100 d-flex justify-content-md-center align-items-md-center">
				<Row className="justify-content-md-center w-100">
					<Col md={6}>
						<Card className="p-4">
							<h2 className="text-center my-3">Login</h2>
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Group>
								<div className="text-center my-4">
									<Button variant="primary" type="submit">
										Login
									</Button>
								</div>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Login;
