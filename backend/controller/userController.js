const controller = {};

const registerUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	return res.json({ name, email });
};

module.exports = { registerUser };
