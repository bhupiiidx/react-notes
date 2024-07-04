const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateAccessToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	const user = await User.create({ name, email, password });
	if (user) {
		return res.status(201).json({ name: user.name, email: user.email, _id: user._id, _jwtToken: generateAccessToken(user._id) });
	} else {
		res.status(400);
		throw new Error("Error Occured");
	}
});

const updatePassword = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		user.password = password;
		await user.save();
		return res.status(201).json({ name: user.name, email: user.email, _id: user._id });
	} else {
		res.status(400);
		throw new Error("Error Occured");
	}
});

const updateName = asyncHandler(async (req, res, next) => {
	const { email, name } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		user.name = name;
		await user.save();
		return res.status(201).json({ name: user.name, email: user.email, _id: user._id });
	} else {
		res.status(400);
		throw new Error("Error Occured");
	}
});

const loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchedPassword(password))) {
		return res.status(201).json({ name: user.name, email: user.email, _id: user._id, _jwtToken: generateAccessToken(user._id) });
	} else {
		res.status(400);
		throw new Error("Invalid username or password");
	}
});

module.exports = { registerUser, updatePassword, updateName, loginUser };
