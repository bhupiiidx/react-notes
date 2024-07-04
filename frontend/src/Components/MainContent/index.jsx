import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function MainContent() {
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
}

export default MainContent;
