import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
	return (
		<Container fluid>
			<Container>
				<Carousel>
					<Carousel.Item>
						<img className="d-block w-100" src="https://placehold.co/800x400/aaa/444/png?text=First slide" alt="First slide" />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="https://placehold.co/800x400/aaa/444/png?text=Second slide" alt="Second slide" />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="https://placehold.co/800x400/aaa/444/png?text=Third slide" alt="Third slide" />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div className="mt-3 text-center">
					<Link to="/my-notes">
						<Button variant="primary">
							View Notes
						</Button>
					</Link>
				</div>
			</Container>
		</Container>
	);
}

export default Home;
