//mail.route.js

const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail.controller");

router.post("/", mailController.send);
router.post("/test", mailController.test);

module.exports = router;
