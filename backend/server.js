const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToMongoDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");
const { notFound, errorHandler } = require("./middleware/errRes");

const app = express();
dotenv.config();
connectToMongoDB(process.env.MONGODB_URI);

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.BACKEND_PORT || 8080;

app.use("/api/users/", userRoute);
app.use("/api/notes/", noteRoute);
app.get("/", function (req, res, next) {
	res.send("Welcome");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server listening on PORT " + PORT));
