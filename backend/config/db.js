const mongoose = require("mongoose");

const connectToMongoDB = async (MONGODB_URI) => {
	try {
		const connect = await mongoose.connect(MONGODB_URI);
		console.log(`MongoDB Connection Successfully`);
	} catch (error) {
		console.log(`MongoDB Connection Error:- ${error.message}`);
		process.exit();
	}
};

module.exports = connectToMongoDB;
