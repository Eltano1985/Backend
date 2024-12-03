import express from 'express';
import { 
    getAllUsers, 
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';
import { validateGmail } from '../middlewares/validateEmail.js';

const router = express.Router();

router.get('/user', getAllUsers);
router.post('/user', validateGmail, createUser);
router.put('/user/:id', validateGmail, updateUser);
router.delete('/user/:id', deleteUser);
router.get('/saludo', (req, res)=>{
    res.send("hola mundo");
})
export default router;
