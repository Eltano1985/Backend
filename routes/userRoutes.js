import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController';

const router = Router();

router.get('usuarios', getAllUsers);
router.post('usuarios', createUser);

export default router;
