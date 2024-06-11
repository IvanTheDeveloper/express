//mail.route.js

const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail.controller");

router.get("/", mailController.send);
router.get("/test", mailController.test);

module.exports = router;
