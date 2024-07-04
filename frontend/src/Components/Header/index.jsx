import React, { useEffect } from "react";
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Button,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Header({ setSearch }) {
	const navigate = useNavigate();
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	const logoutHandler = () => {
		localStorage.removeItem("userInfo")
		navigate("/login");
	};

	useEffect(() => { }, [userInfo]);

	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3 bg-light">
			<Container>
				<Navbar.Brand href="" className="text-danger">
					<h3>
						<Link to="/">NoteApp</Link>
					</h3>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="m-auto">
						{userInfo && (
							<Form inline>
								<FormControl
									type="text"
									placeholder="Search"
									className="mr-sm-2"
									onChange={(e) => setSearch(e.target.value)}
								/>
							</Form>
						)}
					</Nav>
					<Nav>
						{userInfo ? (
							<>
								<NavDropdown
									title={`${userInfo.name}`}
									id="collasible-nav-dropdown"
								>
									<NavDropdown.Item>
										<Link to="/profile">
											<img
												src={`https://placehold.co/25x25/aaa/444/png?text=${userInfo.name[0] + userInfo.name[1]}`}
												width="25"
												height="25"
												alt={`${userInfo.name}`}
												style={{ marginRight: 10 }}
											/>
											My Profile
										</Link>

									</NavDropdown.Item>

									<NavDropdown.Divider />
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<Container className="d-flex mt-3 justify-content-center" style={{ gap: "20px" }}>
								<Link to="/login">
									<Button variant="primary">
										Login
									</Button>
								</Link>
								<Link to="/signup">
									<Button variant="secondary">
										SignUp
									</Button>
								</Link>
							</Container>
						)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
