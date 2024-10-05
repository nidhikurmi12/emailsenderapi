import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const MailSender = async (Email) => {
  console.log(process.env.USER, process.env.PASS); 

  try {
    const info = await transporter.sendMail({
      from: process.env.USER,
      to: Email,
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export default MailSender;
