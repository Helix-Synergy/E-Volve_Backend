const express = require("express");
const router = express.Router();
const { signup, login,getAllDetails } = require("../controller/signupandlogincontroller");

router.post("/signup", signup);
router.post("/login", login);
router.get("/getalldetails", getAllDetails);

module.exports = router;