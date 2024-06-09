const nodemailer = require("nodemailer");

async function sendEmail(recipient, subject, message) {
  try {
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
      text: message,
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
