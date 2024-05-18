// src/routes/userRoutes.ts
import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/users', getAllUsers);
router.delete('/users/delete/:id', deleteUser); // Маршрут для удаления пользователя

export default router;
