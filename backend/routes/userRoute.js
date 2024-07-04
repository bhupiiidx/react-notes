const express = require("express");
const { registerUser, updatePassword, updateName, loginUser } = require("../controller/userController");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/updatePassword").post(updatePassword);
router.route("/updateName").post(updateName);
router.route("/loginUser").post(loginUser);

module.exports = router;
