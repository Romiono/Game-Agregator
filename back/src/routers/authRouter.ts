import Router from 'express';
import authController from "../controllers /authController";
import {check} from "express-validator";


const authRouter = Router();

authRouter.post('/registration', [
    check(`username`, 'Имя пользователя не должно быть пустым').notEmpty(),
    check('password', 'Пароль слишком простой').isLength({min: 8})
], authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', authController.getUsers);

export default authRouter;