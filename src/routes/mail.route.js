//mail.route.js

const express = require("express");
const router = express.Router();
const controller = require("../controllers/mail.controller");

router.get("/", controller.send);
router.get("/test", controller.test);

module.exports = router;
