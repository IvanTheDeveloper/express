//mail.service.js

const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

async function sendEmail(recipient, subject, message, sender = "default") {
  try {
    const templatePath = path.join(
      __dirname,
      "..",
      "views",
      "emailTemplate.view.html"
    );
    let htmlTemplate = fs.readFileSync(templatePath, "utf8");
    htmlTemplate = htmlTemplate.replace("{{message}}", message);
    htmlTemplate = htmlTemplate.replace("{{sender}}", sender);
    htmlTemplate = htmlTemplate.replace(
      "{{timestamp}}",
      new Date().toLocaleString()
    );

    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.MAIL_ADDRESS,
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

module.exports = {
  sendEmail,
};
