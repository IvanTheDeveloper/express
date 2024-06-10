const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

async function sendEmail(recipient, subject, message, sender = "default") {
  try {
    const templatePath = path.join(__dirname, "emailTemplate.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf8");
    htmlTemplate = htmlTemplate.replace("{{message}}", message);
    htmlTemplate = htmlTemplate.replace("{{sender}}", sender);
    htmlTemplate = htmlTemplate.replace(
      "{{timestamp}}",
      new Date().toLocaleString()
    );

    let transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: recipient,
      subject: subject,
      html: htmlTemplate,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Info: ", info);
    return info;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

module.exports = sendEmail;
