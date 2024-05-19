import { Request, Response } from 'express';
import User from '../models/User';

class adminController {
    async getAllUsers (req: Request, res: Response): Promise<void> {
        try {
            const users = await User.find({}, '-password').exec();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    async deleteUser (req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            const user = await User.findByIdAndDelete(userId).exec();

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };
}

export default new adminController();

