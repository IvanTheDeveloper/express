require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const sendEmail = require("./mailer");

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.get("/send", async (req, res) => {
  try {
    const { email, subject, message } = req.query;
    const info = await sendEmail(email, subject, message);
    console.log("Email sent successfully: ", info);
    res.json("Email sent successfully: ", info);
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json("Error sending email: ", error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
