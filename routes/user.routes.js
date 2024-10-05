import { Router } from "express";
import { MailSenderController } from "../controller/mailsenderController.js";
import path from "./path.js";

const route = Router();

route.post(path.EmailSender.POST[0], MailSenderController);

export default route;
