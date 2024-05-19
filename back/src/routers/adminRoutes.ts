// src/routes/userRoutes.ts
import { Router } from 'express';
import  adminController from '../controllers/adminController';

const router = Router();

router.get('/users', adminController.getAllUsers);
router.delete('/users/delete/:id', adminController.deleteUser); // Маршрут для удаления пользователя

export default router;
