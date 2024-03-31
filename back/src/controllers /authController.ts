import User from "../models/User";
import Role from "../models/Role";
import bcrypt from "bcryptjs"
import {validationResult} from "express-validator";
import {sign} from "jsonwebtoken";
import secretKey from "../config";

const generateAccessToken = (id: any, roles: any) => {
    const payload = {
        id,
        roles
    }

    return sign(payload, secretKey.key, {expiresIn: '24h'});
}

class authController {
    async registration(req :any, res :any) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if(candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'User'});
            const user = new User({username, password: hashPassword, roles: [userRole?.value]});
            await user.save();
            return res.json({message: "Пользователь успешно зарегистрован"});

        }
        catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        }
    }
    async login(req :any, res :any) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if(!user) {
                return res.status(400).json({message: `Пользователя ${username} не найден`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if(!validPassword) {
                return res.status(400).json({message: 'Login error'});
            }
            const token = generateAccessToken(user._id, user.roles);
            res.status(200).json({token});
        }
        catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'});
        }
    }
    async getUsers(req :any, res :any) {
        try {
            res.json('server work')
        }
        catch (e) {
            console.log(e);
            res.status(400).json({message: 'get users error'});
        }
    }
}

export default new authController();