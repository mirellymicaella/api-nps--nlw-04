import {Router} from 'express';
import { AnswerController } from './controllers/AnswerController';
import { SendmailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import {NpsController} from './controllers/NpsController';
const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendmailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users",userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendmail",sendMailController.execute);

router.get("/answer/:value",answerController.execute);

router.get("/nps/:survey_id",npsController.execute);
export {router};