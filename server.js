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
    res.json("Correo enviado exitosamente: " + info);
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
    res.status(500).json("Error al enviar el correo: " + error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
