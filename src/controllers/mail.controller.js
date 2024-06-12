//mail.controller.js

const service = require("../services/mail.service");

async function send(req, res, next) {
  try {
    const { recipient, subject, message, sender } = req.body;
    const info = await service.sendMailjet(recipient, subject, message, sender); //sendEmail
    console.log("Email sent successfully: ", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error("Error sending email: ", err);
    next(err);
  }
}

async function test(req, res, next) {
  try {
    const info = await service.sendMailjet(
      "ivan.v.h.2004@gmail.com",
      "subject",
      "lorem ipsum"
    );
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
