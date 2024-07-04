import axios from "axios";

export const signInWithEmailAndPassword = async (email, password) => {
	return await axios.post("/api/users/loginUser/", { email, password });
};
export const signUpWithNameEmailAndPassword = async (name, email, password) => {
	return await axios.post("/api/users/", { name, email, password });
};
