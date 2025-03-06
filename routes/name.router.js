const express = require("express");
const greetingHandler = require("../controllers/nameController");
const router = express.Router();


router.route("/").get(greetingHandler);


module.exports = router;