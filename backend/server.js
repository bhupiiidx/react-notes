const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.BACKEND_PORT || 8080;
const notes = require("./data/todo_data.json");

app.get("/", function (req, res, next) {
	res.send("Welcome");
});

app.get("/api/notes", function (req, res, next) {
	res.send(notes);
});

app.get("/api/note/:note_id", function (req, res, next) {
	const { note_id } = req.params;
	res.send(notes.find((note) => note.id == note_id));
});

app.listen(PORT, console.log("Server listening on PORT " + PORT));
