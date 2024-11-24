import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';

const router = Router();

router.get('user', getAllUsers);
router.post('user', createUser);

export default router;
