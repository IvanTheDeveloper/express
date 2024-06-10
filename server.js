require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const sendEmail = require("./mailer");

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.get("/test", async (req, res) => {
  try {
    const info = await sendEmail(
      "ivan.v.h.2004@gmail.com",
      "subject",
      "message"
    );
    console.log("Email sent successfully: ", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.get("/send", async (req, res) => {
  try {
    const { email, subject, message } = req.query;
    const info = await sendEmail(email, subject, message);
    console.log("Email sent successfully: ", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

const PORT = process.env.PORT || 3000; // Provide a default port if not specified in .env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
