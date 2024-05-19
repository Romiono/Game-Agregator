import User from "../models/User";
import Role from "../models/Role";
import bcrypt from "bcryptjs"
import {validationResult} from "express-validator";
import {sign} from "jsonwebtoken";
import secretKey from "../config";
import {Request, Response} from "express";

const generateAccessToken = (id: unknown, roles: string[]) => {
    const payload = {
        id,
        roles
    }

    return sign(payload, secretKey.key, {expiresIn: '24h'});
}

class authController {
    async registration(req: Request, res: Response) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'User'});
            const user = new User({username, password: hashPassword, roles: [userRole?.value]});
            await user.save();
            return res.json({message: "Пользователь успешно зарегистрован"});

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        }
    }

    async login(req: Request, res: Response) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({message: `Пользователя ${username} не найден`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: 'Login error'});
            }
            const token = generateAccessToken(user._id, user.roles);
            res.status(200).json({
                user: {
                    id: user._id,
                    username,
                    roles: user.roles,
                    token
                }
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'});
        }
    }

    async updateUsername (req: Request, res: Response): Promise<void>  {
        try {
            const userId = req.params.id;
            const { username } = req.body;

            if (!username) {
                res.status(400).json({ message: 'Username is required' });
                return;
            }

            const existingUser = await User.findOne({ username }).exec();
            if (existingUser && existingUser._id.toString() !== userId) {
                res.status(400).json({ message: 'Username is already taken' });
                return;
            }

            const updatedUser = await User.findByIdAndUpdate(userId, { username }, { new: true }).exec();

            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            res.status(200).json({ message: 'Username updated successfully', user: updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    async updatePassword (req: Request, res: Response): Promise<void>  {
        try {
            const userId = req.params.id;
            const { password } = req.body;

            if (!password) {
                res.status(400).json({ message: 'Password is required' });
                return;
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const updatedUser = await User.findByIdAndUpdate(userId, { password: hashPassword }, { new: true }).exec();

            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            res.status(200).json({ message: 'Password updated successfully', user: updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

}

export default new authController();