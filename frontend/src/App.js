import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Home from "./Components/MainContent/Home";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Notes from "./Components/MainContent/Notes";
import UpdateNote from "./Components/MainContent/UpdateNote";
import CreateNote from "./Components/MainContent/CreateNotes";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="" element={<MainContent />} exact>
						<Route path="/" element={<Home />} />
						<Route path="/my-notes" element={<Notes />} />
						<Route path="/create" element={<CreateNote />} />
						<Route path="/update/:note_id" element={<UpdateNote />} />
					</Route>
					<Route path="/Login" element={<Login />} />
					<Route path="/Signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
