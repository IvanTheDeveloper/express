//mail.controller.js

const service = require("../services/mail.service");

async function test(req, res, next) {
  try {
    const info = await service.sendEmail(
      "ivan.v.h.2004@gmail.com",
      "subject",
      "lorem"
    );
    console.log("Email sent successfully: ", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error("Error sending email: ", err);
    next(err);
  }
}

async function send(req, res, next) {
  try {
    const { email, subject, message } = req.query;
    const info = await service.sendEmail(email, subject, message);
    console.log("Email sent successfully: ", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error("Error sending email: ", err);
    next(err);
  }
}

module.exports = {
  test,
  send,
};
