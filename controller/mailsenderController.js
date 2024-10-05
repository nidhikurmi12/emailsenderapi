import MailSender from "../utils/nodemailer.js";

const MailSenderController = async (req, res) => {
  try {
    const { Email } = req.body;

    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Emailvalidator = Regex.test(Email);

    console.log(Email, Emailvalidator);
    if (!Emailvalidator) {
      return res.status(400).send({
        message: "invaild email",
      });
    }
    const sendMail = await MailSender(Email);
    console.log(sendMail);
    return res.status(201).send({
      message: "Email sended Sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { MailSenderController };
