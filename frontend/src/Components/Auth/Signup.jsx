// src/pages/Signup.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { signUpWithNameEmailAndPassword } from "../../api/user";
import DismissibleAlert from "../HelperComponent/DismissibleAlert";


function Signup() {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleUserSignUp = async (e) => {
		try {
			const response = await signUpWithNameEmailAndPassword(name, email, password);
			if (response.message) {
				setError(response.message)
			} else {
				navigate("/login");
			}
		} catch (error) {
			setError(error.message)
		}
	};

	useEffect(() => {
		if (localStorage.getItem('userInfo')) {
			navigate("/my-notes");
		}
	}, [])


	return (
		<Container fluid className="bg-secondary">
			<Container className="vh-100 d-flex justify-content-md-center align-items-md-center">
				<Row className="justify-content-md-center w-100">
					<Col md={6}>
						<Card className="p-4">
							<div className="bg-light text-center">
								<Link to="/">
									<img height="50px" width="50px" src="/logo512.png" alt="Logo" />
								</Link>
							</div>
							<h2 className="text-center my-3">Signup</h2>
							{error && <DismissibleAlert title={error} />}
							<div>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
								</Form.Group>
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
								<div className="d-flex justify-content-around my-4">
									<Button variant="primary" onClick={handleUserSignUp} >
										Signup
									</Button>
									<Link to="/login">
										<Button variant="secondary" >
											Login
										</Button>
									</Link>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Signup;
