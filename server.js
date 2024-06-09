require("dotenv").config();
const express = require("express");
const app = express();
const sendEmail = require("./mailer");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/mail", async (req, res) => {
  try {
    const { email, subject, message } = req.query;

    const info = await sendEmail(email, subject, message);
    res.send("Correo enviado exitosamente: " + info);
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
    res.status(500).send("Error al enviar el correo: " + error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
