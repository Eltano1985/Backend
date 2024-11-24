import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController';

const router = Router();

router.get('user', getAllUsers);
router.post('user', createUser);

export default router;
