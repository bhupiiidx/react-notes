import React, { useEffect, useState } from "react";
import TitleWrapper from "../HelperComponent/TitleWrapper";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Note from "./Note";
import axios from "axios";
import DismissibleAlert from "../HelperComponent/DismissibleAlert";

function Notes() {
	const [allNotes, setAllNotes] = useState([]);
	const [error, setError] = useState([]);
	const fetchData = async () => {
		try {
			const response = await axios.get("/api/notes");
			if (response.status === 200) {
				setError("");
				setAllNotes(response.data);
			} else {
				setError("Unable To fetch data");
			}
		} catch (err) {
			setError("Unable To fetch data -- Catch");
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<TitleWrapper title="Welcome Back Bhupender Kumar Singh...">
			<Link to="/create">
				<Button size="md" className="ml-1 mb-1">
					Create Note
				</Button>
			</Link>

			{allNotes.length > 0 && (
				<div className="mt-3">
					{allNotes.map((note) => (
						<Note note={note} key={note.id} />
					))}
				</div>
			)}
			{error && <DismissibleAlert variant="danger" title={error} />}
		</TitleWrapper>
	);
}

export default Notes;
