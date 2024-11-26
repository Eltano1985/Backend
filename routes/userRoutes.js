import express from 'express';
import { 
    getAllUsers, 
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
